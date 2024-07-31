import React ,{useState,useEffect} from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios"
import { TailSpin } from 'react-loader-spinner'
import { API_URL } from './api'


export var apidata

const Chains = () => {

    const [vendorData,setVendorData]=useState([])
    
    const [ scrolval,setscroll]=useState(0)

    const [loader,setLoader]=useState(true)

    // const vendorFirmData=async(req,res)=>{

    //     try {
    //         const fetchdata= await fetch(`${API_URL}/vendor/vendordetails`)

    //         const newdata= await fetchdata.json()

    //         setVendorData(newdata)
    //         console.log("this",newdata)
            
    //     } catch (error) {
    //         alert("failed to fetch data")
    //         console.log("failed to fetch data")
            
    //     }

    // }
    const handleScroll=(direction)=>{
        const chain=document.getElementById("imageGallary");
        const scrollAmount=500;

        if(direction==="left"){
            chain.scrollTo({
                left:chain.scrollLeft-scrollAmount,
                behavior:"smooth" 
            })
        }else if(direction==="right"){
            chain.scrollTo({
                left:chain.scrollLeft + scrollAmount,
                behavior:"smooth" 
            })
        }
    }


    const vendorFirmData = () => {
        axios
            .get("https://backend-nodejs-suby.onrender.com/vendor/all-vendors")
            .then((data) =>{
                console.log("this",data.data)
                setVendorData(data.data)
                setLoader(false)
                apidata=data.data
                console.log("apidata",apidata)
            } )
            .catch(error => console.log(error));
    };

    useEffect(()=>{
        vendorFirmData()
    },[])


  return (
    <>
        <div>
            <h3>Top Restaurant chains in Hyderabad</h3>
        </div>
        <div>
            {loader && 
            <div className='loader'>
                <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                />
            </div>
            }
        </div>
       <div className='bar2'>
            <button onClick={()=>handleScroll("left")} className='btnicons'><FaRegArrowAltCircleLeft /></button>
            <button onClick={()=>handleScroll("right")} className='btnicons'><FaRegArrowAltCircleRight /></button>
        </div>
            
            

        <section className='chainSection' id="imageGallary" onScroll={(e)=>setscroll(e.target.scrollLeft)}>
            
            {vendorData.vendors && vendorData.vendors.map((vendor)=>{
                return (
                    <>
                        <div className='vendorBox'>
                            {vendor.firm.map((item)=>{
                                return (
                                    <>
                                    <div>
                                        {/* {item.firmName} */}
                                    </div>
                                    <div className="firmImage">
                                        <img src={` https://backend-nodejs-suby.onrender.com/uploads/${item.image}`}/>
                                    </div>
                                    </>
                                )  
                            })}
                        </div>
                    </>
                )
            })}
        </section>
    </>
  )
}

export default Chains