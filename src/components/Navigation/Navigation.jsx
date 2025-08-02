// Navigation.jsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Calendar, Heart, Star, BookOpen, Briefcase } from 'lucide-react'

function Navigation({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'day-checker', label: 'What Day Was It?', icon: Calendar },
    { id: 'compatibility', label: 'Compatibility', icon: Heart },
    { id: 'CelebritiesZodiacs', label: 'Celebrities', icon: Star },
    { id: 'ZodiacBlog', label: 'Zodiac Blog', icon: BookOpen },
    { id: 'career-finder', label: 'Career Finder', icon: Briefcase }
  ]
  
  const handleNavClick = (tabId) => {
    setActiveTab(tabId)
    setIsMenuOpen(false) // Close menu on mobile after selection
  }
  
  return (
    <nav className="mb-8">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-center mb-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="min-h-[44px] px-6 flex items-center gap-2"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="text-base font-medium">Menu</span>
        </Button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mb-6 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full min-h-[44px] px-6 py-3 text-left flex items-center gap-3 transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-sky-50 text-sky-700 border-l-4 border-sky-500'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span className="text-base font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center gap-4">
        {navItems.map((item) => {
          const IconComponent = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "outline"}
              onClick={() => handleNavClick(item.id)}
              className="min-h-[44px] px-6 py-3 flex items-center gap-3 text-base font-medium"
            >
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              {item.label}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation