import React from "react";
import './about.css'

import { MdKingBed } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { IoFastFood } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Assets/img13.jpg'

const About = () => {
    return (
        <section className='about container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className='secTitle'>
                        Bus Booking
                    </h2>
                    <p>
                        Learn more about our bus booking services and offers.
                    </p>
                </div>

                <div className="mainContent grid">
                    <div className="singleOffer">
                        <img src={img} alt="Buses" />
                        <span className="discount">
                            10% Off
                        </span>
                    </div>

                    <div className="offerBody">
                        <div className="price flex">
                            <h4>
                                ₹1500
                            </h4>
                            <span className="status">
                                For Booking
                            </span>
                        </div>

                        <div className="amenities flex">
                            <div className="singleAmenity flex">
                                <MdKingBed className="icon" />
                                <small>Seats Available</small>
                            </div>

                            <div className="singleAmenity flex">
                                <FaWifi className="icon" />
                                <small>Wi-fi</small>
                            </div>

                            <div className="singleAmenity flex">
                                <IoFastFood className="icon" />
                                <small>Refreshments</small>
                            </div>

                            <div className="singleAmenity flex">
                                <TbAirConditioning className="icon" />
                                <small>1Sleeper + AC</small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="location flex">
                <MdLocationOn className="icon" />
                <small>Bus Station Location</small>
            </div>
            <div className="star rating">
                {[...Array(5)].map((_, i) => (
                    <IoIosStarHalf key={i} className="icon" />
                ))}
            </div>
            <div className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
            </div>

        </section>
    )
}
export default About;