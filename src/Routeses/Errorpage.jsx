import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <div className="text-center space-y-4 mt-10">
                <h1></h1>
            <h1 className="text-accent text-3xl md:text-4xl lg:text-5xl">404/Page Not Found</h1>
            <h1><Link to={'/'} className="btn btn-accent rounded-2xl">Go Back Home</Link></h1>
            </div>
            
        </div>
    );
};

export default Errorpage;