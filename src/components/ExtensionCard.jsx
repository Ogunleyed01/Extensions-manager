import React from 'react'
import ToggleSwitch from './ToggleSwitch'

const ExtensionCard = ({ icon, name, desc, active, onToggle, onRemove }) => {
  return (
    <>
      <div className='w-full h-55 flex flex-col justify-between bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl shadow-md border-[0.1px] border-gray-50/20 transition'>
        <div className='flex gap-2 items-start'>
          <div className='w-20 h-20'>
            <img src={icon} alt={name} />
          </div>
         <div className='pl-2'>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {name}
            </h3>
            <p className='text-lg mt-1 text-gray-800 dark:text-gray-200'>
              {desc}
            </p>
         </div>
        </div>

        <div className='flex items-center justify-between'>
            <button
                onClick={onRemove}
                className='px-3 py-1 text-sm  text-gray-800 dark:text-gray-100 border-[0.1px] border-gray-800/30 dark:border-gray-100/30 rounded-3xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
            >
                Remove
            </button>

            <ToggleSwitch 
                isOn={active}
                handleToggle={onToggle}
            />

        </div>
      </div>
    </>
  )
}

export default ExtensionCard
