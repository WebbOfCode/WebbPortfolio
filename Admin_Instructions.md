# Admin Features Instructions

## How to Show/Hide Bartender Page

### Accessing Admin Panel:
1. **Click 5 times** on the small `$` terminal icon next to your logo in the navigation bar
2. The icon will turn yellow as you click to show progress
3. After 5 clicks, the Admin Panel overlay will open
4. If you stop clicking, the counter resets after 2 seconds

### Toggle Bartender Services:
1. In the Admin Panel, you'll see "Bartender Services" with a toggle switch
2. Click the toggle to enable/disable the bartender page
3. When disabled (OFF):
   - The "Bartender Services" button disappears from the homepage
   - Direct access to `/bartender` redirects to homepage
4. When enabled (ON):
   - The "Bartender Services" button appears on homepage
   - The bartender page is accessible

### Current Status:
- **Bartender Services: DISABLED** (hidden by default)
- The page and button are currently hidden as requested
- Settings are saved in browser localStorage and persist between visits
- Once enabled, it stays enabled until you manually turn it off

### Feature Flag Location:
If you want to change the default setting permanently, edit:
`src/config/features.ts` and change `showBartenderServices: false` to `true`

### Notes:
- Changes are **permanently saved** to your browser's localStorage
- Page reloads automatically after toggling to apply changes
- Settings persist across browser sessions until manually changed
- The admin panel is intentionally subtle to keep it professional
- Only you know to click the `$` icon 5 times to access it
- The icon turns yellow to show click progress
- Counter resets if you stop clicking for 2 seconds

## When Ready to Launch:
Simply use the admin panel to toggle the bartender services ON, or change the default in the config file.