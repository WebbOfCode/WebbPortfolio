# How to Fix Your YouTube Video Links

## Problem
The YouTube videos on your tech portfolio are currently showing placeholder videos instead of your actual @only1webbie channel videos.

## Solution
Replace the placeholder video IDs with your actual YouTube video IDs.

### Steps to Get Your Video IDs:

1. Go to your YouTube channel: https://youtube.com/@only1webbie
2. Click on each of your videos
3. Copy the video ID from the URL (the part after `watch?v=`)

For example, if your video URL is: `https://youtube.com/watch?v=ABC123XYZ`
The video ID is: `ABC123XYZ`

### Files to Update:

**File:** `src/components/YouTube.tsx`

**Find these lines (around line 22-45) and replace:**

```tsx
videoId: "YOUR_VIDEO_ID_1", // REPLACE: "Milestone 3 CYBM 3350"
videoId: "YOUR_VIDEO_ID_2", // REPLACE: "Project Milestone 2 Ubuntu"
videoId: "YOUR_VIDEO_ID_3", // REPLACE: "Project Milestone 1"
videoId: "YOUR_VIDEO_ID_4", // REPLACE: "FINAL PROJECT CISP 3240 Simple Chat Room"
```

**Replace with your actual video IDs like:**
```tsx
videoId: "dQw4w9WgXcQ", // Your actual video ID for Milestone 3
videoId: "abc123defgh", // Your actual video ID for Ubuntu project
videoId: "xyz789uvwxy", // Your actual video ID for Milestone 1
videoId: "123abc456de", // Your actual video ID for Chat Room project
```

### After Making Changes:
1. Save the file
2. The videos should now embed correctly on your portfolio
3. Test by visiting your portfolio and clicking on the video cards

## What Was Added to Your Bartender Page:
✅ Beautiful cocktail gallery with 6 signature creations
✅ Elegant card designs matching your DeMix Cocktail Co branding
✅ Hover effects and professional styling
✅ Custom cocktail menu callout section

The cocktail gallery includes:
- Classic Martini
- Old Fashioned
- DeMix Signature (your custom creation)
- Seasonal Special
- Craft Mocktails
- Wine Service

Each card uses your brand colors (#d4af37 gold, #8fbc8f sage green) and maintains the sophisticated aesthetic.