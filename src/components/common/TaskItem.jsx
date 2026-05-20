import { Lock, Square, Check } from 'lucide-react'

const TaskItem = ({ task, onTaskClick, getStatusText }) => {
  const getIcon = (status) => {
    if (status === "completed") return <Check size={20} color="#1A9BA1" />
    if (status === "available") return <Square size={20} color="#1A9BA1" />
    return <Lock size={20} color="#9CA3AF" />
  }

  return (
    <div 
      onClick={() => onTaskClick(task)}
      className={`relative p-3 min-h-[75px] sm:h-[83px] border border-gray-100 rounded-xl transition ${
        task.status === "available" ? "cursor-pointer hover:bg-gray-50" : ""
      } ${task.status === "locked" ? "cursor-not-allowed" : ""}`}
    >
      {task.status === "locked" && (
        <>
          <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock size={24} color="#9CA3AF" />
          </div>
        </>
      )}
      
      <div className={`flex items-center justify-between relative z-10 ${
        task.status === "locked" ? "opacity-30" : ""
      }`}>
        <div className="flex items-center gap-2 sm:gap-3">
          {getIcon(task.status)}
          <div>
            <p className={`text-xs sm:text-sm font-medium ${
              task.status === "completed" ? "line-through text-gray-400" : "text-gray-700"
            }`}>
              {task.title}
            </p>
            <p className="text-xs text-gray-400">{task.category}</p>
          </div>
        </div>
        {getStatusText && getStatusText(task.status)}
      </div>
    </div>
  )
}

export default TaskItem