import React, { FC, ReactNode } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../header/Navbar'
import Spacer from '../ui/Spacer'

type LayoutProps = {
  children?: ReactNode
  footer?: boolean
  header?: boolean
}
const PageLayout: FC<LayoutProps> = ({ children, footer, header = true }) => {
  return (
    <div className="relative">
      {header && <Navbar />}
      <Spacer size='2rem'  />
      {children}
      <Spacer size='2rem'  />
      {footer && <Footer />}
    </div>
  )
}

export default PageLayout
