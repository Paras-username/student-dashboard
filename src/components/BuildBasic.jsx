import { useState, useEffect } from "react";
import MindGym from '../components/MindGym'
import {
  Lock,
  RotateCcw,
  Calculator,
  FlaskConical,
  Square,
  Check,
} from "lucide-react";

const BuildBasic = () => {
  const getInitialTasks = () => {
    const saved = localStorage.getItem("buildBasicsTasks");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: 1,
        title: "Study Motion and Energy Concepts",
        category: "Science",
        status: "available",
      },
      {
        id: 2,
        title: "Solve 20 Maths Question Daily",
        category: "Maths",
        status: "locked",
      },
      {
        id: 3,
        title: "Watch a Science Concept Video",
        category: "Exploration",
        status: "locked",
      },
      {
        id: 4,
        title: "Follow a Weekly Study Plan",
        category: "Habit",
        status: "locked",
      },
      {
        id: 5,
        title: "Maths Formulas and Concepts",
        category: "Maths",
        status: "locked",
      },
      {
        id: 6,
        title: "Complete Weekly Revision",
        category: "Revision",
        status: "locked",
      },
    ];
  };

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("buildBasicsTasks", JSON.stringify(tasks));
  }, [tasks]);

  const completedCount = tasks.filter((t) => t.status === "completed").length;
  const progress = (completedCount / tasks.length) * 100;

  const getIcon = (status) => {
    if (status === "completed") return <Check size={20} color="#1A9BA1" />;
    if (status === "available") return <Square size={20} color="#1A9BA1" />;
    return <Lock size={20} color="#9CA3AF" />;
  };

  const handleTaskClick = (clickedTask) => {
    if (clickedTask.status !== "available") return;

    const updated = tasks.map((task) => {
      if (task.id === clickedTask.id) {
        return { ...task, status: "completed" };
      }
      if (task.id === clickedTask.id + 1 && task.status === "locked") {
        return { ...task, status: "available" };
      }
      return task;
    });
    setTasks(updated);
  };

  const handleReset = () => {
    const resetTasks = [
      {
        id: 1,
        title: "Study Motion and Energy Concepts",
        category: "Science",
        status: "available",
      },
      {
        id: 2,
        title: "Solve 20 Maths Question Daily",
        category: "Maths",
        status: "locked",
      },
      {
        id: 3,
        title: "Watch a Science Concept Video",
        category: "Exploration",
        status: "locked",
      },
      {
        id: 4,
        title: "Follow a Weekly Study Plan",
        category: "Habit",
        status: "locked",
      },
      {
        id: 5,
        title: "Maths Formulas and Concepts",
        category: "Maths",
        status: "locked",
      },
      {
        id: 6,
        title: "Complete Weekly Revision",
        category: "Revision",
        status: "locked",
      },
    ];
    setTasks(resetTasks);
    localStorage.setItem("buildBasicsTasks", JSON.stringify(resetTasks));
  };

  const getStatusText = (status) => {
    if (status === "completed")
      return <span className="text-xs text-[#1A9BA1]"> Done</span>;
    if (status === "available")
      return <span className="text-xs text-[#1A9BA1]">Continue</span>;
    return null;
  };

  return (
<div className="px-4 sm:px-6">
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
    <div className="w-full lg:flex-[2]">
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        {/* Header with Reset Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <div className="flex gap-x-2 items-center">
            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 8.88V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H14.4533" stroke="#2DA9E0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16536L10 11.6654L18.3333 3.33203" stroke="#2DA9E0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<h2 className="text-lg sm:text-xl font-semibold">Build Basics</h2>
          </div>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 border rounded-lg hover:bg-gray-50 transition"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="text-gray-900 font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-lg h-2">
            <div
              className="bg-[#1A9BA1] rounded-full h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => handleTaskClick(task)}
              className={`relative p-3 min-h-[75px] sm:h-[83px] border border-gray-100 rounded-xl transition ${
                task.status === "available"
                  ? "cursor-pointer hover:bg-gray-50"
                  : ""
              } ${task.status === "locked" ? "cursor-not-allowed" : ""}`}
            >
              {/* Blur background for locked tasks */}
              {task.status === "locked" && (
                <>
                  <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock size={24} color="#9CA3AF" />
                  </div>
                </>
              )}

              {/* Task Content */}
              <div
                className={`flex items-center justify-between relative z-10 ${
                  task.status === "locked" ? "opacity-30" : ""
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  {getIcon(task.status)}
                  <div>
                    <p
                      className={`text-xs sm:text-sm font-medium ${
                        task.status === "completed"
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {task.category}
                    </p>
                  </div>
                </div>
                {getStatusText(task.status)}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {progress === 100 && (
          <div className="mt-4 p-3 bg-green-50 rounded-xl text-center">
            <p className="text-xs sm:text-sm text-[#1A9BA1] font-medium">
              Amazing! You've completed all tasks!
            </p>
          </div>
        )}
      </div>
          
          <div>
            <MindGym/>
          </div>
        </div>

      

       

        <div className="flex-1  rounded-xl">
          <div className="flex flex-col gap-4">
            {/* Mood & Activity Trends */}
            <div className="border rounded-xl p-4">
              <div className="flex flex-row justify-between">
                <h3 className="font-semibold text-gray-900">
                  Mood & Activity Trends
                </h3>
                <p className="text-xs text-gray-400 mt-1 border p-2 rounded-lg">
                  This Week
                </p>
              </div>

              <p className="text-xs pr-10 text-gray-500 mt-2">
                Emotional wellbeing & platform engagement based on your daily
                check-ins.
              </p>

             <div className="flex justify-between items-end mt-4 gap-3">
  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
    const heights = ["150px", "150px", "150px", "150px", "150px", "150px", "150px"];
    const colors = [
      "linear-gradient(180deg, #9159CB, #E3B3F2)",
      "linear-gradient(180deg, #82B95A, #C5E489)",
      "linear-gradient(180deg, #C23587, #FB98CF)",
      "linear-gradient(180deg, #00BEBF, #8FF7F4)",
      "linear-gradient(180deg, #EC4242, #FF9393)",
      "linear-gradient(180deg, #F3F6F7, #F3F6F7)",
      "linear-gradient(180deg, #F3F6F7, #F3F6F7)",
    ];

    // Your 7 SVGs
    const svgIcons = [
      <svg width="20" height="20">{<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_f_1_439)">
<ellipse cx="10.9546" cy="19.0389" rx="8.41431" ry="0.761543" fill="#8E8E8E"/>
</g>
<path d="M17.258 4.3124C16.873 4.09922 16.5449 3.99758 16.3414 3.94548C15.7271 3.78917 14.2699 3.58223 9.01733 6.4354C9.31811 6.55648 9.61039 6.66509 9.89225 6.76416C9.89881 6.76636 9.90576 6.76893 9.91233 6.77077C10.8502 7.09953 11.6726 7.31491 12.3259 7.46094C14.8217 8.01756 15.6375 7.72733 16.0734 7.49617C16.5958 7.21951 16.9329 6.83718 17.1317 6.56456C17.2823 6.30588 17.4823 5.88575 17.4885 5.35555C17.4893 5.28584 17.4866 5.21356 17.4808 5.13944C17.4796 5.1288 17.4788 5.11852 17.4777 5.10788C17.4541 4.86131 17.3881 4.59346 17.258 4.3124Z" fill="#9760CE"/>
<path d="M16.4828 3.23865H16.4747H16.4658L15.5306 3.25846L15.3631 3.26213L13.4572 3.30139L11.6638 4.38968L11.6032 4.42637L8.75949 6.15126L8.75369 6.15493L8.25793 6.45581L8.62203 6.65174C8.66721 6.62716 8.69732 6.61065 8.72551 6.59487C8.82783 6.53946 8.92551 6.48553 9.01779 6.43453C9.32513 6.55854 9.62359 6.66972 9.91085 6.77099L9.91278 6.76989L12.312 5.55795C15.3098 4.19044 16.8102 4.64872 17.4781 5.10701C17.4546 4.86044 17.3886 4.59258 17.2584 4.31152L17.2604 4.31226C17.2584 4.30896 17.2561 4.30419 17.253 4.29831C17.0793 3.97909 16.9117 3.75197 16.8561 3.67785C16.7619 3.55237 16.6387 3.40119 16.4831 3.23828L16.4828 3.23865Z" fill="#9760CE"/>
<path d="M5.36169 5.5957C7.75271 1.6614 13.7373 1.66136 16.1283 5.5957L17.6654 8.12598L19.5804 11.3398C21.7591 14.9972 19.0277 19.5744 14.6049 19.5928L10.7445 19.6074L6.88513 19.5928C2.46253 19.5745 -0.269147 14.9969 1.90955 11.3398L3.82458 8.12598L5.36169 5.5957Z" fill="url(#paint0_linear_1_439)" stroke="#E9E9E9" stroke-width="0.383846"/>
<g opacity="0.5">
<rect x="3.10144" y="2.53711" width="13.7068" height="7.66864" fill="url(#pattern0_1_439)"/>
</g>
<path d="M16.3248 3.07696C16.3248 3.07696 16.3259 3.07733 16.3263 3.07806C16.3769 3.12796 16.4294 3.1808 16.4827 3.23804C16.5425 3.30151 16.6036 3.36976 16.6653 3.44205C16.6661 3.44278 16.6665 3.44351 16.6673 3.44425C16.7364 3.52607 16.8059 3.61376 16.875 3.70733C17.0294 3.91611 17.1534 4.11571 17.2526 4.2977C17.2545 4.30211 17.2561 4.30614 17.258 4.31055C16.8731 4.09737 16.5449 3.99573 16.3414 3.94363C15.7271 3.78732 14.2699 3.58037 9.01735 6.43355C8.89418 6.50033 8.83163 6.53482 8.78414 6.56124C8.7629 6.57298 8.74437 6.58288 8.72506 6.59352C8.69688 6.60894 8.66676 6.62581 8.62159 6.6504C6.60882 7.74088 2.94352 9.51825 1.48597 8.88017C1.48597 8.88017 -1.28241 8.00323 0.73808 4.80699C0.941943 4.45438 3.31765 0.511818 8.21077 0.0443618C11.2587 -0.246606 14.2668 0.90846 16.3248 3.07696Z" fill="url(#paint1_linear_1_439)"/>
<path d="M6.62679 9.98369C6.65497 10.0325 6.71212 10.0736 6.80247 10.096C7.5519 10.2813 9.02644 10.045 9.1469 9.14601C9.16659 8.99888 9.08667 8.64003 8.86427 8.81065C8.62991 8.99007 8.46967 9.23958 8.22797 9.41533C7.9909 9.58779 7.71329 9.68319 7.4129 9.67328C7.21753 9.66667 7.00594 9.62558 6.81482 9.68208C6.64301 9.73272 6.56424 9.87619 6.62679 9.98369Z" fill="#333333"/>
<path d="M14.8205 9.98369C14.7923 10.0325 14.7351 10.0736 14.6448 10.096C13.8954 10.2813 12.4208 10.045 12.3004 9.14601C12.2807 8.99888 12.3606 8.64003 12.583 8.81065C12.8174 8.99007 12.9776 9.23958 13.2193 9.41533C13.4564 9.58779 13.734 9.68319 14.0344 9.67328C14.2297 9.66667 14.4413 9.62558 14.6324 9.68208C14.8043 9.73272 14.883 9.87619 14.8205 9.98369Z" fill="#333333"/>
<path d="M8.80155 11.0624C8.96448 11.0844 9.11043 11.1655 9.25213 11.2451C9.43708 11.3493 9.62897 11.4598 9.74171 11.6337C9.79345 11.7137 9.82357 11.8241 9.76102 11.8972C9.71932 11.9463 9.64866 11.9625 9.58264 11.9687C9.13012 12.0098 8.6861 11.7027 8.24362 11.8003C8.05327 11.8425 7.05635 12.3162 7.3467 11.7643C7.54979 11.3783 8.37722 11.0055 8.80155 11.0624Z" fill="#333333"/>
<path d="M12.6457 11.0624C12.4828 11.0844 12.3368 11.1655 12.1951 11.2451C12.0102 11.3493 11.8183 11.4598 11.7056 11.6337C11.6538 11.7137 11.6237 11.8241 11.6862 11.8972C11.7279 11.9463 11.7986 11.9625 11.8646 11.9687C12.3171 12.0098 12.7612 11.7027 13.2036 11.8003C13.394 11.8425 14.3909 12.3162 14.1006 11.7643C13.8975 11.3783 13.0701 11.0055 12.6457 11.0624Z" fill="#333333"/>
<path d="M8.50002 15.2084C8.45794 14.3667 9.25022 13.7562 9.89695 13.3111C10.1892 13.1096 10.4927 12.8458 10.8669 12.7945C11.2889 12.7369 11.6333 13.0282 11.895 13.3056C12.1649 13.5914 12.412 13.8967 12.6314 14.2192C12.8615 14.5579 13.0642 14.9901 12.8711 15.3493C12.7217 15.6271 12.3723 15.7625 12.0437 15.7695C11.7155 15.7764 11.3958 15.6796 11.0765 15.6069C10.8329 15.5511 10.5715 15.5203 10.3178 15.5504C10.1888 15.5658 10.0622 15.5966 9.94251 15.6443C9.81935 15.6931 9.71124 15.7661 9.58575 15.8102C9.36915 15.8861 9.11393 15.8902 8.89732 15.8025C8.67724 15.7133 8.53709 15.5254 8.50813 15.3005C8.50427 15.2697 8.50157 15.2393 8.50002 15.2088V15.2084Z" fill="#333333"/>
<path d="M14.5466 13.2122C14.5795 13.4052 14.6713 13.6261 14.8405 13.7475C14.993 13.8572 15.2092 13.8308 15.3393 13.7013C15.537 13.5046 15.4602 13.1891 15.3679 12.9641C15.2559 12.6915 15.0486 12.4167 14.7582 12.2971C14.6165 12.2387 14.4601 12.227 14.3119 12.2699C14.1818 12.3077 14.2551 12.4244 14.303 12.4993C14.3879 12.6317 14.4536 12.7778 14.4937 12.9286C14.5184 13.0214 14.5304 13.1175 14.5462 13.2122H14.5466Z" fill="white"/>
<path d="M6.94134 13.2122C6.90852 13.4052 6.81662 13.6261 6.64751 13.7475C6.495 13.8572 6.27878 13.8308 6.14866 13.7013C5.95097 13.5046 6.02781 13.1891 6.12009 12.9641C6.23206 12.6915 6.4394 12.4167 6.72975 12.2971C6.87145 12.2387 7.02782 12.227 7.17609 12.2699C7.30621 12.3077 7.23285 12.4244 7.18497 12.4993C7.10003 12.6317 7.03439 12.7778 6.99423 12.9286C6.96952 13.0214 6.95755 13.1175 6.94172 13.2122H6.94134Z" fill="white"/>
<defs>
<filter id="filter0_f_1_439" x="1.77874" y="17.5158" width="18.3517" height="3.04616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.380772" result="effect1_foregroundBlur_1_439"/>
</filter>
<pattern id="pattern0_1_439" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_439" transform="scale(0.00280899 0.0047619)"/>
</pattern>
<linearGradient id="paint0_linear_1_439" x1="32.5405" y1="15.727" x2="-7.61308" y2="6.96352" gradientUnits="userSpaceOnUse">
<stop stop-color="#CECECE"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="#CECECE"/>
</linearGradient>
<linearGradient id="paint1_linear_1_439" x1="1.06237" y1="8.22838" x2="13.8198" y2="1.30633" gradientUnits="userSpaceOnUse">
<stop stop-color="#9159CB"/>
<stop offset="1" stop-color="#E3B3F2"/>
</linearGradient>
<image id="image0_1_439" width="356" height="210" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
}</svg>,
      <svg width="20" height="20">{<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_f_1_462)">
<ellipse cx="9.23639" cy="17.8553" rx="7.99615" ry="0.761538" fill="#8E8E8E"/>
</g>
<path d="M15.3725 4.04219C15.0297 3.84237 14.7373 3.7471 14.5561 3.69826C14.0089 3.55175 12.7109 3.35777 8.0321 6.03215C8.30002 6.14565 8.56038 6.24745 8.81144 6.34031C8.81729 6.34238 8.82348 6.34478 8.82933 6.3465C9.66473 6.65466 10.3973 6.85655 10.9792 6.99343C13.2024 7.51517 13.9291 7.24312 14.3174 7.02645C14.7827 6.76713 15.083 6.40875 15.2601 6.15322C15.3942 5.91075 15.5724 5.51695 15.5779 5.01998C15.5786 4.95463 15.5762 4.88688 15.571 4.8174C15.57 4.80743 15.5693 4.7978 15.5682 4.78782C15.5473 4.55671 15.4885 4.30564 15.3725 4.04219Z" fill="#70AD40"/>
<path d="M14.6827 3.03538H14.6754H14.6675L13.8345 3.05395L13.6853 3.05739L11.9877 3.09419L10.3901 4.11428L10.3361 4.14867L7.80308 5.76547L7.79793 5.76891L7.35632 6.05093L7.68065 6.23459C7.72089 6.21155 7.74771 6.19607 7.77282 6.18128C7.86396 6.12935 7.95097 6.07879 8.03317 6.03099C8.30694 6.14723 8.57279 6.25144 8.82868 6.34637L8.8304 6.34534L10.9676 5.20934C13.6378 3.92753 14.9743 4.35709 15.5693 4.78666C15.5483 4.55554 15.4895 4.30447 15.3736 4.04102L15.3753 4.04171C15.3736 4.03861 15.3716 4.03414 15.3688 4.02864C15.214 3.72942 15.0648 3.51653 15.0152 3.44706C14.9313 3.32944 14.8216 3.18774 14.683 3.03503L14.6827 3.03538Z" fill="#70AD40"/>
<path d="M4.75 5.16406C6.89454 1.45024 12.2558 1.45024 14.4004 5.16406L15.7686 7.5332V7.53418L17.4756 10.5488C19.4403 14.0201 16.968 18.3381 13.0137 18.3555L9.57422 18.3691L6.13672 18.3555C2.18258 18.3382 -0.290044 14.0198 1.6748 10.5488L3.38086 7.5332L4.75 5.16406Z" fill="url(#paint0_linear_1_462)" stroke="#E9E9E9" stroke-width="0.269049"/>
<g opacity="0.5">
<rect x="2.32422" y="2.32422" width="12.2094" height="7.18808" fill="url(#pattern0_1_462)"/>
</g>
<path d="M14.5415 2.88414C14.5415 2.88414 14.5425 2.88449 14.5428 2.88517C14.5879 2.93195 14.6347 2.98147 14.6821 3.03513C14.7354 3.09463 14.7898 3.1586 14.8448 3.22635C14.8455 3.22704 14.8458 3.22773 14.8465 3.22841C14.9081 3.30511 14.97 3.38731 15.0316 3.47501C15.1691 3.6707 15.2795 3.8578 15.3679 4.02839C15.3696 4.03252 15.371 4.0363 15.3727 4.04043C15.0298 3.8406 14.7375 3.74534 14.5562 3.6965C14.0091 3.54999 12.7111 3.35601 8.03229 6.03039C7.92257 6.09298 7.86686 6.12531 7.82455 6.15008C7.80564 6.16108 7.78913 6.17037 7.77193 6.18034C7.74683 6.19479 7.72 6.21061 7.67976 6.23365C5.88687 7.2558 2.62196 8.92179 1.32364 8.3237C1.32364 8.3237 -1.14232 7.50171 0.657451 4.50576C0.839045 4.17525 2.95523 0.479745 7.31382 0.0415819C10.0288 -0.231153 12.7083 0.851531 14.5415 2.88414Z" fill="url(#paint1_linear_1_462)"/>
<path d="M5.95487 11.5917C5.95143 11.5831 5.94868 11.5742 5.94696 11.5649C5.84722 11.0043 6.91752 10.8609 7.26145 10.9688C7.43823 11.0242 7.6157 11.1209 7.75636 11.2409C7.8107 11.2873 8.16048 11.7245 7.90907 11.7303C7.87192 11.7313 7.83787 11.71 7.80761 11.6883C7.57787 11.526 7.45543 11.2856 7.16584 11.2165C6.84805 11.1405 6.49965 11.2433 6.27782 11.4841C6.20766 11.5601 6.03054 11.7764 5.95487 11.5917Z" fill="#333333"/>
<path d="M13.0217 11.5917C13.0251 11.5831 13.0279 11.5742 13.0296 11.5649C13.1293 11.0043 12.059 10.8609 11.7151 10.9688C11.5383 11.0242 11.3608 11.1209 11.2202 11.2409C11.1658 11.2873 10.8161 11.7245 11.0675 11.7303C11.1046 11.7313 11.1383 11.71 11.1689 11.6883C11.3987 11.526 11.5211 11.2856 11.8107 11.2165C12.1285 11.1405 12.4769 11.2433 12.6987 11.4841C12.7689 11.5601 12.946 11.7764 13.0217 11.5917Z" fill="#333333"/>
<path d="M7.46381 13.5478C8.75147 13.9908 10.2479 13.9639 11.5328 13.5203C11.9988 13.3593 12.4442 13.1334 12.8349 12.8317C12.9567 12.7378 13.1802 12.5401 13.3233 12.7241C13.4052 12.8293 13.3364 13.0047 13.28 13.1058C13.1434 13.3507 12.9016 13.5234 12.6812 13.6867C12.3916 13.901 12.0693 14.0716 11.7368 14.2085C11.1707 14.4417 10.5622 14.5627 9.95315 14.6036C9.72375 14.6191 9.49332 14.6232 9.26323 14.616C9.2567 14.616 9.25016 14.6157 9.24329 14.6153C8.91587 14.6047 8.58948 14.571 8.26688 14.5142C7.65228 14.4066 7.05316 14.1957 6.50941 13.8893C6.44991 13.8559 6.3911 13.8216 6.33297 13.7858C6.13797 13.6668 5.95018 13.5471 5.8384 13.3394C5.79782 13.264 5.77478 13.1743 5.79885 13.0921C5.83978 12.9524 5.99042 12.9012 6.1218 12.9294C6.3285 12.9734 6.49599 13.0928 6.6769 13.1939C6.86812 13.3008 7.06623 13.3951 7.26983 13.4759C7.33415 13.5014 7.3988 13.5254 7.46381 13.5478Z" fill="#333333"/>
<defs>
<filter id="filter0_f_1_462" x="0.478696" y="16.3322" width="17.5154" height="3.04615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.380769" result="effect1_foregroundBlur_1_462"/>
</filter>
<pattern id="pattern0_1_462" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_462" transform="scale(0.00280899 0.00478469)"/>
</pattern>
<linearGradient id="paint0_linear_1_462" x1="28.9898" y1="14.6862" x2="-6.93575" y2="7.2351" gradientUnits="userSpaceOnUse">
<stop stop-color="#CECECE"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="#CECECE"/>
</linearGradient>
<linearGradient id="paint1_linear_1_462" x1="0.946313" y1="7.71275" x2="12.5662" y2="1.72118" gradientUnits="userSpaceOnUse">
<stop stop-color="#82B95A"/>
<stop offset="1" stop-color="#C5E489"/>
</linearGradient>
<image id="image0_1_462" width="356" height="209" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

}</svg>,
      <svg width="20" height="20">{<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_f_1_482)">
<ellipse cx="10.0605" cy="19.0333" rx="8.06077" ry="0.767692" fill="#8E8E8E"/>
</g>
<path d="M16.7639 4.26689C16.3899 4.05586 16.0711 3.95525 15.8734 3.90367C15.2767 3.74894 13.8611 3.54409 8.75842 6.36845C9.05062 6.48831 9.33456 6.59582 9.60837 6.69389C9.61475 6.69607 9.6215 6.69861 9.62787 6.70043C10.539 7.02587 11.3379 7.23908 11.9725 7.38364C14.3971 7.93464 15.1897 7.64733 15.6131 7.41851C16.1206 7.14464 16.4481 6.76617 16.6412 6.4963C16.7875 6.24024 16.9818 5.82435 16.9878 5.29951C16.9886 5.2305 16.9859 5.15894 16.9803 5.08557C16.9792 5.07504 16.9784 5.06487 16.9773 5.05434C16.9544 4.81026 16.8903 4.54511 16.7639 4.26689Z" fill="#D82675"/>
<path d="M16.0107 3.20544H16.0028H15.9942L15.0858 3.22506L14.923 3.22869L13.0715 3.26755L11.3293 4.34485L11.2704 4.38117L8.50787 6.08864L8.50224 6.09228L8.02063 6.39011L8.37434 6.58407C8.41822 6.55974 8.44748 6.54339 8.47486 6.52777C8.57426 6.47293 8.66915 6.41953 8.7588 6.36905C9.05737 6.49181 9.34731 6.60187 9.62638 6.70212L9.62825 6.70103L11.959 5.50133C14.8712 4.14762 16.3288 4.60128 16.9777 5.05493C16.9548 4.81085 16.8907 4.54571 16.7643 4.26748L16.7661 4.26821C16.7643 4.26494 16.762 4.26022 16.759 4.25441C16.5902 3.93841 16.4274 3.71358 16.3734 3.64021C16.2819 3.51599 16.1623 3.36635 16.0111 3.20508L16.0107 3.20544Z" fill="#D82675"/>
<path d="M5.20251 5.48242C7.52338 1.59046 13.3299 1.59046 15.6508 5.48242L17.1439 7.98633L19.0043 11.168C21.1231 14.7924 18.4632 19.3178 14.1761 19.3359L10.4261 19.3506L6.67712 19.3359C2.39031 19.318 -0.269873 14.7921 1.849 11.168L3.70837 7.98535L3.70935 7.98633L5.20251 5.48242Z" fill="url(#paint0_linear_1_482)" stroke="#E9E9E9" stroke-width="0.383846"/>
<g opacity="0.5">
<rect x="2.53308" y="2.45312" width="13.3156" height="7.5912" fill="url(#pattern0_1_482)"/>
</g>
<path d="M15.8589 3.04589C15.8589 3.04589 15.86 3.04625 15.8604 3.04698C15.9095 3.09638 15.9605 3.14868 16.0123 3.20534C16.0704 3.26818 16.1297 3.33573 16.1897 3.40729C16.1905 3.40801 16.1908 3.40874 16.1916 3.40947C16.2587 3.49046 16.3262 3.57727 16.3934 3.66989C16.5434 3.87656 16.6638 4.07415 16.7602 4.25431C16.7621 4.25866 16.7636 4.26266 16.7655 4.26702C16.3915 4.05599 16.0727 3.95538 15.875 3.9038C15.2783 3.74907 13.8627 3.54422 8.76 6.36858C8.64035 6.43469 8.57958 6.46883 8.53345 6.49498C8.51282 6.5066 8.49481 6.51641 8.47606 6.52694C8.44868 6.5422 8.41942 6.55891 8.37553 6.58324C6.42021 7.66272 2.85951 9.42213 1.44356 8.7905C1.44356 8.7905 -1.24581 7.92242 0.717015 4.75845C0.915061 4.4094 3.22297 0.50665 7.97644 0.0439138C10.9374 -0.244116 13.8597 0.899286 15.8589 3.04589Z" fill="url(#paint1_linear_1_482)"/>
<path d="M7.55474 10.4804C7.5975 10.4716 7.65002 10.4665 7.67777 10.4992C7.69128 10.5156 7.69503 10.5374 7.69615 10.5584C7.70403 10.7095 7.60313 10.8497 7.47673 10.9387C7.24942 11.0993 6.95198 11.1269 6.67066 11.1363C6.35372 11.1472 6.01764 11.1367 5.74983 10.9725C5.6403 10.9053 5.54203 10.8043 5.52553 10.6798C5.50452 10.5196 5.64518 10.3903 5.80496 10.4346C5.95425 10.476 6.07615 10.5704 6.23331 10.6053C6.67742 10.7045 7.12189 10.5679 7.55474 10.48V10.4804Z" fill="#333333"/>
<path d="M12.6572 10.4804C12.6145 10.4716 12.5619 10.4665 12.5342 10.4992C12.5207 10.5156 12.5169 10.5374 12.5158 10.5584C12.5079 10.7095 12.6088 10.8497 12.7352 10.9387C12.9625 11.0993 13.26 11.1269 13.5413 11.1363C13.8582 11.1472 14.1943 11.1367 14.4621 10.9725C14.5717 10.9053 14.6699 10.8043 14.6864 10.6798C14.7074 10.5196 14.5668 10.3903 14.407 10.4346C14.2577 10.476 14.1358 10.5704 13.9787 10.6053C13.5345 10.7045 13.0901 10.5679 12.6572 10.48V10.4804Z" fill="#333333"/>
<path d="M10.2248 12.0588C10.604 12.0643 10.9783 12.1841 11.2863 12.4405C11.766 12.8404 11.9809 13.548 11.9716 14.1437C11.9626 14.7106 11.7773 15.298 11.317 15.6735C10.5661 16.2863 9.50424 16.1246 8.83133 15.4716C7.60105 14.277 8.40561 12.0334 10.2244 12.0588H10.2248Z" fill="#333333"/>
<path d="M13.8477 8.05155C13.994 7.89028 14.1706 7.73228 14.366 7.6284C14.4414 7.58808 14.533 7.56193 14.6192 7.58009C14.7066 7.59862 14.7171 7.6807 14.7291 7.75371C14.7576 7.92842 14.7783 8.10457 14.8038 8.27964C14.8154 8.36064 14.8296 8.44091 14.8446 8.52118C14.8683 8.64903 14.8867 8.90438 15.0937 8.83682C15.1376 8.82265 15.1747 8.79432 15.2085 8.76381C15.2711 8.70679 15.3285 8.63451 15.4114 8.60363C15.5746 8.54225 15.6766 8.70424 15.6027 8.83754C15.5697 8.89711 15.5202 8.9476 15.4714 8.99482C15.3761 9.08671 15.2809 9.1786 15.1845 9.26977C15.1012 9.34859 15.0258 9.44339 14.917 9.49097C14.8221 9.53237 14.7257 9.48915 14.6781 9.40271C14.6429 9.33878 14.632 9.26359 14.6222 9.1924C14.6098 9.10124 14.5971 9.01043 14.5843 8.91927C14.5562 8.7155 14.5273 8.51174 14.4992 8.30798C14.4906 8.24623 14.4894 8.16015 14.4452 8.11184C14.4013 8.06389 14.3289 8.05009 14.2674 8.07116C14.2085 8.0915 14.1624 8.13763 14.1286 8.18848C14.0468 8.31233 14.0131 8.47723 13.875 8.55896C13.7955 8.60618 13.6886 8.59274 13.6365 8.51319C13.5645 8.40386 13.6601 8.28219 13.7265 8.19647C13.7651 8.14634 13.8057 8.09804 13.848 8.05118L13.8477 8.05155Z" fill="#333333"/>
<path d="M15.154 7.11076C15.274 6.97818 15.4192 6.84888 15.5793 6.76316C15.6412 6.73011 15.7163 6.70868 15.7871 6.72357C15.8588 6.73882 15.8674 6.80638 15.8772 6.86631C15.9004 7.00978 15.9177 7.15434 15.9383 7.29817C15.9481 7.36464 15.9597 7.43038 15.9721 7.49649C15.9916 7.60146 16.0066 7.81103 16.1765 7.75546C16.2125 7.74384 16.2432 7.72059 16.2706 7.69553C16.322 7.64868 16.3693 7.58947 16.4372 7.56405C16.5711 7.51356 16.6547 7.6465 16.5943 7.75619C16.5673 7.80486 16.5268 7.84663 16.4867 7.88549C16.4083 7.96068 16.3303 8.03623 16.2511 8.11105C16.1829 8.1757 16.121 8.25379 16.0317 8.29266C15.9537 8.3268 15.8749 8.29121 15.8355 8.22002C15.8066 8.16771 15.7976 8.1056 15.7898 8.04749C15.7796 7.97267 15.7691 7.89784 15.7586 7.82338C15.7354 7.6563 15.7121 7.48886 15.6889 7.32178C15.6817 7.27093 15.6806 7.20047 15.6446 7.16088C15.6086 7.12129 15.549 7.11003 15.4987 7.12746C15.4503 7.14417 15.4124 7.18195 15.3851 7.22372C15.3179 7.32542 15.2902 7.46053 15.1769 7.52773C15.1116 7.56659 15.0238 7.55569 14.9811 7.49032C14.9222 7.4006 15.0002 7.30072 15.055 7.23025C15.0865 7.18921 15.1199 7.14926 15.1547 7.11076H15.154Z" fill="#333333"/>
<path d="M16.3858 6.20212C16.487 6.09025 16.6097 5.98092 16.7451 5.90864C16.7976 5.88067 16.8606 5.86251 16.9206 5.87523C16.9814 5.88794 16.9885 5.94496 16.9968 5.99581C17.0167 6.11713 17.0309 6.2388 17.0485 6.36048C17.0568 6.41678 17.0665 6.47199 17.077 6.52792C17.0935 6.61655 17.1059 6.79343 17.2496 6.74658C17.28 6.73677 17.3058 6.71716 17.3291 6.69609C17.3726 6.6565 17.4124 6.60638 17.4698 6.58495C17.583 6.54245 17.6536 6.65469 17.6022 6.74694C17.5793 6.78799 17.5452 6.82322 17.511 6.85591C17.445 6.91947 17.379 6.9834 17.3122 7.04623C17.2545 7.10071 17.2023 7.16682 17.1269 7.19951C17.0609 7.2282 16.9945 7.19842 16.9615 7.13849C16.9371 7.09418 16.9296 7.04187 16.9229 6.99284C16.9143 6.92964 16.9053 6.8668 16.8966 6.8036C16.8771 6.66231 16.8572 6.52139 16.8377 6.3801C16.8317 6.33724 16.831 6.27767 16.8002 6.24425C16.7698 6.21084 16.7196 6.20139 16.6772 6.21629C16.6363 6.23045 16.6044 6.26241 16.5812 6.29765C16.5245 6.38336 16.5013 6.49778 16.4053 6.55444C16.3501 6.58713 16.2759 6.57805 16.2399 6.52284C16.19 6.44693 16.256 6.36266 16.3021 6.30309C16.3287 6.26859 16.3569 6.23481 16.3865 6.20212H16.3858Z" fill="#333333"/>
<defs>
<filter id="filter0_f_1_482" x="1.23206" y="17.4979" width="17.657" height="3.07078" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.383846" result="effect1_foregroundBlur_1_482"/>
</filter>
<pattern id="pattern0_1_482" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_482" transform="scale(0.00280899 0.00478469)"/>
</pattern>
<linearGradient id="paint0_linear_1_482" x1="31.6" y1="15.5109" x2="-7.47329" y2="7.1421" gradientUnits="userSpaceOnUse">
<stop stop-color="#CECECE"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="#CECECE"/>
</linearGradient>
<linearGradient id="paint1_linear_1_482" x1="1.03205" y1="8.1453" x2="13.5303" y2="1.49019" gradientUnits="userSpaceOnUse">
<stop stop-color="#C23587"/>
<stop offset="1" stop-color="#FB98CF"/>
</linearGradient>
<image id="image0_1_482" width="356" height="209" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
}</svg>,
      <svg width="20" height="20">{<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_f_1_509)">
<ellipse cx="10.8033" cy="19.0389" rx="7.9962" ry="0.761543" fill="#8E8E8E"/>
</g>
<path d="M17.1693 4.28679C16.7864 4.07471 16.4599 3.97359 16.2574 3.92176C15.6463 3.76626 14.1966 3.56038 8.97107 6.39887C9.2703 6.51933 9.56108 6.62738 9.84148 6.72594C9.84801 6.72813 9.85493 6.73068 9.86146 6.73251C10.7945 7.05958 11.6127 7.27385 12.2626 7.41913C14.7455 7.97289 15.5572 7.68415 15.9908 7.45418C16.5106 7.17894 16.8459 6.79858 17.0437 6.52736C17.1935 6.27001 17.3925 5.85205 17.3986 5.32458C17.3994 5.25522 17.3967 5.18331 17.391 5.10957C17.3898 5.09899 17.389 5.08877 17.3879 5.07818C17.3645 4.83288 17.2988 4.56641 17.1693 4.28679Z" fill="#25A8A8"/>
<path d="M16.3983 3.22119H16.3903H16.3814L15.4511 3.2409L15.2844 3.24455L13.3884 3.28361L11.6041 4.3663L11.5438 4.4028L8.71479 6.11882L8.70903 6.12247L8.21582 6.42179L8.57804 6.61672C8.62299 6.59226 8.65295 6.57584 8.68099 6.56014C8.78278 6.50502 8.87996 6.45136 8.97177 6.40062C9.27752 6.524 9.57445 6.63461 9.86023 6.73536L9.86215 6.73426L12.2491 5.52856C15.2314 4.16808 16.7241 4.62401 17.3886 5.07993C17.3651 4.83463 17.2995 4.56816 17.17 4.28854L17.1719 4.28927C17.17 4.28599 17.1677 4.28124 17.1646 4.2754C16.9918 3.95783 16.8251 3.73187 16.7698 3.65813C16.676 3.53329 16.5535 3.3829 16.3987 3.22083L16.3983 3.22119Z" fill="#25A8A8"/>
<path d="M5.32288 5.50989C7.70107 1.59619 13.6545 1.59637 16.0328 5.50989L17.5612 8.02454V8.02551L19.4674 11.2247C21.6345 14.8626 18.9177 19.4155 14.5182 19.4337L10.6774 19.4484L6.8385 19.4337C2.43929 19.4157 -0.277787 14.8622 1.88928 11.2247L3.79358 8.02551L3.79456 8.02649L5.32288 5.50989Z" fill="url(#paint0_linear_1_509)" stroke="#E9E9E9" stroke-width="0.383846"/>
<g opacity="0.5">
<rect x="2.59583" y="2.46497" width="13.6362" height="7.62917" fill="url(#pattern0_1_509)"/>
</g>
<path d="M16.2408 3.06137C16.2408 3.06137 16.2419 3.06173 16.2423 3.06246C16.2926 3.11211 16.3449 3.16467 16.3979 3.22162C16.4574 3.28477 16.5181 3.35267 16.5796 3.42458C16.5803 3.42531 16.5807 3.42604 16.5815 3.42677C16.6502 3.50817 16.7194 3.59541 16.7881 3.6885C16.9418 3.8962 17.0651 4.09478 17.1638 4.27583C17.1657 4.28021 17.1673 4.28423 17.1692 4.28861C16.7862 4.07652 16.4597 3.97541 16.2573 3.92358C15.6462 3.76807 14.1965 3.56219 8.97094 6.40068C8.84841 6.46712 8.78618 6.50143 8.73893 6.52772C8.71781 6.5394 8.69937 6.54925 8.68016 6.55984C8.65212 6.57517 8.62216 6.59196 8.57722 6.61642C6.57481 7.70129 2.92837 9.46951 1.47832 8.83472C1.47832 8.83472 -1.27581 7.96229 0.734281 4.7825C0.937096 4.4317 3.30058 0.509429 8.16852 0.0443776C11.2008 -0.245093 14.1934 0.904029 16.2408 3.06137Z" fill="url(#paint1_linear_1_509)"/>
<path d="M7.55453 12.2813C7.89968 12.2813 8.17949 11.8331 8.17949 11.2803C8.17949 10.7275 7.89968 10.2794 7.55453 10.2794C7.20937 10.2794 6.92957 10.7275 6.92957 11.2803C6.92957 11.8331 7.20937 12.2813 7.55453 12.2813Z" fill="#333333"/>
<path d="M13.8034 12.2813C14.1486 12.2813 14.4284 11.8331 14.4284 11.2803C14.4284 10.7275 14.1486 10.2794 13.8034 10.2794C13.4583 10.2794 13.1785 10.7275 13.1785 11.2803C13.1785 11.8331 13.4583 12.2813 13.8034 12.2813Z" fill="#333333"/>
<path d="M12.8233 13.5509C13.3891 13.5509 13.7559 14.1163 13.5039 14.5978C13.0292 15.5057 11.9556 16.1386 10.7072 16.1386C9.45878 16.1386 8.38555 15.5053 7.91039 14.5978C7.65841 14.1163 8.02525 13.5509 8.59105 13.5509H12.8229H12.8233Z" fill="#333333"/>
<defs>
<filter id="filter0_f_1_509" x="2.04559" y="17.5158" width="17.5155" height="3.04616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.380771" result="effect1_foregroundBlur_1_509"/>
</filter>
<pattern id="pattern0_1_509" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_509" transform="scale(0.0028169 0.00478469)"/>
</pattern>
<linearGradient id="paint0_linear_1_509" x1="32.3616" y1="15.5885" x2="-7.58536" y2="6.87012" gradientUnits="userSpaceOnUse">
<stop stop-color="#CECECE"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="#CECECE"/>
</linearGradient>
<linearGradient id="paint1_linear_1_509" x1="1.0569" y1="8.18628" x2="13.7487" y2="1.29985" gradientUnits="userSpaceOnUse">
<stop stop-color="#00BEBF"/>
<stop offset="1" stop-color="#8FF7F4"/>
</linearGradient>
<image id="image0_1_509" width="355" height="209" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
}</svg>,
      <svg width="20" height="20">{<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_f_1_533)">
<ellipse cx="10.9911" cy="19.0384" rx="7.99087" ry="0.761035" fill="#8E8E8E"/>
</g>
<path d="M18.0978 4.27575C17.6941 4.06428 17.3499 3.96346 17.1365 3.91177C16.4923 3.75671 14.9642 3.55143 9.45593 6.38177C9.77135 6.50188 10.0779 6.60962 10.3734 6.70789C10.3803 6.71008 10.3876 6.71263 10.3945 6.71445C11.378 7.04058 12.2404 7.25423 12.9255 7.3991C15.5428 7.95126 16.3984 7.66335 16.8555 7.43404C17.4034 7.1596 17.7568 6.78033 17.9654 6.50989C18.1233 6.25328 18.333 5.83652 18.3395 5.31056C18.3403 5.2414 18.3375 5.1697 18.3314 5.09617C18.3302 5.08562 18.3294 5.07543 18.3282 5.06487C18.3035 4.82027 18.2342 4.55457 18.0978 4.27575Z" fill="#EF4D4D"/>
<path d="M17.285 3.21155H17.2765H17.2672L16.2865 3.2312L16.1108 3.23484L14.1122 3.27379L12.2314 4.35336L12.1679 4.38976L9.18576 6.10085L9.17968 6.10449L8.65979 6.40296L9.04161 6.59732C9.08899 6.57294 9.12057 6.55656 9.15013 6.54091C9.25743 6.48594 9.35987 6.43244 9.45664 6.38184C9.77894 6.50487 10.0919 6.61516 10.3932 6.71562L10.3952 6.71453L12.9113 5.51229C16.0549 4.15572 17.6284 4.61034 18.3289 5.06495C18.3042 4.82035 18.2349 4.55465 18.0985 4.27583L18.1005 4.27656C18.0985 4.27329 18.096 4.26855 18.0928 4.26273C17.9106 3.94606 17.7349 3.72076 17.6766 3.64723C17.5778 3.52275 17.4486 3.37279 17.2854 3.21118L17.285 3.21155Z" fill="#EF4D4D"/>
<path d="M11.3485 2.6106C13.5567 2.6107 15.752 3.59261 17.0038 5.54126L18.6151 8.0481V8.04907L20.6239 11.2395C21.7671 13.055 21.621 15.0883 20.6112 16.676C19.6002 18.2656 17.7206 19.4102 15.3954 19.4192L11.3475 19.4338L7.30066 19.4192C4.97566 19.4102 3.09593 18.2656 2.08484 16.676C1.07507 15.0883 0.929009 13.0548 2.07214 11.2395L4.08093 8.04907L4.07996 8.0481L5.69226 5.54126C6.94407 3.5925 9.14018 2.6106 11.3485 2.6106Z" fill="url(#paint0_linear_1_533)" stroke="#E9E9E9" stroke-width="0.383853"/>
<g opacity="0.5">
<rect x="3.06641" y="2.50415" width="14.374" height="7.60726" fill="url(#pattern0_1_533)"/>
</g>
<path d="M17.1195 3.0527C17.1195 3.0527 17.1207 3.05306 17.1211 3.05379C17.1742 3.10329 17.2292 3.15571 17.2851 3.21249C17.3479 3.27546 17.4119 3.34316 17.4766 3.41486C17.4774 3.41559 17.4778 3.41632 17.4787 3.41705C17.5511 3.49822 17.624 3.58521 17.6965 3.67802C17.8585 3.88513 17.9884 4.08314 18.0925 4.26367C18.0945 4.26804 18.0961 4.27205 18.0982 4.27641C17.6945 4.06494 17.3503 3.96412 17.1369 3.91243C16.4927 3.75737 14.9646 3.55208 9.45633 6.38242C9.32717 6.44867 9.26157 6.48288 9.21177 6.50909C9.1895 6.52074 9.17006 6.53056 9.14982 6.54112C9.12026 6.55641 9.08868 6.57315 9.04131 6.59754C6.93055 7.6793 3.08681 9.44244 1.55831 8.80947C1.55831 8.80947 -1.34484 7.93955 0.774011 4.76888C0.987799 4.41909 3.47916 0.508088 8.61049 0.0443729C11.8068 -0.244266 14.9614 0.901555 17.1195 3.0527Z" fill="url(#paint1_linear_1_533)"/>
<path d="M7.33022 12.2497C7.77411 12.2497 8.13395 11.7046 8.13395 11.0322C8.13395 10.3598 7.77411 9.8147 7.33022 9.8147C6.88633 9.8147 6.52649 10.3598 6.52649 11.0322C6.52649 11.7046 6.88633 12.2497 7.33022 12.2497Z" fill="#333333"/>
<path d="M15.3673 12.2497C15.8112 12.2497 16.1711 11.7046 16.1711 11.0322C16.1711 10.3598 15.8112 9.8147 15.3673 9.8147C14.9234 9.8147 14.5636 10.3598 14.5636 11.0322C14.5636 11.7046 14.9234 12.2497 15.3673 12.2497Z" fill="#333333"/>
<defs>
<filter id="filter0_f_1_533" x="2.23921" y="17.5163" width="17.5038" height="3.04417" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.380518" result="effect1_foregroundBlur_1_533"/>
</filter>
<pattern id="pattern0_1_533" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_533" transform="scale(0.0028169 0.00478469)"/>
</pattern>
<linearGradient id="paint0_linear_1_533" x1="34.2048" y1="15.5858" x2="-7.6797" y2="5.92225" gradientUnits="userSpaceOnUse">
<stop stop-color="#CECECE"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="#CECECE"/>
</linearGradient>
<linearGradient id="paint1_linear_1_533" x1="1.11409" y1="8.16289" x2="14.1442" y2="0.688881" gradientUnits="userSpaceOnUse">
<stop stop-color="#EC4242"/>
<stop offset="1" stop-color="#FF9393"/>
</linearGradient>
<image id="image0_1_533" width="355" height="209" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
}</svg>,
      <svg width="20" height="20">{/* SVG 6 */}</svg>,
      <svg width="20" height="20">{/* SVG 7 */}</svg>,
    ];

    return (
      <div key={idx} className="flex flex-col items-center gap-1 w-10">
        {/* Icon ON TOP of bar */}
        <div className="mb-1">
          {svgIcons[idx]}
        </div>
        
        {/* Bar */}
        <div
          className="w-[30px] rounded-lg transition-all duration-300"
          style={{
            height: heights[idx],
            background: colors[idx],
          }}
        ></div>
        
        {/* Day label */}
        <span className="text-xs text-gray-500 mt-1">{day}</span>
      </div>
    );
  })}
</div>

              {/* Warning */}
              <div className="mt-4 p-2  flex items-center gap-2 border-t-2 py-6">
                <span className="text-amber-600 text-lg">⚠️</span>
                <p className="text-xs text-slate-500">
                  Your mood this week suggests increased stress related to your
                  future.
                </p>

                
              </div>
              <div className=" rounded-xl ">
              <div className="flex flex-col items-center border-t-2 ">
                <p className="text-center w-fit border rounded-2xl px-3 py-1 bg-[#FDDBFF] text-[#EC4899] mt-10 text-sm font-semibold">
                  Based on mood log
                </p>
                <p className="text-center text-[#EC4899] mt-4 text-xl font-bold">
                  Recommended For You
                </p>
                {/* <p className=" max-w-[290px] mx-auto text-center mt-4">Discuss your current progress and board
                        preparation strategy.</p> */}

                <div className=" w-[250px] h-[200px] mx-auto flex flex-col rounded-lg justify-center items-center gap-y-2 mt-5">
                  <div>
                    <img
                      src="/images/cow.png"
                      alt="Description"
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold">Mukund Tyagi</p>
                  <p className="text-slate-500 text-sm font-semibold">
                    (Academic Planner & Counsellor)
                  </p>
                  <p className="text-sm font-semibold text-slate-500">
                    <span className="text-yellow-400 mr-2 text-sm font-bold">
                      ★ 4.5
                    </span>
                    {"(120+ sessions)"}
                  </p>
                </div>

                <div className="w-[267px] h-[40px] mx-auto border mt-5 mb-6 bg-[#EC4899] text-sm rounded-xl text-white text-center p-2 font-semibold">
                  {"Book a Threapy Session->"}
                </div>
              </div>
            </div>

            </div>

            
            {/* Skills Progress */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center gap-x-2">
                <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_592)">
<path d="M14.6673 7.9987H13.014C12.4152 7.99742 11.889 8.39548 11.7273 8.97203L10.1607 14.5454C10.1399 14.6165 10.0747 14.6654 10.0007 14.6654C9.92658 14.6654 9.86139 14.6165 9.84065 14.5454L6.16065 1.45203C6.13991 1.38092 6.07473 1.33203 6.00065 1.33203C5.92658 1.33203 5.86139 1.38092 5.84065 1.45203L4.27398 7.02536C4.11298 7.59954 3.5903 7.99699 2.99398 7.9987H1.33398" stroke="#1A9BA1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_592">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
                <h3 className="text-md font-semibold mb-3">Skills Progress</h3>
              </div>
              
              <div className="space-y-3">
                {/* Math Progress */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border bg-[#F4ECFB] p-2 rounded-lg">
                      <Calculator size={20} color="#8B5CF6" />
                    </div>
                    <span className="text-sm text-gray-700">
                      Math Problem Solving
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-[#229E91] rounded-full h-1.5"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      80%
                    </span>
                  </div>
                </div>

                {/* Science Progress */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border bg-[#FFF7ED] p-2 rounded-lg">
                      <FlaskConical size={18} color="#EA580C" />
                    </div>
                    <span className="text-sm text-gray-700">
                      Science Concepts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-[#229E91] rounded-full h-1.5"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      70%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildBasic;
