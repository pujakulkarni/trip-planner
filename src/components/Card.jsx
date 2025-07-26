import { useState } from "react";


function Card({id ,image , info , price , name , removeTour }){
    const [readmore , setReadmore] = useState(false);
    const description  = readmore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    

    return (
     <div className="card">
         <img src={image} className="image"/>
         <div className="tour-info">

            <div className="tour-detail">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name"> {name}</h4>
            </div>
            <div className="description">
                {description}
                <span onClick = {readmoreHandler} className=" read-more">
                    {readmore ? `Show Less` : `Read More`}
                </span>
            </div>
            
         </div>

         <button className="red-btn" onClick={() => removeTour(id)}>
            Not Interested
         </button>

     </div>
    );
}
export default Card;