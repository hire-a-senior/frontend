'use client'
import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import InputText from './form/InputText'
import InputSelect from './form/InputSelect'
import { object, string, ref } from 'yup'
import PrimaryButton from './PrimaryButton'
import ValidationError from './form/ValidationError'
import Link from 'next/link'
import axiosInstance from '@/lib/AxiosInstance'
import { useRouter } from 'next/navigation'
import { getFromLocalStorage } from '@/lib/LocalStorageHandler'

interface RegisterFormValues {
  firstName: string
  email: string
  title: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const router = useRouter()
  const initialValues: RegisterFormValues = {
    firstName: '',
    email: '',
    title: 'JUNIOR',
    password: '',
    confirmPassword: '',
  }

  const registerSchema = object().shape({
    firstName: string()
      .min(2, 'firstname should be at least 2 characters.')
      .max(20, 'firstname cannot be more than 20 characters.')
      .required('firstname is required'),
    email: string().email('Invalid email').required('Email is required.'),
    password: string()
      .required('password is required')
      .min(8, 'Password must have at least 8 characters'),
    confirmPassword: string()
      .required('confirmPassword is required')
      .oneOf([ref('password')], 'Passwords does not match'),
  })

  const showValidationErrors = (errors: any, touched: any) => {
    for (const error in errors) {
      if (error.length > 0 && touched[error]) {
        return <ValidationError error={errors[error]} />
      }
    }
  }

  useEffect(() => {
    if (getFromLocalStorage('accessToken') !== null) {
      router.push('/home')
    }
  }, [router])

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-60 m-2">
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            axiosInstance.post('/api/v1/auth/register', values).then((res) => {
              if (res.data.success === true) {
                router.push('/auth/login')
              }
            })
          }}
        >
          {({ errors, touched }) => (
            <div className="border border-purple-light p-4 rounded-md bg-white">
              <h1 className="text-purple-dark text-lg font-semibold mb-2 text-center">
                Register
              </h1>
              <Form>
                <InputText id="firstName" type="text" />
                <InputText id="email" type="email" />
                <InputSelect id="title" options={['JUNIOR', 'SENIOR']} />
                <InputText id="password" type="password" />
                <InputText id="confirmPassword" type="password" />
                {showValidationErrors(errors, touched)}
                <div className="flex justify-center items-center">
                  <PrimaryButton text="Register" />
                </div>
                <div className="flex justify-center items-center my-5">
                  <p className="text-xs text-center">
                    Already have an account? <br />{' '}
                    <Link href="/auth/login" className="text-purple-light">
                      Login instead
                    </Link>
                    .
                  </p>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterForm
