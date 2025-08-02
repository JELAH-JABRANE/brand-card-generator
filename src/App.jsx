// App.jsx becomes super clean:
import Navigation from './components/Navigation/Navigation'
import DateChecker from './components/DateChecker/DateChecker'
import CompatibilityChecker from './components/CompatibilityChecker/CompatibilityChecker'
import CelebrityZodiacDatabase from './components/CelebrityZodiacDatabase/CelebrityZodiacDatabase'

import { useState } from 'react'
import ZodiacBlog from './components/ZodiacBlog/ZodiacBlog'

function App() {
  const [activeTab, setActiveTab] = useState('day-checker')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-4xl mx-auto pt-8 p-4">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">
          ✨ Cosmic Tools ✨
        </h1>
        
        {/* Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Components */}
        {activeTab === 'day-checker' && <DateChecker />}
        {activeTab === 'compatibility' && <CompatibilityChecker />}
        {activeTab === 'CelebritiesZodiacs' && <CelebrityZodiacDatabase />}
        {activeTab === 'ZodiacBlog' && <ZodiacBlog />}

        
      </div>
    </div>
  )
}

export default App