import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  },)

  return (
    <div>
      <h1>Oops! Page Not Found</h1>
      <p>go back to <Link href="/">homepage</Link></p>
    </div>
  )
}

export default NotFound
