import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Briefcase, Star, Users, Target, AlertTriangle, Download, Share2, Sparkles } from 'lucide-react'

function AstroCareerFinder() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSign, setSelectedSign] = useState('')
  const [careerProfile, setCareerProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Comprehensive career data for each zodiac sign
  const careerData = {
    'Aries': {
      personality: 'Natural-born leaders with boundless energy and competitive drive. You thrive on challenges and inspire others with your courage and determination.',
      idealCareers: [
        { title: 'Entrepreneur/Startup Founder', description: 'Your bold vision and risk-taking nature make you perfect for building businesses from the ground up.' },
        { title: 'Sales Executive', description: 'Your competitive spirit and persuasive communication skills drive exceptional results in sales.' },
        { title: 'Athletic Coach', description: 'Your energy and leadership abilities inspire teams to achieve their peak performance.' },
        { title: 'Emergency Services', description: 'Your quick thinking and courage shine in high-pressure, fast-paced environments.' },
        { title: 'Marketing Director', description: 'Your creative energy and ability to take initiative make you a dynamic marketing leader.' }
      ],
      workEnvironment: 'Fast-paced, competitive environments with clear goals and opportunities for advancement. You need autonomy and the ability to take charge.',
      strengths: ['Natural leadership', 'High energy and drive', 'Quick decision making'],
      challenges: 'Patience with slower-moving processes and working within rigid corporate structures. You may struggle with routine tasks.',
      famousPeople: [
        { name: 'Lady Gaga', career: 'Music & Entertainment' },
        { name: 'Robert Downey Jr.', career: 'Acting' },
        { name: 'Mariah Carey', career: 'Music' },
        { name: 'Vincent van Gogh', career: 'Art' },
        { name: 'Leonardo da Vinci', career: 'Science & Art' }
      ]
    },
    'Taurus': {
      personality: 'Reliable and practical professionals who build lasting success through patience and determination. You value stability and quality in everything you do.',
      idealCareers: [
        { title: 'Financial Advisor', description: 'Your practical nature and attention to detail help clients build secure financial futures.' },
        { title: 'Real Estate Agent', description: 'Your appreciation for quality and ability to build trust make you excellent at property transactions.' },
        { title: 'Chef/Restaurant Owner', description: 'Your love for quality and sensual appreciation creates exceptional culinary experiences.' },
        { title: 'Interior Designer', description: 'Your eye for beauty and practical approach create stunning, functional spaces.' },
        { title: 'Agriculture/Farming', description: 'Your connection to earth and patience make you excellent at cultivating and growing.' }
      ],
      workEnvironment: 'Stable, well-organized environments with clear processes and opportunities for long-term growth. You prefer traditional, established companies.',
      strengths: ['Reliability and consistency', 'Practical problem-solving', 'Strong work ethic'],
      challenges: 'Adapting to rapid changes and embracing new technologies. You may resist change when comfortable with current systems.',
      famousPeople: [
        { name: 'Adele', career: 'Music' },
        { name: 'Queen Elizabeth II', career: 'Leadership' },
        { name: 'Dwayne Johnson', career: 'Acting & Business' },
        { name: 'William Shakespeare', career: 'Literature' },
        { name: 'Audrey Hepburn', career: 'Acting & Philanthropy' }
      ]
    },
    'Gemini': {
      personality: 'Versatile communicators who excel at connecting ideas and people. Your curiosity and adaptability make you valuable in dynamic environments.',
      idealCareers: [
        { title: 'Journalist/Reporter', description: 'Your curiosity and communication skills help you uncover and share compelling stories.' },
        { title: 'Social Media Manager', description: 'Your ability to adapt to trends and connect with diverse audiences drives engagement.' },
        { title: 'Teacher/Educator', description: 'Your enthusiasm for learning and ability to explain complex topics make you an inspiring educator.' },
        { title: 'Public Relations', description: 'Your communication skills and adaptability help manage relationships and messaging.' },
        { title: 'Travel Agent/Tour Guide', description: 'Your curiosity about different cultures and ability to share information create memorable experiences.' }
      ],
      workEnvironment: 'Dynamic, social environments with variety and opportunities to learn. You thrive in open-plan offices with lots of interaction.',
      strengths: ['Excellent communication', 'Quick learning ability', 'Versatility and adaptability'],
      challenges: 'Maintaining focus on long-term projects and following through on commitments. You may get bored with routine tasks.',
      famousPeople: [
        { name: 'Marilyn Monroe', career: 'Acting' },
        { name: 'Johnny Depp', career: 'Acting' },
        { name: 'Angelina Jolie', career: 'Acting & Philanthropy' },
        { name: 'Bob Dylan', career: 'Music' },
        { name: 'Kanye West', career: 'Music & Fashion' }
      ]
    },
    'Cancer': {
      personality: 'Nurturing professionals who create supportive environments and build strong relationships. Your intuition and empathy make you excellent at caring for others.',
      idealCareers: [
        { title: 'Healthcare Professional', description: 'Your caring nature and attention to patient needs create healing environments.' },
        { title: 'Counselor/Therapist', description: 'Your emotional intelligence and nurturing approach help others work through challenges.' },
        { title: 'Real Estate Agent', description: 'Your ability to understand family needs and create emotional connections helps find perfect homes.' },
        { title: 'Childcare/Education', description: 'Your nurturing instincts and patience make you excellent with children and families.' },
        { title: 'Hospitality Manager', description: 'Your attention to detail and desire to care for others create exceptional guest experiences.' }
      ],
      workEnvironment: 'Supportive, family-like environments where you can build meaningful relationships. You prefer smaller teams and close-knit workplaces.',
      strengths: ['Emotional intelligence', 'Strong intuition', 'Nurturing and supportive nature'],
      challenges: 'Setting boundaries and not taking work stress personally. You may struggle with criticism and high-pressure environments.',
      famousPeople: [
        { name: 'Tom Hanks', career: 'Acting' },
        { name: 'Princess Diana', career: 'Royalty & Philanthropy' },
        { name: 'Ariana Grande', career: 'Music' },
        { name: 'Meryl Streep', career: 'Acting' },
        { name: 'Sylvester Stallone', career: 'Acting & Filmmaking' }
      ]
    },
    'Leo': {
      personality: 'Charismatic leaders who inspire and motivate others through creativity and confidence. Your natural presence and generosity make you excellent at building teams.',
      idealCareers: [
        { title: 'Entertainment Professional', description: 'Your natural charisma and creative energy make you perfect for the spotlight.' },
        { title: 'CEO/Executive Leader', description: 'Your confidence and ability to inspire others drive organizational success.' },
        { title: 'Fashion Designer', description: 'Your creative vision and love for luxury create stunning, trend-setting designs.' },
        { title: 'Event Planner', description: 'Your organizational skills and love for creating memorable experiences shine in event management.' },
        { title: 'Sales Manager', description: 'Your charisma and ability to build relationships drive exceptional sales performance.' }
      ],
      workEnvironment: 'High-profile, creative environments where you can lead and inspire others. You need recognition and opportunities to showcase your talents.',
      strengths: ['Natural leadership', 'Creative vision', 'Charisma and inspiration'],
      challenges: 'Sharing credit and working behind the scenes. You may struggle with criticism and not being the center of attention.',
      famousPeople: [
        { name: 'Madonna', career: 'Music & Entertainment' },
        { name: 'Barack Obama', career: 'Politics' },
        { name: 'Jennifer Lopez', career: 'Music & Acting' },
        { name: 'Mick Jagger', career: 'Music' },
        { name: 'Coco Chanel', career: 'Fashion Design' }
      ]
    },
    'Virgo': {
      personality: 'Analytical perfectionists who excel at improving systems and helping others. Your attention to detail and practical approach create efficient, high-quality results.',
      idealCareers: [
        { title: 'Healthcare Professional', description: 'Your attention to detail and desire to help others make you excellent in medical fields.' },
        { title: 'Data Analyst', description: 'Your analytical mind and attention to detail help uncover insights from complex information.' },
        { title: 'Editor/Writer', description: 'Your perfectionist nature and love for precision create polished, error-free content.' },
        { title: 'Quality Assurance', description: 'Your eye for detail and systematic approach ensure products meet high standards.' },
        { title: 'Research Scientist', description: 'Your analytical skills and patience make you excellent at conducting thorough research.' }
      ],
      workEnvironment: 'Organized, detail-oriented environments where you can improve processes and systems. You prefer clear expectations and structured workflows.',
      strengths: ['Attention to detail', 'Analytical thinking', 'Reliability and precision'],
      challenges: 'Delegating tasks and accepting that perfection isn\'t always possible. You may overwork and struggle with uncertainty.',
      famousPeople: [
        { name: 'Beyoncé', career: 'Music & Entertainment' },
        { name: 'Keanu Reeves', career: 'Acting' },
        { name: 'Zendaya', career: 'Acting & Music' },
        { name: 'Agatha Christie', career: 'Literature' },
        { name: 'Michael Jackson', career: 'Music' }
      ]
    },
    'Libra': {
      personality: 'Diplomatic professionals who excel at creating harmony and building partnerships. Your sense of justice and ability to see multiple perspectives make you excellent mediators.',
      idealCareers: [
        { title: 'Human Resources Manager', description: 'Your diplomatic nature and sense of fairness help create balanced workplace environments.' },
        { title: 'Lawyer/Mediator', description: 'Your sense of justice and ability to see multiple sides make you excellent at resolving conflicts.' },
        { title: 'Interior Designer', description: 'Your eye for beauty and balance creates harmonious, aesthetically pleasing spaces.' },
        { title: 'Public Relations', description: 'Your diplomatic skills and ability to build relationships manage public perception effectively.' },
        { title: 'Customer Success Manager', description: 'Your people skills and desire for harmony help maintain positive client relationships.' }
      ],
      workEnvironment: 'Collaborative, balanced environments where you can build relationships and create harmony. You prefer team-based work with clear communication.',
      strengths: ['Diplomatic communication', 'Sense of fairness', 'Ability to build partnerships'],
      challenges: 'Making difficult decisions and dealing with conflict. You may struggle with confrontation and making unpopular choices.',
      famousPeople: [
        { name: 'Kim Kardashian', career: 'Business & Entertainment' },
        { name: 'Will Smith', career: 'Acting & Music' },
        { name: 'Gwen Stefani', career: 'Music & Fashion' },
        { name: 'John Lennon', career: 'Music' },
        { name: 'Mahatma Gandhi', career: 'Leadership & Activism' }
      ]
    },
    'Scorpio': {
      personality: 'Intense professionals who excel at uncovering truth and driving transformation. Your determination and intuition help you solve complex problems and lead change.',
      idealCareers: [
        { title: 'Detective/Investigator', description: 'Your intuition and determination help uncover hidden truths and solve complex cases.' },
        { title: 'Psychologist/Therapist', description: 'Your emotional depth and ability to understand others help facilitate healing and growth.' },
        { title: 'Research Scientist', description: 'Your analytical mind and determination help make breakthrough discoveries.' },
        { title: 'Financial Analyst', description: 'Your ability to see patterns and your determination help make sound investment decisions.' },
        { title: 'Surgeon', description: 'Your precision, determination, and ability to handle pressure make you excellent in surgical fields.' }
      ],
      workEnvironment: 'Intense, focused environments where you can dive deep into complex problems. You prefer autonomy and opportunities to make meaningful impact.',
      strengths: ['Intense focus and determination', 'Strong intuition', 'Ability to transform situations'],
      challenges: 'Trusting others and sharing control. You may struggle with collaboration and can be overly secretive.',
      famousPeople: [
        { name: 'Bill Gates', career: 'Technology & Philanthropy' },
        { name: 'Julia Roberts', career: 'Acting' },
        { name: 'Ryan Gosling', career: 'Acting' },
        { name: 'Leonardo DiCaprio', career: 'Acting & Environmentalism' },
        { name: 'Marie Curie', career: 'Science' }
      ]
    },
    'Sagittarius': {
      personality: 'Adventurous professionals who inspire others through optimism and big-picture thinking. Your enthusiasm for learning and exploration drives innovation.',
      idealCareers: [
        { title: 'Travel Writer/Photographer', description: 'Your love for adventure and storytelling captures experiences from around the world.' },
        { title: 'Professor/Educator', description: 'Your enthusiasm for learning and big-picture thinking inspire students to explore new ideas.' },
        { title: 'Entrepreneur', description: 'Your optimism and willingness to take risks help you build successful ventures.' },
        { title: 'Marketing Director', description: 'Your creativity and ability to see the big picture drive innovative marketing campaigns.' },
        { title: 'International Business', description: 'Your love for travel and cultural exchange makes you excellent at global business relationships.' }
      ],
      workEnvironment: 'Dynamic, international environments with opportunities for travel and learning. You prefer freedom and variety over routine.',
      strengths: ['Optimism and enthusiasm', 'Big-picture thinking', 'Willingness to take risks'],
      challenges: 'Following through on details and maintaining focus on long-term projects. You may struggle with routine and commitment.',
      famousPeople: [
        { name: 'Taylor Swift', career: 'Music' },
        { name: 'Brad Pitt', career: 'Acting & Production' },
        { name: 'Jay-Z', career: 'Music & Business' },
        { name: 'Walt Disney', career: 'Entertainment' },
        { name: 'Frank Sinatra', career: 'Music' }
      ]
    },
    'Capricorn': {
      personality: 'Ambitious professionals who build lasting success through discipline and strategic thinking. Your practical approach and determination create solid foundations for growth.',
      idealCareers: [
        { title: 'CEO/Executive', description: 'Your strategic thinking and discipline help build successful, sustainable organizations.' },
        { title: 'Financial Advisor', description: 'Your practical approach and long-term thinking help clients build secure financial futures.' },
        { title: 'Architect', description: 'Your attention to detail and ability to create lasting structures make you excellent at designing buildings.' },
        { title: 'Project Manager', description: 'Your organizational skills and ability to meet deadlines ensure successful project completion.' },
        { title: 'Lawyer', description: 'Your analytical mind and respect for tradition make you excellent at interpreting and applying law.' }
      ],
      workEnvironment: 'Structured, professional environments with clear hierarchies and opportunities for advancement. You prefer established companies with strong values.',
      strengths: ['Discipline and determination', 'Strategic thinking', 'Reliability and responsibility'],
      challenges: 'Balancing work and personal life, and being more flexible with change. You may work too hard and struggle with work-life balance.',
      famousPeople: [
        { name: 'Bradley Cooper', career: 'Acting & Production' },
        { name: 'Dolly Parton', career: 'Music & Business' },
        { name: 'Michelle Obama', career: 'Leadership & Advocacy' },
        { name: 'Elvis Presley', career: 'Music' },
        { name: 'Isaac Newton', career: 'Science' }
      ]
    },
    'Aquarius': {
      personality: 'Innovative professionals who drive change through unique perspectives and humanitarian values. Your creativity and independence help you solve problems in unconventional ways.',
      idealCareers: [
        { title: 'Technology Innovator', description: 'Your innovative thinking and love for technology help create solutions for the future.' },
        { title: 'Social Worker', description: 'Your humanitarian values and desire to help others drive positive social change.' },
        { title: 'Environmental Scientist', description: 'Your concern for the planet and analytical mind help address environmental challenges.' },
        { title: 'Research Scientist', description: 'Your unique perspective and love for learning help make breakthrough discoveries.' },
        { title: 'Non-profit Director', description: 'Your humanitarian values and ability to think outside the box help create positive impact.' }
      ],
      workEnvironment: 'Progressive, innovative environments where you can work independently and contribute to meaningful causes. You prefer flexible, non-traditional workplaces.',
      strengths: ['Innovative thinking', 'Humanitarian values', 'Independent problem-solving'],
      challenges: 'Connecting emotionally with others and following traditional processes. You may seem detached and struggle with emotional workplace dynamics.',
      famousPeople: [
        { name: 'Oprah Winfrey', career: 'Media & Philanthropy' },
        { name: 'Cristiano Ronaldo', career: 'Sports' },
        { name: 'Ellen DeGeneres', career: 'Entertainment' },
        { name: 'Abraham Lincoln', career: 'Politics' },
        { name: 'Charles Darwin', career: 'Science' }
      ]
    },
    'Pisces': {
      personality: 'Compassionate professionals who excel at understanding others and creating meaningful experiences. Your intuition and creativity help you connect with people on deep levels.',
      idealCareers: [
        { title: 'Artist/Creative Professional', description: 'Your imagination and emotional depth create powerful, meaningful artistic expressions.' },
        { title: 'Counselor/Therapist', description: 'Your empathy and intuition help others heal and find emotional balance.' },
        { title: 'Nurse/Healthcare Worker', description: 'Your compassionate nature and desire to help others create healing environments.' },
        { title: 'Musician', description: 'Your emotional sensitivity and creativity help create music that touches people\'s souls.' },
        { title: 'Social Worker', description: 'Your empathy and desire to help others drive positive change in communities.' }
      ],
      workEnvironment: 'Supportive, creative environments where you can help others and express your creativity. You prefer meaningful work over high-paying but soulless jobs.',
      strengths: ['Empathy and compassion', 'Creative imagination', 'Intuitive understanding'],
      challenges: 'Setting boundaries and dealing with harsh realities. You may struggle with criticism and practical business aspects.',
      famousPeople: [
        { name: 'Rihanna', career: 'Music & Business' },
        { name: 'Justin Bieber', career: 'Music' },
        { name: 'Albert Einstein', career: 'Science' },
        { name: 'Steve Jobs', career: 'Technology' },
        { name: 'Elizabeth Taylor', career: 'Acting' }
      ]
    }
  }

  const getZodiacSign = (date) => {
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio'
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius'
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn'
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius'
    return 'Pisces'
  }

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value)
    setSelectedSign('')
    setCareerProfile(null)
  }

  const handleSignChange = (value) => {
    setSelectedSign(value)
    setSelectedDate('')
    setCareerProfile(null)
  }

  const generateCareerProfile = () => {
    setIsLoading(true)
    
    // Simulate loading for better UX
    setTimeout(() => {
      const sign = selectedSign || getZodiacSign(selectedDate)
      const profile = careerData[sign]
      
      if (profile) {
        setCareerProfile({
          sign,
          ...profile
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  const downloadProfile = () => {
    if (!careerProfile) return
    
    const content = `
ASTRO CAREER FINDER - ${careerProfile.sign.toUpperCase()}

PERSONALITY SUMMARY:
${careerProfile.personality}

IDEAL CAREERS:
${careerProfile.idealCareers.map((career, index) => 
  `${index + 1}. ${career.title}: ${career.description}`
).join('\n')}

WORK ENVIRONMENT:
${careerProfile.workEnvironment}

STRENGTHS:
${careerProfile.strengths.map((strength, index) => 
  `${index + 1}. ${strength}`
).join('\n')}

CHALLENGES:
${careerProfile.challenges}

FAMOUS PEOPLE WITH THIS SIGN:
${careerProfile.famousPeople.map((person, index) => 
  `${index + 1}. ${person.name} - ${person.career}`
).join('\n')}
    `.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${careerProfile.sign}-career-profile.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const shareProfile = () => {
    if (!careerProfile) return
    
    const text = `Discover your ideal career path with ${careerProfile.sign}! Check out my astro career profile ✨`
    
    if (navigator.share) {
      navigator.share({
        title: 'Astro Career Finder',
        text: text,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text)
      alert('Profile link copied to clipboard!')
    }
  }

  const canGenerate = selectedDate || selectedSign

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
          💼 Astro Career Finder
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover your ideal career path based on your zodiac sign. Get personalized career guidance, 
          work environment insights, and discover famous professionals who share your sign.
        </p>
      </div>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Find Your Career Path
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Enter Your Birth Date
              </label>
              <Input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full"
                placeholder="Select your birth date"
              />
            </div>

            {/* Sign Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Or Select Your Sign
              </label>
              <Select value={selectedSign} onValueChange={handleSignChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your zodiac sign" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(careerData).map((sign) => (
                    <SelectItem key={sign} value={sign}>
                      {sign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={generateCareerProfile}
            disabled={!canGenerate || isLoading}
            className="w-full md:w-auto"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Generating Profile...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Generate Career Profile
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Career Profile Results */}
      {careerProfile && (
        <div className="space-y-6">
          {/* Header with Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                {careerProfile.sign} Career Profile
              </h3>
              <p className="text-slate-600">
                Your personalized career guidance and insights
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={downloadProfile}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm" onClick={shareProfile}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Personality Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Personality Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                {careerProfile.personality}
              </p>
            </CardContent>
          </Card>

          {/* Ideal Careers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Top 5 Ideal Career Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {careerProfile.idealCareers.map((career, index) => (
                  <div key={index} className="border-l-4 border-sky-500 pl-4">
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {index + 1}. {career.title}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {career.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Work Environment & Strengths */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Ideal Work Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {careerProfile.workEnvironment}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Key Strengths at Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {careerProfile.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Career Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                {careerProfile.challenges}
              </p>
            </CardContent>
          </Card>

          {/* Famous People */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Famous {careerProfile.sign} Professionals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {careerProfile.famousPeople.map((person, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {person.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {person.career}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default AstroCareerFinder 