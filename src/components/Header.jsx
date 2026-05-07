const Header = () => {
  return (
    <div className="mb-5 px-6">
      {/* Good Morning Title */}
      <div className="text-[#1A9BA1] text-3xl font-extrabold p-6">
        <h1>Good Morning, Alex!👋</h1>
      </div>
      
      {/* Styled Box with Gradient and Border Left */}
      <div 
        className="py-4 px-5 rounded-md border-l-4 border-l-[#1A9BA1]"
        style={{
          background: "linear-gradient(135deg, #E6F7F5, #F9FFF9, #EDFBE9)",
          gap: "7px"
        }}
      >
        <p className="text-gray-700 italic">
          "The future belongs to those who believe in the beauty of their dreams."
        </p>
        <p className="text-gray-500 text-sm mt-2">— Eleanor Roosevelt</p>
      </div>
    </div>
  )
}

export default Header