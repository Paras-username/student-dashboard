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


import { Heart, Wind, Target, Dumbbell, Brain, Clock } from "lucide-react";

const MindGym = () => {
  const exercises = [
    {
      title: "Breathing Exercises",
      description: "Calm and relax",
      duration: "3-5 minutes",
      icon: Wind,
      gradient: "linear-gradient(135deg, #C7E9FF, #E4FFFF)",
      color: "#0EA5E9",
    },
    {
      title: "Focus Exercises",
      description: "Boost concentration",
      duration: "5-10 minutes",
      icon: Target,
      gradient: "linear-gradient(135deg, #FEEF7B, #FEF5DC)",
      color: "#F59E0B",
    },
    {
      title: "Muscle Relaxation",
      description: "Release body tension",
      duration: "25-30 minutes",
      icon: Dumbbell,
      gradient: "linear-gradient(135deg, #CEC3FF, #F3E8FF)",
      color: "#8B5CF6",
    },
    {
      title: "Study Focus Reset",
      description: "Sharpen your mind",
      duration: "3 minutes",
      icon: Brain,
      gradient: "linear-gradient(135deg, #FFD1EB, #FAE8FF)",
      color: "#EC4899",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-4 sm:p-6 sm:mt-4 mt-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="border p-2 bg-[#FFF2DE] rounded-lg"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 7.12557C1.50003 5.41703 2.55333 3.88534 4.14871 3.27387C5.74408 2.6624 7.55129 3.09773 8.69325 4.36857C8.77267 4.45349 8.88373 4.50169 9 4.50169C9.11627 4.50169 9.22733 4.45349 9.30675 4.36857C10.4453 3.08923 12.257 2.64825 13.8562 3.26119C15.4554 3.87412 16.5082 5.41296 16.5 7.12557C16.5 8.84307 15.375 10.1256 14.25 11.2506L10.131 15.2353C9.8483 15.56 9.43972 15.7476 9.00922 15.7503C8.57871 15.753 8.16779 15.5707 7.881 15.2496L3.75 11.2506C2.625 10.1256 1.5 8.85057 1.5 7.12557" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.41504 9.75H7.12504L7.50004 9L9.00004 12.375L10.5 7.125L11.625 9.75H15.5775" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <h2 className="text-lg sm:text-xl font-semibold">Mind Gym</h2>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        Suggests mindfulness and focus activities to keep your mind sharp and calm.
      </p>

      {/* 2x2 Grid for exercises */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {exercises.map((exercise, idx) => (
          <div
            key={idx}
            className="rounded-xl p-3 sm:p-4 hover:shadow-md transition"
            style={{ background: exercise.gradient }}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <exercise.icon size={18} color={exercise.color} className="sm:w-8 sm:h-8 bg-white p-1 rounded-lg" />
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
        ))}
      </div>
    </div>
  );
};

export default MindGym;