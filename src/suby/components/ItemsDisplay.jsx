import React,{useState}from 'react'

import { ItemData } from '../pages/data'

const ItemsDisplay = () => {
    const [useData,setUseData]=useState(ItemData)
    console.log(useData)
  return (
    <div className="itemSection">
        {useData.map((each)=>{
            return(
                <div className="gallary">
                    <img src={each.item_img} alt={each.item_img} className='gal-img'/>
                </div>
            )
        })}
    </div>
  )
}

export default ItemsDisplay