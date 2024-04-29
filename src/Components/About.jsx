
import { Fade } from "react-awesome-reveal";
const About = () => {

    

    return (
        <div id="slideabout" className='mx-4 pt-5'>
            <div className="mt-5">
            <Fade direction="up">
            <h1 className="text-center font-semibold lg:text-5xl md:text-3xl text-2xl mb-3">About Us </h1>
</Fade>

               
                <h1 className="w-3/5 mx-auto text-base text-center mb-4">ExploreTheSoutheastAsia, a travelers paradise, boasts stunning landscapes, vibrant cultures, and rich history. From majestic temples to pristine beaches, explore the wonders!</h1>

                <div className="md:flex gap-7 w-3/5 mx-auto">
                   
                    <div className="w-1/2 md:text-right text-center space-y-3">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">Our Mission</h1>
                        <p>Showcase breathtaking beauty, preserve heritage, and create unforgettable experiences for global travelers.</p>
                    </div>

                    <div  className="space-y-2">
                    <h1 className="text-2xl font-semibold">Our Vission</h1>
                        <p>Become the top destination, celebrated for authenticity, hospitality, and sustainable tourism practices.</p>
                    </div>
                    </div>
                    <div className="w-1/2 md:text-left text-center space-y-3">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">PRINCIPLES</h1>
                        <p>Respect local customs, conserve nature, empower communities, and foster cross-cultural understanding for memorable and ethical travel</p>
                    </div>

                    <div  className="space-y-2">
                    <h1 className="text-2xl font-semibold">Our History</h1>
                        <p>Enriched by ancient civilizations, colonial legacies, and modern transformations, offering a tapestry of cultural heritage.</p>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default About;