import React from "react";
import './offers.css'

import { MdKingBed } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { IoFastFood } from 'react-icons/io5'
import { TiWeatherShower } from 'react-icons/ti'
import { MdLocationOn } from 'react-icons/md'
import { IoIosStarHalf } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img14 from '../../Assets/img14.jpg'

const Offer = [
  {
    id: 1,
    imgSrc: img11,
    destTitle: "Residency",
    location: "Coimbaore",
    price: 2000
  },
  {
    id: 2,
    imgSrc: img12,
    destTitle: "Residency",
    location: "Chennai",
    price: 2500
  },
  {
    id: 3,
    imgSrc: img14,
    destTitle: "Residency",
    location: "Madurai",
    price: 1580
  }
]

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>
            Choose your place with our current special discounts
          </p>
        </div>

        <div className="mainContent grid">
          {Offer.map(({ id, imgSrc, destTitle, location, price }) => (
            <div key={id} className="singleOffer">
              <img src={imgSrc} alt="Hotels" />
              <span className="discount">
                5% Off
              </span>

              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    ₹{price}
                  </h4>
                  <span className="status">
                    For Rent
                  </span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>

                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-fi</small>
                  </div>

                  <div className="singleAmenity flex">
                    <IoFastFood className="icon" />
                    <small>5% off</small>
                  </div>

                  <div className="singleAmenity flex">
                    <TiWeatherShower className="icon" />
                    <small>AC</small>
                  </div>
                </div>
              </div>
              <div className="location flex">
                <MdLocationOn className="icon" />
                <small>{location}</small>
              </div>
              <div className="star rating">
                {[...Array(4)].map((_, i) => (
                  <IoIosStarHalf key={i} className="icon" />
                ))}
              </div>
              <div className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Offers



