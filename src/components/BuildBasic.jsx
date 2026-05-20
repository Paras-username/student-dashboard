import { useState } from "react"
import MindGym from '../components/MindGym'
import { RotateCcw, Calculator, FlaskConical } from "lucide-react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { getInitialBuildBasicsTasks } from "../utils/mockData"
import TaskItem from "./common/TaskItem"
import { 
  MoodIconMon, MoodIconTue, MoodIconWed, 
  MoodIconThu, MoodIconFri, MoodIconSat, MoodIconSun,
  BuildBasicsHeaderIcon,
  SkillsProgressIcon,
  WarningIcon
} from "../icons/AllIcons"

const BuildBasic = () => {
  const [tasks, setTasks] = useLocalStorage("buildBasicsTasks", getInitialBuildBasicsTasks())

  const completedCount = tasks.filter((t) => t.status === "completed").length
  const progress = (completedCount / tasks.length) * 100

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
    setTasks(getInitialBuildBasicsTasks())
  }

  const getStatusText = (status) => {
    if (status === "completed") return <span className="text-xs text-[#1A9BA1]"> Done</span>
    if (status === "available") return <span className="text-xs text-[#1A9BA1]">Continue</span>
    return null
  }

  const svgIcons = [
    <MoodIconMon key="mon" />,
    <MoodIconTue key="tue" />,
    <MoodIconWed key="wed" />,
    <MoodIconThu key="thu" />,
    <MoodIconFri key="fri" />,
    <MoodIconSat key="sat" />,
    <MoodIconSun key="sun" />,
  ]

  return (
    <div className="px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="w-full lg:flex-[2]">
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            
            {/* Header with Reset Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <div className="flex gap-x-2 items-center">
                <BuildBasicsHeaderIcon />
                <h2 className="text-lg sm:text-xl font-semibold">Build Basics</h2>
              </div>
              <button onClick={handleReset} className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 border rounded-lg hover:bg-gray-50 transition">
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900 font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-lg h-2">
                <div className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} getStatusText={getStatusText} />
              ))}
            </div>

            {/* Completion Message */}
            {progress === 100 && (
              <div className="mt-4 p-3 bg-green-50 rounded-xl text-center">
                <p className="text-xs sm:text-sm text-[#1A9BA1] font-medium">Amazing! You've completed all tasks!</p>
              </div>
            )}
          </div>

          {/* MindGym Component */}
          <div className="mt-4"><MindGym /></div>
        </div>

        {/* Right Sidebar */}
        <div className="flex-1 rounded-xl">
          <div className="flex flex-col gap-4">
            
            {/* Mood & Activity Trends */}
            <div className="border rounded-xl p-4">
              <div className="flex flex-row justify-between">
                <h3 className="font-semibold text-gray-900">Mood & Activity Trends</h3>
                <p className="text-xs text-gray-400 mt-1 border p-2 rounded-lg">This Week</p>
              </div>
              <p className="text-xs pr-10 text-gray-500 mt-2">Emotional wellbeing & platform engagement based on your daily check-ins.</p>

              {/* Bar Chart */}
              <div className="flex justify-between items-end mt-4 gap-3">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                  const heights = ["150px", "150px", "150px", "150px", "150px", "150px", "150px"]
                  const colors = [
                    "linear-gradient(180deg, #9159CB, #E3B3F2)",
                    "linear-gradient(180deg, #82B95A, #C5E489)",
                    "linear-gradient(180deg, #C23587, #FB98CF)",
                    "linear-gradient(180deg, #00BEBF, #8FF7F4)",
                    "linear-gradient(180deg, #EC4242, #FF9393)",
                    "linear-gradient(180deg, #F3F6F7, #F3F6F7)",
                    "linear-gradient(180deg, #F3F6F7, #F3F6F7)",
                  ]
                  
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1 w-10">
                      <div className="mb-1">{svgIcons[idx]}</div>
                      <div className="w-[30px] rounded-lg transition-all duration-300" style={{ height: heights[idx], background: colors[idx] }}></div>
                      <span className="text-xs text-gray-500 mt-1">{day}</span>
                    </div>
                  )
                })}
              </div>

              {/* Warning */}
              <div className="mt-4 p-2 flex items-center gap-2 border-t-2 py-6">
                <WarningIcon />
                <p className="text-xs text-slate-500">Your mood this week suggests increased stress related to your future.</p>
              </div>

              {/* Recommended For You */}
              <div className="rounded-xl">
                <div className="flex flex-col items-center border-t-2">
                  <p className="text-center w-fit border rounded-2xl px-3 py-1 bg-[#FDDBFF] text-[#EC4899] mt-10 text-sm font-semibold">Based on mood log</p>
                  <p className="text-center text-[#EC4899] mt-4 text-xl font-bold">Recommended For You</p>
                  <div className="w-[250px] h-[200px] mx-auto flex flex-col rounded-lg justify-center items-center gap-y-2 mt-5">
                    <div><img src="/images/cow.png" alt="Profile" className="w-[80px] h-[80px] rounded-full object-cover" /></div>
                    <p className="text-lg font-bold">Mukund Tyagi</p>
                    <p className="text-slate-500 text-sm font-semibold">(Academic Planner & Counsellor)</p>
                    <p className="text-sm font-semibold text-slate-500"><span className="text-yellow-400 mr-2 text-sm font-bold">★ 4.5</span>(120+ sessions)</p>
                  </div>
                  <div className="w-[267px] h-[40px] mx-auto border mt-5 mb-6 bg-[#EC4899] text-sm rounded-xl text-white text-center p-2 font-semibold">Book a Therapy Session →</div>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center gap-x-2">
                <SkillsProgressIcon />
                <h3 className="text-md font-semibold mb-3">Skills Progress</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border bg-[#F4ECFB] p-2 rounded-lg"><Calculator size={20} color="#8B5CF6" /></div>
                    <span className="text-sm text-gray-700">Math Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-1.5"><div className="bg-[#229E91] rounded-full h-1.5" style={{ width: "80%" }}></div></div>
                    <span className="text-sm font-medium text-gray-700">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border bg-[#FFF7ED] p-2 rounded-lg"><FlaskConical size={18} color="#EA580C" /></div>
                    <span className="text-sm text-gray-700">Science Concepts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-1.5"><div className="bg-[#229E91] rounded-full h-1.5" style={{ width: "70%" }}></div></div>
                    <span className="text-sm font-medium text-gray-700">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildBasic