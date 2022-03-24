import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import NewCard from './NewCard';
// var ScrollArea = require('react-scrollbar')
import "./data.css"

const dummy = [];

const Data = () => {
    const [expenses, setExpenses] = useState(dummy);
    // const [loading, setLoading] = useState(true);
    const [select, setSelect] = useState([]);
    const [fav, setFav] = useState([]);

    const fetchData = async () => {
        try {
            // setLoading(false);
            const res = await fetch("https://my.api.mockaroo.com/data?key=5c957cf0");
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

    // useEffect(() => {
    //     localStorage.setItem("list", JSON.stringify(fav))
    // }, [fav]);

    if (expenses.length === 0) {
        return (
            <Loading />
        )
    }

    const dltOne = (id) => {
        console.log("Dlt One", id);
        const newData = expenses.filter((val) => {
            return val.id !== id
        })
        setExpenses(newData);
    }

    const favOne = (id) => {
        console.log("Fav One", id);
        const favItem = expenses.find((val) => val.id === id)
        setFav([...fav, favItem]);
        const newData = expenses.filter((val) => {
            return val.id !== id
        })
        setExpenses(newData);
    }

    const Select = (id) => {
        // console.log("Selected", id);
        setSelect([...select, id])
        // console.log(select);
    }

    const dltSelected = () => {
        const sDel = expenses.filter((val) => {
            return !select.includes(val.id);
        })
        setExpenses(sDel);
    }

    const favSelected = () => {
        const favData = expenses.filter((val) => {
            return select.includes(val.id);
        })
        let data = JSON.parse(localStorage.getItem("list"));
        if (data) {
            let total = [...data, ...favData] 
            localStorage.setItem("list", JSON.stringify(total));
        } else {
            localStorage.setItem("list", JSON.stringify(favData));
        }
        // setFav([...fav, ...favData]);

        const sDel = expenses.filter((val) => {
            return !select.includes(val.id);
        })
        setExpenses(sDel);
    }


    const checkHandel = (id) => {
        expenses.map((val) => {
            if (val.id === id) {
                val.checked = val.checked == 0 ? 1 : 0
            }
        })
    }


    return (
        <div>
            {/* <div className='heading_style'>
                Users Database
            </div> */}

            <div className="outerBox">
                {/* <ScrollArea> */}
                    {
                        expenses.map((val) => {
                            return <NewCard
                                key={val.id}
                                name={val.first_name}
                                num={val.contact}
                                city={val.city}
                                img={val.image}
                                gender={val.gender}
                                id={val.id}
                                dlt={dltOne}
                                fav={favOne}
                                select={Select}
                                check={checkHandel}
                                toSelect={val.checked}
                            // sFav={favSelected}
                            />
                        })
                    }
                    {/* </ScrollArea> */}

                </div>

                    <div className='footer'>
                        <button onClick={dltSelected}>
                            Delete selected
                        </button>
                        <button onClick={favSelected}>
                            Add to fav
                        </button>
                    </div>

            </div>
            )
}


            export default Data;