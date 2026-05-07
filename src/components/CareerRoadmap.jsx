// import { useState, useEffect } from 'react'
// import { Lock, CheckCircle, Circle, RotateCcw } from 'lucide-react'

// const CareerRoadmap = () => {
//   const getInitialMilestones = () => {
//     const saved = localStorage.getItem("careerRoadmap")
//     if (saved) {
//       return JSON.parse(saved)
//     }
//     return [
//       { id: 1, name: "Build Basics", status: "available" },
//       { id: 2, name: "Strengthen Concepts", status: "locked" },
//       { id: 3, name: "Score in Boards", status: "locked" },
//       { id: 4, name: "PCM Stream", status: "locked" }
//     ]
//   }

//   const [milestones, setMilestones] = useState(getInitialMilestones)

//   useEffect(() => {
//     localStorage.setItem("careerRoadmap", JSON.stringify(milestones))
//   }, [milestones])

//   const completedCount = milestones.filter(m => m.status === "completed").length
//   const progress = (completedCount / milestones.length) * 100
//   const nextMilestone = milestones.find(m => m.status === "available")

//   const getIcon = (status) => {
//     if (status === "completed") return <CheckCircle size={24} color="#1A9BA1" />
//     if (status === "available") return <Circle size={24} color="#1A9BA1" />
//     return (
//   <div className="border-2 border-gray-800 rounded-full p-1">
//     <Lock size={15} color="#9CA3AF" />
//   </div>
// )
//   }

//   const handleClick = (clicked) => {
//     // Don't allow clicking on locked or already completed
//     if (clicked.status !== "available") return

//     const updated = milestones.map(m => {
//       if (m.id === clicked.id) {
//         return { ...m, status: "completed" }
//       }
//       if (m.id === clicked.id + 1 && m.status === "locked") {
//         return { ...m, status: "available" }
//       }
//       return m
//     })
//     setMilestones(updated)
//   }

//   const handleReset = () => {
//     const resetMilestones = [
//       { id: 1, name: "Build Basics", status: "available" },
//       { id: 2, name: "Strengthen Concepts", status: "locked" },
//       { id: 3, name: "Score in Boards", status: "locked" },
//       { id: 4, name: "PCM Stream", status: "locked" }
//     ]
//     setMilestones(resetMilestones)
//     localStorage.setItem("careerRoadmap", JSON.stringify(resetMilestones))
//   }

//   const allCompleted = milestones.every(m => m.status === "completed")

//   return (
//   <div className='p-6'>
//       <div className="bg-white rounded-2xl shadow-sm p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div className='flex gap-x-2 items-center'>
//           <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M9.404 3.70287C9.77922 3.89037 10.2208 3.89037 10.596 3.70287L13.0353 2.48287C13.2421 2.37952 13.4877 2.39071 13.6843 2.51242C13.8809 2.63414 14.0003 2.84901 14 3.0802V11.5895C13.9999 11.842 13.8572 12.0727 13.6313 12.1855L10.596 13.7035C10.2208 13.891 9.77922 13.891 9.404 13.7035L6.596 12.2995C6.22079 12.112 5.77922 12.112 5.404 12.2995L2.96467 13.5195C2.75775 13.6229 2.51202 13.6117 2.31541 13.4898C2.11881 13.3679 1.99943 13.1529 2 12.9215V4.41287C2.00014 4.16043 2.14285 3.92971 2.36867 3.81687L5.404 2.29887C5.77922 2.11137 6.22079 2.11137 6.596 2.29887L9.404 3.70287M10 3.84354V13.8435M6 2.1582V12.1582" stroke="#1A9BA1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </div>
// <h2 className="text-xl font-semibold">Career Roadmap</h2>
//         </div>
        
//         {allCompleted && (
//           <button 
//             onClick={handleReset}
//             className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50 transition"
//           >
//             <RotateCcw size={14} />
//             Reset Progress
//           </button>
//         )}
//       </div>
      
//       {/* Horizontal Timeline */}
//       <div className="relative flex items-center justify-between mb-8">
//         {/* Background line */}
//         <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full" style={{ top: "12px" }}></div>
        
//         {/* Green progress line */}
//         <div 
//           className="absolute left-0 h-1 bg-[#1A9BA1] rounded-full transition-all duration-500"
//           style={{ width: `${progress}%`, top: "12px" }}
//         ></div>
        
//         {/* Milestones */}
//         {milestones.map((milestone, index) => (
//           <div key={milestone.id} className="relative flex flex-col items-center z-10">
//             <div 
//               onClick={() => handleClick(milestone)}
//               className={`p-2 bg-white rounded-full transition ${
//                 milestone.status === "available" ? "cursor-pointer hover:scale-110" : ""
//               } ${milestone.status === "locked" ? "cursor-not-allowed" : ""} ${
//                 milestone.status === "completed" ? "cursor-default" : ""
//               }`}
//             >
//               {getIcon(milestone.status)}
//             </div>
            
//             <span className={`text-xs mt-2 text-center ${
//               milestone.status === "completed" ? "text-[#1A9BA1] font-medium" : "text-gray-500"
//             }`}>
//               {milestone.name}
//             </span>
//           </div>
//         ))}
//       </div>
      
//       {/* Next Milestone or Completion Message */}
//       <div className="flex flex-row items-center gap-x-2 mt-4 px-6 py-4 border border-gray-100 rounded-2xl bg-[linear-gradient(135deg,_#E6F7F5,_#F9FFF9,_#EDFBE9)]">
//         <p className="font-semibold text-[#1A9BA1]">
//           {allCompleted ? "Congratulations!" : "Next Milestone:"}
//         </p>
//         <p className="font-semibold text-[#1A9BA1]">
//           {allCompleted ? "You've completed all milestones!" : (nextMilestone ? nextMilestone.name : "Loading...")}
//         </p>
//       </div>
      
//       {/* Progress Percentage */}
//       <div className="mt-4">
//         <div className="flex justify-between text-sm mb-1">
//           <span className="text-gray-600">Progress</span>
//           <span className="text-gray-900 font-medium">{Math.round(progress)}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div 
//             className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300" 
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>

//   </div>
//   )
// }

// export default CareerRoadmap



import { useState, useEffect } from 'react'
import { Lock, CheckCircle, Circle, RotateCcw } from 'lucide-react'

const CareerRoadmap = () => {
  const getInitialMilestones = () => {
    const saved = localStorage.getItem("careerRoadmap")
    if (saved) {
      return JSON.parse(saved)
    }
    return [
      { id: 1, name: "Build Basics", status: "available" },
      { id: 2, name: "Strengthen Concepts", status: "locked" },
      { id: 3, name: "Score in Boards", status: "locked" },
      { id: 4, name: "PCM Stream", status: "locked" }
    ]
  }

  const [milestones, setMilestones] = useState(getInitialMilestones)

  useEffect(() => {
    localStorage.setItem("careerRoadmap", JSON.stringify(milestones))
  }, [milestones])

  const completedCount = milestones.filter(m => m.status === "completed").length
  const progress = (completedCount / milestones.length) * 100
  const nextMilestone = milestones.find(m => m.status === "available")

  const getIcon = (status) => {
    if (status === "completed") return <CheckCircle size={20} color="#1A9BA1" />
    if (status === "available") return <Circle size={20} color="#1A9BA1" />
    return (
      <div className="border-2 border-gray-800 rounded-full p-1">
        <Lock size={15} color="#9CA3AF" />
      </div>
    )
  }

  const handleClick = (clicked) => {
    if (clicked.status !== "available") return

    const updated = milestones.map(m => {
      if (m.id === clicked.id) {
        return { ...m, status: "completed" }
      }
      if (m.id === clicked.id + 1 && m.status === "locked") {
        return { ...m, status: "available" }
      }
      return m
    })
    setMilestones(updated)
  }

  const handleReset = () => {
    const resetMilestones = [
      { id: 1, name: "Build Basics", status: "available" },
      { id: 2, name: "Strengthen Concepts", status: "locked" },
      { id: 3, name: "Score in Boards", status: "locked" },
      { id: 4, name: "PCM Stream", status: "locked" }
    ]
    setMilestones(resetMilestones)
    localStorage.setItem("careerRoadmap", JSON.stringify(resetMilestones))
  }

  const allCompleted = milestones.every(m => m.status === "completed")

  return (
    <div className='px-4 sm:px-6 py-2 sm:py-4 '>
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div className='flex gap-x-2 items-center'>
            <div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.404 3.70287C9.77922 3.89037 10.2208 3.89037 10.596 3.70287L13.0353 2.48287C13.2421 2.37952 13.4877 2.39071 13.6843 2.51242C13.8809 2.63414 14.0003 2.84901 14 3.0802V11.5895C13.9999 11.842 13.8572 12.0727 13.6313 12.1855L10.596 13.7035C10.2208 13.891 9.77922 13.891 9.404 13.7035L6.596 12.2995C6.22079 12.112 5.77922 12.112 5.404 12.2995L2.96467 13.5195C2.75775 13.6229 2.51202 13.6117 2.31541 13.4898C2.11881 13.3679 1.99943 13.1529 2 12.9215V4.41287C2.00014 4.16043 2.14285 3.92971 2.36867 3.81687L5.404 2.29887C5.77922 2.11137 6.22079 2.11137 6.596 2.29887L9.404 3.70287M10 3.84354V13.8435M6 2.1582V12.1582" stroke="#1A9BA1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold">Career Roadmap</h2>
          </div>
          
          {allCompleted && (
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50 transition"
            >
              <RotateCcw size={14} />
              Reset Progress
            </button>
          )}
        </div>
        
        {/* Horizontal Timeline - Responsive text size for milestone names */}
        <div className="relative flex items-center justify-between mb-8 overflow-x-auto pb-2">
          {/* Background line */}
          <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full" style={{ top: "12px" }}></div>
          
          {/* Green progress line */}
          <div 
            className="absolute left-0 h-1 bg-[#1A9BA1] rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, top: "12px" }}
          ></div>
          
          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="relative flex flex-col items-center z-10 min-w-[70px] sm:min-w-0">
              <div 
                onClick={() => handleClick(milestone)}
                className={`p-1 sm:p-2 bg-white rounded-full transition ${
                  milestone.status === "available" ? "cursor-pointer hover:scale-110" : ""
                } ${milestone.status === "locked" ? "cursor-not-allowed" : ""} ${
                  milestone.status === "completed" ? "cursor-default" : ""
                }`}
              >
                {getIcon(milestone.status)}
              </div>
              
              <span className={`text-[10px] sm:text-xs mt-2 text-center ${
                milestone.status === "completed" ? "text-[#1A9BA1] font-medium" : "text-gray-500"
              }`}>
                {milestone.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Next Milestone Box */}
        <div className="flex flex-row items-center gap-x-2 mt-4 px-4 sm:px-6 py-3 sm:py-4 border border-gray-100 rounded-2xl bg-[linear-gradient(135deg,_#E6F7F5,_#F9FFF9,_#EDFBE9)]">
          <p className="font-semibold text-[#1A9BA1] text-sm sm:text-base">
            {allCompleted ? "Congratulations!" : "Next Milestone:"}
          </p>
          <p className="font-semibold text-[#1A9BA1] text-sm sm:text-base">
            {allCompleted ? "You've completed all milestones!" : (nextMilestone ? nextMilestone.name : "Loading...")}
          </p>
        </div>
        
        {/* Progress Percentage */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="text-gray-900 font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerRoadmap