import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>logo</h1>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/list/list">list</Link>
      </div>
    </nav>
  )
}

export default Navbar
