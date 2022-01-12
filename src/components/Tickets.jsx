import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import lollipop from './images/lolli_icon.png';

const Tickets = () => {
    const [value, onClickDay] = useState(new Date());
    const [hasClicked, setHasClicked] = useState(false);
    const [date, setDate] = useState(new Date());

    const display = () => {
        if (hasClicked === false) {
            setHasClicked(true);
            // console.log(hasClicked)
            // console.log(value);
        }
    }

    return (
        <div className="flex md:flex-col lg:flex-row justify-around bg-red-200 py-20">
            <div className="w-1/2">
                <div className="flex flex-row justify-center">
                    <img src={lollipop} alt="Lollipop icon" />
                    <h1 className="text-pink-600 text-center text-3xl py-10 ">Tickets and Available Slots</h1>
                    <img src={lollipop} alt="Lollipop icon" />
                </div>
                <Calendar className="m-auto md:w-full lg:w-2/3 p-10 !important"
                    onChange={setDate}
                    onClick={display()}
                    value={date}
                />
            </div>
            {
                hasClicked &&
                <div className="flex flex-col bg-white p-10 w-1/3 m-auto border border-0 border-black">
                    <h2 className="text-pink-600 pb-10">Available slots for &nbsp; <span className="font-bold text-lg">{date.toDateString()}</span></h2>
                    <div className="flex justify-between md:flex-col gap-3 lg:flex-row">
                        <p className="bg-red-200 p-2 rounded-2xl hover:bg-pink-600 hover:text-white cursor-pointer">11:30 AM</p>
                        <p className="bg-red-200 p-2 rounded-2xl hover:bg-pink-600 hover:text-white cursor-pointer">12:30 PM</p>
                        <p className="bg-red-200 p-2 rounded-2xl hover:bg-pink-600 hover:text-white cursor-pointer">1:30 PM</p>
                        <p className="bg-red-200 p-2 rounded-2xl hover:bg-pink-600 hover:text-white cursor-pointer">2:30 PM</p>
                        <p className="bg-red-200 p-2 rounded-2xl hover:bg-pink-600 hover:text-white cursor-pointer">4:30 PM</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Tickets;