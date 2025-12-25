# Modern ↔ RetroConsole Verification Checklist

## Objective & Testable Requirements

### ✅ Theme System
- [ ] **Mode Switch**: Toggle between modern/retro themes works
- [ ] **Theme Persistence**: Theme preference saved to localStorage
- [ ] **Theme Attribute**: `data-theme` attribute correctly set on `<html>`
- [ ] **CSS Variables**: Modern and retro themes have distinct CSS variables
- [ ] **Reduced Motion**: Respects `prefers-reduced-motion` media query

### ✅ Console Frame (Retro Mode)
- [ ] **Silver Xbox-style Frame**: Multi-layer bevel with gradients
- [ ] **Pseudo-elements**: `::before` and `::after` elements present and styled
- [ ] **Gradient Background**: Frame uses gradient (not solid color)
- [ ] **Multiple Shadows**: Frame has outer + inset box-shadows
- [ ] **Corner Accents**: All four corner accents visible

### ✅ Tab System
- [ ] **Tab Navigation**: 5 tabs (Home/Projects/Skills/About/Contact) present
- [ ] **Single Panel Display**: Only one tab panel visible at a time
- [ ] **Tab Switching**: Clicking tabs switches content correctly
- [ ] **Active Tab State**: Visual indication of active tab
- [ ] **Tab Persistence**: Active tab saved to sessionStorage

### ✅ Viewport Scrolling
- [ ] **Retro Mode**: Body doesn't scroll, viewport container scrolls
- [ ] **Modern Mode**: Normal body scrolling works
- [ ] **Overflow Settings**: Viewport has proper overflow (auto/scroll)
- [ ] **Scroll Isolation**: Retro mode prevents body scroll

### ✅ Accessibility (ARIA)
- [ ] **Tablist Role**: Container has `role="tablist"`
- [ ] **Tab Roles**: All tabs have `role="tab"`
- [ ] **Panel Roles**: All panels have `role="tabpanel"`
- [ ] **ARIA Selected**: Active tab has `aria-selected="true"`
- [ ] **ARIA Controls**: Tabs link to panels with `aria-controls`
- [ ] **ARIA Labelledby**: Panels reference tabs with `aria-labelledby`

### ✅ Keyboard Navigation
- [ ] **Arrow Keys**: Left/Right arrows cycle through tabs
- [ ] **Home/End**: Home jumps to first tab, End to last tab
- [ ] **Enter/Space**: Activates focused tab
- [ ] **Focus Management**: Focus moves correctly between tabs
- [ ] **Focus Ring**: Visible focus indicator on focused tabs
- [ ] **Tab Order**: Logical tab order in navigation sequence

### ✅ Visual Sanity
- [ ] **Console Frame Gradient**: Non-solid background with gradients
- [ ] **Console Frame Shadows**: Multiple box-shadows present
- [ ] **Viewport Overflow**: Scrollable viewport in retro mode
- [ ] **Theme Distinction**: Clear visual difference between themes
- [ ] **Responsive Design**: Works on mobile and desktop

## Expected Console Messages

### ✅ Passing State
```
✓ All verification checks passed
✓ Theme system working correctly
✓ Console frame properly styled
✓ Tab system functional
✓ Keyboard navigation working
✓ ARIA attributes valid
✓ Viewport scrolling correct
```

### ❌ Failing State
```
🚨 VERIFICATION FAILED: Body is scrolling in retro mode! Viewport should handle scrolling.
🚨 VERIFICATION FAILED: Multiple tab panels are visible simultaneously!
🚨 VERIFICATION FAILED: ARIA roles/attributes are missing or invalid!
🚨 VERIFICATION FAILED: Theme attribute is missing or incorrect!
🚨 VERIFICATION FAILED: Console frame pseudo-elements are not present!
🚨 VERIFICATION FAILED: Viewport does not have proper overflow settings!
🚨 VERIFICATION FAILED: Keyboard navigation is not working!
```

### ⚠️ Warnings
```
⚠️ VERIFICATION WARNING: Console frame background might not be a gradient
⚠️ VERIFICATION WARNING: Console frame might be missing multiple box-shadows
```

## Testing Instructions

1. **Enable Dev Mode**: Ensure `DEV_VERIFY = true` in `DevVerifier.tsx`
2. **Open Browser**: Navigate to your portfolio
3. **Check Overlay**: Green debug overlay should appear in top-right
4. **Toggle Themes**: Use theme toggle to switch between modes
5. **Test Navigation**: Click tabs and use keyboard navigation
6. **Verify Scrolling**: Test scrolling behavior in both modes
7. **Check Console**: Look for verification messages in browser console

## Manual Verification Steps

### Theme Toggle Test
1. Click theme toggle button
2. Verify overlay shows correct mode
3. Check localStorage for `portfolio-theme`
4. Verify `data-theme` attribute on `<html>`

### Tab Navigation Test
1. Click each tab
2. Verify only one panel visible
3. Check active tab styling
4. Verify sessionStorage updated

### Keyboard Navigation Test
1. Tab to navigation
2. Use Arrow keys to navigate
3. Press Enter/Space to activate
4. Verify focus ring visible

### Scrolling Test
1. Switch to retro mode
2. Try to scroll body (should not work)
3. Scroll within viewport (should work)
4. Switch to modern mode
5. Verify normal scrolling

### ARIA Test
1. Use screen reader or browser tools
2. Verify all ARIA attributes present
3. Check relationships between tabs and panels
