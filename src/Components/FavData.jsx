import React, { useEffect, useState } from "react";
import "./favdata.css";
import Favcard from "./FavCard";



const FavData = () => {
    const [data, setData] = useState([]);

    const getLocalItem = () => {
        const nData = localStorage.getItem("list")
        if (nData) {
            const k = JSON.parse(localStorage.getItem("list"))
            setData(k)
        }
    }

    useEffect(() => {
        getLocalItem()
    }, [])

    // console.log(data);

    if (data === null) {
        return <div>
            <h1>
                No Data
            </h1>
        </div>
    }

    return (
        <div className="outerBox" >

            {
                data.map((data, ind) => {
                    return (
                        <Favcard
                            key={ind}
                            img={data.image}
                            name={data.first_name}
                            gender={data.gender}
                            num={data.contact}
                            city={data.city}
                        />
                    )
                })
            }
        </div>
    )
}


export default FavData;