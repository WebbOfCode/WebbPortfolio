'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getFeatureFlags } from '@/config/features'

export default function BartenderPage() {
  // ALL HOOKS MUST BE AT THE TOP - Rules of Hooks
  const router = useRouter()
  const [featureFlags, setFeatureFlags] = useState(() => getFeatureFlags())
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  
  useEffect(() => {
    // Get current feature flags
    const currentFlags = getFeatureFlags()
    setFeatureFlags(currentFlags)
    setIsLoading(false)
    
    // Redirect if bartender services are disabled
    if (!currentFlags.showBartenderServices) {
      router.push('/')
    }
  }, [router])

  // Show loading or nothing while checking flags or redirecting
  if (isLoading || !featureFlags.showBartenderServices) {
    return null
  }

  const packages = [
    {
      id: 'premium',
      name: 'The Signature Collection',
      price: '$500-750',
      duration: '4-6 hours',
      description: 'Our most luxurious experience for weddings, galas, and milestone celebrations',
      features: [
        'Bespoke cocktail menu consultation',
        'Premium spirits & artisanal ingredients',
        'Signature glassware & elegant setup',
        'Professional mixology demonstration',
        'Personalized cocktail cards & recipes',
        'Full-service setup & breakdown',
        'Comprehensive liability coverage'
      ],
      color: '#d4af37',
      badge: 'Most Popular'
    },
    {
      id: 'corporate',
      name: 'The Executive Experience',
      price: '$400-600',
      duration: '3-5 hours',
      description: 'Sophisticated service for corporate events, product launches, and networking',
      features: [
        'Business-elegant cocktail selection',
        'Efficient, unobtrusive service',
        'Classic & contemporary cocktails',
        'Professional networking enhancement',
        'Branded cocktail napkins available',
        'Flexible timing & service style',
        'Post-event consultation'
      ],
      color: '#5d4e37',
      badge: null
    },
    {
      id: 'private',
      name: 'The Intimate Gathering',
      price: '$350-500',
      duration: '3-4 hours',
      description: 'Personalized service for private parties, anniversaries, and special occasions',
      features: [
        'Custom cocktail creation session',
        'Interactive mixology experience',
        'Personalized drink recommendations',
        'Intimate bar setup & styling',
        'Guest cocktail education',
        'Flexible menu customization',
        'Complete cleanup service'
      ],
      color: '#8fbc8f',
      badge: 'Great Value'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      event: 'Dream Wedding Reception',
      quote: 'DeMix Cocktail Co transformed our wedding into pure magic! Demarick crafted the most exquisite signature cocktails that perfectly captured our love story. Our guests are still talking about those incredible drinks months later!',
      rating: 5,
      image: '/api/placeholder/60/60',
      location: 'Orlando Wedding Club'
    },
    {
      name: 'Jennifer Chen',
      event: 'Tech Company Launch',
      quote: 'Absolutely phenomenal service for our startup launch party. Demarick managed 200+ guests with such elegance and professionalism. The craft cocktails were conversation starters and perfectly aligned with our brand aesthetic.',
      rating: 5,
      image: '/api/placeholder/60/60',
      location: 'Private Event Space'
    },
    {
      name: 'Robert & Linda Martinez',
      event: '30th Anniversary Celebration',
      quote: 'For our milestone anniversary, we wanted something truly special. DeMix Cocktail Co exceeded every expectation. The personalized cocktail menu and intimate service made our celebration absolutely perfect.',
      rating: 5,
      image: '/api/placeholder/60/60',
      location: 'Private Residence'
    }
  ]

  const venues = [
    'Lead Bartender at the Nashville Symphony',
    'Bartender at the #1 Arena in the United States',
    'Bartender on Nashvilles Biggest Stages',
    'Private Residences',
    'Corporate Offices',
    'Wedding Venues'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-25 to-orange-25" style={{backgroundColor: '#f8f6f0'}}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/demix-logo.svg"
                  alt="DeMix Cocktail Co"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-stone-800" style={{fontFamily: 'serif'}}>DeMix Cocktail Co</span>
                <span className="text-sm text-amber-600 font-medium italic" style={{color: '#d4af37'}}>by Demarick Webb</span>
              </div>
            </Link>
            <Link 
              href="/"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="bg-stone-100 text-stone-800 px-6 py-3 rounded-full text-sm font-semibold border border-stone-200 shadow-sm">
                  🍸 Premium Cocktail Experiences
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{fontFamily: 'serif', color: '#2c1810'}}>
                Crafted Cocktails,
                <span className="block" style={{color: '#d4af37'}}>
                  Memorable Moments
                </span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{color: '#5d4e37'}}>
                At DeMix Cocktail Co, we transform your gatherings into extraordinary experiences. 
                From Nashville&apos;s premier venues to intimate celebrations, our artisanal approach 
                to mixology creates unforgettable moments that your guests will treasure.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {venues.map((venue) => (
                  <span 
                    key={venue}
                    className="px-4 py-2 bg-stone-100 rounded-full text-sm font-medium border border-stone-200 shadow-sm"
                    style={{color: '#5d4e37'}}
                  >
                    {venue}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{backgroundColor: '#d4af37'}}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#b8941f'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#d4af37'}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Your Experience
                </button>
                <button 
                  className="border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  style={{borderColor: '#d4af37', color: '#5d4e37'}}
                  onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = '#d4af37'; (e.target as HTMLElement).style.color = 'white'}}
                  onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#5d4e37'}}
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Packages
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Floating elements for elegance */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-30 blur-xl" style={{backgroundColor: '#d4af37'}}></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-xl" style={{backgroundColor: '#5d4e37'}}></div>
              
              <div className="relative bg-white rounded-full p-12 shadow-2xl border-2 border-stone-200 w-80 h-80 mx-auto flex items-center justify-center">
                {/* Large logo in center */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/demix-logo.svg"
                      alt="DeMix Cocktail Co"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative dotted circle around */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-30" style={{borderColor: '#d4af37'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-stone-100 px-6 py-3 rounded-full text-sm font-semibold border border-stone-200" style={{color: '#5d4e37'}}>
                🍸 Signature Experiences
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'serif', color: '#2c1810'}}>
              Curated Cocktail Experiences
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{color: '#5d4e37'}}>
              Each package is thoughtfully designed to elevate your celebration. From intimate gatherings 
              to grand celebrations, we craft bespoke experiences that reflect your unique style and taste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2`}
                style={{
                  borderColor: selectedPackage === pkg.id ? '#d4af37' : '#e5e7eb',
                  boxShadow: selectedPackage === pkg.id ? '0 0 0 4px rgba(212, 175, 55, 0.1)' : undefined
                }}
                onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{backgroundColor: '#d4af37'}}>
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto" style={{backgroundColor: pkg.color}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12V7a1 1 0 011-1h1V4a2 2 0 114 0v2h1a1 1 0 011 1v5a6 6 0 01-12 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                  </svg>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'serif', color: '#2c1810'}}>{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2" style={{color: '#d4af37'}}>{pkg.price}</div>
                  <div className="font-medium" style={{color: '#5d4e37'}}>{pkg.duration}</div>
                </div>
                <p className="mb-8 text-center leading-relaxed" style={{color: '#6b7280'}}>{pkg.description}</p>
                
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#f8f6f0'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-stone-100 px-6 py-3 rounded-full text-sm font-semibold border border-stone-200" style={{color: '#5d4e37'}}>
                💫 Client Experiences
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'serif', color: '#2c1810'}}>
              Moments That Matter
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#5d4e37'}}>
              Every event tells a story. Here&apos;s what our clients say about their DeMix Cocktail Co experience 
              and how we helped make their celebrations truly unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-stone-200 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg" style={{backgroundColor: '#d4af37'}}>
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[testimonial.name.split(' ').length-1][0]}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg" style={{fontFamily: 'serif', color: '#2c1810'}}>{testimonial.name}</h4>
                  <p className="font-medium" style={{color: '#5d4e37'}}>{testimonial.event}</p>
                  <p className="text-sm" style={{color: '#d4af37'}}>{testimonial.location}</p>
                </div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{color: '#d4af37'}}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-center leading-relaxed" style={{color: '#6b7280'}}>
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cocktails Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-stone-100 px-6 py-3 rounded-full text-sm font-semibold border border-stone-200" style={{color: '#5d4e37'}}>
                🍸 Signature Creations
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6" style={{color: '#2c1810', fontFamily: 'serif'}}>
              Crafted With Precision
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#5d4e37'}}>
              Each cocktail is a work of art, blending premium spirits with fresh, locally-sourced ingredients
              to create unforgettable flavor experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Cocktail 1 - Classic Martini */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #d4af37'}}>
                    <svg className="w-16 h-16" style={{color: '#d4af37'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>Classic Martini</h3>
                  <p style={{color: '#5d4e37'}}>Premium gin, dry vermouth, garnished with olive or lemon twist</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Cocktail 2 - Old Fashioned */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #d4af37'}}>
                    <svg className="w-16 h-16" style={{color: '#d4af37'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>Old Fashioned</h3>
                  <p style={{color: '#5d4e37'}}>Aged bourbon, muddled sugar, aromatic bitters, orange peel</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Cocktail 3 - Signature Creation */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #8fbc8f'}}>
                    <svg className="w-16 h-16" style={{color: '#8fbc8f'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,18.5C15.5,18.5 19,16.86 19,15V13.5C19,15.36 15.5,17 12,17C8.5,17 5,15.36 5,13.5V15C5,16.86 8.5,18.5 12,18.5M12,2C8.5,2 5,3.64 5,5.5V9.5C5,11.36 8.5,13 12,13C15.5,13 19,11.36 19,9.5V5.5C19,3.64 15.5,2 12,2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>DeMix Signature</h3>
                  <p style={{color: '#5d4e37'}}>House-crafted blend with seasonal botanicals and artisan spirits</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Cocktail 4 - Seasonal Special */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #d4af37'}}>
                    <svg className="w-16 h-16" style={{color: '#d4af37'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>Seasonal Special</h3>
                  <p style={{color: '#5d4e37'}}>Rotating selection featuring fresh seasonal ingredients</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Cocktail 5 - Craft Mocktail */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #8fbc8f'}}>
                    <svg className="w-16 h-16" style={{color: '#8fbc8f'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,18H17V10.5L22,6L20.5,4.5L16,9H8L3.5,4.5L2,6L7,10.5V18M9,20V18H15V20A1,1 0 0,0 16,21H8A1,1 0 0,0 9,20Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>Craft Mocktails</h3>
                  <p style={{color: '#5d4e37'}}>Sophisticated alcohol-free options with complex flavors</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Cocktail 6 - Wine Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-rose-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#f8f8f8', border: '3px solid #d4af37'}}>
                    <svg className="w-16 h-16" style={{color: '#d4af37'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6,2V8H18V2M7,3H17V7H7V3M3,9V10A1,1 0 0,0 4,11H5L6,20A1,1 0 0,0 7,21H17A1,1 0 0,0 18,20L19,11H20A1,1 0 0,0 21,10V9H3Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#2c1810', fontFamily: 'serif'}}>Wine Service</h3>
                  <p style={{color: '#5d4e37'}}>Curated selection of premium wines and champagnes</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 bg-white rounded-2xl p-6 shadow-xl border border-stone-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#d4af37'}}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,18.5C15.5,18.5 19,16.86 19,15V13.5C19,15.36 15.5,17 12,17C8.5,17 5,15.36 5,13.5V15C5,16.86 8.5,18.5 12,18.5M12,2C8.5,2 5,3.64 5,5.5V9.5C5,11.36 8.5,13 12,13C15.5,13 19,11.36 19,9.5V5.5C19,3.64 15.5,2 12,2Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold" style={{color: '#2c1810'}}>Custom Cocktail Menu</div>
                <div className="text-sm" style={{color: '#5d4e37'}}>Tailored to your event and preferences</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: '#2c1810'}}>
        {/* Elegant background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl" style={{backgroundColor: '#d4af37'}}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl" style={{backgroundColor: '#8fbc8f'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: '#d4af37'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20">
              ✨ Let&apos;s Create Magic Together
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'serif'}}>
            Ready to Elevate
            <span className="block" style={{color: '#d4af37'}}>Your Celebration?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: '#f5f5f0'}}>
            Every exceptional event begins with a conversation. Let&apos;s discuss your vision and craft 
            a bespoke cocktail experience that will leave your guests with memories to treasure forever.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d4af37'}}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'serif'}}>Get In Touch</h3>
                <p style={{color: '#f5f5f0'}}>Let&apos;s start planning your perfect event</p>
              </div>
              <div className="space-y-4 text-center">
                <div style={{color: '#f5f5f0'}}>
                  <div className="font-semibold">Email</div>
                  <div className="text-lg">hello@demixcocktails.com</div>
                </div>
                <div style={{color: '#f5f5f0'}}>
                  <div className="font-semibold">Response Time</div>
                  <div>Within 2 hours during business hours</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#8fbc8f'}}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'serif'}}>What&apos;s Included</h3>
                <p style={{color: '#f5f5f0'}}>Every experience comes with</p>
              </div>
              <div className="space-y-3 text-center" style={{color: '#f5f5f0'}}>
                <div>✨ Complimentary consultation</div>
                <div>🍸 Custom cocktail menu design</div>
                <div>📋 Detailed event planning</div>
                <div>🛡️ Full liability coverage</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:hello@demixcocktails.com?subject=DeMix Cocktail Co - Event Inquiry"
              className="px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center transform hover:-translate-y-1"
              style={{backgroundColor: '#d4af37', color: 'white'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#b8941f'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#d4af37'}
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Start Your Consultation
            </a>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center backdrop-blur-sm"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              View Tech Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}