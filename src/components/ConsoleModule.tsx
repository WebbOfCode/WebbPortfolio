'use client';

import React from 'react';

interface ConsoleModuleProps {
  title: string;
  status?: string;
  children: React.ReactNode;
  className?: string;
}

export function ConsoleModule({ title, status, children, className = '' }: ConsoleModuleProps) {
  return (
    <div className={`console-module ${className}`}>
      <div className="console-module-header">
        <h3>{title}</h3>
        {status && <span className="console-status">{status}</span>}
      </div>
      <div className="console-module-body">
        {children}
      </div>
    </div>
  );
}

interface ConsolePanelTitleProps {
  title: string;
  status?: string;
}

export function ConsolePanelTitle({ title, status }: ConsolePanelTitleProps) {
  return (
    <div className="console-panel-title">
      <h2>{title}</h2>
      {status && <span className="console-panel-status">{status}</span>}
    </div>
  );
}

interface ConsoleWellProps {
  children: React.ReactNode;
  className?: string;
}

export function ConsoleWell({ children, className = '' }: ConsoleWellProps) {
  return (
    <div className={`console-well ${className}`}>
      {children}
    </div>
  );
}
