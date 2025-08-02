// Navigation.jsx
import { Button } from '@/components/ui/button'

function Navigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'day-checker', label: 'What Day Was It?', icon: '📅' },
    { id: 'compatibility', label: 'Compatibility', icon: '💕' },
    { id: 'CelebritiesZodiacs', label: 'Celebrities signs', icon: '💕' }
  ]
  
  return (
    <div className="flex justify-center gap-4 mb-8">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={activeTab === item.id ? "default" : "outline"}
          onClick={() => setActiveTab(item.id)}
          className="flex items-center gap-2"
        >
          <span>{item.icon}</span>
          {item.label}
        </Button>
      ))}
    </div>
  )
}

export default Navigation