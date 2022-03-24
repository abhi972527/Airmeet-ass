import React from "react";
import "./newCard.css"
// import Accordion from 'react-bootstrap/Accordion'


const NewCard = ({name, num, city, img, gender}) => {
    return (
        // <div >
                <div className="oneBox">
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        {name}
                    </div>
                    <div>
                        {gender}
                    </div>
                    <div>
                        {city}
                    </div>
                    <div>
                        {num}
                    </div>
                    <div>
                        <button>
                            add to fav
                        </button>

                        <button>
                            del
                        </button>

                    </div>
                </div>
        // </div>
    )
}


export default NewCard;