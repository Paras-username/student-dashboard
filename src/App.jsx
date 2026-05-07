import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import AIChat from './components/AIChat'
import Focus from './components/Focus'
import CareerRoadmap from './components/CareerRoadmap'
import BuildBasic from './components/BuildBasic'
// import MindGym from './components/MindGym'
import Session from './pages/Session'
// import Session from './pages/Session'

// Main page content (what you already have)
const MainContent = () => {
  return (
    <>
      <div className='mb-10'>
        <Header/>
      <AIChat/>
      <Focus/>
      <CareerRoadmap/>
      <BuildBasic/>
      {/* <MindGym/> */}
      </div>
    </>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/career-roadmap" element={<Session/>} />
      </Routes>
    </Layout>
  )
}

export default App