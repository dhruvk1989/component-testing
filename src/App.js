import './App.css';
import { CiSearch } from "react-icons/ci";
import { LuTextCursor } from "react-icons/lu";
import { useState } from 'react';

function App() {

  const [clicked, setClicked] = useState(false)
  const [expand, setExpand] = useState(false)
  const [value, setValue] = useState('')

  const dataSource = [
    {"name":"Dhruv"},
    {"name":"Chiranjeev"},
    {"name":"Salah"},
    {"name":"Aniket"},
    {"name":"Sanjay"},
    {"name":"Achintya"},
    {"name":"Kushal"}
  ]

  const myComponentList = dataSource.map((item, index) => (
    <li onClick={() => setValue(item.name)} className='p-2 hover:bg-gray-300 hover:rounded-lg' key={index}>{item.name}</li>
  ));

  return (
    <div className='bg-gradient-to-t'>
      
      <div className='relative mx-5 mt-5 border-2 rounded-lg flex items-center p-1 w-1/2'>
        <CiSearch
          className={`absolute duration-200 transform transition-all ${clicked ? 'scale-0' : 'scale-125'}`}
          onClick={() => setClicked(!clicked)}
        />
        <LuTextCursor
          className={`absolute duration-200 transform transition-all ${clicked ? 'scale-100' : 'scale-0'}`}
          onClick={() => setClicked(!clicked)}
        />
        <input value={value} onBlur={() => {setExpand(false); setClicked(false)}} onFocus={() => {setExpand(true); setClicked(true)}} className='w-full ml-6 outline-none' placeholder='Search' />       
      </div>

      <div className={`h-1/4 overflow-y-auto ${expand ? 'translate-y-2' : 'opacity-0'} absolute duration-300 transform transition-all rounded-lg border-2 w-1/2 p-1 mx-5`}>
          <ul>
            {myComponentList}
          </ul>
      </div>
      
    </div>
  );
  
}

export default App;
