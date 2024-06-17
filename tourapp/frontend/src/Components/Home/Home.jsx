import React from 'react'
import './home.css'
const Home = () => {
    return(
        <section className='home'>
                <div className='secContainer container'>

                    <div className="homeText">

                        <h1 className="title">
                            Plan Your Trip With Travel FreeWings
                        </h1>

                        <p className="subTitle">
                            Travel to your favourite city with our website guidance
                        </p>

                        <button className='btn'>
                            <a href="#">Explore Now</a>
                        </button>
                    </div>

                    <div className='homeCard grid'>

                        <div className="locationDiv">
                            <label htmlFor="location">Location</label>
                            <input type="text" placeholder='Your Destination'/>
                        </div>

                        <div className="distDiv">
                            <label htmlFor="distance">Members</label>
                            <input type="text" placeholder='No.of.members'/>
                        </div>

                        <div className="priceDiv">
                            <label htmlFor="price">Amount</label>
                            <input type="text" placeholder='RS.₹'/>
                        </div>
                        <button className='btn'>
                            Search
                        </button>
                    </div>


                </div>
        </section>
    )
}
export default Home