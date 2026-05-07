import { Search, Bell, Mail, Menu } from 'lucide-react'

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between border-b py-3 sm:py-4 px-4 sm:px-6">
      
      {/* Mobile Menu Button - Only visible on mobile */}
      <button className="lg:hidden p-2 mr-2 border rounded-lg hover:bg-gray-50 transition">
        <Menu size={20} color="#71828A" />
      </button>
      
      {/* Search Bar - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:block flex-1 max-w-md">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search internships, certifications, consultants..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {/* Mobile Search Icon - Only visible on mobile */}
      <button className="sm:hidden p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
        <Search size={18} color="#71828A" />
      </button>
      
      {/* Icons + Upgrade Plan - Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notification Icon */}
        <button className="relative p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
          <Bell size={18} color="#71828A" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Message Icon - Hidden on very small screens */}
        <button className="hidden sm:block p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
          <Mail size={18} color="#71828A" />
        </button>
        
        {/* Upgrade Plan Button - Text shrinks on mobile */}
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white text-xs sm:text-sm rounded-xl transition whitespace-nowrap">
          Upgrade Plan
        </button>
      </div>
    </div>
  )
}

export default TopHeader