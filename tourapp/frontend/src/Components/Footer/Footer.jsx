import React from "react";
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return(
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerDiv">
                        <a href="#" className="logo">
                            <h1 className="flex"> <SiYourtraveldottv className="icon"/>My Tour App</h1>
                        </a>
                    </div>
                </div>

                <div className="social flex">
                    <ImFacebook className="icon"/>
                    <BsTwitter className="icon"/>
                    <AiFillInstagram className="icon"/>
                </div>
            </div>

            <div classname="footerLinks">
                <span className="linkTitle">
                    DETAILS 
                </span>
                <li>
                    <a href="#">Information</a>
                </li>
                <li>
                    <a href="#">Support on youtube: @toursandguides</a>
                </li>
                <li>
                    <a href="#">Contact Us:9876543210</a>
                </li>
                <li>
                    <a href="#">Instagram: @Freewings_tourguide</a>
                </li>
            </div>
        </div>
    )
}
export default Footer