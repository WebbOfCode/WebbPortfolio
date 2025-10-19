'use client'

import { useState, useEffect } from 'react'
import { getFeatureFlags, updateFeatureFlags } from '@/config/features'

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [flags, setFlags] = useState(() => getFeatureFlags())

  // Update flags when component mounts or becomes visible
  useEffect(() => {
    if (isOpen) {
      setFlags(getFeatureFlags())
    }
  }, [isOpen])

  const toggleFlag = (flagName: keyof ReturnType<typeof getFeatureFlags>) => {
    const currentFlags = getFeatureFlags()
    const newFlagValue = !currentFlags[flagName]
    
    // Update localStorage and get the updated flags
    const updatedFlags = updateFeatureFlags({ [flagName]: newFlagValue })
    setFlags(updatedFlags)
    
    // Force a page reload to apply changes
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 border border-green-500/50 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-mono text-green-400">Admin Panel</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-300 font-mono">Feature Flags:</div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-black/50 rounded border border-gray-700">
              <div>
                <div className="text-green-400 font-mono text-sm">Bartender Services</div>
                <div className="text-xs text-gray-400">Show/hide bartender page and button</div>
              </div>
              <button
                onClick={() => toggleFlag('showBartenderServices')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  flags.showBartenderServices ? 'bg-green-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    flags.showBartenderServices ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 font-mono">
            * Changes require page reload to take effect
          </div>
        </div>
      </div>
    </div>
  )
}