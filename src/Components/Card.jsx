import React from "react";
import "./card.css"


//  created a single card so that it can be used as many time according to the data available in API
const Card = () => {
    return (
        <div>
            <div className="cards">
                <div className="card">
                    {/* <div className="checkBox">
                        <input type="checkbox" className="card__category"/>
                    </div> */}
                    <span className="card__category">First Name:</span>
                    <br />
                    <span className="card__category">Last Name:</span>
                    <br />
                    <span className="card__category">E-Mail:</span>
                    <br />
                    <span className="card__category">Gender:</span>
                    <br />
                    <span className="card__category">Job TiTle:</span>
                    <br />
                    <span className="card__category">City:</span>
                    <br />
                    <span className="card__category">Language:</span>
                    <br />
                    <span className="card__category">Contact No.:</span>
                    {/* <h3 className="card__title">{props.artist}</h3> */}
                    <br />
                    <div className="btn">
                       
                        <button>Play</button>
                       
                        <button>Play</button>
                        
                    </div>
                </div>
            </div>
        </div>


        // <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        //         <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //         </Card.Text>
        //         <Card.Link href="#">Card Link</Card.Link>
        //         <Card.Link href="#">Another Link</Card.Link>
        //     </Card.Body>
        // </Card>


    )
}


export default Card;