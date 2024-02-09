'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MainNav() {
    return (
        <nav className='flex justify-between items-center h-24 w-full px-12 bg-nav shadow-lg'>
            <div className='flex items-center gap-12'>
                {/* LOGO */}
                <section className='cursor-pointer'>
                    <Image src="/images/logo.png" width={50} height={50} alt="logo"/>
                </section>

                {/* SEARCH BAR */}
                <section className='flex py-2 px-3 h-fit w-fit bg-white rounded-lg'>
                    <input type="text" className='outline-none w-96 min-w-64' placeholder='Search'/>
                    <Image src="/images/search-icon.png" className='cursor-pointer' width={28} height={28} alt="search-icon"/>
                </section>
            </div>

            {/* BUTTONS */}
            <section className='cursor-pointer'>
                <Link href="/insert">
                    <button className='flex items-center h-12 w-24 p-2.5 gap-2.5 bg-white rounded-lg'>
                        <Image src="/images/plus-icon.png" width={34} height={34} alt="insert-icon" />
                        <h1 className='text-buttonBlue font-medium text-lg'>Insert</h1>
                    </button>
                </Link>
            </section>
        </nav>
    )
}
