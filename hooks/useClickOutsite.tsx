import { useEffect } from 'react'

const useClickOutside = (ref: any, onClickOutside: any) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }
    // Bind
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // dispose
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutside])
}

export default useClickOutside
