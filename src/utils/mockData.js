// Build Basics Tasks
export const getInitialBuildBasicsTasks = () => [
  { id: 1, title: "Study Motion and Energy Concepts", category: "Science", status: "available" },
  { id: 2, title: "Solve 20 Maths Question Daily", category: "Maths", status: "locked" },
  { id: 3, title: "Watch a Science Concept Video", category: "Exploration", status: "locked" },
  { id: 4, title: "Follow a Weekly Study Plan", category: "Habit", status: "locked" },
  { id: 5, title: "Maths Formulas and Concepts", category: "Maths", status: "locked" },
  { id: 6, title: "Complete Weekly Revision", category: "Revision", status: "locked" }
]

// Career Roadmap Milestones
export const getInitialCareerRoadmap = () => [
  { id: 1, name: "Build Basics", status: "available" },
  { id: 2, name: "Strengthen Concepts", status: "locked" },
  { id: 3, name: "Score in Boards", status: "locked" },
  { id: 4, name: "PCM Stream", status: "locked" }
]

// Mind Gym Exercises
export const mindGymExercises = [
  {
    title: "Breathing Exercises",
    description: "Calm and relax",
    duration: "3-5 minutes",
    icon: "Wind",
    gradient: "linear-gradient(135deg, #C7E9FF, #E4FFFF)",
    color: "#0EA5E9",
    bgColor: "#FFFFFF45",
  },
  {
    title: "Focus Exercises",
    description: "Boost concentration",
    duration: "5-10 minutes",
    icon: "Target",
    gradient: "linear-gradient(135deg, #FEEF7B, #FEF5DC)",
    color: "#FEEF7B",
    bgColor: "#FFFFFF45",
  },
  {
    title: "Muscle Relaxation",
    description: "Release body tension",
    duration: "25-30 minutes",
    icon: "Dumbbell",
    gradient: "linear-gradient(135deg, #CEC3FF, #F3E8FF)",
    color: "#8B5CF6",
    bgColor: "#FFFFFF45",
  },
  {
    title: "Study Focus Reset",
    description: "Sharpen your mind",
    duration: "3 minutes",
    icon: "Brain",
    gradient: "linear-gradient(135deg, #FFD1EB, #FAE8FF)",
    color: "#EC4899",
    bgColor: "#FFFFFF45",
  }
]

export const getInitialSessionTasks = () => [
  { id: 1, title: "Study Motion and Energy Concepts", category: "Science", status: "available" },
  { id: 2, title: "Solve 20 Maths Question Daily", category: "Maths", status: "locked" },
  { id: 3, title: "Watch a Science Concept Video", category: "Exploration", status: "locked" },
  { id: 4, title: "Follow a Weekly Study Plan", category: "Habit", status: "locked" },
  { id: 5, title: "Maths Formulas and Concepts", category: "Maths", status: "locked" },
  { id: 6, title: "Complete Weekly Revision", category: "Revision", status: "locked" },
]

export const sessionMilestones = [
  { id: 1, name: "Strengthen Concepts", description: "Dive deeper into advanced topics to prepare for your board exams.", unlocked: false },
  { id: 2, name: "Score in Boards", description: "Achieve target scores in preliminary and final board examinations.", unlocked: false },
  { id: 3, name: "PCM Stream Selection", description: "Finalize stream choice based on aptitude and board results.", unlocked: false },
]