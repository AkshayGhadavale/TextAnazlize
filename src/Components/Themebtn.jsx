import React,{useEffect, useState} from 'react'
import useText from '../Context/TextContext';

const Themebtn = () => {
    
    const { themeMode, darkTheme, lightTheme } = useText();
    const [themetext,setthemetext]=useState('Light')

    const onChangeBtn = (e) => {
      const darkModeStatus = e.currentTarget.checked;
      if (darkModeStatus) {
        darkTheme();
        setthemetext('Light')
      } else {
        lightTheme();
        setthemetext('Dark')
      }
    };



  return (
    <div className="relative flex items-center justify-between cursor-pointer mx-4">

    <label className='relative flex items-center justify-between cursor-pointer'>
        <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={onChangeBtn}
            checked={themeMode === "dark"}
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:after:bg-gray-600 dark:after:border-gray-800 peer-checked:bg-black"></div>

        <span className="text-xl font-semibold text-black dark:text-white ml-3">{themetext} Mode</span>
    </label>

</div>


  )
}

export default Themebtn