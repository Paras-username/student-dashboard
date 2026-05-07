import Sidebar from './Sidebar'
import TopHeader from './TopHeader'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1">
        <TopHeader />  
        {children}      
      </main>
    </div>
  )
}

export default Layout