import React from 'react'
import Header from './components/Header'
import ExtensionsList from './components/ExtensionsList'

const App = () => {

  return (
    <div className="p-5 mx-auto min-h-screen bg-slate-200 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-white ">
      <div className='max-w-[1400px] mx-auto'>
        <Header />
        <ExtensionsList />
      </div>
    </div>
  )
}

export default App
