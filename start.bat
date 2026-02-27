@echo off
setlocal enabledelayedexpansion
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

REM Install Python requirements only if requirements.txt changed
set "REQ_FILE=requirements.txt"
set "REQ_HASH_FILE=.requirements.sha256"

if exist "%REQ_FILE%" (
    set "CURRENT_REQ_HASH="
    for /f "tokens=1" %%H in ('certutil -hashfile "%REQ_FILE%" SHA256 ^| findstr /R "^[0-9A-F][0-9A-F]"') do (
        set "CURRENT_REQ_HASH=%%H"
        goto :got_hash
    )

    :got_hash
    set "PREV_REQ_HASH="
    if exist "%REQ_HASH_FILE%" set /p PREV_REQ_HASH=<"%REQ_HASH_FILE%"

    if /I "!CURRENT_REQ_HASH!"=="!PREV_REQ_HASH!" (
        echo Python requirements unchanged. Skipping pip install.
        echo.
    ) else (
        where py >nul 2>&1
        if !errorlevel! == 0 (
            set "PIP_CMD=py -m pip"
        ) else (
            where python >nul 2>&1
            if !errorlevel! == 0 (
                set "PIP_CMD=python -m pip"
            ) else (
                echo Python not found. Skipping requirements install.
                echo.
                goto :after_python_requirements
            )
        )

        echo Installing Python requirements from %REQ_FILE%...
        !PIP_CMD! install --disable-pip-version-check -r "%REQ_FILE%"
        if errorlevel 1 (
            echo Failed to install Python requirements.
            exit /b 1
        )

        >"%REQ_HASH_FILE%" echo !CURRENT_REQ_HASH!
        echo Python requirements installed.
        echo.
    )
)

:after_python_requirements

echo Starting Next.js development server...
echo Your portfolio will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

npm run dev

pause