import React from "react";
import "./newCard.css"
// import Accordion from 'react-bootstrap/Accordion'


const NewCard = ({ id, name, num, city, img, gender, dlt, fav, select, check, toSelect }) => {
    // const []
    return (
        // <div >
        <div className="oneBox"   style={{ border: toSelect ? "2px solid red" : "none" }}>
            <div className="inrDiv">
                <input type="checkbox" onClick={() =>select(id)}           
                    
                    onChange={() => check(id)}
                />
            </div>
            <div className="inrDiv">
                <img src={img} alt="img" />
            </div>
            <div className="inrDiv">
                {name}
            </div>
            <div className="inrDiv">
                {gender}
            </div>
            <div className="inrDiv">
                {city}
            </div>
            <div className="inrDiv">
                {num}
            </div>
            <div className="inrDiv">
                <button onClick={() => fav(id)}>
                    add to fav
                </button>

                <button onClick={() => dlt(id)}>
                    del
                </button>

            </div>
        </div>
        // </div>
    )
}


export default NewCard;