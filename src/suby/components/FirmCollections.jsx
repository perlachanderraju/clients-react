import React , {useState,useEffect}from 'react'
import axios from "axios"
import {apidata} from './Chains'
import { Link } from 'react-router-dom'

const FirmCollections = () => {
    const [firmdata,setFirmdata]=useState([])

    const [filterdata,setfilterdata]=useState("All")

    const [activecatgory,setActiveCategory]=useState('all')
    
    const FirmData = () => {
        axios
            .get("https://backend-nodejs-suby.onrender.com/vendor/all-vendors")
            .then((data) =>{
                setFirmdata(data.data)
                console.log("firm",data.data)
            } )
            .catch(error => console.log(error));
    };

    useEffect(()=>{
        FirmData()
    },[])

    const filterHandler=(region,category)=>{
        setfilterdata(region)
        setActiveCategory(category)
    }
  return (
    <>
        <div className='fbar'>
            
            <h3>Restaurants with online food delivery in Hyderabad</h3>
            
        </div>
        <div className='filterButtons'>
            <button onClick={()=>filterHandler("All","all")} className={activecatgory==="all"?"activeButton":""}>ALL</button>
            <button onClick={()=>filterHandler("Chinese","chinese")} className={activecatgory==="chinese"?"activeButton":""}>Chinese </button>
            <button onClick={()=>filterHandler("Bakery","bakery")} className={activecatgory==="bakery"?"activeButton":""}>Bakery</button>
            <button onClick={()=>filterHandler("North-Indian","northindian")} className={activecatgory==="northindian"?"activeButton":""}>North-Indian</button>
            <button onClick={()=>filterHandler("South-Indian","southindian")} className={activecatgory==="southindian"?"activeButton":""}>South-Indian</button>
        </div>

        <section className='firmSection' >
            
            {firmdata.vendors && firmdata.vendors.map((vendor)=>{
                return (
                    <>
                        
                        {vendor.firm.map((item)=>{
                            if(filterdata==="All"||item.region.includes(filterdata.toLocaleLowerCase())){

                            
                            return (
                                <>
                                <Link to={`/products/${item._id}`} className='link'>
                                    <div className='firmGroupBox'>
                                        <div className="firmGroup">
                                            <img src={` https://backend-nodejs-suby.onrender.com/uploads/${item.image}`}/>
                                            <div className='firmOffer'>
                                                {item.offer}
                                            </div>
                                        </div>
                                        <div className='firmDetails'>
                                    
                                            <strong>{item.firmName}</strong>
                                            <div className='firmArea'>{item.region.join(", ")}</div>
                                            <div className='firmArea'>{item.area}</div>
                                        
                                        </div>
                                    </div>
                                </Link>
                                
                                </>
                            )}  
                        })}
                        
                    </>
                )
            })}
        </section>
    </>
  )
}

export default FirmCollections