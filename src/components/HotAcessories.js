import React from 'react'
import HotItemCard from "../components/HotItemCard.js";
import "../styles/HotAccessories.css";

const HotAcessories = ({music,musicCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
           <img src={musicCover} alt='Cover'/>
        </div>
        <div>
            {music && music.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   

            ))}

            

        </div>

    </div>
  )
}

export default HotAcessories