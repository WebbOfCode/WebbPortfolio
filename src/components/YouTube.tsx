'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface YouTubeVideo {
  id: string
  videoId: string // YouTube video ID for embedding
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  viewCount?: string
}

// Static placeholder videos - move out of component to avoid recreating on each render
const realVideos: YouTubeVideo[] = [
  {
    id: '1',
    videoId: 'HfuUdzAQMt8',
    title: 'Python MySQL Database Operations Demo',
    description: 'Demonstrates Python program interacting with MySQL database - setup, CRUD operations, error handling, and data management for supplier/parts/shipment system',
    thumbnail: '/api/placeholder/320/180',
    publishedAt: '2024-11-15T00:00:00Z',
    viewCount: '12',
  },
  {
    id: '2',
    videoId: 'VnFk7XomBAo',
    title: 'Milestone 3 CYBM 3350',
    description: 'Cybersecurity project milestone demonstrating advanced security implementations',
    thumbnail: '/api/placeholder/320/180',
    publishedAt: '2024-08-18T00:00:00Z',
    viewCount: '4',
  },
  {
    id: '3',
    videoId: 'ZnwqCxthF8o',
    title: 'Project Milestone 2 Ubuntu',
    description: 'Linux system administration and security configuration on Ubuntu',
    thumbnail: '/api/placeholder/320/180',
    publishedAt: '2024-08-18T00:00:00Z',
    viewCount: '14',
  },
  {
    id: '4',
    videoId: '_a-lc5xRkjs',
    title: 'Project Milestone 1',
    description: 'Initial cybersecurity project setup and network analysis',
    thumbnail: '/api/placeholder/320/180',
    publishedAt: '2024-07-18T00:00:00Z',
    viewCount: '15',
  },
  {
    id: '5',
    videoId: 'ZQRKpjgHf8E',
    title: 'FINAL PROJECT CISP 3240 Simple Chat Room (C programming language)',
    description: 'C programming final project - building a networked chat room application',
    thumbnail: '/api/placeholder/320/180',
    publishedAt: '2023-12-18T00:00:00Z',
    viewCount: '31',
  },
]

export default function YouTube() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call
    const fetchVideos = async () => {
      try {
        setLoading(true)
        // For now, use real video data
        // In production, you'd use: const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=6`)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate loading
        setVideos(realVideos)
      } catch (err) {
        setError('Failed to load videos')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-main">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-4">Content & Stories</h2>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-main">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-4">Content & Stories</h2>
          <p className="text-text-muted">Check out my content on YouTube</p>
          <a 
            href="https://www.youtube.com/@only1webbie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-6 py-3 bg-accent-gold hover:bg-accent-gold-dark text-black font-semibold rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit @only1webbie
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent mr-4"></div>
            <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-gold mb-4">Behind the Code</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Videos showing how stuff actually gets built. Projects, walkthroughs, and things I&apos;ve learned along the way.
          </p>
        </div>

        {/* Video Player */}
        {selectedVideo && (
          <div className="mb-12 bg-bg-elevated rounded-xl p-6 border border-border-default">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-text-primary">Now Playing</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-text-muted hover:text-accent-gold transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-bg-elevated rounded-lg overflow-hidden hover:bg-bg-main transition-colors duration-200 group cursor-pointer border border-border-default"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <div className="relative">
                <div className="aspect-video bg-slate-700 flex items-center justify-center relative">
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if YouTube thumbnail fails to load
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-bg-elevated/90 backdrop-blur-sm text-text-primary text-xs px-2 py-1 rounded border border-border-default">
                  {video.viewCount} views
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-text-primary font-bold text-base mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-text-muted text-sm line-clamp-2 mb-3">{video.description}</p>
                <p className="text-text-muted/70 text-xs">
                  {new Date(video.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.youtube.com/@only1webbie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-accent-gold hover:bg-accent-gold-dark text-black font-bold rounded-lg transition-colors duration-200 text-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to @only1webbie
          </a>
        </div>
      </div>
    </section>
  )
}