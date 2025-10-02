import React, { useEffect, useState } from 'react'
import iconSun from '../assets/images/icon-sun.svg'
import iconMoon from '../assets/images/icon-moon.svg'

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
  },[isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }
  return (
    <div className='w-full h-20 mb-5 flex items-center justify-between p-4 rounded-2xl sticky top-0 z-50 bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md backdrop-filter border-[0.1px] border-gray-800/10 dark:border-gray-100/10 shadow-sm'>
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 flex justify-center items-center">
          {/* <img src={logo} alt="Logo" className="w-full h-full object-contain" /> */}
          <i className='bx bxl-react text-5xl  text-amber-800'></i>
        </div>
        <h1 className="text-3xl font-semibold text-gray-900/90 dark:text-white/90">Extensions</h1>
      </div>
      <button 
        onClick={toggleDarkMode}
        className="p-2  transition-colors cursor-pointer">
        <img 
          src={isDark ? iconSun : iconMoon} 
          alt="Theme toggle" 
          className="h-12 w-12 p-2 border-[0.1px] font-bold hover:bg-slate-700/30 rounded-lg text-lg border-gray-800/20 dark:border-gray-100/20" 
        />
      </button>
    </div>
  )
}

export default Header
