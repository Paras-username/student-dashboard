import { Target, ArrowRightCircle, Clock } from 'lucide-react'
import { CalmTodayIcon } from '../icons/AllIcons'

const Focus = () => {
  return (
    <div className="px-4 sm:px-6 mt-6 sm:mt-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[236px]">
        
        
        <div className="w-full lg:flex-[2] bg-white border rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="flex items-center gap-x-2 text-base sm:text-lg font-semibold mb-4">
            <Target size={15} color="#EF4444" className="mt-0.5" />Today's Focus!
          </h2>
          
          <div className="border rounded-xl p-3 sm:p-4">
            <div>
              <div className="flex gap-3">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    Study Motion and Energy Concepts
                  </h3>
                  <div className="flex items-center gap-2 mt-2 sm:mt-4">
                    <ArrowRightCircle size={16} color="#229E91" />
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Understand speed, velocity, and acceleration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex my-4 sm:my-5">
              <div className="w-full border-t border-dashed border-gray-300"></div>
            </div>

            <div className="flex gap-3">
              <Clock size={16} color="#9CA3AF" className="mt-0.5" />
              <p className="text-gray-500 text-xs sm:text-sm">
                Solve 5-10 basic numerical problems
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-1 flex justify-center items-center border p-5 sm:p-7 rounded-xl bg-[linear-gradient(135.83deg,_#E9FFC2_-10.61%,_#FFFFFF_28.22%,_#FFFFFF_65.78%,_#F4FFE0_100.32%)]">
          <div className='h-full w-full flex flex-col items-center justify-center gap-y-2'>
            
            <div className='mb-2'>
              <CalmTodayIcon />
            </div>
            
            <div className='font-semibold text-xl sm:text-2xl text-[#70AD40] text-center'>
              You Are Calm Today
            </div>
            
            <div className='text-xs sm:text-sm font-semibold text-center text-gray-700 px-2'>
              Staying calm helps you think clearly and make better decisions. 
              Take a deep breath and continue your day with a peaceful mind.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Focus