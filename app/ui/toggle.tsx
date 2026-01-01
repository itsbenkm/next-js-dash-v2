'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load persisted theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Apply + persist theme on change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-3 py-2 rounded-md border text-sm text-primaryActive hover:bg-gray-100"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
