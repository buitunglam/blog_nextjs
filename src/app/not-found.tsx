import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for dose not exist</p>
      <Link href={"/"}>Return home</Link>
    </div>
  )
}

export default NotFound