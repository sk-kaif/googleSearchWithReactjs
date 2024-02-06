import logo from '../assets/logoSearch.png'
import HomeHeader from './HomeHeader'
import SearchInput from './SearchInput'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='flex h-screen flex-col'>
      <HomeHeader />

      <main className='grow flex justify-center '>
        <div className="w-full  px-5 flex flex-col items-center mt-20">
          <img src={logo} alt="" className='w-44 md:w-[272px] mb-8'/>
          <SearchInput />
          <div className="flex gap-2 mt-8 text-[#3c40403]">
            <button className='h-9 px-4 text-sm rounded-md bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
              Google Search
            </button>
            <button className='h-9 px-4 text-sm rounded-md bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home