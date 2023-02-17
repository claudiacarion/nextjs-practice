import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/pandalogo.png" alt="logo" width={100} height={100} />
      </div>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/list">list</Link>
    </nav>
  )
}

export default Navbar
