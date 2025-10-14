@echo off
cls
echo ============================================
echo    Demarick Webb-Rivera Portfolio
echo    Building for Production...
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies first...
    npm install
    echo.
)

echo Building optimized production version...
npm run build

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo    BUILD SUCCESSFUL! ✓
    echo ============================================
    echo.
    echo Your portfolio is ready for deployment!
    echo.
    echo To test the production build locally:
    echo    npm run start
    echo.
    echo To deploy, upload the .next folder or
    echo connect your Git repo to Vercel/Netlify
    echo ============================================
) else (
    echo.
    echo ============================================
    echo    BUILD FAILED! ✗
    echo ============================================
    echo.
    echo Check the errors above and fix them.
    echo Common issues:
    echo - Unescaped quotes in JSX (use &apos;)
    echo - Missing imports or exports
    echo - TypeScript errors
    echo ============================================
)

echo.
pause