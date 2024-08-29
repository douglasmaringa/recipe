'use client'
import React, {useEffect, useState}  from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';

function Page() {
  const [name, setName] = useState('beef');
  const [data, setData] = useState(null);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
        console.log(res)
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false)
    };

    fetchData();
  }, [name]);

  return (
    <div>
      <Header />
      <Search setName={setName} setData={setData} />
      <div className='flex items-center justify-center p-10'>
        <div className='flex flex-wrap flex-col lg:flex-row items-center gap-5'>
          {
            loading && <h1 className='text-2xl font-semibold text-center mx-4 text-gray-500'>Loading...</h1>
          }
          {
            !loading &&  
            <>
            {data?.meals?.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
            </>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Page;
