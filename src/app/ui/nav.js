'use client'

import { useState } from "react"
import Link from "next/link"

export default function Nav() {
    useState(0);
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    )
}