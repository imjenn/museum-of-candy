import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import jars from './images/jars.jpg';
import cafe from './images/cafe.jpg';

const About = () => {

    return (
        <div>
            <div className="bg-red-200 px-60 py-28 flex flex-row justify-between gap-20">
                <div className="w-1/3">
                    <div className="text-3xl text-center">
                        <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                    </div>
                    <p className="text-white text-center italic">"A great experience that will make you not want to leave!"</p>
                </div>
                <div className="w-1/3">
                    <div className="text-3xl text-center">
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                    </div>
                    <p className="text-white text-center italic">"Soo much candy you get to try! Will be returning again."</p>
                </div>
                <div className="w-1/3">
                    <div className="text-3xl text-center">
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                        <i className="fa fa-star text-yellow-400 " aria-hidden="true"></i>
                    </div>
                    <p className="text-white text-center italic">"The best popup I've been to!"</p>
                </div>
            </div>
            <div className="bg-red-200 px-8 py-12 w-full flex md:flex-col lg:flex-row justify-around">
                <div className="md:w-1/2 mb-10 flex flex-col m-auto lg:w-1/3">
                    <h1 className="flex text-white text-5xl justify-center my-12">MUSEUM<span className="text-pink-600">OF</span>CANDY</h1>
                    <p className="text-pink-500 italic text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem incidunt excepturi. Vel doloremque expedita voluptas consequuntur culpa dolores incidunt error ipsum. Eum tempora sapiente quas fuga minus perspiciatis possimus.</p>
                    <Link to="/tickets"><button className="bg-pink-600 text-white rounded-full px-4 py-2 flex m-auto mt-10 hover:bg-pink-500 transition duration-400">BUY TICKETS</button></Link>
                </div>
                <img className="md:w-2/3 m-auto lg:w-2/5" src={jars} alt="Jars of Cnady by Iwona Castiello d'Antonio on Unsplash" />
            </div>
            <div className="bg-red-200 py-12 w-full flex md:flex-col lg:flex-row justify-around">
                <img className="m-auto md:w-2/3 lg:w-2/5" src={cafe} alt="Pink cafe taken by Danielle Henderson from Unsplash" />
                <div className="flex flex-col mr-48">
                    <h1 className="flex text-white text-5xl justify-center my-12"><span className="text-pink-600">CANDY</span> CAFE &nbsp; <i class="fa fa-coffee" aria-hidden="true"></i></h1>
                    <p className="text-pink-500 italic mb-10 text-center">Come join us for sweet treats, refreshing drinks, and hot coffee at our cafe!</p>
                    <h2 className="text-pink-600 text-center my-4">HOURS</h2>
                    <div className="flex flex-row gap-20 flex justify-center">
                        <ul>
                            <li className="text-pink-500">Monday</li>
                            <li className="text-pink-500">Tuesday</li>
                            <li className="text-pink-500">Wednesday</li>
                            <li className="text-pink-500">Thursday</li>
                            <li className="text-pink-500">Friday</li>
                            <li className="text-pink-500">Saturday</li>
                            <li className="text-pink-500">Sunday</li>
                        </ul>
                        <ul>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">9:00AM - 6:00PM</li>
                            <li className="text-pink-500">-- CLOSED --</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;