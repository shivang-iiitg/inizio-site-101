import React from "react";

function PastSponsors({ 
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, direction = "left" 
}) {
  return (
    <div className="sponsors-container">
      <div className={`sponsors-slider ${direction === "right" ? "slide-right" : "slide-left"}`}>
        <img src={img1} alt="Sponsor 1" />
        <img src={img2} alt="Sponsor 2" />
        <img src={img3} alt="Sponsor 3" />
        <img src={img4} alt="Sponsor 4" />
        <img src={img5} alt="Sponsor 5" />
        <img src={img6} alt="Sponsor 6" />
        <img src={img7} alt="Sponsor 7" />
        <img src={img8} alt="Sponsor 8" />
        <img src={img9} alt="Sponsor 9" />
        <img src={img10} alt="Sponsor 10" />
        {/* Duplicate images for seamless looping */}
        <img src={img1} alt="Sponsor 1" />
        <img src={img2} alt="Sponsor 2" />
        <img src={img3} alt="Sponsor 3" />
        <img src={img4} alt="Sponsor 4" />
        <img src={img5} alt="Sponsor 5" />
        <img src={img6} alt="Sponsor 6" />
        <img src={img7} alt="Sponsor 7" />
        <img src={img8} alt="Sponsor 8" />
        <img src={img9} alt="Sponsor 9" />
        <img src={img10} alt="Sponsor 10" />
      </div>
    </div>
  );
}

export default PastSponsors;
