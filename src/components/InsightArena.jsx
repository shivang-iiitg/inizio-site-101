// src/components/InsightArena.jsx
import React, { useState, useEffect, useRef } from "react";
import "./InsightArena.css";

import image_CG from "../assets/CG.png";
import SlidingWindow from './SlidingWindow';
import skull from "../assets_team/skull.png";

const InsightArena = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // References to slider elements
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);
  const slider5Ref = useRef(null);

  // Sample data for cards
  const speakerCards = [
    { title: "John Doe", description: "CEO, Tech Innovations" },
    { title: "Jane Smith", description: "Founder, Future Labs" },
    { title: "Alex Johnson", description: "AI Researcher" },
    { title: "Maria Garcia", description: "Blockchain Expert" },
    { title: "Robert Chen", description: "Serial Entrepreneur" },
    { title: "Sarah Williams", description: "Venture Capitalist" },
    { title: "Michael Brown", description: "Marketing Guru" },
    { title: "Lisa Taylor", description: "Product Strategist" },
  ];

  const partnerCards = [
    { title: "Tech Corp", description: "Technology Partner" },
    { title: "Finance Plus", description: "Financial Sponsor" },
    { title: "Media Group", description: "Media Partner" },
    { title: "Startup Hub", description: "Incubation Partner" },
    { title: "Global Ventures", description: "Investment Partner" },
    { title: "Creative Solutions", description: "Design Partner" },
    { title: "University Alliance", description: "Academic Partner" },
    { title: "Innovation Labs", description: "Research Partner" },
  ];

  // Generate card elements
  const generateCards = (data) => {
    return data.map((card, index) => (
      <div className="card" key={index}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    ));
  };

  useEffect(() => {
    console.log("InsightArena component mounted!");
    setIsLoaded(true);
  }, []);

  return (
    <div className="insight-arena">
      <div className="header">
        <h1>
          insight arena:
          <br />
          where visionaries
          <br />
          take the stage
        </h1>
        <p className="tagline">
          SPEAKER EXPRESS - INSIGHTS FROM THE BEST IN THE GAME!
        </p>
      </div>
      
      <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "30px" }}>
        <img src={image_CG} style={{ marginTop: "-60px",width:"70%" }} />
      </div>


      <div className="container">
        <div className="section">
          <SlidingWindow
            img1={skull}
            img2={skull} 
            img3={skull}
            img4={skull}
            img5={skull}
            img6={skull}
            img7={skull}
            img8={skull}
            img9={skull}
            img10={skull}
            direction="right"  
          />

          <br /><br />

          <SlidingWindow
            img1={skull}
            img2={skull} 
            img3={skull}
            img4={skull}
            img5={skull}
            img6={skull}
            img7={skull}
            img8={skull}
            img9={skull}
            img10={skull}
            direction="left"  
          />
        </div>
      </div>
      <div className="partner-section">
        <div className="container">
          <div className="partner-header">
            <h2>
              power partners:
              <br />
              the backbone of
              <br />
              innovation
            </h2>
            <p className="tagline">
              OUR SPONSORS - THE DRIVING FORCE BEHIND INZIO!
            </p>
            <div className="description">
              <p>
                Powering the dream! INZIO wouldn't be possible without the
                support of our visionary sponsors. These changemakers fuel
                innovation, and together, we're shaping the future of
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="section">
            <SlidingWindow
              img1={skull}
              img2={skull} 
              img3={skull}
              img4={skull}
              img5={skull}
              img6={skull}
              img7={skull}
              img8={skull}
              img9={skull}
              img10={skull}
              direction="right"  
            />

            <br /><br />

            <SlidingWindow
              img1={skull}
              img2={skull} 
              img3={skull}
              img4={skull}
              img5={skull}
              img6={skull}
              img7={skull}
              img8={skull}
              img9={skull}
              img10={skull}
              direction="left"  
            />

            <br /><br />
            <SlidingWindow
              img1={skull}
              img2={skull} 
              img3={skull}
              img4={skull}
              img5={skull}
              img6={skull}
              img7={skull}
              img8={skull}
              img9={skull}
              img10={skull}
              direction="right"  
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightArena;