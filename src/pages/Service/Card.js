import React from 'react'
const Card = (props) => {
    return (


        <div className="Profile-container">

            <div className="Profile-cards">

                <div className="Profile-card">
                    <img src={props.imgsrc} alt="mypic" className="card_img" />
                    <a href={props.link} target="_blank"><button className="Profile-button slide-in">View Page </button></a>
                    
                </div>
                {/* <div className="card_info">
                    <a href={props.link} target="_blank"><button className="Profile-button slide-in">View Page </button></a>
                </div> */}


            </div>
            <div className="Profile-hide"></div>

        </div>




    )
}
export default Card;