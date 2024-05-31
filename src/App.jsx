import { useState ,useEffect} from 'react'

import './App.css'
import Textarea from './Components/Textarea'
import Themebtn from './Components/Themebtn'
import { TextProvider } from './Context/TextContext'

function App() {
  const [themeMode, setthemeMode] = useState('dark')
  const [textinput, setTextinput] = useState('');


  const lightTheme = ()=>{
    setthemeMode("light")
  }

  const darkTheme = ()=>{
    setthemeMode("dark")

  }

  useEffect(() => {

    document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])

  return (
    <TextProvider value={{themeMode,lightTheme,darkTheme,textinput,setTextinput}}>
    <div className='w-full h-screen bg-gray-500 p-4'>
      <Themebtn/>
     
<Textarea/>

 
    </div>
    </TextProvider>
  )
}

export default App
