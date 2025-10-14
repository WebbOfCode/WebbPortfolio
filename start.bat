@echo off
cls
echo ============================================
echo    Demarick Webb-Rivera Portfolio
echo    Starting Development Server...
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

echo Starting Next.js development server...
echo Your portfolio will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

npm run dev

pause