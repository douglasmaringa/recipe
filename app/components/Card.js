import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card() {
  return (
    <Link href='/recipe/1'>
    <div className='max-w-sm border-2 border-gray-300 cursor-pointer hover:border-black'>
        <Image src='https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg' width={350} height={250}/>
        <h1 className='bg-white py-4 text-gray-500 font-semibold text-2xl text-center'>Beef Pie</h1> 
    </div>
    </Link>
  )
}

export default Card