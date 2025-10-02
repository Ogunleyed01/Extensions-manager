import React, {useState} from 'react';
import {extensions as initialData} from "../data/extensions"
import ExtensionCard from './ExtensionCard';

const ExtensionsList = () => {
    const [extensions, setExtensions] = useState(initialData);
    const [filter, setFilter] = useState("All");

     // Handle toggle switch
  const handleToggle = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  // Handle remove
  const handleRemove = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  // Filtered extensions
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "Active") return ext.active;
    if (filter === "Inactive") return !ext.active;
    return true; // All
  });


  return (
     <div className="">
      
      <div className='flex flex-col items-center lg:flex-row sm:items-center lg:justify-between'>
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Extensions List</h1>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
            {["All", "Active", "Inactive"].map((f) => (
            <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 border-[0.1px] font-bold text-lg border-gray-800/20 rounded-3xl transition cursor-pointer ${
                filter === f
                    ? "bg-amber-800 text-white dark:text-black border-transparent"
                    : "bg-slate-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-slate-600"
                }`}
            >
                {f}
            </button>
            ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.length > 0 ? (
          filteredExtensions.map((ext) => (
            <ExtensionCard
              key={ext.id}
              icon={ext.icon}
              name={ext.name}
              desc={ext.desc}
              active={ext.active}
              onToggle={() => handleToggle(ext.id)}
              onRemove={() => handleRemove(ext.id)}
            />
          ))
        ) : (
          <p className="opacity-70">No extensions found.</p>
        )}
      </div>
    </div>
  );
}

export default ExtensionsList
