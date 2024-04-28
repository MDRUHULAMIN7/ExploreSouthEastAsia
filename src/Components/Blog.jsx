import { Typewriter } from 'react-simple-typewriter'


import Tour from './Tour';

const Blog = ({tours }) => {
    const handleDone = () => {
        console.log(`Done after 50 loops!`)
      }
    return (
        <div>
                <div className='App text-center text-3xl lg:5xl md:4xl'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Explore Our Tours Of{' '}
        <span className='text-rose-400' >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Bangladesh', 'Thailand', 'Malaysia', 'Indonesia','Vietnam','Combodia']}
            loop={8}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </div>

    <div className='mt-10'>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-8 mt-10'>
        {
    tours.map(tour=><Tour key={tour._id} tour={tour}></Tour>)
}
        </div>

    </div>
        </div>
    );
};

export default Blog;