

"use client"

import type { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import NextAuthProvider from '@/app/provider/NextAuthProvider'
import { Toast } from '@heroui/react'






const Layout = ({ children }: PropsWithChildren) => {


    return (


        <>

            <NextAuthProvider>

                <Toast.Provider placement='top end' />



                <Header />
                <main
                    className='min-h-[calc(100vh-84.6px-152.6px)] container max-w-screen-2xl   m-auto mt-2 max-md:p-4 p-7'
                >
                    {children}
                </main>


                <Footer />


            </NextAuthProvider >

        </>



    )
}

export default Layout

