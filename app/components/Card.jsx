import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card({meal}) {
  return (
    <Link href={`/recipe/${meal?.idMeal}`}>
    <div className='max-w-sm border-2 border-gray-300 cursor-pointer hover:border-black'>
        <Image src={meal?.strMealThumb} width={350} height={250} alt='meal image'/>
        <h1 className='bg-white py-4 text-gray-500 font-semibold text-2xl text-center'>{meal?.strMeal}</h1> 
    </div>
    </Link>
  )
}

export default Card