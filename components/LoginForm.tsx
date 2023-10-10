'use client'
import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import InputText from './form/InputText'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/lib/LocalStorageHandler'
import { useRouter } from 'next/navigation'
import authApi from '@/api/auth'
import { AxiosResponse } from 'axios'
import { ILoginFormValues } from '@/interfaces/auth'

const LoginForm = () => {
  const router = useRouter()
  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
  }

  useEffect(() => {
    if (getFromLocalStorage('accessToken') !== null) {
      router.push('/app/home')
    }
  }, [router])

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-60 m-2">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            authApi.login(values).then((res: AxiosResponse) => {
              if (res.data.success === true) {
                saveToLocalStorage('accessToken', res?.data?.data?.accessToken)
                saveToLocalStorage(
                  'refreshToken',
                  res?.data?.data?.refreshToken
                )
                router.push('/app/home')
              }
            })
          }}
        >
          <div className="border border-purple-light p-4 rounded-md bg-white">
            <h1 className="text-purple-dark text-lg font-semibold mb-2 text-center">
              Login
            </h1>
            <Form>
              <InputText id="email" type="email" />
              <InputText id="password" type="password" />
              <div className="flex justify-center items-center">
                <PrimaryButton text="Login" />
              </div>
              <div className="flex justify-center items-center my-5">
                <p className="text-xs text-center">
                  Do not have an account yet? <br />{' '}
                  <Link href="/auth/register" className="text-purple-light">
                    Register instead
                  </Link>
                  .
                </p>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  )
}

export default LoginForm
