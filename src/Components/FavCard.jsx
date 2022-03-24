import React from "react";
import "./favcard.css";

const Favcard = ({img, name, gender, num, city}) => {
    return (
        <div className="outerDiv1">
            <div className="innerDivFavCard">
                <img src={img} alt="img" />
            </div>
            <div className="innerDivFavCard">
                {name}
            </div>
            <div className="innerDivFavCard">
                {gender}
            </div>
            <div className="innerDivFavCard">
                {city}
            </div>
            <div className="innerDivFavCard">
                {num}
            </div>
        </div>
    )
}

export default Favcard;