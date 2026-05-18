import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [data, setData] = useState([]);
    // const [on, setOn] = useState(false);

    // const toggle = () => {
    //     setOn(!on)
    // }
    // console.log(on)

      useEffect(() => {
            apiFatchProduct()
        },)

    const apiFatchProduct = async () => {
        const result = await axios.get('https://Fakestoreapi.com/products')
        setData(result.data)
        console.log(data)

      

    }
    return (



        <div>
            {/* <button onClick={toggle}>{on ? 'true' : 'false'}</button> */}
            <h1>Api fetch</h1>


            {
                data.map = ((y) => {
                    return (
                        <div key={y.id}>
                            <h4>{y.title}</h4>
                            <img src={y.image} alt="image" />
                            <p>{y.description}</p>
                        </div>

                    )
                })
            }



        </div>
    )
}

export default Api
