import React, { useState, useEffect } from 'react';
// import Card from "./Card"
import Loading from './Loading';
import ToShow from './ToShow';
import "./data.css"

//  blank array as initial value of data



const Data = () => {
    //  used dummy expenses as initial value, and created a variable which contains all the fetched data
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(expenses);


    //  fetched data from API
    const fetchData = async () => {
        try {
            setLoading(false);
            const res = await fetch("https://my.api.mockaroo.com/new_data?key=5c27b260");
            const data = await res.json();
            // console.log(data);
            setExpenses(data);
        } catch (e) {
            console.log("My error is: ", e);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (loading) {
        console.log("Loading");
        return (
            // <div>
            //     <h1>
            //         Loading...
            //     </h1>
            // </div>
            <Loading />
        )
    }

    return (
        <div>
            {/* <ToShow expenses={expenses} /> */}
            {/* {expenses.map((val) => {
                console.log (val)
            })} */}

        </div>
    )
}


export default Data;