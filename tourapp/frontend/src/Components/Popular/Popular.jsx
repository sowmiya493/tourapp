import React from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import "./popular.css";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img9 from "../../Assets/img9.jpg";
import img0 from "../../Assets/img0.jpg";
import img8 from "../../Assets/img8.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Adiyoga",
    location: "Coimbatore",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Chennai Central",
    location: "Chennai",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img9,
    destTitle: "Palakad",
    location: "Kerala",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img0,
    destTitle: "Theni Busstand",
    location: "Theni",
    grade: "CULTURAL RELAX",
  },
  {
    id: 5,
    imgSrc: img8,
    destTitle: "Meenakshi Temple",
    location: "Madurai",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Your Destination</h2>
            <p>Choose your favorite places</p>
          </div>

          <div className="iconsDiv Flex">
            <BsArrowLeftShort className="icon LeftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Destination" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      FreeWings
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;