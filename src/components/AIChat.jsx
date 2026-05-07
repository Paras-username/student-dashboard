// import { useState } from 'react'
// import { Send } from 'lucide-react'

// const AIChat = () => {
//   const [input, setInput] = useState('')
//   const [messages, setMessages] = useState([])

//   const suggestions = [
//     "What are the future benefits of choosing PCM in 11th?",
//     "How to balance board exams and competitive prep?"
//   ]

//   const handleSend = () => {
//     if (!input.trim()) return
//     setMessages([...messages, { text: input, isUser: true }])
//     setInput('')
    
//     setTimeout(() => {
//       setMessages(prev => [...prev, { 
//         text: "That's a great question! Here's some helpful information about your query...", 
//         isUser: false 
//       }])
//     }, 500)
//   }

//   const handleSuggestion = (suggestion) => {
//     setInput(suggestion)
//     setTimeout(() => handleSend(), 100)
//   }

//   return (
//    <div className='px-6 pt-2'>
//      <div className="bg-white rounded-2xl shadow-sm p-6  h-[367px] " 
//     style={{
//           background: "linear-gradient(180deg, #FFFFFF, #FFEEFE)",
//           gap: "7px"
//         }}
//       >

//         <div className='flex gap-x-2 '>
//           <div className="w-8 h-8 border p-1 rounded-lg bg-[#FFEEFE] ">
//   <img 
//     src="/images/OPEN.png" 
//     alt="Cow"
//     className="w-full h-full object-cover rounded-lg"
//   />
// </div>
//           <h2 className="text-xl font-semibold mb-4">ConsulTOpen AI</h2>
//         </div>

        
      
      
//       {/* Messages area */}
//       {messages.length > 0 && (
//         <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
//           {messages.map((msg, idx) => (
//             <div key={idx} className={`p-3 rounded-lg ${msg.isUser ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-100 text-gray-800'} max-w-[80%] ${msg.isUser ? 'ml-auto' : ''}`}>
//               {msg.text}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Suggestion chips */}
//       <div className="flex justify-end gap-2  pt-[150px]">
//         {suggestions.map((suggestion, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleSuggestion(suggestion)}
//             className="px-4 py-3 border bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
//           >
//             {suggestion}
//           </button>
//         ))}
//       </div>

//       {/* Input area */}
//      <div className="relative pt-3">
//   <input
//   type="text"
//   value={input}
//   onChange={(e) => setInput(e.target.value)}
//   onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//   placeholder="Type your specific question here..."
//   className="w-full h-[75px] px-4 pb-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// />
//   <button 
//     onClick={handleSend} 
//     className="absolute mr-2 right-1 top-1/2 transform -translate-y-1/2 px-3 py-1.5 rounded-lg transition hover:opacity-90"
//     style={{
//       background: "linear-gradient(180deg, #1B9BA2, #F69E0A, #EC4899, #1B9BA2)",
//     }}
//   >
//     <Send size={18} color="white" />
//   </button>
// </div>
//     </div>
//    </div>
//   )
// }

// export default AIChat

import { useState } from 'react'
import { Send } from 'lucide-react'

const AIChat = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const suggestions = [
    "What are the future benefits of choosing PCM in 11th?",
    "How to balance board exams and competitive prep?"
  ]

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, isUser: true }])
    setInput('')
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "That's a great question! Here's some helpful information about your query...", 
        isUser: false 
      }])
    }, 500)
  }

  const handleSuggestion = (suggestion) => {
    setInput(suggestion)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <div className='px-4 sm:px-6 pt-2'>
      <div 
        className="bg-white border rounded-2xl shadow-sm p-4 sm:p-6"
        style={{
          background: "linear-gradient(180deg, #FFFFFF, #FFEEFE)",
          gap: "7px"
        }}
      >
        <div className='flex gap-x-2 items-center'>
          <div className="w-8 h-8 border p-1 rounded-lg bg-[#FFEEFE]">
            <img 
              src="/images/OPEN.png" 
              alt="Logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold">ConsulTOpen AI</h2>
        </div>
      
        {messages.length > 0 && (
          <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-lg ${msg.isUser ? 'bg-[#1A9BA1] text-white ml-auto' : 'bg-gray-100 text-gray-800'} max-w-[80%] ${msg.isUser ? 'ml-auto' : ''}`}>
                {msg.text}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-end gap-2 mt-4">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestion(suggestion)}
              className="px-3 sm:px-4 py-2 sm:py-3 border bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <div className="relative pt-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your specific question here..."
            className="w-full h-[60px] sm:h-[75px] px-4 pb-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button 
            onClick={handleSend} 
            className="absolute mr-2 right-1 top-1/2 transform -translate-y-1/2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition hover:opacity-90"
            style={{
              background: "linear-gradient(180deg, #1B9BA2, #F69E0A, #EC4899, #1B9BA2)",
            }}
          >
            <Send size={16} color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIChat