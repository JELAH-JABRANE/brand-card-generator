// App.jsx becomes super clean:
import Navigation from './components/Navigation/Navigation'
import DateChecker from './components/DateChecker/DateChecker'
import CompatibilityChecker from './components/CompatibilityChecker/CompatibilityChecker'
import CelebrityZodiacDatabase from './components/CelebrityZodiacDatabase/CelebrityZodiacDatabase'
import AstroCareerFinder from './components/AstroCareerFinder/AstroCareerFinder'

import { useState } from 'react'
import ZodiacBlog from './components/ZodiacBlog/ZodiacBlog'

function App() {
  const [activeTab, setActiveTab] = useState('day-checker')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-4xl mx-auto pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">
            ✨ Cosmic Tools ✨
          </h1>
          <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto px-2">
            Discover your cosmic connections with our comprehensive astrological tools
          </p>
        </header>
        
        {/* Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <main className="min-h-[60vh]">
          {activeTab === 'day-checker' && <DateChecker />}
          {activeTab === 'compatibility' && <CompatibilityChecker />}
          {activeTab === 'CelebritiesZodiacs' && <CelebrityZodiacDatabase />}
          {activeTab === 'ZodiacBlog' && <ZodiacBlog />}
          {activeTab === 'career-finder' && <AstroCareerFinder />}
        </main>
      </div>
      
      {/* Footer */}
    </div>
  )
}

export default App