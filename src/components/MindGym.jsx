// import { Heart, Wind, Target, Battery, Brain,Clock, Dumbbell, EvCharger } from "lucide-react";

// const MindGym = () => {
//   const exercises = [
//     {
//       title: "Breathing Exercises",
//       description: "Calm and relax",
//       duration: "3-5 minutes",
//       icon: Wind,
//       gradient: "linear-gradient(135deg, #C7E9FF, #E4FFFF)",
//       color: "#0EA5E9",
//       bgColor: "#FFFFFF45",
//     },
//     {
//       title: "Focus Exercises",
//       description: "Boost concentration",
//       duration: "5-10 minutes",
//       icon: Target,
//       gradient: "linear-gradient(135deg, #FEEF7B, #FEF5DC)",
//       color: "#FEEF7B",
//       bgColor: "#FFFFFF45",
//     },
//     {
//       title: "Muscle Relaxation",
//       description: "Release body tension",
//       duration: "25-30 minutes",
//       icon: Dumbbell,
//       gradient: "linear-gradient(135deg, #CEC3FF, #F3E8FF)",
//       color: "#8B5CF6",
//       bgColor: "#FFFFFF45",

//     },
//     {
//       title: "Study Focus Reset",
//       description: "Sharpen your mind",
//       duration: "3 minutes",
//       icon: Brain,
//       gradient: "linear-gradient(135deg, #FFD1EB, #FAE8FF)",
//       color: "#EC4899",
//       bgColor: "#FFFFFF45",
//     },
//   ];

//   return (
//     <div className="p-4 sm:p-6">
//       <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
//         {/* Left Side - Mind Gym Grid (2/3 on large screens) */}
//         <div className="w-full lg:flex-[2] lg:mr-11">
//           <div className="bg-white border rounded-2xl shadow-sm p-4 sm:p-6">
//             <div className="flex items-center gap-2 mb-2">
         
//                 <Heart size={20} color="#1A9BA1 "  />
              
//               <h2 className="text-lg sm:text-xl font-semibold">Mind Gym</h2>
//             </div>
//             <p className="text-xs text-gray-400 mb-4  pl-6">
//               Suggests mindfulness and focus activities to keep your mind sharp
//               and calm.
//             </p>

//             {/* Responsive Grid: 1 column on mobile, 2 columns on desktop */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//               {exercises.map((exercise, idx) => (
//                 <div
//                   key={idx}
//                   className="rounded-xl p-3 sm:p-4 hover:shadow-md transition"
//                   style={{ background: exercise.gradient }}
//                 >
//                   <div className="flex items-start gap-2 sm:gap-3 style={{ background: exercise.bgColor }}>">
//                     <exercise.icon
//                       size={18}
//                       color={exercise.color}
//                       className="sm:w-8 sm:h-8 bg-white p-1 rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-sm sm:text-base font-medium text-gray-900">
//                         {exercise.title}
//                       </h3>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {exercise.description}
//                       </p>
//                       </div>
//                     {/* <button className="text-[#1A9BA1] text-xs sm:text-sm font-medium hover:underline whitespace-nowrap">
//                       Start &gt;
//                     </button> */}
//                   </div>
//                   <div className="flex justify-between items-center p-3 mt-3 rounded-xl  "
//                     style={{ background: exercise.bgColor }}>
                        
                          
//                           <div className="flex items-center gap-1 mt-1 sm:mt-2">
//                             <Clock size={15} color="#9CA3AF" />
//                             <p className="text-xs font-semibold text-gray-600">
//                               {exercise.duration}
//                             </p>
//                           </div>
                      
//                         <div className=" px-3 py-2 rounded-2xl bg-white text-xs font-semibold">
//                           {"Start >"}
//                         </div>
//                       </div>
                    
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side - 1/3 on large screens */}
       
//       </div>
//     </div>
//   );
// };

// export default MindGym;

import {  Wind, Target, Dumbbell, Brain, Clock } from "lucide-react"
import { mindGymExercises } from "../utils/mockData"
import { MindGymHeaderIcon } from "../icons/AllIcons"

const MindGym = () => {
  // Map icon string to actual component
  const getIconComponent = (iconName) => {
    const icons = { Wind, Target, Dumbbell, Brain }
    return icons[iconName] || Wind
  }

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-4 sm:p-6 sm:mt-4 mt-2">
      <div className="flex items-center gap-2 mb-2">
        <MindGymHeaderIcon />
        <h2 className="text-lg sm:text-xl font-semibold">Mind Gym</h2>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        Suggests mindfulness and focus activities to keep your mind sharp and calm.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {mindGymExercises.map((exercise, idx) => {
          const IconComponent = getIconComponent(exercise.icon)
          return (
            <div
              key={idx}
              className="rounded-xl p-3 sm:p-4 hover:shadow-md transition"
              style={{ background: exercise.gradient }}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <IconComponent size={18} color={exercise.color} className="sm:w-8 sm:h-8 bg-white p-1 rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">
                    {exercise.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {exercise.description}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-2 mt-3 rounded-xl bg-white/50">
                <div className="flex items-center gap-1">
                  <Clock size={15} color="#9CA3AF" />
                  <p className="text-xs font-semibold text-gray-600">
                    {exercise.duration}
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-2xl bg-white text-xs font-semibold shadow-sm">
                  Start &gt;
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MindGym