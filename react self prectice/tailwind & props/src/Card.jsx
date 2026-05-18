import React from 'react'

const Card = ({ chennel, myobj }) => {
    console.log()
    return (
        <div
            className="flex flex-col rounded-xl p-4 mb-5"
            style={{
                border: "0.88px solid",
                backdropFilter: "saturate(180%) blur(14px)",
                background: "#ffffff0d",
            }}
        >
            <div>
                <img
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
                    alt="nft-gif"
                    width="350"
                    height="350"
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 ">
                <div className="flex justify-between">
                    <h1 className="font-RubikBold "></h1>
                    <h1 className="font-bold font-RubikBold"></h1>
                </div>
                <div className="flex  justify-between font-mono">
                    <p>#345</p>
                    <p>0.01</p>
                    <h1>{chennel}</h1>
                </div>
            </div>


        </div>
    )
}

export default Card
