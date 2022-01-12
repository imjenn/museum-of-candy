import 'font-awesome/css/font-awesome.min.css';
import lolli_icon from './images/lolli_icon.png';

const Footer = () => {
    return (
        <div className="bg-red-200 flex lg:flex-row md:flex-col w-full justify-around p-14">
            <div className="flex flex-col justify-between">
                <h1 className="text-pink-600 text-2xl">MUSEUM OF CANDY</h1>
                <h2 className="text-white">Don't miss out on sweet events and popups near you!</h2>
                <form className="flex flex-row justify-between">
                    <input className="rounded-full px-4 py-1 w-9/12" type="text" placeholder="Email Address" />
                    <button className="bg-pink-600 text-white rounded-full px-4 py-1 hover:bg-pink-500 transition duration-400">Sign Up</button>
                </form>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="text-pink-600 ">STAY CONNECTED</h1>
                <div className="flex flex-row">
                    <h2 className="flex self-center text-white">Connect with us!</h2>
                    <img className="w-10 " src={lolli_icon} alt=""/>
                </div>        
                <ul className="flex flex-row w-4/5 justify-between">
                    <li><a href="#"><i className="fa fa-facebook text-pink-600" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram text-pink-600" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest text-pink-600" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter text-pink-600" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="text-left">
                <h2 className="text-pink-600">COMPANY</h2>
                <ul>
                    <li><a href="" className="text-white hover:text-pink-600">CONTACT</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">CAREERS</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">PRESS</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">FAQS</a></li>
                </ul>
            </div>
            <div>
            <h2 className="text-pink-600">LOCATIONS</h2>
                <ul>
                    <li><a href="" className="text-white hover:text-pink-600">SAN FRANCISCO, CA</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">MANHATTAN, NY</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">LOS ANGELES, CA</a></li>
                    <li><a href="" className="text-white hover:text-pink-600">MIAMI, FL</a></li>
                </ul>   
            </div>
        </div>
    )
}

export default Footer;