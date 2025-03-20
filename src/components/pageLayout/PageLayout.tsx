import React, { FC, ReactNode } from 'react'
import Footer from '../footer/Footer'
import { Spacer } from '@heroui/spacer'
import Navbar from '../header/Navbar'

type LayoutProps = {
    children?: ReactNode,
    footer?: boolean,
    header?: boolean
}
const PageLayout: FC<LayoutProps> = ({ children, footer, header = true }) => {
    return (
        <>
            {header && <Navbar />}
            {children}
            <Spacer y={10} />
            {footer && <Footer />}
        </>
    )
}


export default PageLayout
