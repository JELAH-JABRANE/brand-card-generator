import React, { useState, useMemo, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Star, Crown, TrendingUp, Calendar, Award, Users, Sparkles, Filter, Loader2, User } from 'lucide-react'

// TMDB API Configuration
const TMDB_API_KEY = '6994fb7b27b71c71396146bfdc513d67'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'

function CelebrityZodiacDatabase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSign, setSelectedSign] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  // State for TMDB image fetching
  const [celebrityImages, setCelebrityImages] = useState({})
  const [loadingImages, setLoadingImages] = useState({})
  const [imageErrors, setImageErrors] = useState({})

  // Massive celebrity database organized by zodiac signs
  const celebrityDatabase = {
    'Aries': [
      { name: 'Lady Gaga', birthday: 'March 28, 1986', category: 'Music', image: '🎤', description: 'Pop superstar known for "Bad Romance" and "Shallow"' },
      { name: 'Robert Downey Jr.', birthday: 'April 4, 1965', category: 'Movies', image: '🎬', description: 'Iron Man in Marvel Cinematic Universe' },
      { name: 'Mariah Carey', birthday: 'March 27, 1969', category: 'Music', image: '🎵', description: 'Queen of Christmas and 5-octave voice' },
      { name: 'Emma Watson', birthday: 'April 15, 1990', category: 'Movies', image: '🎭', description: 'Hermione Granger in Harry Potter series' },
      { name: 'Leonardo da Vinci', birthday: 'April 15, 1452', category: 'Historical', image: '🎨', description: 'Renaissance genius and artist' },
      { name: 'Vincent van Gogh', birthday: 'March 30, 1853', category: 'Art', image: '🖼️', description: 'Post-impressionist painter' },
      { name: 'Elton John', birthday: 'March 25, 1947', category: 'Music', image: '🎹', description: 'Rocket Man and music legend' },
      { name: 'Reese Witherspoon', birthday: 'March 22, 1976', category: 'Movies', image: '🌟', description: 'Legally Blonde star and producer' },
      { name: 'Pharrell Williams', birthday: 'April 5, 1973', category: 'Music', image: '🎧', description: 'Happy hitmaker and producer' },
      { name: 'Sarah Jessica Parker', birthday: 'March 25, 1965', category: 'TV', image: '👠', description: 'Carrie Bradshaw in Sex and the City' }
    ],
    'Taurus': [
      { name: 'Adele', birthday: 'May 5, 1988', category: 'Music', image: '🎤', description: 'Grammy-winning powerhouse vocalist' },
      { name: 'Dwayne Johnson', birthday: 'May 2, 1972', category: 'Movies', image: '💪', description: 'The Rock - actor and former wrestler' },
      { name: 'Queen Elizabeth II', birthday: 'April 21, 1926', category: 'Royalty', image: '👑', description: 'Longest-reigning British monarch' },
      { name: 'George Clooney', birthday: 'May 6, 1961', category: 'Movies', image: '🎬', description: 'Ocean\'s Eleven star and director' },
      { name: 'David Beckham', birthday: 'May 2, 1975', category: 'Sports', image: '⚽', description: 'Football legend and style icon' },
      { name: 'Barbra Streisand', birthday: 'April 24, 1942', category: 'Music', image: '🎭', description: 'EGOT winner and Broadway legend' },
      { name: 'Gigi Hadid', birthday: 'April 23, 1995', category: 'Fashion', image: '👗', description: 'Supermodel and fashion icon' },
      { name: 'Channing Tatum', birthday: 'April 26, 1980', category: 'Movies', image: '🕺', description: 'Step Up and Magic Mike star' },
      { name: 'Penélope Cruz', birthday: 'April 28, 1974', category: 'Movies', image: '🌹', description: 'Spanish actress and Oscar winner' },
      { name: 'John Cena', birthday: 'April 23, 1977', category: 'Sports', image: '🏆', description: 'WWE superstar and actor' }
    ],
    'Gemini': [
      { name: 'Marilyn Monroe', birthday: 'June 1, 1926', category: 'Movies', image: '💋', description: 'Hollywood icon and blonde bombshell' },
      { name: 'Johnny Depp', birthday: 'June 9, 1963', category: 'Movies', image: '🏴‍☠️', description: 'Pirates of the Caribbean captain' },
      { name: 'Angelina Jolie', birthday: 'June 4, 1975', category: 'Movies', image: '🎬', description: 'Academy Award winner and humanitarian' },
      { name: 'Kanye West', birthday: 'June 8, 1977', category: 'Music', image: '🎤', description: 'Controversial rapper and producer' },
      { name: 'Donald Trump', birthday: 'June 14, 1946', category: 'Politics', image: '🇺🇸', description: '45th President of the United States' },
      { name: 'Natalie Portman', birthday: 'June 9, 1981', category: 'Movies', image: '🌟', description: 'Black Swan Oscar winner' },
      { name: 'Paul McCartney', birthday: 'June 18, 1942', category: 'Music', image: '🎸', description: 'Beatles legend and music icon' },
      { name: 'Nicole Kidman', birthday: 'June 20, 1967', category: 'Movies', image: '✨', description: 'Australian actress and producer' },
      { name: 'Tupac Shakur', birthday: 'June 16, 1971', category: 'Music', image: '🎵', description: 'Legendary rapper and poet' },
      { name: 'Venus Williams', birthday: 'June 17, 1980', category: 'Sports', image: '🎾', description: 'Tennis champion and entrepreneur' }
    ],
    'Cancer': [
      { name: 'Tom Hanks', birthday: 'July 9, 1956', category: 'Movies', image: '🎬', description: 'Forrest Gump and beloved actor' },
      { name: 'Ariana Grande', birthday: 'June 26, 1993', category: 'Music', image: '🎤', description: 'Pop princess with powerful vocals' },
      { name: 'Princess Diana', birthday: 'July 1, 1961', category: 'Royalty', image: '👑', description: 'People\'s Princess and humanitarian' },
      { name: 'Robin Williams', birthday: 'July 11, 1951', category: 'Comedy', image: '😂', description: 'Beloved comedian and actor' },
      { name: 'Selena Gomez', birthday: 'July 22, 1992', category: 'Music', image: '🌟', description: 'Singer, actress, and mental health advocate' },
      { name: 'Kevin Hart', birthday: 'July 6, 1979', category: 'Comedy', image: '🎭', description: 'Stand-up comedian and actor' },
      { name: 'Meryl Streep', birthday: 'June 22, 1949', category: 'Movies', image: '🏆', description: 'Most nominated actress in Oscar history' },
      { name: 'Elon Musk', birthday: 'June 28, 1971', category: 'Business', image: '🚀', description: 'Tesla and SpaceX CEO' },
      { name: 'Post Malone', birthday: 'July 4, 1995', category: 'Music', image: '🎵', description: 'Hip-hop artist and rockstar' },
      { name: 'Malala Yousafzai', birthday: 'July 12, 1997', category: 'Activism', image: '📚', description: 'Nobel Peace Prize winner' }
    ],
    'Leo': [
      { name: 'Barack Obama', birthday: 'August 4, 1961', category: 'Politics', image: '🇺🇸', description: '44th President of the United States' },
      { name: 'Madonna', birthday: 'August 16, 1958', category: 'Music', image: '👑', description: 'Queen of Pop and cultural icon' },
      { name: 'Jennifer Lopez', birthday: 'July 24, 1969', category: 'Music', image: '💃', description: 'J.Lo - singer, actress, and businesswoman' },
      { name: 'Daniel Radcliffe', birthday: 'July 23, 1989', category: 'Movies', image: '⚡', description: 'Harry Potter star' },
      { name: 'Chris Hemsworth', birthday: 'August 11, 1983', category: 'Movies', image: '🔨', description: 'Thor in Marvel Cinematic Universe' },
      { name: 'Meghan Markle', birthday: 'August 4, 1981', category: 'Royalty', image: '👸', description: 'Duchess of Sussex and actress' },
      { name: 'Arnold Schwarzenegger', birthday: 'July 30, 1947', category: 'Movies', image: '💪', description: 'Terminator and former California Governor' },
      { name: 'Sandra Bullock', birthday: 'July 26, 1964', category: 'Movies', image: '🌟', description: 'Speed and Gravity star' },
      { name: 'Mila Kunis', birthday: 'August 14, 1983', category: 'Movies', image: '✨', description: 'That 70s Show and Black Swan actress' },
      { name: 'Andy Warhol', birthday: 'August 6, 1928', category: 'Art', image: '🎨', description: 'Pop art pioneer and cultural icon' }
    ],
    'Virgo': [
      { name: 'Beyoncé', birthday: 'September 4, 1981', category: 'Music', image: '👑', description: 'Queen B and global superstar' },
      { name: 'Keanu Reeves', birthday: 'September 2, 1964', category: 'Movies', image: '🕴️', description: 'Matrix and John Wick star' },
      { name: 'Zendaya', birthday: 'September 1, 1996', category: 'Movies', image: '🌟', description: 'Spider-Man and Euphoria star' },
      { name: 'Michael Jackson', birthday: 'August 29, 1958', category: 'Music', image: '🕺', description: 'King of Pop and music legend' },
      { name: 'Adam Sandler', birthday: 'September 9, 1966', category: 'Comedy', image: '😂', description: 'SNL alum and comedy star' },
      { name: 'Amy Poehler', birthday: 'September 16, 1971', category: 'Comedy', image: '🎭', description: 'Parks and Recreation star' },
      { name: 'Pink', birthday: 'September 8, 1979', category: 'Music', image: '🎤', description: 'Pop-rock singer and performer' },
      { name: 'Mother Teresa', birthday: 'August 26, 1910', category: 'Historical', image: '🕊️', description: 'Nobel Peace Prize winner and saint' },
      { name: 'Warren Buffett', birthday: 'August 30, 1930', category: 'Business', image: '💰', description: 'Oracle of Omaha investor' },
      { name: 'Salma Hayek', birthday: 'September 2, 1966', category: 'Movies', image: '🌹', description: 'Mexican-American actress and producer' }
    ],
    'Libra': [
      { name: 'Kim Kardashian', birthday: 'October 21, 1980', category: 'Reality TV', image: '📱', description: 'Reality star and business mogul' },
      { name: 'Will Smith', birthday: 'September 25, 1968', category: 'Movies', image: '🎬', description: 'Fresh Prince and blockbuster star' },
      { name: 'Gwen Stefani', birthday: 'October 3, 1969', category: 'Music', image: '🎤', description: 'No Doubt frontwoman and solo artist' },
      { name: 'Hugh Jackman', birthday: 'October 12, 1968', category: 'Movies', image: '🎭', description: 'Wolverine and Greatest Showman star' },
      { name: 'Kate Winslet', birthday: 'October 5, 1975', category: 'Movies', image: '🚢', description: 'Titanic and Oscar-winning actress' },
      { name: 'Bruno Mars', birthday: 'October 8, 1985', category: 'Music', image: '🕺', description: 'Uptown Funk and 24K Magic singer' },
      { name: 'John Lennon', birthday: 'October 9, 1940', category: 'Music', image: '🎸', description: 'Beatles legend and peace activist' },
      { name: 'Kamala Harris', birthday: 'October 20, 1964', category: 'Politics', image: '🇺🇸', description: 'Vice President of the United States' },
      { name: 'Matt Damon', birthday: 'October 8, 1970', category: 'Movies', image: '🎬', description: 'Good Will Hunting and Bourne star' },
      { name: 'Gwyneth Paltrow', birthday: 'September 27, 1972', category: 'Movies', image: '✨', description: 'Oscar winner and Goop founder' }
    ],
    'Scorpio': [
      { name: 'Leonardo DiCaprio', birthday: 'November 11, 1974', category: 'Movies', image: '🎬', description: 'Titanic and Wolf of Wall Street star' },
      { name: 'Katy Perry', birthday: 'October 25, 1984', category: 'Music', image: '🎤', description: 'Roar and Firework pop sensation' },
      { name: 'Ryan Gosling', birthday: 'November 12, 1980', category: 'Movies', image: '🌟', description: 'La La Land and Drive star' },
      { name: 'Emma Stone', birthday: 'November 6, 1988', category: 'Movies', image: '🎭', description: 'Easy A and La La Land Oscar winner' },
      { name: 'Pablo Picasso', birthday: 'October 25, 1881', category: 'Art', image: '🎨', description: 'Cubism pioneer and art revolutionary' },
      { name: 'Hillary Clinton', birthday: 'October 26, 1947', category: 'Politics', image: '🇺🇸', description: 'Former Secretary of State and First Lady' },
      { name: 'Matthew McConaughey', birthday: 'November 4, 1969', category: 'Movies', image: '🤠', description: 'Dallas Buyers Club Oscar winner' },
      { name: 'Scarlett Johansson', birthday: 'November 22, 1984', category: 'Movies', image: '🕷️', description: 'Black Widow and Lost in Translation star' },
      { name: 'Bill Gates', birthday: 'October 28, 1955', category: 'Business', image: '💻', description: 'Microsoft founder and philanthropist' },
      { name: 'Julia Roberts', birthday: 'October 28, 1967', category: 'Movies', image: '😊', description: 'Pretty Woman and Eat Pray Love star' }
    ],
    'Sagittarius': [
      { name: 'Taylor Swift', birthday: 'December 13, 1989', category: 'Music', image: '🎤', description: 'Pop country superstar and songwriter' },
      { name: 'Brad Pitt', birthday: 'December 18, 1963', category: 'Movies', image: '🎬', description: 'Fight Club and Ocean\'s Eleven star' },
      { name: 'Miley Cyrus', birthday: 'November 23, 1992', category: 'Music', image: '🎵', description: 'Hannah Montana turned pop rebel' },
      { name: 'Jay-Z', birthday: 'December 4, 1969', category: 'Music', image: '🎤', description: 'Hip-hop mogul and business empire builder' },
      { name: 'Samuel L. Jackson', birthday: 'December 21, 1948', category: 'Movies', image: '🎬', description: 'Pulp Fiction and Marvel universe star' },
      { name: 'Britney Spears', birthday: 'December 2, 1981', category: 'Music', image: '👸', description: 'Pop princess and cultural icon' },
      { name: 'Walt Disney', birthday: 'December 5, 1901', category: 'Business', image: '🏰', description: 'Animation pioneer and theme park creator' },
      { name: 'Nicki Minaj', birthday: 'December 8, 1982', category: 'Music', image: '💅', description: 'Queen of rap and pop culture icon' },
      { name: 'Jim Morrison', birthday: 'December 8, 1943', category: 'Music', image: '🎸', description: 'The Doors frontman and rock legend' },
      { name: 'Steven Spielberg', birthday: 'December 18, 1946', category: 'Movies', image: '🎥', description: 'Jaws and E.T. legendary director' }
    ],
    'Capricorn': [
      { name: 'Michelle Obama', birthday: 'January 17, 1964', category: 'Politics', image: '👑', description: 'Former First Lady and bestselling author' },
      { name: 'Denzel Washington', birthday: 'December 28, 1954', category: 'Movies', image: '🎬', description: 'Training Day Oscar winner' },
      { name: 'Kate Middleton', birthday: 'January 9, 1982', category: 'Royalty', image: '👸', description: 'Princess of Wales and style icon' },
      { name: 'Martin Luther King Jr.', birthday: 'January 15, 1929', category: 'Historical', image: '✊', description: 'Civil rights leader and Nobel laureate' },
      { name: 'Dolly Parton', birthday: 'January 19, 1946', category: 'Music', image: '🎤', description: 'Country legend and philanthropist' },
      { name: 'LeBron James', birthday: 'December 30, 1984', category: 'Sports', image: '🏀', description: 'NBA legend and social activist' },
      { name: 'Stephen Hawking', birthday: 'January 8, 1942', category: 'Science', image: '🌌', description: 'Theoretical physicist and cosmologist' },
      { name: 'Betty White', birthday: 'January 17, 1922', category: 'TV', image: '💫', description: 'Golden Girls legend and comedy icon' },
      { name: 'Muhammad Ali', birthday: 'January 17, 1942', category: 'Sports', image: '🥊', description: 'Greatest boxer and social activist' },
      { name: 'Timothée Chalamet', birthday: 'December 27, 1995', category: 'Movies', image: '🎭', description: 'Call Me By Your Name and Dune star' }
    ],
    'Aquarius': [
      { name: 'Oprah Winfrey', birthday: 'January 29, 1954', category: 'TV', image: '👑', description: 'Media mogul and talk show queen' },
      { name: 'Ellen DeGeneres', birthday: 'January 26, 1958', category: 'TV', image: '😄', description: 'Talk show host and comedian' },
      { name: 'Jennifer Aniston', birthday: 'February 11, 1969', category: 'TV', image: '☕', description: 'Friends Rachel and rom-com queen' },
      { name: 'The Weeknd', birthday: 'February 16, 1990', category: 'Music', image: '🎵', description: 'Blinding Lights R&B superstar' },
      { name: 'Bob Marley', birthday: 'February 6, 1945', category: 'Music', image: '🎸', description: 'Reggae legend and peace messenger' },
      { name: 'Abraham Lincoln', birthday: 'February 12, 1809', category: 'Historical', image: '🎩', description: '16th President and Great Emancipator' },
      { name: 'Cristiano Ronaldo', birthday: 'February 5, 1985', category: 'Sports', image: '⚽', description: 'Football GOAT and global icon' },
      { name: 'Shakira', birthday: 'February 2, 1977', category: 'Music', image: '💃', description: 'Hips Don\'t Lie Colombian superstar' },
      { name: 'Paris Hilton', birthday: 'February 17, 1981', category: 'Reality TV', image: '💎', description: 'Socialite and reality TV pioneer' },
      { name: 'Alicia Keys', birthday: 'January 25, 1981', category: 'Music', image: '🎹', description: 'Fallin\' R&B singer-songwriter' }
    ],
    'Pisces': [
      { name: 'Rihanna', birthday: 'February 20, 1988', category: 'Music', image: '👑', description: 'Umbrella singer and Fenty mogul' },
      { name: 'Albert Einstein', birthday: 'March 14, 1879', category: 'Science', image: '🧠', description: 'Genius physicist and Nobel laureate' },
      { name: 'Steve Jobs', birthday: 'February 24, 1955', category: 'Business', image: '📱', description: 'Apple co-founder and tech visionary' },
      { name: 'Kurt Cobain', birthday: 'February 20, 1967', category: 'Music', image: '🎸', description: 'Nirvana frontman and grunge icon' },
      { name: 'Drew Barrymore', birthday: 'February 22, 1975', category: 'Movies', image: '🌟', description: 'E.T. child star and talk show host' },
      { name: 'Justin Bieber', birthday: 'March 1, 1994', category: 'Music', image: '🎤', description: 'Baby hitmaker and pop sensation' },
      { name: 'Daniel Craig', birthday: 'March 2, 1968', category: 'Movies', image: '🕵️', description: 'James Bond 007 actor' },
      { name: 'Bruce Willis', birthday: 'March 19, 1955', category: 'Movies', image: '💥', description: 'Die Hard action hero' },
      { name: 'Eva Longoria', birthday: 'March 15, 1975', category: 'TV', image: '🌹', description: 'Desperate Housewives star' },
      { name: 'Carrie Underwood', birthday: 'March 10, 1983', category: 'Music', image: '🎤', description: 'American Idol winner and country star' }
    ]
  }

  // Get all celebrities in a flat array for searching
  const allCelebrities = useMemo(() => {
    const celebs = []
    Object.keys(celebrityDatabase).forEach(sign => {
      celebrityDatabase[sign].forEach(celeb => {
        celebs.push({ ...celeb, sign })
      })
    })
    return celebs
  }, [])

  // Filter celebrities based on search and filters
  const filteredCelebrities = useMemo(() => {
    let filtered = allCelebrities

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(celeb => 
        celeb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        celeb.sign.toLowerCase().includes(searchTerm.toLowerCase()) ||
        celeb.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by zodiac sign
    if (selectedSign) {
      filtered = filtered.filter(celeb => celeb.sign === selectedSign)
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(celeb => celeb.category === selectedCategory)
    }

    return filtered
  }, [allCelebrities, searchTerm, selectedSign, selectedCategory])

  // Function to fetch celebrity image from TMDB API
  const fetchCelebrityImage = async (celebrityName) => {
    // Skip if already loaded or loading
    if (celebrityImages[celebrityName] || loadingImages[celebrityName]) {
      return
    }

    // Set loading state for this celebrity
    setLoadingImages(prev => ({ ...prev, [celebrityName]: true }))

    try {
      // Search for the person in TMDB
      const searchUrl = `${TMDB_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(celebrityName)}&language=en-US&page=1&include_adult=false`
      
      const response = await fetch(searchUrl)
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        const person = data.results[0]
        if (person.profile_path) {
          const imageUrl = `${TMDB_IMAGE_BASE_URL}${person.profile_path}`
          setCelebrityImages(prev => ({ ...prev, [celebrityName]: imageUrl }))
        } else {
          setImageErrors(prev => ({ ...prev, [celebrityName]: true }))
        }
      } else {
        setImageErrors(prev => ({ ...prev, [celebrityName]: true }))
      }
    } catch (error) {
      console.error(`Error fetching image for ${celebrityName}:`, error)
      setImageErrors(prev => ({ ...prev, [celebrityName]: true }))
    } finally {
      setLoadingImages(prev => ({ ...prev, [celebrityName]: false }))
    }
  }

  // Fetch images for filtered celebrities when component mounts or filters change
  useEffect(() => {
    filteredCelebrities.forEach(celebrity => {
      fetchCelebrityImage(celebrity.name)
    })
  }, [filteredCelebrities])

  // Get zodiac sign info
  const getZodiacInfo = (sign) => {
    const zodiacInfo = {
      'Aries': { symbol: '♈', color: 'text-red-600', bgColor: 'bg-red-50 border-red-200' },
      'Taurus': { symbol: '♉', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' },
      'Gemini': { symbol: '♊', color: 'text-yellow-600', bgColor: 'bg-yellow-50 border-yellow-200' },
      'Cancer': { symbol: '♋', color: 'text-blue-600', bgColor: 'bg-blue-50 border-blue-200' },
      'Leo': { symbol: '♌', color: 'text-orange-600', bgColor: 'bg-orange-50 border-orange-200' },
      'Virgo': { symbol: '♍', color: 'text-emerald-600', bgColor: 'bg-emerald-50 border-emerald-200' },
      'Libra': { symbol: '♎', color: 'text-pink-600', bgColor: 'bg-pink-50 border-pink-200' },
      'Scorpio': { symbol: '♏', color: 'text-purple-600', bgColor: 'bg-purple-50 border-purple-200' },
      'Sagittarius': { symbol: '♐', color: 'text-indigo-600', bgColor: 'bg-indigo-50 border-indigo-200' },
      'Capricorn': { symbol: '♑', color: 'text-slate-600', bgColor: 'bg-slate-50 border-slate-200' },
      'Aquarius': { symbol: '♒', color: 'text-cyan-600', bgColor: 'bg-cyan-50 border-cyan-200' },
      'Pisces': { symbol: '♓', color: 'text-teal-600', bgColor: 'bg-teal-50 border-teal-200' }
    }
    return zodiacInfo[sign] || { symbol: '⭐', color: 'text-gray-600', bgColor: 'bg-gray-50 border-gray-200' }
  }

  // Get unique categories
  const categories = [...new Set(allCelebrities.map(celeb => celeb.category))].sort()
  const zodiacSigns = Object.keys(celebrityDatabase).sort()

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
            Celebrity Zodiac Database
          </h1>
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-2">
          Discover the zodiac signs of your favorite celebrities! Search through hundreds of famous personalities 
          and find out which stars share your astrological sign.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{allCelebrities.length}+ Celebrities</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>12 Zodiac Signs</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Updated Daily</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="p-4 sm:p-6 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                         <Input
               type="text"
               placeholder="Search celebrities by name, zodiac sign, or category..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="pl-10 text-sm sm:text-base lg:text-lg py-2 sm:py-3 min-h-[44px] border-2 border-amber-200 focus:border-amber-400"
             />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Zodiac Sign Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                Filter by Zodiac Sign
              </label>
                             <select
                 value={selectedSign}
                 onChange={(e) => setSelectedSign(e.target.value)}
                 className="w-full p-2 sm:p-3 min-h-[44px] border-2 border-amber-200 rounded-lg focus:border-amber-400 bg-white text-xs sm:text-sm lg:text-base"
               >
                <option value="">All Zodiac Signs</option>
                {zodiacSigns.map(sign => {
                  const info = getZodiacInfo(sign)
                  return (
                    <option key={sign} value={sign}>
                      {info.symbol} {sign} ({celebrityDatabase[sign].length} celebrities)
                    </option>
                  )
                })}
              </select>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                Filter by Category
              </label>
                             <select
                 value={selectedCategory}
                 onChange={(e) => setSelectedCategory(e.target.value)}
                 className="w-full p-2 sm:p-3 min-h-[44px] border-2 border-amber-200 rounded-lg focus:border-amber-400 bg-white text-xs sm:text-sm lg:text-base"
               >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category} ({allCelebrities.filter(c => c.category === category).length})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              variant={!selectedSign && !selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedSign('')
                setSelectedCategory('')
                setSearchTerm('')
              }}
              className="text-xs min-h-[44px] px-3"
            >
              All Celebrities
            </Button>
            <Button
              variant={selectedCategory === 'Music' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === 'Music' ? '' : 'Music')}
              className="text-xs min-h-[44px] px-3"
            >
              🎤 Music Stars
            </Button>
            <Button
              variant={selectedCategory === 'Movies' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === 'Movies' ? '' : 'Movies')}
              className="text-xs min-h-[44px] px-3"
            >
              🎬 Movie Stars
            </Button>
            <Button
              variant={selectedCategory === 'Politics' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === 'Politics' ? '' : 'Politics')}
              className="text-xs min-h-[44px] px-3"
            >
              🇺🇸 Politicians
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Counter */}
      <div className="text-center">
        <p className="text-sm sm:text-base lg:text-lg text-slate-600">
          <span className="font-bold text-xl sm:text-2xl text-amber-600">{filteredCelebrities.length}</span> 
          {filteredCelebrities.length === 1 ? ' celebrity' : ' celebrities'} found
          {searchTerm && <span className="text-slate-500"> for "{searchTerm}"</span>}
        </p>
      </div>

      {/* Celebrity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredCelebrities.map((celebrity, index) => {
          const zodiacInfo = getZodiacInfo(celebrity.sign)
          const hasImage = celebrityImages[celebrity.name]
          const isLoading = loadingImages[celebrity.name]
          const hasError = imageErrors[celebrity.name]
          
          return (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${zodiacInfo.bgColor} border-2`}
            >
              <CardHeader className="text-center pb-2 sm:pb-3">
                {/* Celebrity Image or Placeholder */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3">
                  {isLoading ? (
                    <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 sm:w-6 sm:h-6 animate-spin text-slate-400" />
                    </div>
                  ) : hasImage ? (
                    <img 
                      src={hasImage} 
                      alt={`${celebrity.name} profile`}
                      className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
                      onError={() => setImageErrors(prev => ({ ...prev, [celebrity.name]: true }))}
                    />
                  ) : hasError ? (
                    <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{celebrity.image}</div>
                  )}
                </div>
                
                <CardTitle className="text-sm sm:text-base lg:text-lg font-bold text-slate-800">
                  {celebrity.name}
                </CardTitle>
                <div className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full ${zodiacInfo.bgColor} ${zodiacInfo.color} font-medium text-xs sm:text-sm`}>
                  <span className="text-sm sm:text-base lg:text-lg">{zodiacInfo.symbol}</span>
                  {celebrity.sign}
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-2 sm:space-y-3">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-slate-600">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {celebrity.birthday}
                  </div>
                  <div className="inline-block px-2 py-1 bg-white/60 rounded-full text-xs font-medium text-slate-700">
                    {celebrity.category}
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {celebrity.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* No Results */}
      {filteredCelebrities.length === 0 && (
        <div className="text-center py-8 sm:py-16">
          <div className="text-4xl sm:text-6xl mb-4">🔍</div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">
            No celebrities found
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6 px-4">
            Try adjusting your search terms or filters to find more celebrities.
          </p>
          <Button
            onClick={() => {
              setSearchTerm('')
              setSelectedSign('')
              setSelectedCategory('')
            }}
            className="min-h-[44px] bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Zodiac Sign Summary */}
      <div className="mt-16 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Celebrities by Zodiac Sign
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore how many famous personalities share each zodiac sign and discover the traits that make them shine!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {zodiacSigns.map(sign => {
            const info = getZodiacInfo(sign)
            const count = celebrityDatabase[sign].length
            const topCelebs = celebrityDatabase[sign].slice(0, 3)
            
            return (
              <Card 
                key={sign}
                className={`${info.bgColor} border-2 hover:shadow-lg transition-all duration-200 cursor-pointer`}
                onClick={() => setSelectedSign(selectedSign === sign ? '' : sign)}
              >
                <CardHeader className="text-center pb-3">
                  <div className={`text-3xl ${info.color} font-bold mb-1`}>
                    {info.symbol}
                  </div>
                  <CardTitle className={`text-xl ${info.color}`}>
                    {sign}
                  </CardTitle>
                  <p className="text-sm text-slate-600">
                    {count} celebrities
                  </p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 mb-2">Top stars:</p>
                    {topCelebs.map((celeb, idx) => (
                      <div key={idx} className="text-xs text-slate-700">
                        {celeb.image} {celeb.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 space-y-8 text-left">
        <Card className="p-8 shadow-lg bg-white/90">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-slate-800 mb-4">
              Celebrity Zodiac Signs: What the Stars Reveal
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Why Celebrity Zodiac Signs Matter</h3>
                <p className="text-slate-600 mb-4">
                  Celebrity zodiac signs offer fascinating insights into the personalities that have shaped our culture. 
                  From Beyoncé's Virgo perfectionism to Leonardo DiCaprio's Scorpio intensity, understanding the 
                  astrological influences on our favorite stars helps us see them in a new light.
                </p>
                <h4 className="font-semibold text-slate-700 mb-2">Popular Celebrity Zodiac Searches:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• <strong>Taylor Swift zodiac sign</strong> - Sagittarius (December 13)</li>
                  <li>• <strong>Donald Trump zodiac sign</strong> - Gemini (June 14)</li>
                  <li>• <strong>Kamala Harris zodiac sign</strong> - Libra (October 20)</li>
                  <li>• <strong>Beyoncé zodiac sign</strong> - Virgo (September 4)</li>
                  <li>• <strong>Lady Gaga zodiac sign</strong> - Aries (March 28)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Most Common Celebrity Signs</h3>
                <p className="text-slate-600 mb-4">
                  Some zodiac signs seem to produce more celebrities than others. Scorpio, with its intense and 
                  magnetic personality, has given us icons like Leonardo DiCaprio and Katy Perry. Meanwhile, 
                  Leo's natural charisma has produced superstars like Madonna and Barack Obama.
                </p>
                <h4 className="font-semibold text-slate-700 mb-2">Celebrity Zodiac Patterns:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• <strong>Leo</strong> - Natural performers and leaders</li>
                  <li>• <strong>Scorpio</strong> - Intense, transformative artists</li>
                  <li>• <strong>Aquarius</strong> - Innovative, humanitarian celebrities</li>
                  <li>• <strong>Aries</strong> - Bold pioneers and trendsetters</li>
                  <li>• <strong>Libra</strong> - Charming, diplomatic public figures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trending Celebrity Searches */}
        <Card className="p-8 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-slate-800 mb-4">
              🔥 Trending Celebrity Zodiac Searches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <h4 className="font-semibold text-slate-700 mb-2">Most Searched</h4>
                <div className="space-y-1 text-sm">
                  <div className="bg-white/60 rounded p-2">Taylor Swift Zodiac Sign</div>
                  <div className="bg-white/60 rounded p-2">Trump Zodiac Sign</div>
                  <div className="bg-white/60 rounded p-2">Kamala Harris Zodiac</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h4 className="font-semibold text-slate-700 mb-2">Rising Stars</h4>
                <div className="space-y-1 text-sm">
                  <div className="bg-white/60 rounded p-2">Zendaya Zodiac Sign</div>
                  <div className="bg-white/60 rounded p-2">Timothée Chalamet Sign</div>
                  <div className="bg-white/60 rounded p-2">Ariana Grande Zodiac</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👑</div>
                <h4 className="font-semibold text-slate-700 mb-2">Legendary Icons</h4>
                <div className="space-y-1 text-sm">
                  <div className="bg-white/60 rounded p-2">Beyoncé Zodiac Sign</div>
                  <div className="bg-white/60 rounded p-2">Leonardo DiCaprio Sign</div>
                  <div className="bg-white/60 rounded p-2">Oprah Zodiac Sign</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CelebrityZodiacDatabase