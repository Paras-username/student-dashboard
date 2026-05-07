import { useNavigate } from 'react-router-dom'
import { Home, Map, Calendar, Heart, Users, Bot, Wallet, Settings, LogOut, CreditCard } from 'lucide-react'

const Sidebar = () => {
  const navigate = useNavigate()

  const mainNav = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Career Roadmap', icon: Map, path: '/career-roadmap' },
    { name: 'Session', icon: Calendar, path: '/session' },
    { name: 'Mental Wellness', icon: Heart, path: '/mental-wellness' },
    { name: 'Consultant Marketplace', icon: Users, path: '/consultant-marketplace' },
    { name: 'ConsultTOpen AI', icon: Bot, path: '/consultopen-ai' },
  ]

  const bottomNav = [
    { name: 'Subscription', icon: CreditCard, path: '/subscription' },
    { name: 'Wallet & Payments', icon: Wallet, path: '/wallet' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Logout', icon: LogOut, path: '/logout' },
  ]

  const handleNavigation = (path) => {
    if (path === '/logout') {
      console.log('Logout clicked')
      return
    }
    navigate(path)
  }

  return (
    <div className="fixed lg:relative z-50 w-[260px] h-screen bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 -translate-x-full lg:translate-x-0">
      
      {/* Logo section */}
      <div className="px-6 py-[18.5px] border-b border-gray-200">
        <div className='flex gap-x-2 items-center'>
          <div className="w-8 h-8 rounded-lg">
            <img 
              src="/images/OPEN.png" 
              alt="Logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold">ConsulTOpen</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col mt-8 overflow-y-auto">
        <div className="flex flex-col px-4 space-y-1">
          
          {/* Main Navigation items */}
          <div className='pb-4'>
            {mainNav.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center text-[#0F1720] gap-3 px-3 py-2 font-semibold hover:bg-[#1A9BA1] hover:text-white rounded-lg w-full transition group"
              >
                <item.icon size={20} color="#71828A" className="group-hover:text-white transition " />
                <span className="text-sm group-hover:text-white transition">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Bottom Navigation items */}
          <div className='pt-4 border-t-2'>
            {bottomNav.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 px-3 py-2 font-semibold hover:bg-[#1A9BA1] hover:text-white rounded-lg w-full transition group"
              >
                <item.icon size={20} color="#71828A" className="group-hover:text-white transition" />
                <span className="text-sm group-hover:text-white transition">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="w-[227px] h-[68px] rounded-xl mx-auto bg-[#F7FAFA] mb-4">
        <div className='flex justify-between items-center py-2 px-4'>
          <div className='flex items-center gap-x-3'>
            <div className="w-[36px] h-[36px]">
              <img 
                src="/images/Miller.png" 
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className='font-semibold text-sm lg:text-base'>Alex Miller</p>
              <p className='border text-xs rounded-xl font-semibold p-1 px-2 text-[#F59E0B] bg-[#F59E0B1A] w-fit'>Elite</p>
            </div>
          </div>
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33398 7.9987C7.33398 8.36664 7.63271 8.66536 8.00065 8.66536C8.36859 8.66536 8.66732 8.36664 8.66732 7.9987C8.66732 7.63075 8.36859 7.33203 8.00065 7.33203C7.63271 7.33203 7.33398 7.63075 7.33398 7.9987V7.9987" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.33386 3.33079C7.33386 3.69873 7.63259 3.99746 8.00053 3.99746C8.36847 3.99746 8.6672 3.69873 8.6672 3.33079C8.6672 2.96285 8.36847 2.66412 8.00053 2.66412C7.63259 2.66412 7.33386 2.96285 7.33386 3.33079V3.33079" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.33398 12.6628C7.33398 13.0307 7.63271 13.3294 8.00065 13.3294C8.36859 13.3294 8.66732 13.0307 8.66732 12.6628C8.66732 12.2948 8.36859 11.9961 8.00065 11.9961C7.63271 11.9961 7.33398 12.2948 7.33398 12.6628V12.6628" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar