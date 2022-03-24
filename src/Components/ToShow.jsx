import React from "react";
import Card from "./Card";

const ToShow = ({expenses}) => {
    return (
        <div>
             <h1 className='heading_style' >
                Data Base
            </h1>

            {/* mapped expenses which contains my all the fetched data so that it will returns all the value as my desire in proper way */}
            {expenses.map((val) => {
                // console.log(val);
                return (
                    <Card
                        key={val.id}
                        fName={val.first_name}
                        lName={val.last_name}
                        mail={val.email}
                        gen={val.gender}
                        job={val.job}
                        city={val.city}
                        lang={val.language}
                        num={val.contact}
                    />
                )
            })
            }
        </div>
    )
}


export default ToShow;