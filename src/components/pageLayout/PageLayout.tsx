import React, { FC, ReactNode } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../header/Navbar'
import { Spacer } from '@heroui/spacer'

type LayoutProps = {
  children?: ReactNode
  footer?: boolean
  header?: boolean
}
const PageLayout: FC<LayoutProps> = ({ children, footer, header = true }) => {
  return (
    <div className="relative">
      {header && <Navbar />}
      {children}
      {footer && <Footer />}
    </div>
  )
}

export default PageLayout
