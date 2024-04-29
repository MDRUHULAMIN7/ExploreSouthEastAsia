
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

import { Link, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider.jsx/AuthProvider';
import SpotCard from './SpotCard';
import About from './About';
import Blog from './Blog';
import Countries from './Countries';


const Home = () => {
    const{user} = useContext(AuthContext)

    const spots = useLoaderData()

    const news = spots.slice(0,6);
    const tours = spots.slice(0,8);
   
    return (
        <div id="slidehome" className=''>
   

         <Swiper className='h-screen '
          modules={[Autoplay,Navigation, Pagination,  A11y]}
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
       pagination={{ clickable: true }}
      
     
      
    >
      {/*  */}
      <SwiperSlide><div className=" hero  bg-cover h-screen bg-no-repeat bg-[url('https://i.ibb.co/Yj94wdH/mamun-srizon-qay3l-NDSHzc-unsplash.jpg')]">

        <div className='hero-overlay bg-opacity-60 lg:pl-20 pl-10 pt-40 space-y-3'>
            <h1 className='md:text-5xl text-3xl  text-white'>Explore The Natural <br /> Beauty of Bangladesh With <br />
        <div className='text-rose-500 mt-4'>ExploreTheSouthEastAsia</div>
        <div className='mt-2'><p className="text-xl font bold text-slate-400">We always try our best for your best journey</p></div></h1>
        <div>
          {
user? <p className='text-xl font-bold text-rose-500'>Wellcome {user.displayName}</p>: <Link className='text-rose-50 bg-rose-500 rounded-xl px-3 p-2' to={'/signin'}>SignIn To Explore</Link>
          }
        </div>
      
        </div></div></SwiperSlide>
        {/*  */}

      <SwiperSlide><div className=" bg-cover bg-no-repeat h-screen bg-[url('https://i.ibb.co/nmVwFS1/esmonde-yong-9-B08udu-My-Y-unsplash.jpg')]"> <div className='hero-overlay bg-opacity-60 lg:pl-20 pl-10 pt-40 space-y-3'>
            <h1 className='md:text-5xl text-3xl text-white'>Explore The Excitment of <br /> Future of Malayshia With <br />
        <div className='text-rose-500 mt-4'>ExploreTheSouthEastAsia</div>
        <div className='mt-2'><p className="text-xl font bold text-indigo-200">We always try our best for your best journey</p></div></h1>
        <div>
          {
user? <p className='text-xl font-bold text-rose-500'>Wellcome {user.displayName}</p>: <Link className='text-rose-50 bg-rose-500 rounded-xl px-3 p-2' to={'/signin'}>SignIn To Explore</Link>
          }
        </div>
      
        </div></div></SwiperSlide>
        {/*  */}

      <SwiperSlide><div className=" bg-cover bg-no-repeat h-screen bg-[url('https://i.ibb.co/S0DsB4J/andrea-cau-n-V6-GJm-Sq3zc-unsplash.jpg')]"> <div className='hero-overlay bg-opacity-60 lg:pl-20 pl-10 pt-40 space-y-3'>
            <h1 className='md:text-5xl text-3xl text-white'>Explore The Fantasy <br /> Life of Bangkok With <br />
        <div className='text-rose-500 mt-4'>ExploreTheSouthEastAsia</div>
        <div className='mt-2'><p className="text-xl font bold text-gray-200">We always try our best for your best journey</p></div></h1>
        <div>
          {
user? <p className='text-xl font-bold text-rose-500'>Wellcome {user.displayName}</p>: <Link className='text-rose-50 bg-rose-500 rounded-xl px-3 p-2' to={'/signin'}>SignIn To Explore</Link>
          }
        </div>
      
        </div></div></SwiperSlide>
        {/*  */}

      <SwiperSlide><div className=" bg-cover bg-no-repeat h-screen bg-[url('https://i.ibb.co/F4yt1P9/rowan-heuvel-SPhq-G6-Kir-QM-unsplash.jpg')]"> <div className='hero-overlay bg-opacity-60 lg:pl-20 pl-10 pt-40 space-y-3'>
            <h1 className='md:text-5xl text-3xl text-white'>Explore The Night <br /> Beauty of Combodia With <br />
        <div className='text-rose-500 mt-4'>ExploreTheSouthEastAsia</div>
        <div className='mt-2'><p className="text-xl font bold text-slate-400">We always try our best for your best journey</p></div></h1>
        <div>
          {
user? <p className='text-xl font-bold text-rose-500'>Wellcome {user.displayName}</p>: <Link className='text-rose-50 bg-rose-500 rounded-xl px-3 p-2' to={'/signin'}>SignIn To Explore</Link>
          }
        </div>
      
        </div></div></SwiperSlide>
    
      ...
    </Swiper>
    {/* spots */}
    <div className='mt-10 '>
      <h1 className='mb-5 text-3xl lg:text-5xl md:text-4xl text-center'>Tourists Spots </h1>
      <div className=' mx-4 pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        {
          news.map(spot=> <SpotCard spot={spot} key={spot._id}></SpotCard>)
        }
      </div>
    </div>

    {/* countries */}
    <div>
<Countries></Countries>
    </div>
    {/* blogs */}
    <div>
      <Blog tours={tours }></Blog>
    </div>
    <div className=' mx-4 mt-5'>
      <About></About>
    </div>
        </div>
    );
};

export default Home;