import React,{useState,useEffect,useContext} from 'react'
import useText from '../Context/TextContext'

const Textarea = () => {



    const { textinput, setTextinput } = useText();

    const handleTextChange = (e) => {
        e.preventDefault()
        setTextinput(e.target.value);
    };

const upper = ()=>{
  
    let uppar = textinput.toUpperCase();
    setTextinput(uppar)

}

const smaller =()=>{
    let smaller = textinput.toLowerCase();
    setTextinput(smaller)
}


const captilze = ()=>{
    
let cap = textinput.split(" ");



for(let i=0;i<cap.length;i++){

 cap[i]=cap[i][0].toUpperCase() + cap[i].substring(1);
}
setTextinput(cap.join(" "));
}



  return (
    <div>
    <div className="w-full mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 h-72 py-2 bg-white rounded-t-lg dark:bg-gray-800">
    
            <textarea id="comment" rows="4" className="w-full  h-64 px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
            value={textinput}
            onChange={handleTextChange} placeholder="Write a comment..."  required ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t bg-gray-300  dark:border-gray-600 dark:bg-gray-800">

            <h3 className='text-xl font-semibold text-black dark:text-white'>Count : {textinput.length}</h3>
            <button onClick={upper} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
               make Caps
            </button>
            <button onClick={smaller} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              make Small
            </button>
            <button onClick={captilze} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                Captilize
            </button>
           
        </div>
    </div>
</div>
  )
}

export default Textarea