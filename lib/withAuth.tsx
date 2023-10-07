/* eslint-disable react/display-name */
import { useRouter } from 'next/navigation'
import { ComponentType, useEffect } from 'react'
import { getFromLocalStorage } from './LocalStorageHandler'

interface ProtectedComponentProps {}

interface WithAuthProps {}

type CombinedProps = ProtectedComponentProps & WithAuthProps

// Define the withAuth HOC
const withAuth = <P extends CombinedProps>(
  WrappedComponent: ComponentType<P>
) => {
  // Return the wrapped component with authentication logic
  return (props: P) => {
    const router = useRouter()
    useEffect(() => {
      // Your authentication logic here
      if (
        getFromLocalStorage('accessToken') === null ||
        getFromLocalStorage('accessToken') === undefined
      ) {
        router.push('auth/login')
      }
    }, [router])

    return <WrappedComponent {...props} />
  }
}

export default withAuth
