import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Calendar, Tag, TrendingUp, Heart, Star, Users, Clock, Share2, BookOpen, Filter, Eye, ThumbsUp, MessageCircle } from 'lucide-react'

function ZodiacBlog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)

  // Comprehensive blog articles database with SEO-optimized content
  const blogArticles = [
    {
      id: 1,
      title: "Why Scorpios Are the Most Magnetic Zodiac Sign in 2025",
      slug: "why-scorpios-most-magnetic-zodiac-sign-2025",
      excerpt: "Discover the irresistible traits that make Scorpio the most captivating sign. From Leonardo DiCaprio to Ryan Gosling, learn what makes Scorpio energy so powerful in love and life.",
      content: `
# Why Scorpios Are the Most Magnetic Zodiac Sign in 2025

Scorpio, the mysterious water sign ruled by Pluto, continues to captivate and intrigue people worldwide. From Hollywood A-listers like Leonardo DiCaprio and Emma Stone to business moguls like Bill Gates, Scorpios possess an undeniable magnetism that draws others in.

## What Makes Scorpio So Irresistible?

### 1. Intense Emotional Depth
Scorpios feel everything deeply. This emotional intensity creates a magnetic pull that others find irresistible. Unlike other signs that may keep things surface-level, Scorpios dive deep into every conversation, relationship, and experience.

### 2. Natural Mystery
There's always more to a Scorpio than meets the eye. This natural air of mystery keeps people guessing and wanting to know more. It's why Scorpio celebrities like Ryan Gosling and Scarlett Johansson have such captivating screen presence.

### 3. Unwavering Loyalty
Once you earn a Scorpio's trust, you have a friend for life. This loyalty is rare and precious, making Scorpios incredibly valuable partners in both love and business.

## Famous Scorpios Who Prove the Point

- **Leonardo DiCaprio** (November 11) - His intense acting style and environmental passion
- **Emma Stone** (November 6) - Captivating vulnerability and strength
- **Ryan Gosling** (November 12) - Mysterious charm and depth
- **Scarlett Johansson** (November 22) - Magnetic screen presence

## How to Connect with a Scorpio

If you're trying to attract a Scorpio or deepen your relationship with one:

1. **Be authentic** - Scorpios can detect fake energy from miles away
2. **Respect their privacy** - Don't push for information they're not ready to share
3. **Match their intensity** - Bring your own passion and depth to the relationship
4. **Be loyal** - Trust is everything to a Scorpio

## Scorpio Compatibility in 2025

Scorpios are most compatible with:
- **Cancer** - Both water signs understand emotional depth
- **Pisces** - Natural understanding and intuitive connection  
- **Virgo** - Opposite sign attraction creates balance
- **Capricorn** - Shared ambition and loyalty

*Want to test your compatibility with a Scorpio? Try our free compatibility checker!*

## The Bottom Line

Scorpio's magnetism comes from their authentic, intense approach to life. In a world of surface-level connections, Scorpios offer depth, loyalty, and transformative relationships that leave lasting impacts.

Ready to discover if you're compatible with a Scorpio? Check out our compatibility calculator to find your perfect match!
      `,
      category: "Zodiac Personalities",
      author: "Cosmic Insights Team",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      image: "🦂",
      tags: ["Scorpio", "Zodiac Personalities", "Astrology", "Compatibility"],
      views: 15420,
      likes: 892,
      comments: 156,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "How to Make Any Zodiac Sign Fall in Love With You",
      slug: "how-to-make-any-zodiac-sign-fall-in-love",
      excerpt: "The ultimate guide to winning over each zodiac sign. Discover the secret love languages and attraction triggers for all 12 signs, from fiery Aries to dreamy Pisces.",
      content: `
# How to Make Any Zodiac Sign Fall in Love With You

Love is written in the stars, and each zodiac sign has unique ways they prefer to be courted. Whether you're crushing on a confident Leo or a mysterious Scorpio, understanding their astrological love language is your secret weapon.

## Fire Signs: Aries, Leo, Sagittarius

### Aries (March 21 - April 19)
**What they want:** Adventure and excitement
**How to win them:** Be spontaneous, plan surprise dates, and match their energy. Aries love a challenge, so don't be too available.
**Celebrity example:** Like Lady Gaga, Aries appreciate bold gestures and authentic passion.

### Leo (July 23 - August 22)  
**What they want:** Admiration and attention
**How to win them:** Compliment them genuinely, support their goals, and make them feel special. Leos love grand romantic gestures.
**Celebrity example:** Think of how Barack Obama charms - with confidence and warmth.

### Sagittarius (November 22 - December 21)
**What they want:** Freedom and intellectual stimulation
**How to win them:** Share your travel stories, discuss philosophy, and give them space. Never try to cage a Sagittarius.
**Celebrity example:** Like Taylor Swift, they appreciate creativity and independence.

## Earth Signs: Taurus, Virgo, Capricorn

### Taurus (April 20 - May 20)
**What they want:** Stability and sensual pleasures
**How to win them:** Cook for them, create a beautiful environment, and show consistency. Taurus love luxury and comfort.
**Celebrity example:** Like Adele, they appreciate genuine, heartfelt gestures.

### Virgo (August 23 - September 22)
**What they want:** Acts of service and attention to detail
**How to win them:** Remember the little things, help them with tasks, and show you care through actions, not just words.
**Celebrity example:** Like Beyoncé, they notice everything and appreciate perfection.

### Capricorn (December 22 - January 19)
**What they want:** Ambition and long-term commitment
**How to win them:** Show your goals, be reliable, and prove you're in it for the long haul. Capricorns don't do casual.
**Celebrity example:** Like Michelle Obama, they respect achievement and dedication.

## Air Signs: Gemini, Libra, Aquarius

### Gemini (May 21 - June 20)
**What they want:** Mental stimulation and variety
**How to win them:** Keep conversations interesting, be witty, and embrace spontaneity. Boredom is a Gemini's worst enemy.
**Celebrity example:** Like Johnny Depp, they appreciate creativity and unpredictability.

### Libra (September 23 - October 22)
**What they want:** Harmony and romance
**How to win them:** Be charming, create beautiful experiences, and always be fair. Libras are traditional romantics.
**Celebrity example:** Like Will Smith, they value partnership and balance.

### Aquarius (January 20 - February 18)
**What they want:** Friendship and intellectual connection
**How to win them:** Be their friend first, respect their independence, and share their humanitarian values.
**Celebrity example:** Like Oprah, they connect through shared ideals and mutual respect.

## Water Signs: Cancer, Scorpio, Pisces

### Cancer (June 21 - July 22)
**What they want:** Emotional security and nurturing
**How to win them:** Be protective, create a cozy home environment, and show emotional availability.
**Celebrity example:** Like Tom Hanks, they appreciate genuine care and family values.

### Scorpio (October 23 - November 21)
**What they want:** Intensity and loyalty
**How to win them:** Be authentic, maintain mystery, and prove your trustworthiness. Scorpios want all or nothing.
**Celebrity example:** Like Leonardo DiCaprio, they value deep, meaningful connections.

### Pisces (February 19 - March 20)
**What they want:** Romance and emotional connection
**How to win them:** Be gentle, appreciate their creativity, and create magical moments together.
**Celebrity example:** Like Rihanna, they respond to artistic and emotional expressions of love.

## Universal Love Tips That Work for All Signs

1. **Be authentic** - Every sign can sense fake energy
2. **Show interest in their passions** - Support what they love
3. **Respect their communication style** - Some need space, others constant contact
4. **Learn their love language** - Words, touch, gifts, time, or acts of service

## Red Flags to Avoid with Each Sign

- **Fire Signs:** Being boring or trying to control them
- **Earth Signs:** Being unreliable or too impulsive  
- **Air Signs:** Being clingy or intellectually unstimulating
- **Water Signs:** Being emotionally unavailable or insensitive

*Ready to test your compatibility? Use our free zodiac compatibility checker to see how well you match with your crush!*

Remember, while astrology provides insights, the most important thing is genuine connection and mutual respect. Let the stars guide you, but let your heart lead the way!
      `,
      category: "Love & Relationships",
      author: "Luna Starlight",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      image: "💕",
      tags: ["Love", "Relationships", "Dating", "All Signs"],
      views: 23180,
      likes: 1456,
      comments: 298,
      featured: true,
      trending: true
    },
    {
      id: 3,
      title: "Taylor Swift's Sagittarius Energy: Why She's the Ultimate Fire Sign",
      slug: "taylor-swift-sagittarius-energy-ultimate-fire-sign",
      excerpt: "Explore how Taylor Swift embodies classic Sagittarius traits through her music, relationships, and career moves. Her archer energy explains everything from her storytelling to her independence.",
      content: `
# Taylor Swift's Sagittarius Energy: Why She's the Ultimate Fire Sign

Born on December 13, 1989, Taylor Swift is a textbook Sagittarius who embodies every trait of this adventurous fire sign. From her nomadic lifestyle to her philosophical lyrics, Taylor proves why Sagittarius is the ultimate storyteller of the zodiac.

## Classic Sagittarius Traits in Taylor's Career

### 1. The Eternal Wanderer
Sagittarians are known for their love of travel and exploration. Taylor's constant touring, her homes in multiple cities, and her songs about different places showcase this wanderlust perfectly.

**Songs that prove it:**
- "Getaway Car" - Classic Sagittarius escape fantasy
- "Cornelia Street" - Attachment to places with deep meaning
- "Invisible String" - Belief in fate and destiny (very Sagittarius)

### 2. The Truth-Telling Archer
Ruled by Jupiter, Sagittarians are known for their blunt honesty. Taylor's songwriting is famously transparent, sometimes brutally so.

**Examples:**
- Her entire discography is essentially a public diary
- Direct lyrics like "You're on the phone with your girlfriend, she's upset"
- Her ability to call out industry injustices publicly

### 3. The Philosophical Storyteller
Sagittarians are natural philosophers who see the bigger picture. Taylor's evolution from country to pop to indie folk shows this expansive thinking.

**Albums that show her growth:**
- **Fearless** - Young Sagittarius optimism
- **1989** - Adventurous genre exploration  
- **folklore/evermore** - Mature philosophical reflection

## Her Sagittarius Relationships

### The Need for Freedom
Typical Sagittarius, Taylor has always been honest about valuing her independence. Her relationships often feature themes of:

- **Adventure together:** Traveling with partners
- **Intellectual connection:** Dating fellow creatives and intellectuals
- **Mutual respect for careers:** Supporting each other's ambitions

### Famous Sagittarius-Compatible Relationships

- **Joe Alwyn (Pisces):** Water and fire can create steam - their long relationship showed emotional depth
- **Travis Kelce (Libra):** Air feeds fire perfectly - their public dynamic shows Sagittarius joy and Libra charm

## Why Sagittarius Makes the Best Artists

### 1. Natural Storytellers
Sagittarians are ruled by Jupiter, the planet of expansion and wisdom. This gives them:
- Ability to see universal themes in personal experiences
- Talent for turning life events into art
- Gift for connecting with diverse audiences

### 2. Fearless Exploration
Fire sign energy means Sagittarians aren't afraid to:
- Try new musical styles
- Speak their truth regardless of consequences
- Reinvent themselves constantly

### 3. Optimistic Vision
Even Taylor's sad songs often have hopeful undertones, showing classic Sagittarius optimism:
- "All Too Well" - Pain but growth
- "Soon You'll Get Better" - Hope in darkness
- "Ronan" - Love transcending loss

## Taylor's Sagittarius Moon and Rising Signs

While we know Taylor's sun sign, her complete birth chart likely amplifies her Sagittarius energy:

**Potential placements that make sense:**
- **Sagittarius Moon:** Emotional need for freedom and adventure
- **Leo Rising:** Natural stage presence and charisma
- **Gemini Venus:** Love of communication and variety in relationships

## Other Famous Sagittarius Artists

Taylor joins a legacy of Sagittarius creatives:
- **Jay-Z** - Another storytelling genius
- **Britney Spears** - Pop evolution and reinvention
- **Miley Cyrus** - Fearless artistic exploration
- **Brad Pitt** - Adventurous career choices

## What We Can Learn from Taylor's Sagittarius Energy

### 1. Embrace Your Truth
Sagittarians teach us to be honest about our experiences, even when it's uncomfortable.

### 2. Keep Growing
Never stop exploring new territories, whether in career, relationships, or personal development.

### 3. Find Your Voice
Use your experiences to connect with others and tell stories that matter.

### 4. Stay Optimistic
Even in difficult times, look for the lesson and the growth opportunity.

## Sagittarius Season and Taylor

Every year during Sagittarius season (November 22 - December 21), we see Taylor:
- Release surprise projects
- Make major announcements
- Embrace new adventures
- Connect with fans in meaningful ways

Her birthday month often brings the most Sagittarian energy - expansion, surprises, and philosophical reflection.

*Want to see how compatible you are with a Sagittarius like Taylor? Check out our compatibility calculator to discover your cosmic connection!*

## The Bottom Line

Taylor Swift isn't just a Sagittarius - she's the embodiment of everything beautiful about this fire sign. Her courage, honesty, optimism, and endless capacity for growth inspire millions to embrace their own archer energy.

Whether you're a fellow Sagittarius or just admire their free spirit, Taylor shows us how to turn our truth into art and our experiences into wisdom.

*Curious about your own zodiac traits? Explore our celebrity database to find stars who share your sign!*
      `,
      category: "Celebrity Astrology",
      author: "Stella Rodriguez",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      image: "🏹",
      tags: ["Taylor Swift", "Sagittarius", "Celebrity", "Music"],
      views: 31250,
      likes: 2103,
      comments: 445,
      featured: true,
      trending: true
    },
    {
      id: 4,
      title: "Mercury Retrograde 2025: Survival Guide for Each Zodiac Sign",
      slug: "mercury-retrograde-2025-survival-guide-zodiac-signs",
      excerpt: "Navigate Mercury retrograde like a pro! Discover how this cosmic event affects each zodiac sign differently and get personalized tips to thrive during communication chaos.",
      content: `
# Mercury Retrograde 2025: Survival Guide for Each Zodiac Sign

Mercury retrograde gets a bad rap, but with the right preparation, you can navigate these cosmic storms like a seasoned astrologer. This year's retrograde periods (March 14-April 7, July 7-31, and November 1-20) each bring unique challenges and opportunities.

## What Is Mercury Retrograde?

Mercury, the planet of communication, technology, and travel, appears to move backward in the sky. This optical illusion creates disruptions in:
- Communication and misunderstandings
- Technology glitches and breakdowns  
- Travel delays and complications
- Contract and decision-making confusion

## How Each Sign Can Survive (and Thrive)

### Fire Signs: Aries, Leo, Sagittarius

**Common Mercury Retrograde Challenges:**
- Impulsive decisions leading to regret
- Heated arguments from miscommunication
- Rushed travel plans going wrong

**Survival Strategies:**
- **Aries:** Slow down and double-check everything before acting
- **Leo:** Focus on creative projects rather than big announcements  
- **Sagittarius:** Postpone major travel; explore local adventures instead

### Earth Signs: Taurus, Virgo, Capricorn

**Common Challenges:**
- Technology failures disrupting work routines
- Important documents going missing
- Financial miscommunications

**Survival Strategies:**
- **Taurus:** Back up all digital files and avoid major purchases
- **Virgo:** Use your natural organization skills to create backup plans
- **Capricorn:** Focus on reviewing and improving existing projects

### Air Signs: Gemini, Libra, Aquarius

**Common Challenges:**
- Social media misunderstandings
- Important messages getting lost
- Decision paralysis

**Survival Strategies:**  
- **Gemini:** Practice extra patience in all communications
- **Libra:** Avoid making major relationship decisions
- **Aquarius:** Use this time for innovation and brainstorming

### Water Signs: Cancer, Scorpio, Pisces

**Common Challenges:**
- Emotional miscommunications
- Past relationships resurfacing
- Intuitive abilities feeling "off"

**Survival Strategies:**
- **Cancer:** Focus on family time and home organization
- **Scorpio:** Use retrograde energy for deep introspection
- **Pisces:** Channel confusion into creative expression

## Universal Mercury Retrograde Survival Tips

### The "Three R's" Rule
During Mercury retrograde, focus on activities starting with "re":
- **Review** old projects and plans
- **Reconnect** with old friends and contacts
- **Revise** documents and creative works
- **Reflect** on recent decisions and experiences
- **Reorganize** your living and working spaces

### Technology Protection Plan
1. **Back up everything** before retrograde starts
2. **Avoid buying** new electronics if possible
3. **Keep chargers** and backup devices handy
4. **Update software** before the retrograde period
5. **Have tech support** numbers readily available

### Communication Best Practices
- **Double-check** all messages before sending
- **Confirm appointments** and meetings twice
- **Be extra patient** with misunderstandings
- **Avoid signing** important contracts if possible
- **Think before speaking** in heated moments

## 2025 Mercury Retrograde Calendar

### Spring Retrograde: March 14 - April 7
**Focus:** New beginnings getting delayed or revised
**Best for:** Reviewing spring goals and plans
**Avoid:** Starting new relationships or jobs

### Summer Retrograde: July 7 - 31  
**Focus:** Vacation and leisure complications
**Best for:** Reconnecting with summer friends
**Avoid:** Major travel without backup plans

### Fall Retrograde: November 1 - 20
**Focus:** Holiday planning chaos
**Best for:** Reflecting on the year's accomplishments
**Avoid:** Black Friday technology purchases

## Mercury Retrograde Myths vs. Reality

### Myth: Everything will go wrong
**Reality:** Retrograde creates opportunities to slow down and review

### Myth: You should hide until it's over
**Reality:** Life continues; just be more mindful and prepared

### Myth: All communication is doomed
**Reality:** Careful communication can actually improve relationships

## Positive Mercury Retrograde Opportunities

### For Relationships
- **Reconnect** with old friends
- **Resolve** lingering conflicts through better communication
- **Rediscover** what you love about your current relationships

### For Career
- **Review** your professional goals
- **Revise** your resume or portfolio
- **Reconnect** with former colleagues or mentors

### For Personal Growth
- **Reflect** on recent life changes
- **Reorganize** your living space
- **Revisit** abandoned hobbies or interests

## Post-Retrograde Integration

When Mercury goes direct, you'll want to:
1. **Implement** insights gained during retrograde
2. **Move forward** with revised plans
3. **Launch** projects that were delayed
4. **Communicate** important decisions that were postponed

## Emergency Mercury Retrograde Kit

Keep these items handy during retrograde:
- **Backup phone charger**
- **Important phone numbers** written down
- **Cash** for when card readers malfunction  
- **Patience** (lots of it!)
- **Sense of humor** about cosmic chaos

*Feeling overwhelmed by Mercury retrograde? Check our compatibility calculator to see how it might affect your relationships during this time!*

## The Bottom Line

Mercury retrograde isn't something to fear - it's a cosmic invitation to slow down, review, and reconnect. Each sign experiences different challenges, but with awareness and preparation, you can turn retrograde periods into opportunities for growth and improvement.

Remember: the universe isn't working against you during Mercury retrograde; it's giving you a chance to get things right the second time around.

*Want personalized advice for your sign? Explore our zodiac personality guides to understand how Mercury retrograde specifically affects you!*
      `,
      category: "Horoscopes & Predictions",
      author: "Mercury Maven",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      image: "☿️",
      tags: ["Mercury Retrograde", "2025", "Astrology", "Predictions"],
      views: 18976,
      likes: 1287,
      comments: 203,
      featured: false,
      trending: true
    },
    {
      id: 5,
      title: "Red Flags: What Each Zodiac Sign Does When They're Not Into You",
      slug: "red-flags-zodiac-signs-not-into-you",
      excerpt: "Stop wondering and start knowing! Learn the subtle (and not-so-subtle) signs that each zodiac sign gives when they're losing interest in dating or relationships.",
      content: `
# Red Flags: What Each Zodiac Sign Does When They're Not Into You

Dating can be confusing enough without trying to decode mixed signals. Each zodiac sign has their own way of showing disinterest, and recognizing these red flags early can save you time, energy, and heartbreak.

## Fire Signs: Aries, Leo, Sagittarius

### Aries Red Flags 🚩
**When Aries isn't into you:**
- They stop initiating plans or conversations
- Their responses become short and delayed
- They avoid physical contact or intimacy
- They start talking about other people they find attractive
- They become irritable or impatient with you

**The biggest red flag:** An Aries who used to be enthusiastic about everything suddenly becomes indifferent to your shared activities.

### Leo Red Flags 🚩
**When Leo isn't into you:**
- They stop showing you off to friends and family
- They become less affectionate in public
- They don't post about you on social media anymore
- They start seeking attention from others more obviously
- They become critical of things they used to compliment

**The biggest red flag:** A Leo who stops making you feel special or important in their life.

### Sagittarius Red Flags 🚩
**When Sagittarius isn't into you:**
- They start making plans that don't include you
- They become vague about their whereabouts
- They stop sharing their adventures and experiences
- They seem restless when spending time together
- They mention wanting "space" or "freedom" frequently

**The biggest red flag:** A Sagittarius who starts treating you like you're holding them back.

## Earth Signs: Taurus, Virgo, Capricorn

### Taurus Red Flags 🚩
**When Taurus isn't into you:**
- They become less generous with their time and resources
- They stop making an effort to look good around you
- They avoid discussing future plans together
- They become stubborn about compromising
- They start prioritizing everyone else's needs over yours

**The biggest red flag:** A Taurus who stops making you feel comfortable and secure.

### Virgo Red Flags 🚩
**When Virgo isn't into you:**
- They become overly critical of your habits or choices
- They stop offering to help with your problems
- They seem distracted when you're talking
- They become less reliable about keeping plans
- They start pointing out your flaws more than your strengths

**The biggest red flag:** A Virgo who stops trying to improve your life or relationship.

### Capricorn Red Flags 🚩
**When Capricorn isn't into you:**
- They stop including you in their long-term plans
- They become "too busy" for quality time together
- They stop asking about your goals and ambitions
- They become less supportive of your career or dreams
- They start treating the relationship casually

**The biggest red flag:** A Capricorn who stops seeing you as part of their future success.

## Air Signs: Gemini, Libra, Aquarius

### Gemini Red Flags 🚩
**When Gemini isn't into you:**
- Conversations become surface-level and boring
- They stop asking you questions about your life
- They seem distracted or bored when you're together
- They start canceling plans at the last minute
- They become less playful and flirtatious

**The biggest red flag:** A Gemini who stops being curious about you and your thoughts.

### Libra Red Flags 🚩
**When Libra isn't into you:**
- They stop making an effort to look good for you
- They become less romantic and thoughtful
- They start avoiding conflict by becoming distant
- They seem less interested in couple activities
- They stop seeking your opinion on important matters

**The biggest red flag:** A Libra who stops trying to create harmony and beauty in your relationship.

### Aquarius Red Flags 🚩
**When Aquarius isn't into you:**
- They become emotionally distant and detached
- They stop sharing their unique thoughts and ideas
- They seem less interested in your friendship foundation
- They become unpredictable with communication
- They start treating you like everyone else

**The biggest red flag:** An Aquarius who stops seeing you as their intellectual equal and close friend.

## Water Signs: Cancer, Scorpio, Pisces

### Cancer Red Flags 🚩
**When Cancer isn't into you:**
- They become moody and withdrawn around you
- They stop being nurturing and caring
- They avoid emotional conversations
- They seem less interested in building a "home" together
- They start protecting their feelings from you

**The biggest red flag:** A Cancer who stops making you feel emotionally safe and cared for.

### Scorpio Red Flags 🚩
**When Scorpio isn't into you:**
- They become secretive about their life and feelings
- They stop being possessive or jealous (in a healthy way)
- They avoid deep, intimate conversations
- They seem less passionate about everything
- They start keeping emotional walls up

**The biggest red flag:** A Scorpio who stops being vulnerable and intense with you.

### Pisces Red Flags 🚩
**When Pisces isn't into you:**
- They start living in their fantasy world more
- They become less empathetic to your feelings
- They stop making romantic gestures
- They seem confused about the relationship
- They start avoiding reality and practical discussions

**The biggest red flag:** A Pisces who stops dreaming about a future with you.

## Universal Red Flags (All Signs)

Regardless of zodiac sign, watch out for these universal red flags:

### Communication Changes
- **Delayed responses** to texts and calls
- **Shorter conversations** lacking depth
- **Less initiation** of contact from their side
- **Avoiding** serious relationship talks

### Behavioral Shifts
- **Less effort** in their appearance around you
- **Reduced intimacy** both physical and emotional
- **Making excuses** to avoid spending time together
- **Prioritizing** other people and activities over you

### Energy Changes
- **Less enthusiasm** about shared interests
- **Decreased affection** and romance
- **More criticism** and less appreciation
- **Feeling like** you're bothering them

## What to Do When You Spot Red Flags

### 1. Trust Your Instincts
If something feels off, it probably is. Don't ignore your gut feelings.

### 2. Communicate Directly
Ask them honestly about changes you've noticed. Sometimes people are going through personal issues unrelated to the relationship.

### 3. Give Them Space
Sometimes people need time to figure out their feelings. Pressuring them rarely works.

### 4. Focus on Yourself
Use this time to evaluate what you want and need in a relationship.

### 5. Know When to Walk Away
If the red flags persist and they're not willing to work on the relationship, it's time to move on.

## The Flip Side: Green Flags

Remember, each sign also has beautiful ways of showing genuine interest:
- **Fire signs** bring enthusiasm and passion
- **Earth signs** offer stability and commitment  
- **Air signs** provide intellectual stimulation and fun
- **Water signs** give emotional depth and intuition

*Confused about someone's mixed signals? Use our compatibility checker to see if you're truly a good match or if those red flags are warning you away from an incompatible connection.*

## The Bottom Line

Red flags aren't always intentional - sometimes people just aren't ready for relationships or aren't feeling the connection. The key is recognizing these signs early so you can either address them together or move on to find someone who's genuinely excited about building something with you.

Remember: you deserve someone who shows up consistently with green flags, not someone you have to constantly decode for red ones.

*Want to attract the right energy? Check out our guides on how to appeal to each zodiac sign and build healthier connections from the start!*
      `,
      category: "Love & Relationships",
      author: "Dating Oracle",
      publishDate: "2025-01-05",
      readTime: "14 min read",
      image: "🚩",
      tags: ["Dating", "Red Flags", "Relationships", "Warning Signs"],
      views: 27843,
      likes: 1923,
      comments: 367,
      featured: false,
      trending: true
    }
  ]

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    let filtered = blogArticles

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    return filtered.sort((a, b) => {
      // Sort featured and trending articles first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      if (a.trending && !b.trending) return -1
      if (!a.trending && b.trending) return 1
      return new Date(b.publishDate) - new Date(a.publishDate)
    })
  }, [searchTerm, selectedCategory])

  // Get unique categories
  const categories = [...new Set(blogArticles.map(article => article.category))].sort()

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }

  // Format numbers
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  // Share article
  const shareArticle = async (article) => {
    const shareText = `${article.title} - ${article.excerpt.substring(0, 100)}...`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: shareText,
          url: window.location.href + '#' + article.slug
        })
      } catch (error) {
        console.log('Share failed:', error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${article.title} - ${window.location.href}#${article.slug}`)
        alert('Article link copied to clipboard!')
      } catch (error) {
        console.error('Copy failed:', error)
      }
    }
  }

  if (selectedArticle) {
    // Article view
    const article = blogArticles.find(a => a.id === selectedArticle)
    
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button
          onClick={() => setSelectedArticle(null)}
          variant="outline"
          className="mb-6"
        >
          ← Back to Blog
        </Button>

        {/* Article Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">{article.image}</div>
          <h1 className="text-4xl font-bold text-slate-800 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {formatNumber(article.views)} views
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700`}>
              {article.category}
            </span>
            {article.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                ⭐ Featured
              </span>
            )}
            {article.trending && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                🔥 Trending
              </span>
            )}
          </div>
        </div>

        {/* Article Content */}
        <Card className="p-8 shadow-lg">
          <CardContent className="prose prose-slate max-w-none">
            <div 
              className="text-lg leading-relaxed text-slate-700"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, match => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4-level}xl font-bold text-slate-800 mt-8 mb-4">`
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </CardContent>
        </Card>

        {/* Article Footer */}
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="space-y-4">
            {/* Tags */}
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/60 rounded-full text-sm text-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement */}
            <div className="flex justify-between items-center pt-4 border-t border-purple-200">
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {formatNumber(article.likes)}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {formatNumber(article.comments)}
                </div>
              </div>
              
              <Button
                onClick={() => shareArticle(article)}
                variant="outline"
                size="sm"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">You Might Also Like</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {blogArticles
                .filter(a => a.id !== article.id && (a.category === article.category || a.tags.some(tag => article.tags.includes(tag))))
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Card 
                    key={relatedArticle.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedArticle(relatedArticle.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="text-2xl mb-2">{relatedArticle.image}</div>
                      <CardTitle className="text-sm font-semibold text-slate-800">
                        {relatedArticle.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {relatedArticle.readTime}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mb-2">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Zodiac Insights Blog
          </h1>
          <Star className="w-8 h-8 text-indigo-600" />
        </div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover the secrets of the stars through our expert astrology articles. From relationship advice to celebrity analysis, 
          explore the cosmic wisdom that guides our daily lives.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles by title, tags, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg py-3 border-2 border-indigo-200 focus:border-indigo-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory('')}
              className="text-sm"
            >
              All Articles
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Articles */}
      {!searchTerm && !selectedCategory && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 text-center">
            🔥 Featured & Trending
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogArticles.filter(article => article.featured).slice(0, 2).map((article) => (
              <Card 
                key={article.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
                onClick={() => setSelectedArticle(article.id)}
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{article.image}</div>
                  <div className="flex justify-center gap-2 mb-2">
                    {article.featured && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                    {article.trending && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatNumber(article.views)}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {formatNumber(article.likes)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/60 rounded text-xs text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Articles Grid */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">
            {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
          </h2>
          <p className="text-slate-600">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card 
              key={article.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedArticle(article.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{article.image}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {article.featured && (
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                      ⭐
                    </span>
                  )}
                  {article.trending && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      🔥
                    </span>
                  )}
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatNumber(article.views)}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      {formatNumber(article.likes)}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-slate-700 mb-2">
            No articles found
          </h2>
          <p className="text-slate-500 mb-6">
            Try adjusting your search terms or browse different categories.
          </p>
          <Button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('')
            }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            View All Articles
          </Button>
        </div>
      )}

      {/* Newsletter Signup */}
      <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardContent className="text-center space-y-4">
          <div className="text-4xl mb-2">✨</div>
          <h3 className="text-2xl font-bold text-slate-800">
            Stay Updated with Cosmic Insights
          </h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Get the latest astrology articles, compatibility insights, and cosmic wisdom delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-slate-500">
            Join 10,000+ astrology enthusiasts. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ZodiacBlog