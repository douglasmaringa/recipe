import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'

function Home() {
  return (
    <div>
       <Header/>
       <Search/>
       <div className='flex items-center justify-center p-10'>
             <div className='flex flex-wrap flex-col lg:flex-row items-center gap-5'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
       </div>
    </div>
  )
}

export default Home