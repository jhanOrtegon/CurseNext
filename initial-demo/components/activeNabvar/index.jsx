import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const ActiveNabvar = ({ href, text }) => {
    const { asPath } = useRouter()
    console.log(href, 'href');
    return (
        <Link href={href}>
            <a style={asPath === href ? { color: 'red' } : null}>{text}</a>
        </Link>
    )
}

export default ActiveNabvar