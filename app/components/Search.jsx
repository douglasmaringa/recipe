'use client'
import React,{useState,useEffect} from 'react'

function Search({setName,setData}) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('chicken')

  const onSearch = async (e) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    console.log(res)
    if (!res.ok) {
      return;
    }
    const data = await res.json()
    setData(data)
    
  }

  return (
    <div className='flex items-center justify-center mt-20 mb-4'>
       <select value={category} onChange={(e)=>{
        setCategory(e.target.value)
        setName(e.target.value)
       
        }} className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Lamb">Lamb</option>
          <option value="Pork">Pork</option>
        </select>
        <h1 className='text-xl font-semibold text-center mx-4 text-gray-500'>OR</h1>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='search'/>
        <button onClick={onSearch} className='bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Search
        </button>
    </div>
  )
}

export default Search