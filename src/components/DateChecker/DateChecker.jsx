import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Download, Moon, Star, Clock, Heart, Users, Sparkles, Crown } from 'lucide-react'

function DateChecker()  {
    const [selectedDate, setSelectedDate] = useState('')
  const [result, setResult] = useState(null)

  // Comprehensive zodiac data with rich content
  const zodiacData = {
    'Aries': {
      dates: 'March 21 - April 19',
      element: 'Fire 🔥',
      planet: 'Mars',
      symbol: '♈',
      traits: ['Bold', 'Energetic', 'Competitive', 'Independent'],
      weaknesses: ['Impatient', 'Impulsive', 'Short-tempered'],
      compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      celebrities: ['Lady Gaga', 'Robert Downey Jr.', 'Mariah Carey'],
      description: 'Aries are natural-born leaders with an infectious enthusiasm for life. They dive headfirst into challenges and inspire others with their courage.',
      love: 'Passionate and direct in love, Aries seeks excitement and adventure in relationships.',
      career: 'Excel in leadership roles, entrepreneurship, and competitive fields.',
      colors: ['Red', 'Orange', 'Yellow'],
      season: 'Spring energy brings new beginnings and fresh starts.'
    },
    'Taurus': {
      dates: 'April 20 - May 20',
      element: 'Earth 🌍',
      planet: 'Venus',
      symbol: '♉',
      traits: ['Reliable', 'Patient', 'Practical', 'Devoted'],
      weaknesses: ['Stubborn', 'Possessive', 'Materialistic'],
      compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
      celebrities: ['Adele', 'Queen Elizabeth II', 'Dwayne Johnson'],
      description: 'Taurus individuals are the steady foundation everyone relies on. They appreciate beauty, comfort, and the finer things in life.',
      love: 'Loyal and sensual partners who value stability and long-term commitment.',
      career: 'Thrive in finance, real estate, agriculture, and luxury goods.',
      colors: ['Green', 'Pink', 'Earth tones'],
      season: 'Late spring represents growth, stability, and abundance.'
    },
    'Gemini': {
      dates: 'May 21 - June 20',
      element: 'Air 💨',
      planet: 'Mercury',
      symbol: '♊',
      traits: ['Curious', 'Adaptable', 'Witty', 'Communicative'],
      weaknesses: ['Inconsistent', 'Indecisive', 'Superficial'],
      compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
      celebrities: ['Marilyn Monroe', 'Johnny Depp', 'Angelina Jolie'],
      description: 'Geminis are the social butterflies of the zodiac, always eager to learn, share, and connect with others through communication.',
      love: 'Need mental stimulation and variety in relationships, valuing friendship as much as romance.',
      career: 'Excel in journalism, teaching, sales, and social media.',
      colors: ['Yellow', 'Light blue', 'Silver'],
      season: 'Early summer brings communication, learning, and social connections.'
    },
    'Cancer': {
      dates: 'June 21 - July 22',
      element: 'Water 🌊',
      planet: 'Moon',
      symbol: '♋',
      traits: ['Nurturing', 'Intuitive', 'Protective', 'Emotional'],
      weaknesses: ['Moody', 'Overly sensitive', 'Clingy'],
      compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      celebrities: ['Tom Hanks', 'Princess Diana', 'Ariana Grande'],
      description: 'Cancers are the nurturers of the zodiac, creating safe spaces and deep emotional connections wherever they go.',
      love: 'Deeply caring partners who prioritize family and emotional security.',
      career: 'Natural in healthcare, childcare, real estate, and hospitality.',
      colors: ['Silver', 'Sea blue', 'White'],
      season: 'Summer solstice represents emotional depth and family bonds.'
    },
    'Leo': {
      dates: 'July 23 - August 22',
      element: 'Fire 🔥',
      planet: 'Sun',
      symbol: '♌',
      traits: ['Confident', 'Generous', 'Creative', 'Dramatic'],
      weaknesses: ['Arrogant', 'Stubborn', 'Self-centered'],
      compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      celebrities: ['Madonna', 'Barack Obama', 'Jennifer Lopez'],
      description: 'Leos are the kings and queens of the zodiac, naturally commanding attention and inspiring others with their warmth and creativity.',
      love: 'Romantic and generous lovers who enjoy grand gestures and being adored.',
      career: 'Shine in entertainment, leadership, fashion, and creative industries.',
      colors: ['Gold', 'Orange', 'Yellow'],
      season: 'Peak summer represents confidence, creativity, and self-expression.'
    },
    'Virgo': {
      dates: 'August 23 - September 22',
      element: 'Earth 🌍',
      planet: 'Mercury',
      symbol: '♍',
      traits: ['Analytical', 'Practical', 'Reliable', 'Modest'],
      weaknesses: ['Overly critical', 'Perfectionist', 'Worrying'],
      compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      celebrities: ['Beyoncé', 'Keanu Reeves', 'Zendaya'],
      description: 'Virgos are the perfectionists who make the world run smoothly, with an eye for detail and a desire to help others.',
      love: 'Thoughtful and devoted partners who show love through acts of service.',
      career: 'Excel in healthcare, research, editing, and organizational roles.',
      colors: ['Navy blue', 'Gray', 'Brown'],
      season: 'Late summer brings harvest time, organization, and preparation.'
    },
    'Libra': {
      dates: 'September 23 - October 22',
      element: 'Air 💨',
      planet: 'Venus',
      symbol: '♎',
      traits: ['Diplomatic', 'Charming', 'Balanced', 'Social'],
      weaknesses: ['Indecisive', 'People-pleasing', 'Avoids conflict'],
      compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
      celebrities: ['Kim Kardashian', 'Will Smith', 'Gwen Stefani'],
      description: 'Libras are the peacemakers and aesthetes, bringing harmony, beauty, and balance to everything they touch.',
      love: 'Romantic idealists who seek partnership and harmony in relationships.',
      career: 'Thrive in law, design, diplomacy, and relationship counseling.',
      colors: ['Pink', 'Light blue', 'Lavender'],
      season: 'Autumn equinox represents balance, partnership, and beauty.'
    },
    'Scorpio': {
      dates: 'October 23 - November 21',
      element: 'Water 🌊',
      planet: 'Pluto',
      symbol: '♏',
      traits: ['Intense', 'Passionate', 'Mysterious', 'Determined'],
      weaknesses: ['Jealous', 'Secretive', 'Resentful'],
      compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
      celebrities: ['Leonardo DiCaprio', 'Katy Perry', 'Ryan Gosling'],
      description: 'Scorpios are the transformers of the zodiac, diving deep into life\'s mysteries with intensity and passion.',
      love: 'All-or-nothing lovers who seek deep, transformative connections.',
      career: 'Excel in psychology, investigation, research, and healing arts.',
      colors: ['Deep red', 'Black', 'Maroon'],
      season: 'Deep autumn represents transformation, mystery, and renewal.'
    },
    'Sagittarius': {
      dates: 'November 22 - December 21',
      element: 'Fire 🔥',
      planet: 'Jupiter',
      symbol: '♐',
      traits: ['Adventurous', 'Optimistic', 'Philosophical', 'Free-spirited'],
      weaknesses: ['Impatient', 'Tactless', 'Restless'],
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      celebrities: ['Taylor Swift', 'Brad Pitt', 'Miley Cyrus'],
      description: 'Sagittarians are the adventurers and philosophers, always seeking new horizons and deeper meaning in life.',
      love: 'Need freedom and adventure in relationships, preferring partners who share their wanderlust.',
      career: 'Thrive in travel, education, publishing, and international business.',
      colors: ['Purple', 'Turquoise', 'Orange'],
      season: 'Late autumn brings wisdom, exploration, and philosophical growth.'
    },
    'Capricorn': {
      dates: 'December 22 - January 19',
      element: 'Earth 🌍',
      planet: 'Saturn',
      symbol: '♑',
      traits: ['Ambitious', 'Disciplined', 'Responsible', 'Patient'],
      weaknesses: ['Pessimistic', 'Stubborn', 'Unforgiving'],
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      celebrities: ['Michelle Obama', 'Denzel Washington', 'Kate Middleton'],
      description: 'Capricorns are the achievers who climb every mountain, building lasting success through discipline and determination.',
      love: 'Committed and traditional partners who value stability and long-term goals.',
      career: 'Natural leaders in business, politics, finance, and management.',
      colors: ['Black', 'Brown', 'Dark green'],
      season: 'Winter solstice represents achievement, structure, and perseverance.'
    },
    'Aquarius': {
      dates: 'January 20 - February 18',
      element: 'Air 💨',
      planet: 'Uranus',
      symbol: '♒',
      traits: ['Independent', 'Innovative', 'Humanitarian', 'Original'],
      weaknesses: ['Detached', 'Unpredictable', 'Stubborn'],
      compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
      celebrities: ['Oprah Winfrey', 'Ellen DeGeneres', 'Jennifer Aniston'],
      description: 'Aquarians are the visionaries and rebels, always thinking ahead and working to make the world a better place.',
      love: 'Value friendship and intellectual connection, needing space and independence.',
      career: 'Excel in technology, activism, science, and humanitarian work.',
      colors: ['Electric blue', 'Silver', 'Neon colors'],
      season: 'Deep winter represents innovation, rebellion, and humanitarian ideals.'
    },
    'Pisces': {
      dates: 'February 19 - March 20',
      element: 'Water 🌊',
      planet: 'Neptune',
      symbol: '♓',
      traits: ['Compassionate', 'Intuitive', 'Artistic', 'Gentle'],
      weaknesses: ['Overly emotional', 'Escapist', 'Unrealistic'],
      compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
      celebrities: ['Rihanna', 'Albert Einstein', 'Steve Jobs'],
      description: 'Pisceans are the dreamers and healers, swimming in the depths of emotion and imagination with infinite compassion.',
      love: 'Romantic and intuitive partners who love deeply and unconditionally.',
      career: 'Thrive in arts, healing, psychology, and spiritual fields.',
      colors: ['Sea green', 'Lavender', 'Silver'],
      season: 'Late winter represents dreams, intuition, and spiritual awakening.'
    }
  }

  // Get day of the week
  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[date.getDay()]
  }

  // Get zodiac sign
  const getZodiacSign = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    const zodiacSigns = [
      { sign: 'Capricorn', start: [12, 22], end: [1, 19] },
      { sign: 'Aquarius', start: [1, 20], end: [2, 18] },
      { sign: 'Pisces', start: [2, 19], end: [3, 20] },
      { sign: 'Aries', start: [3, 21], end: [4, 19] },
      { sign: 'Taurus', start: [4, 20], end: [5, 20] },
      { sign: 'Gemini', start: [5, 21], end: [6, 20] },
      { sign: 'Cancer', start: [6, 21], end: [7, 22] },
      { sign: 'Leo', start: [7, 23], end: [8, 22] },
      { sign: 'Virgo', start: [8, 23], end: [9, 22] },
      { sign: 'Libra', start: [9, 23], end: [10, 22] },
      { sign: 'Scorpio', start: [10, 23], end: [11, 21] },
      { sign: 'Sagittarius', start: [11, 22], end: [12, 21] }
    ]

    for (const zodiac of zodiacSigns) {
      const [startMonth, startDay] = zodiac.start
      const [endMonth, endDay] = zodiac.end
      
      if (startMonth === endMonth) {
        if (month === startMonth && day >= startDay && day <= endDay) {
          return zodiac.sign
        }
      } else {
        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
          return zodiac.sign
        }
      }
    }
    return 'Unknown'
  }

  // Simple moon phase calculation
  const getMoonPhase = (date) => {
    const phases = [
      'New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous',
      'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'
    ]
    
    const daysSinceNewMoon = Math.floor((date.getTime() - new Date('2000-01-06').getTime()) / (1000 * 60 * 60 * 24)) % 29.5
    const phaseIndex = Math.floor((daysSinceNewMoon / 29.5) * 8) % 8
    return phases[phaseIndex]
  }

  // Get fun trivia
  const getTrivia = (date) => {
    const triviaOptions = [
      `On this day in history, something amazing happened! 🌟`,
      `Fun fact: This date falls on week ${Math.ceil(date.getDate() / 7)} of the month! 📅`,
      `Did you know? This date is ${Math.abs(Math.floor((new Date() - date) / (1000 * 60 * 60 * 24)))} days from today! ⏰`,
      `This date has appeared ${Math.floor(date.getFullYear() / 4)} times in leap years! 🗓️`,
      `Interesting: This date is the ${date.getDate()}${getOrdinalSuffix(date.getDate())} day of the month! 📊`
    ]
    
    const index = (date.getDate() + date.getMonth()) % triviaOptions.length
    return triviaOptions[index]
  }

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  const handleDateChange = (e) => {
    const dateValue = e.target.value
    setSelectedDate(dateValue)
    
    if (dateValue) {
      const date = new Date(dateValue)
      const dayOfWeek = getDayOfWeek(date)
      const zodiacSign = getZodiacSign(date)
      const moonPhase = getMoonPhase(date)
      const trivia = getTrivia(date)
      
      setResult({
        date: date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        dayOfWeek,
        zodiacSign,
        moonPhase,
        trivia,
        zodiacData: zodiacData[zodiacSign]
      })
    } else {
      setResult(null)
    }
  }

  const downloadAsImage = async () => {
    const element = document.getElementById('result-card')
    if (!element) return

    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      canvas.width = 400
      canvas.height = 500
      
      // Background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Title
      ctx.fillStyle = '#1e293b'
      ctx.font = 'bold 24px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText('What Day Was It?', 200, 50)
      
      // Date
      ctx.fillStyle = '#475569'
      ctx.font = '16px system-ui'
      ctx.fillText(result.date, 200, 80)
      
      // Day of week
      ctx.fillStyle = '#0ea5e9'
      ctx.font = 'bold 32px system-ui'
      ctx.fillText(result.dayOfWeek, 200, 140)
      
      // Zodiac
      ctx.fillStyle = '#8b5cf6'
      ctx.font = 'bold 24px system-ui'
      ctx.fillText(`${result.zodiacData?.symbol} ${result.zodiacSign}`, 200, 200)
      
      // Moon phase
      ctx.fillStyle = '#6366f1'
      ctx.font = 'bold 20px system-ui'
      ctx.fillText(`🌙 ${result.moonPhase}`, 200, 250)
      
      // Download
      const link = document.createElement('a')
      link.download = `what-day-was-it-${selectedDate}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <main className="text-center space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
              What Day Was It? 🗓️
            </h1>
            <p className="text-base sm:text-lg text-slate-600 px-2">
              Discover the day, zodiac sign, and moon phase for any date
            </p>
          </div>

          {/* Date Picker */}
          <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-sky-600" />
                <label className="text-base sm:text-lg font-medium text-slate-700">
                  Choose a Date
                </label>
              </div>
                          <Input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="text-center text-sm sm:text-base lg:text-lg max-w-xs mx-auto min-h-[44px] px-2 sm:px-3"
            />
            </div>
          </Card>

          {/* Result Card */}
          {result && (
            <>
              <Card 
                id="result-card" 
                className="p-4 sm:p-6 lg:p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm space-y-4 sm:space-y-6"
              >
                <CardHeader className="pb-2 sm:pb-4">
                  <CardTitle className="text-xl sm:text-2xl text-slate-700">
                    {result.date}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Day of Week */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                      <span className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide">
                        Day of the Week
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-600">
                      {result.dayOfWeek}
                    </div>
                  </div>

                  {/* Zodiac Sign */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      <span className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide">
                        Zodiac Sign
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">
                      {result.zodiacData?.symbol} {result.zodiacSign}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      {result.zodiacData?.dates} • {result.zodiacData?.element}
                    </div>
                  </div>

                  {/* Moon Phase */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                      <span className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide">
                        Moon Phase
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600">
                      🌙 {result.moonPhase}
                    </div>
                  </div>

                  {/* Trivia */}
                  <div className="bg-emerald-50 rounded-lg p-3 sm:p-4 space-y-2">
                    <div className="text-xs sm:text-sm font-medium text-emerald-700 uppercase tracking-wide">
                      Fun Fact
                    </div>
                    <div className="text-sm sm:text-base text-emerald-800 font-medium">
                      {result.trivia}
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button 
                    onClick={downloadAsImage}
                    className="w-full min-h-[44px] bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg shadow-lg transition-all duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download as Image
                  </Button>
                </CardContent>
              </Card>

              {/* Zodiac Profile Section */}
              {result.zodiacData && (
                <div className="space-y-4 sm:space-y-6 text-left">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-slate-800 mb-4 sm:mb-6 lg:mb-8">
                    {result.zodiacData.symbol} {result.zodiacSign}: Complete Profile
                  </h2>

                  {/* Overview */}
                  <Card className="p-4 sm:p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-slate-700">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                        Zodiac Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-2">Basic Info</h4>
                          <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                            <p><strong>Dates:</strong> {result.zodiacData.dates}</p>
                            <p><strong>Element:</strong> {result.zodiacData.element}</p>
                            <p><strong>Ruling Planet:</strong> {result.zodiacData.planet}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-2">Season Meaning</h4>
                          <p className="text-xs sm:text-sm text-slate-600">{result.zodiacData.season}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2">Personality</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{result.zodiacData.description}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Traits */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Crown className="w-5 h-5 text-amber-600" />
                        Strengths & Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-3">✨ Top Strengths</h4>
                          <div className="space-y-2">
                            {result.zodiacData.traits.map((trait, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-slate-700">{trait}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 mb-3">⚠️ Areas to Watch</h4>
                          <div className="space-y-2">
                            {result.zodiacData.weaknesses.map((weakness, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span className="text-slate-700">{weakness}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Love & Compatibility */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Heart className="w-5 h-5 text-pink-600" />
                        Love & Relationships
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2">💕 Love Style</h4>
                        <p className="text-slate-600">{result.zodiacData.love}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3">🔥 Best Compatibility</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.zodiacData.compatibility.map((sign, index) => (
                            <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                              {sign}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Career & Life Path */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Users className="w-5 h-5 text-blue-600" />
                        Career & Life Path
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2">🎯 Career Strengths</h4>
                        <p className="text-slate-600">{result.zodiacData.career}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3">🌟 Famous {result.zodiacSign} Personalities</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.zodiacData.celebrities.map((celebrity, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                              {celebrity}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3">🎨 Lucky Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.zodiacData.colors.map((color, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 2025 Horoscope Insights */}
                  <Card className="p-6 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-purple-800">
                        <Star className="w-5 h-5 text-purple-600" />
                        {result.zodiacSign} in 2025: What to Expect
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white/60 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2">💼 Career Focus</h4>
                          <p className="text-sm text-slate-700">
                            This year emphasizes professional growth and new opportunities in your field.
                          </p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg">
                          <h4 className="font-semibold text-pink-700 mb-2">💖 Love & Romance</h4>
                          <p className="text-sm text-slate-700">
                            Relationships take center stage with potential for deep connections and growth.
                          </p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2">🌱 Personal Growth</h4>
                          <p className="text-sm text-slate-700">
                            A year of self-discovery and developing your natural {result.zodiacSign} strengths.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/60 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-700 mb-2">🔮 Key Advice for {result.zodiacSign}</h4>
                        <p className="text-slate-700">
                          Embrace your {result.zodiacData.element.toLowerCase()} energy this year. Focus on your natural {result.zodiacData.traits[0].toLowerCase()} 
                          nature while working on being less {result.zodiacData.weaknesses[0].toLowerCase()}. 
                          The stars align favorably for {result.zodiacSign} natives, especially in areas related to your ruling planet {result.zodiacData.planet}.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Monthly Horoscope Highlights */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                        Monthly Highlights for {result.zodiacSign}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">🌸 Spring (Mar-May)</h4>
                          <p className="text-sm text-slate-600">
                            New beginnings and fresh energy. Perfect time for {result.zodiacSign} to start new projects.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">☀️ Summer (Jun-Aug)</h4>
                          <p className="text-sm text-slate-600">
                            High energy period. Focus on relationships and creative expression.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">🍂 Autumn (Sep-Nov)</h4>
                          <p className="text-sm text-slate-600">
                            Harvest time for {result.zodiacSign}. Reap the benefits of earlier efforts.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">❄️ Winter (Dec-Feb)</h4>
                          <p className="text-sm text-slate-600">
                            Reflection and planning period. Great for inner work and goal setting.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">🎂 Birthday Season</h4>
                          <p className="text-sm text-slate-600">
                            {result.zodiacData.dates} - Your personal new year! Time for major life decisions.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-700">🌟 Lucky Periods</h4>
                          <p className="text-sm text-slate-600">
                            When the moon is in {result.zodiacSign} - extra intuition and energy!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Compatibility Deep Dive */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Heart className="w-5 h-5 text-rose-600" />
                        {result.zodiacSign} Compatibility Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">💚 Perfect Matches</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {result.zodiacData.compatibility.slice(0, 2).map((sign, index) => (
                            <div key={index} className="bg-green-50 p-3 rounded-lg border border-green-200">
                              <h5 className="font-medium text-green-800">{result.zodiacSign} + {sign}</h5>
                              <p className="text-sm text-green-700 mt-1">
                                Natural harmony and understanding. You complement each other beautifully.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-amber-700 mb-3">💛 Good Potential</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {result.zodiacData.compatibility.slice(2, 4).map((sign, index) => (
                            <div key={index} className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                              <h5 className="font-medium text-amber-800">{result.zodiacSign} + {sign}</h5>
                              <p className="text-sm text-amber-700 mt-1">
                                Great friendship potential that can grow into something deeper with effort.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">💡 Relationship Tips for {result.zodiacSign}</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Embrace your {result.zodiacData.traits[0].toLowerCase()} nature in relationships</li>
                          <li>• Work on being less {result.zodiacData.weaknesses[0].toLowerCase()} with your partner</li>
                          <li>• Your {result.zodiacData.element.toLowerCase()} energy brings balance to partnerships</li>
                          <li>• Communication is key - use your natural {result.zodiacSign} charm</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lifestyle & Wellness */}
                  <Card className="p-6 shadow-lg bg-white/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl text-slate-700">
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                        Wellness & Lifestyle for {result.zodiacSign}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-emerald-700 mb-3">🧘 Wellness Tips</h4>
                          <div className="space-y-2 text-sm text-slate-600">
                            <p>• {result.zodiacData.element === 'Fire 🔥' ? 'High-energy workouts and outdoor activities' : 
                                 result.zodiacData.element === 'Earth 🌍' ? 'Nature walks, gardening, and grounding exercises' :
                                 result.zodiacData.element === 'Air 💨' ? 'Yoga, meditation, and breathing exercises' :
                                 'Swimming, water activities, and emotional healing practices'}</p>
                            <p>• Surround yourself with {result.zodiacData.colors.join(', ').toLowerCase()} colors</p>
                            <p>• Focus on activities that enhance your natural {result.zodiacData.traits[0].toLowerCase()} abilities</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-3">🎯 Life Goals</h4>
                          <div className="space-y-2 text-sm text-slate-600">
                            <p>• Develop your {result.zodiacData.traits[1].toLowerCase()} side</p>
                            <p>• Work on overcoming {result.zodiacData.weaknesses[0].toLowerCase()} tendencies</p>
                            <p>• Embrace opportunities in your career field</p>
                            <p>• Build meaningful relationships with compatible signs</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!result && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h2 className="text-2xl font-semibold text-slate-700 mb-2">
                Pick a date to get started!
              </h2>
              <p className="text-slate-500 max-w-md mx-auto">
                Select any date above to discover what day of the week it was, 
                along with its zodiac sign and moon phase.
              </p>
            </div>
          )}

          {/* SEO Content Section */}
          <div className="mt-16 space-y-8 text-left">
            <Card className="p-8 shadow-lg bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-800 mb-4">
                  Understanding Zodiac Signs and Astrology
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-3">What Are Zodiac Signs?</h3>
                    <p className="text-slate-600 mb-4">
                      Zodiac signs are twelve 30-degree divisions of the celestial sphere, each associated with specific dates, 
                      personality traits, and characteristics. Based on the position of the sun at the time of your birth, 
                      your zodiac sign can offer insights into your personality, relationships, and life path.
                    </p>
                    <h4 className="font-semibold text-slate-700 mb-2">The Four Elements</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li><strong>Fire Signs:</strong> Aries, Leo, Sagittarius - Passionate and energetic</li>
                      <li><strong>Earth Signs:</strong> Taurus, Virgo, Capricorn - Practical and grounded</li>
                      <li><strong>Air Signs:</strong> Gemini, Libra, Aquarius - Intellectual and communicative</li>
                      <li><strong>Water Signs:</strong> Cancer, Scorpio, Pisces - Emotional and intuitive</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-3">How Moon Phases Affect Us</h3>
                    <p className="text-slate-600 mb-4">
                      Moon phases have been studied for their potential influence on human behavior and emotions. 
                      Many people find that tracking moon phases helps them understand their energy cycles and plan 
                      important activities accordingly.
                    </p>
                    <h4 className="font-semibold text-slate-700 mb-2">The Eight Moon Phases</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li><strong>New Moon:</strong> New beginnings and setting intentions</li>
                      <li><strong>Waxing Crescent:</strong> Taking action on goals</li>
                      <li><strong>First Quarter:</strong> Overcoming challenges</li>
                      <li><strong>Waxing Gibbous:</strong> Refining and adjusting plans</li>
                      <li><strong>Full Moon:</strong> Peak energy and manifestation</li>
                      <li><strong>Waning Gibbous:</strong> Gratitude and sharing</li>
                      <li><strong>Last Quarter:</strong> Release and forgiveness</li>
                      <li><strong>Waning Crescent:</strong> Rest and reflection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-800 mb-4">
                  Discover More About Your Birthday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 mb-6">
                  Every date holds unique cosmic significance. Use our tool to explore any date's astrological 
                  profile and discover the hidden meanings behind important moments in your life.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/60 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🎂</div>
                    <h4 className="font-semibold text-slate-700">Your Birthday</h4>
                    <p className="text-sm text-slate-600">Discover your complete astrological profile</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <div className="text-2xl mb-2">💍</div>
                    <h4 className="font-semibold text-slate-700">Special Dates</h4>
                    <p className="text-sm text-slate-600">Explore anniversaries and meaningful moments</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🌟</div>
                    <h4 className="font-semibold text-slate-700">Future Planning</h4>
                    <p className="text-sm text-slate-600">Choose auspicious dates for important events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )

}


export default DateChecker