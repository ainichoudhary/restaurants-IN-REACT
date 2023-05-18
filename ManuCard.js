import React from "react";
let ManuCard = ({manuData}) => {
    return (
        <>
            {manuData.map((currentElem)=>{
                const {id,name,category,image,description} = currentElem
return(
    <>
    <div className="card--container" key={id}>
        <div className="card">
            <div className="card-body">
                    <span className="card-number card-circle subtle">{id}
                    </span>
                <span className="card-author subtle">{name}</span>
                <h2 className="card-title"> {name}</h2>
                <span className="card-description subtle">
                      {description}
                    </span>
                <div className="card-read">Read</div>
            </div>
            <img class="img" src={image} alt="images" className="card-media"/>

            <span className="card-tag  subtle">Order Now</span>
        </div>
    </div>
    </>

)
                })
            }
        </>
    )
}

    export default ManuCard;

