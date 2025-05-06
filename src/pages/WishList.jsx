import React, { useEffect, useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import PageTracker from '../components/PageTracker'
import Button from '../components/Button';
import axios from 'axios';

const PcardEl = function({arr}) {
  return  <p className="text-[18px] font-semibold leading-[100%] tracking-[2%] text-sectionHeaderCol-100 flex gap-1 ">
        <span>{arr.at(0)}:</span>
        <span className="text-textColor-100 font-medium">{arr.at(1)}</span>
    </p>
}


const WishListCard = function({data}){
    const {obj} = data;
    
    
    return (
        <li className="w-full flex justify-between items-center p-2">
           <div className="flex items-center gap-4">
                <LiaTimesSolid className="inline-block"/>

                <img src={obj.image} alt="" className="h-[110px] w-[110px] object-cover object-center rounded-[4px] " />

                <div className="flex flex-col gap-4">
                    <h3 className="text-[18px] font-semibold leading-[100%] tracking-[2%] text-sectionHeaderCol-100 ">{obj.name}</h3>
                    <PcardEl arr={["Color", obj.color]}/>

                    <PcardEl arr={["Quantity", obj.qty]}/>
                </div>

           </div>

           <div className="flex items-center gap-4">
                <p className="text-[18px] font-semibold leading-[100%] tracking-[2%] text-textColor-100 ">₦{obj.price}</p>
                <Button contentStr={"Add to cart"} style={"h-[50px] w-[159px] rounded-[8px] bg-purpleCol-100 text-[18px] font-medium leading-[100%] text-primaryCol-100 "}/>
           </div>

        </li>
    )
}

export default function WishList() {
    const [wishlistData, setWishlistData] = useState("");
    const [prevPage, setPrevPage] = useState(localStorage.getItem("prev-page"))


    const fetchData = async function() {
        try {
            const res = await axios.get("/wishlist.json")
            setWishlistData(res.data)
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    if(prevPage === "") {
        setPrevPage("/")
    }


  return (
    <div className="w-full flex justify-center mb-16">
        <div className="w-full max-w-[1200px]">
            <PageTracker arr={[prevPage, "WishList"]}/>

            <h1 className="text-[28px] font-normal leading-[33.5px] tracking-[2%] text-sectionHeaderCol-100 my-8 ">Wishlist</h1>

            <ul className="w-full flex flex-col gap-2">
                {wishlistData && wishlistData.map((obj) => <WishListCard key={obj.id} data={{obj}}/>) }
            </ul>
        </div>
    </div>
  )
}
