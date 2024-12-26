import { memo } from 'react'
import Header from '@/Layout/header'
import Footer from '@/Layout/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default memo(Layout)
