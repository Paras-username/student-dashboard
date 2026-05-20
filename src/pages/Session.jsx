// import { useState, useEffect } from "react";
// import {
//   Lock,
//   RotateCcw,
//   Calculator,
//   FlaskConical,
//   Square,
//   Check,
//   Phone,
//   Video,
//   FileText,
//   Target,
//   Book,
// } from "lucide-react";

// const Session = () => {
//   // ========== Build Basics Tasks (copied from your BuildBasic component) ==========
//   const getInitialTasks = () => {
//     const saved = localStorage.getItem("sessionBuildBasicsTasks");
//     if (saved) {
//       return JSON.parse(saved);
//     }
//     return [
//       {
//         id: 1,
//         title: "Study Motion and Energy Concepts",
//         category: "Science",
//         status: "available",
//       },
//       {
//         id: 2,
//         title: "Solve 20 Maths Question Daily",
//         category: "Maths",
//         status: "locked",
//       },
//       {
//         id: 3,
//         title: "Watch a Science Concept Video",
//         category: "Exploration",
//         status: "locked",
//       },
//       {
//         id: 4,
//         title: "Follow a Weekly Study Plan",
//         category: "Habit",
//         status: "locked",
//       },
//       {
//         id: 5,
//         title: "Maths Formulas and Concepts",
//         category: "Maths",
//         status: "locked",
//       },
//       {
//         id: 6,
//         title: "Complete Weekly Revision",
//         category: "Revision",
//         status: "locked",
//       },
//     ];
//   };

//   const [tasks, setTasks] = useState(getInitialTasks);

//   useEffect(() => {
//     localStorage.setItem("sessionBuildBasicsTasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const completedCount = tasks.filter((t) => t.status === "completed").length;
//   const progress = (completedCount / tasks.length) * 100;

//   const getIcon = (status) => {
//     if (status === "completed") return <Check size={20} color="#1A9BA1" />;
//     if (status === "available") return <Square size={20} color="#1A9BA1" />;
//     return <Lock size={20} color="#9CA3AF" />;
//   };

//   const handleTaskClick = (clickedTask) => {
//     if (clickedTask.status !== "available") return;

//     const updated = tasks.map((task) => {
//       if (task.id === clickedTask.id) {
//         return { ...task, status: "completed" };
//       }
//       if (task.id === clickedTask.id + 1 && task.status === "locked") {
//         return { ...task, status: "available" };
//       }
//       return task;
//     });
//     setTasks(updated);
//   };

//   const handleReset = () => {
//     const resetTasks = [
//       {
//         id: 1,
//         title: "Study Motion and Energy Concepts",
//         category: "Science",
//         status: "available",
//       },
//       {
//         id: 2,
//         title: "Solve 20 Maths Question Daily",
//         category: "Maths",
//         status: "locked",
//       },
//       {
//         id: 3,
//         title: "Watch a Science Concept Video",
//         category: "Exploration",
//         status: "locked",
//       },
//       {
//         id: 4,
//         title: "Follow a Weekly Study Plan",
//         category: "Habit",
//         status: "locked",
//       },
//       {
//         id: 5,
//         title: "Maths Formulas and Concepts",
//         category: "Maths",
//         status: "locked",
//       },
//       {
//         id: 6,
//         title: "Complete Weekly Revision",
//         category: "Revision",
//         status: "locked",
//       },
//     ];
//     setTasks(resetTasks);
//     localStorage.setItem("sessionBuildBasicsTasks", JSON.stringify(resetTasks));
//   };

//   const getStatusText = (status) => {
//     if (status === "completed")
//       return <span className="text-xs text-[#1A9BA1]"> Done</span>;
//     if (status === "available")
//       return <span className="text-xs text-[#1A9BA1]">Continue</span>;
//     return null;
//   };

//   // ========== Locked Milestones (Strengthen, Score, PCM) ==========
//   const [milestones, setMilestones] = useState([
//     {
//       id: 1,
//       name: "Strengthen Concepts",
//       description:
//         "Dive deeper into advanced topics to prepare for your board exams.",
//       unlocked: false,
//     },
//     {
//       id: 2,
//       name: "Score in Boards",
//       description:
//         "Achieve target scores in preliminary and final board examinations.",
//       unlocked: false,
//     },
//     {
//       id: 3,
//       name: "PCM Stream Selection",
//       description:
//         "Finalize stream choice based on aptitude and board results.",
//       unlocked: false,
//     },
//   ]);

//   // Unlock milestones when Build Basics is 100% complete
//   useEffect(() => {
//     if (progress === 100) {
//       setMilestones(milestones.map((m) => ({ ...m, unlocked: true })));
//     }
//   }, [progress]);

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div >
//           <div className="flex items-center gap-2">
//             <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M14.106 5.55137C14.6688 5.83262 15.3312 5.83262 15.894 5.55137L19.553 3.72137C19.8632 3.56636 20.2316 3.58313 20.5265 3.76571C20.8213 3.94828 21.0005 4.27058 21 4.61738V17.3814C20.9998 17.76 20.7857 18.1061 20.447 18.2754L15.894 20.5524C15.3312 20.8336 14.6688 20.8336 14.106 20.5524L9.894 18.4464C9.33118 18.1651 8.66882 18.1651 8.106 18.4464L4.447 20.2764C4.13662 20.4315 3.76803 20.4146 3.47312 20.2318C3.17821 20.049 2.99915 19.7263 3 19.3794V6.61637C3.00021 6.23771 3.21427 5.89164 3.553 5.72237L8.106 3.44537C8.66882 3.16413 9.33118 3.16413 9.894 3.44537L14.106 5.55137M15 5.76238V20.7624M9 3.23438V18.2344" stroke="#0891B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </div>
//             <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
//           </div>
          
//           <p className="text-sm text-gray-500 mt-1">
//             Track your learning milestones and prepare for the PCM stream
//             selection.
//           </p>
//         </div>
//         <button
//           onClick={handleReset}
//           className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50 transition"
//         >
//           <RotateCcw size={14} />
//           Reset Progress
//         </button>
//       </div>

//       {/* Two Column Layout */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* LEFT COLUMN (2/3) - Build Basics and Milestones */}
//         <div className="w-full lg:flex-[2] space-y-4">
//           {/* Build Basics Card - EXACTLY from your component */}
//           <div className="bg-white rounded-2xl shadow-sm p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Build Basics</h2>
//               <button
//                 onClick={handleReset}
//                 className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 border rounded-lg hover:bg-gray-50 transition"
//               >
//                 <RotateCcw size={12} />
//                 Reset
//               </button>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-6">
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="text-gray-600">Progress</span>
//                 <span className="text-gray-900 font-medium">
//                   {Math.round(progress)}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-lg h-2">
//                 <div
//                   className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Tasks List */}
//             <div className="space-y-3">
//               {tasks.map((task) => (
//                 <div
//                   key={task.id}
//                   onClick={() => handleTaskClick(task)}
//                   className={`relative p-3 h-[83px] border border-gray-100 rounded-xl transition ${
//                     task.status === "available"
//                       ? "cursor-pointer hover:bg-gray-50"
//                       : ""
//                   } ${task.status === "locked" ? "cursor-not-allowed" : ""}`}
//                 >
//                   {task.status === "locked" && (
//                     <>
//                       <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm rounded-xl"></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Lock size={24} color="#9CA3AF" />
//                       </div>
//                     </>
//                   )}

//                   <div
//                     className={`flex items-center justify-between relative z-10 ${
//                       task.status === "locked" ? "opacity-30" : ""
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       {getIcon(task.status)}
//                       <div>
//                         <p
//                           className={`text-sm font-medium ${
//                             task.status === "completed"
//                               ? "line-through text-gray-400"
//                               : "text-gray-700"
//                           }`}
//                         >
//                           {task.title}
//                         </p>
//                         <p className="text-xs text-gray-400">{task.category}</p>
//                       </div>
//                     </div>
//                     {getStatusText(task.status)}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {progress === 100 && (
//               <div className="mt-4 p-3 bg-green-50 rounded-xl text-center">
//                 <p className="text-sm text-[#1A9BA1] font-medium">
//                   Amazing! You've completed all tasks!
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Milestone Cards */}
//           {milestones.map((milestone) => (
//             <div
//               key={milestone.id}
//               className={`bg-white rounded-2xl shadow-sm p-5 ${!milestone.unlocked ? "opacity-60" : ""}`}
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-gray-900">
//                     {milestone.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {milestone.description}
//                   </p>
//                 </div>

//                 <div className="flex border p-1 px-2 rounded-2xl bg-[#F3F4F6]">
//                   <Lock size={15} color="#9CA3AF" />
//                   <p className="text-xs  text-[#6B7280] font-semibold">
//                     Locked
//                   </p>
//                 </div>
//                 {/* <Lock size={18} color="#9CA3AF" /> */}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT COLUMN (1/3) */}
//         <div className="w-full lg:flex-1 space-y-4">
//           {/* Journey Progress Card */}
//           <div className="bg-white rounded-2xl shadow-sm p-5 ">
//             <div className="flex items-center gap-x-2">
//               <div>
//                 <Target size={20} color="#F59E0B" />
//               </div>
//               <h3 className="font-semibold text-gray-900 ">Journey Progress</h3>
//             </div>

//             <div className="relative w-32 h-32 mx-auto mt-4">
//               <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   fill="none"
//                   stroke="#E5E7EB"
//                   strokeWidth="8"
//                 />

//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   fill="none"
//                   stroke="#F59E0B"
//                   strokeWidth="8"
//                   strokeDasharray={`${progress * 2.83} 283`}
//                   strokeDashoffset="0"
//                   strokeLinecap="round"
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>

//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-[#F59E0B]">
//                   {Math.round(progress)}%
//                 </span>
//               </div>
//             </div>

//             <div className="flex justify-evenly  mt-4 pt-3 border-t">
//               <div>
//                 <p className="text-xl ml-4 font-bold text-gray-900">
//                   {completedCount}
//                 </p>
//                 <p className="text-xs text-gray-500">Tasks Done</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold ml-4 text-gray-900">
//                   {progress === 100 ? 4 : 1}
//                 </p>
//                 <p className="text-xs text-gray-500">Milestones</p>
//               </div>
//             </div>
//           </div>

//           {/* Special Recommendation Card */}
//    <div className="border rounded-xl bg-[linear-gradient(146.7deg,#D1FFC2_-50.68%,#FFFFFF_24.02%,#FFFFFF_80.33%,#D1FFC2_124%)]">
//             <div className="flex justify-center items-center gap-2 mt-6 ">
//                 <div><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.51455 1.3623C7.58085 1.00733 7.89069 0.75 8.2518 0.75C8.6129 0.75 8.92274 1.00733 8.98905 1.3623L9.7773 5.5308C9.89187 6.13731 10.3663 6.61172 10.9728 6.7263L15.1413 7.51455C15.4963 7.58085 15.7536 7.89069 15.7536 8.2518C15.7536 8.6129 15.4963 8.92274 15.1413 8.98905L10.9728 9.7773C10.3663 9.89187 9.89187 10.3663 9.7773 10.9728L8.98905 15.1413C8.92274 15.4963 8.6129 15.7536 8.2518 15.7536C7.89069 15.7536 7.58085 15.4963 7.51455 15.1413L6.7263 10.9728C6.61172 10.3663 6.13731 9.89187 5.5308 9.7773L1.3623 8.98905C1.00733 8.92274 0.75 8.6129 0.75 8.2518C0.75 7.89069 1.00733 7.58085 1.3623 7.51455L5.5308 6.7263C6.13731 6.61172 6.61172 6.13731 6.7263 5.5308L7.51455 1.3623M14.2518 0.751796V3.7518M15.7518 2.2518H12.7518" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                     <                                   path d="M0.751953 14.2501C0.751953 15.0779 1.42408 15.7501 2.25195 15.7501C3.07983 15.7501 3.75195 15.0779 3.75195 14.2501C3.75195 13.4222 3.07983 12.7501 2.25195 12.7501C1.42408 12.7501 0.751953 13.4222 0.751953 14.2501H0.751953" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                                                             </svg>
//                                                                                         </div>
//                 <p className="text-xl text-[#10B981] font-semibold">Special Recommendation</p>
//             </div>


//             <div className="flex flex-col ">
//                 <p className="text-center mt-10 text-xl font-bold">Need Help Planning?</p>
//                 <p className=" max-w-[290px] mx-auto text-center text-slate-500 mt-4">Discuss your current progress and board
//                         preparation strategy.</p>


//                 <div className=" w-[250px] h-[200px] mx-auto flex flex-col rounded-lg justify-center items-center border gap-y-2 mt-5">
//                     <div>
//   <img  
//     src="/images/cow.png"
//     alt="Description"
//     className="w-[80px] h-[80px] rounded-full object-cover"
//   />
// </div>
//                     <p>Mukund Tyagi</p>
//                     <p>(Academic Planner & Counsellor)</p>
//                     <p className="text-slate-500">Rating<span className="text-yellow-400 ml-1 text-sm font-bold">★ 4.2</span></p>
//                 </div>

//                 <div className="w-[306px] h-[40px] mx-auto border mt-5 mb-6 bg-[#10B981] text-sm rounded-xl text-white text-center p-2 font-semibold">
//                   {"Book a Session->"} 
//                 </div>


//             </div>
//           </div>

//           {/* Quick Learning Resources Card */}
//     <div className="bg-white rounded-2xl shadow-sm p-5">
//   <div className="flex items-center  gap-x-2">
//     <div>
//       <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M9.16658 4.16671V15.8334M9.16658 4.16671C9.16658 2.32576 7.6742 0.833374 5.83325 0.833374H1.66659C1.20635 0.833374 0.833252 1.20647 0.833252 1.66671V12.5C0.833252 12.9603 1.20635 13.3334 1.66659 13.3334H6.66658C8.0473 13.3334 9.16658 14.4527 9.16658 15.8334M9.16658 4.16671C9.16658 2.32576 10.659 0.833374 12.4999 0.833374H16.6666C17.1268 0.833374 17.4999 1.20647 17.4999 1.66671V12.5C17.4999 12.9603 17.1268 13.3334 16.6666 13.3334H11.6666C10.2859 13.3334 9.16658 14.4527 9.16658 15.8334" stroke="#D97706" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//     </div>
//     <h3 className="font-semibold text-gray-900">Quick Learning Resources</h3>
//   </div>

//   <div className="space-y-3 mt-3">
    
//     {/* First Resource - YouTube/Video */}


//     <div className="flex items-center  mt-4  justify-between p-3  bg-[#F3F4F6] rounded-xl">

//         <div>
//              <div className="flex items-start gap-3 p-2  hover:bg-gray-50 rounded-lg bg-[#F3F4F6]">
//       {/* Square box for SVG */}
//       <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
//         <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g clipPath="url(#clip0_1_1030)">
//             <path d="M15.6453 1.75447C15.5535 1.41538 15.3746 1.10625 15.1262 0.857847C14.8778 0.609448 14.5686 0.430451 14.2296 0.338681C12.9882 0.00012207 7.99203 0.00012207 7.99203 0.00012207C7.99203 0.00012207 2.99564 0.01037 1.75425 0.348929C1.41516 0.440705 1.10603 0.619711 0.857644 0.868122C0.609255 1.11653 0.430276 1.42568 0.33853 1.76478C-0.0369589 3.97047 -0.182618 7.33144 0.348841 9.4489C0.440596 9.78799 0.619579 10.0971 0.867967 10.3455C1.11636 10.5939 1.42548 10.7729 1.76456 10.8647C3.00595 11.2032 8.00222 11.2032 8.00222 11.2032C8.00222 11.2032 12.9984 11.2032 14.2398 10.8647C14.5788 10.7729 14.888 10.5939 15.1364 10.3455C15.3848 10.0971 15.5638 9.788 15.6555 9.4489C16.0516 7.24008 16.1736 3.88118 15.6453 1.75447Z" fill="#FF0000"/>
//             <path d="M6.40161 8.00224L10.5463 5.60158L6.40161 3.20093V8.00224Z" fill="white"/>
//           </g>
//           <defs>
//             <clipPath id="clip0_1_1030">
//               <rect width="16" height="11.2478" fill="white"/>
//             </clipPath>
//           </defs>
//         </svg>
//       </div>
//       <div>
//         <p className="text-sm font-medium">Motion & Energy Explained in 10 Minutes</p>
//         <p className="text-xs text-gray-500">Channel: Khan Academy</p>
//       </div>
//     </div>
//         </div>
//         <div>
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.66675 0.666626H12.6667V4.66663M5.33342 7.99996L12.6667 0.666626M10.6667 7.33329V11.3333C10.6667 12.0692 10.0693 12.6666 9.33342 12.6666H2.00008C1.26419 12.6666 0.666748 12.0692 0.666748 11.3333V3.99996C0.666748 3.26407 1.26419 2.66663 2.00008 2.66663H6.00008" stroke="#15803D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//         </div>


//     </div>
   

//     {/* Second Resource - PDF */}
//     <div className="flex  justify-between p-3  mt-3 items-center  gap-2 bg-[#F3F4F6] rounded-xl">
//         <div>
//             <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
//       {/* Square box for SVG */}
//       <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
//         <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M7.5 5.83333H12.0833L7.5 1.25V5.83333ZM1.66667 0H8.33333L13.3333 5V15C13.3333 15.442 13.1577 15.8659 12.8452 16.1785C12.5326 16.4911 12.1087 16.6667 11.6667 16.6667H1.66667C1.22464 16.6667 0.800716 16.4911 0.488155 16.1785C0.175595 15.8659 0 15.442 0 15V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0ZM5.775 8.7C6.11667 9.45 6.55 10.0667 7.05 10.4917L7.39167 10.7583C6.66667 10.8917 5.66667 11.125 4.60833 11.5333L4.51667 11.5667L4.93333 10.7C5.30833 9.975 5.58333 9.31667 5.775 8.7ZM11.175 11.875C11.325 11.725 11.4 11.5333 11.4083 11.325C11.4333 11.1583 11.3917 11 11.3083 10.8667C11.0667 10.475 10.4417 10.2917 9.40833 10.2917L8.33333 10.35L7.60833 9.86667C7.08333 9.43333 6.60833 8.675 6.275 7.73333L6.30833 7.61667C6.58333 6.50833 6.84167 5.16667 6.29167 4.61667C6.22439 4.55134 6.14482 4.50002 6.05756 4.46569C5.97029 4.43136 5.87708 4.4147 5.78333 4.41667H5.58333C5.275 4.41667 5 4.74167 4.925 5.05833C4.61667 6.16667 4.8 6.775 5.10833 7.78333V7.79167C4.9 8.525 4.63333 9.375 4.20833 10.2333L3.40833 11.7333L2.66667 12.1417C1.66667 12.7667 1.19167 13.4667 1.1 13.9083C1.06667 14.0667 1.08333 14.2083 1.14167 14.3583L1.16667 14.4L1.56667 14.6583L1.93333 14.75C2.60833 14.75 3.375 13.9583 4.40833 12.1917L4.55833 12.1333C5.41667 11.8583 6.48333 11.6667 7.91667 11.5083C8.775 11.9333 9.78333 12.125 10.4167 12.125C10.7833 12.125 11.0333 12.0333 11.175 11.875ZM10.8333 11.2833L10.9083 11.375C10.9 11.4583 10.875 11.4667 10.8333 11.4833H10.8L10.6417 11.5C10.2583 11.5 9.66667 11.3417 9.05833 11.075C9.13333 10.9917 9.16667 10.9917 9.25 10.9917C10.4167 10.9917 10.75 11.2 10.8333 11.2833ZM3.19167 12.5C2.65 13.4917 2.15833 14.0417 1.78333 14.1667C1.825 13.85 2.2 13.3 2.79167 12.7583L3.19167 12.5ZM5.70833 6.74167C5.51667 5.99167 5.50833 5.38333 5.65 5.03333L5.70833 4.93333L5.83333 4.975C5.975 5.175 5.99167 5.44167 5.90833 5.89167L5.88333 6.025L5.75 6.70833L5.70833 6.74167Z" fill="#EF5350"/>
//         </svg>
//       </div>
//       <div>
//         <p className="text-sm font-medium">Motion & Energy Pdf</p>
//         <p className="text-xs text-gray-500">NCERT</p>
//       </div>
//     </div>
//         </div>
//         <div>
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.66675 8.66663V0.666626M12.6667 8.66663V11.3333C12.6667 12.0692 12.0693 12.6666 11.3334 12.6666H2.00008C1.26419 12.6666 0.666748 12.0692 0.666748 11.3333V8.66663" stroke="#EA580C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M3.33276 5.33459L6.6661 8.66793L9.99943 5.33459" stroke="#EA580C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//         </div>
//     </div>
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Session;


import { useState, useEffect } from "react"
import {
  Lock,
  RotateCcw,
  Calculator,
  FlaskConical,
  Square,
  Check,
  Target,
} from "lucide-react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { getInitialSessionTasks, sessionMilestones } from "../utils/mockData"
import TaskItem from "../components/common/TaskItem"
import {
  SessionHeaderIcon,
  SpecialRecommendationIcon,
  QuickLearningIcon,
  YoutubeIcon,
  PdfIcon,
  DownloadArrowIcon,
  ExternalLinkIcon
} from "../icons/AllIcons"

const Session = () => {
  const [tasks, setTasks] = useLocalStorage("sessionBuildBasicsTasks", getInitialSessionTasks())

  const completedCount = tasks.filter((t) => t.status === "completed").length
  const progress = (completedCount / tasks.length) * 100

  const getIcon = (status) => {
    if (status === "completed") return <Check size={20} color="#1A9BA1" />
    if (status === "available") return <Square size={20} color="#1A9BA1" />
    return <Lock size={20} color="#9CA3AF" />
  }

  const handleTaskClick = (clickedTask) => {
    if (clickedTask.status !== "available") return
    const updated = tasks.map((task) => {
      if (task.id === clickedTask.id) {
        return { ...task, status: "completed" }
      }
      if (task.id === clickedTask.id + 1 && task.status === "locked") {
        return { ...task, status: "available" }
      }
      return task
    })
    setTasks(updated)
  }

  const handleReset = () => {
    setTasks(getInitialSessionTasks())
  }

  const getStatusText = (status) => {
    if (status === "completed") return <span className="text-xs text-[#1A9BA1]"> Done</span>
    if (status === "available") return <span className="text-xs text-[#1A9BA1]">Continue</span>
    return null
  }

  const [milestones, setMilestones] = useState(sessionMilestones)

  useEffect(() => {
    if (progress === 100) {
      setMilestones(milestones.map((m) => ({ ...m, unlocked: true })))
    }
  }, [progress])

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <SessionHeaderIcon />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Sessions</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track your learning milestones and prepare for the PCM stream selection.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-gray-600 border rounded-lg hover:bg-gray-50 transition"
        >
          <RotateCcw size={14} />
          Reset Progress
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        
        {/* LEFT COLUMN (2/3) */}
        <div className="w-full lg:flex-[2] space-y-4">
          
          {/* Build Basics Card */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Build Basics</h2>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 border rounded-lg hover:bg-gray-50 transition"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900 font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-lg h-2">
                <div className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} getStatusText={getStatusText} />
              ))}
            </div>

            {progress === 100 && (
              <div className="mt-4 p-3 bg-green-50 rounded-xl text-center">
                <p className="text-xs sm:text-sm text-[#1A9BA1] font-medium">Amazing! You've completed all tasks!</p>
              </div>
            )}
          </div>

          {/* Milestone Cards */}
          {milestones.map((milestone) => (
            <div key={milestone.id} className={`bg-white rounded-2xl shadow-sm p-4 sm:p-5 ${!milestone.unlocked ? "opacity-60" : ""}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{milestone.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{milestone.description}</p>
                </div>
                <div className="flex border p-1 px-2 rounded-2xl bg-[#F3F4F6]">
                  <Lock size={15} color="#9CA3AF" />
                  <p className="text-xs text-[#6B7280] font-semibold">Locked</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN (1/3) */}
        <div className="w-full lg:flex-1 space-y-4">
          
          {/* Journey Progress Card */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
            <div className="flex items-center gap-x-2">
              <Target size={20} color="#F59E0B" />
              <h3 className="font-semibold text-gray-900">Journey Progress</h3>
            </div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mt-4">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F59E0B" strokeWidth="8" 
                  strokeDasharray={`${progress * 2.83} 283`} strokeDashoffset="0" 
                  strokeLinecap="round" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-[#F59E0B]">{Math.round(progress)}%</span>
              </div>
            </div>
            <div className="flex justify-evenly mt-4 pt-3 border-t">
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold text-gray-900">{completedCount}</p>
                <p className="text-xs text-gray-500">Tasks Done</p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold text-gray-900">{progress === 100 ? 4 : 1}</p>
                <p className="text-xs text-gray-500">Milestones</p>
              </div>
            </div>
          </div>

          {/* Special Recommendation Card */}
          <div className="border rounded-xl bg-[linear-gradient(146.7deg,#D1FFC2_-50.68%,#FFFFFF_24.02%,#FFFFFF_80.33%,#D1FFC2_124%)] p-4 sm:p-0">
            <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
              <SpecialRecommendationIcon />
              <p className="text-lg sm:text-xl text-[#10B981] font-semibold">Special Recommendation</p>
            </div>
            <div className="flex flex-col">
              <p className="text-center mt-6 sm:mt-10 text-lg sm:text-xl font-bold">Need Help Planning?</p>
              <p className="max-w-[290px] mx-auto text-center text-slate-500 text-xs sm:text-sm mt-2 sm:mt-4">
                Discuss your current progress and board preparation strategy.
              </p>
              <div className="w-[200px] sm:w-[250px] h-[160px] sm:h-[200px] mx-auto flex flex-col rounded-lg justify-center items-center border gap-y-2 mt-4 sm:mt-5">
                <div>
                  <img src="/images/cow.png" alt="Profile" className="w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full object-cover" />
                </div>
                <p className="text-sm sm:text-base">Mukund Tyagi</p>
                <p className="text-xs sm:text-sm text-center text-slate-500">(Academic Planner & Counsellor)</p>
                <p className="text-slate-500 text-xs sm:text-sm">Rating<span className="text-yellow-400 ml-1 font-bold">★ 4.2</span></p>
              </div>
              <div className="w-[250px] sm:w-[306px] h-[40px] mx-auto border mt-4 sm:mt-5 mb-4 sm:mb-6 bg-[#10B981] text-xs sm:text-sm rounded-xl text-white text-center p-2 font-semibold">
                Book a Session →
              </div>
            </div>
          </div>

          {/* Quick Learning Resources Card */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
            <div className="flex items-center gap-x-2">
              <QuickLearningIcon />
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Learning Resources</h3>
            </div>

            <div className="space-y-3 mt-3">
              {/* YouTube Resource */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-[#F3F4F6] rounded-xl gap-3">
                <div className="flex items-start gap-3">
                  <YoutubeIcon />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Motion & Energy Explained in 10 Minutes</p>
                    <p className="text-xs text-gray-500">Channel: Khan Academy</p>
                  </div>
                </div>
                <ExternalLinkIcon />
              </div>

              {/* PDF Resource */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-[#F3F4F6] rounded-xl gap-3">
                <div className="flex items-start gap-3">
                  <PdfIcon />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Motion & Energy Pdf</p>
                    <p className="text-xs text-gray-500">NCERT</p>
                  </div>
                </div>
                <DownloadArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session