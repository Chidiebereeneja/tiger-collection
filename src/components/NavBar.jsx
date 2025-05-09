import { useEffect, useState } from 'react'
import AppLogo from './AppLogo'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import NotificationCount from './NotificationCount';
import axios from 'axios';


const setLocalStoragetTask = function(url) {
   let  currentPage =  window.location.href.split("/").slice(-1).join("");
   console.log(currentPage);
   

   if(currentPage === "") {
     currentPage = "/"
     localStorage.setItem("prev-page", currentPage)
    } else {
       localStorage.setItem("prev-page", currentPage)
   }


    window.location.href = url
}


export default function NavBar() {
    const [cateData, setCateData] = useState("")
    // const navigate = useNavigate()

    const handleSelectedEvent = function(e) {
        localStorage.setItem("navCategory", e.target.value);
        window.location.href = "/selectcategory" 
        
    }

    const handleNavigate = function(e) {
        if(e.target.classList.contains("cart")) {
            setLocalStoragetTask("/cart")
        } else if(e.target.classList.contains("wishlist")){ 
            setLocalStoragetTask("/wishlist")
        } else{
            if(e.target.id) {
                setLocalStoragetTask("/account")

            }


             
        }
        
    }

    const fetchData = async function () {
        try {
            const res = await axios.get("/navcategories.json")
            setCateData(res.data)
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



  return (
    <nav className='w-full max-w-[1200px] h-full relative'>
        <ul className='flex justify-around items-center h-full'>
            <li>
                <AppLogo/>
            </li>
            <li className='flex gap-6'>
                {["Home", "Men", "Women", "Unisex", "Categories"].map((item) => item === "Categories"? <select key={item} className="text-textColor-100 text-[16px] font-normal leading-[100%] w-[140px] cursor-pointer outline-none px-2 hover:text-sectionHeaderCol-100 hover:font-semibold transition-all" onChange={handleSelectedEvent}>
                    <option>{item}</option>

                    {cateData && cateData.map((obj) => <option key={obj.id}>{obj.name}</option>)}
                </select> : <a key={item} href={item === "Home" ? "/" : ("/" + item.toLowerCase() + "products")} className="text-textColor-100 text-[16px] font-normal leading-[100%] cursor-pointer hover:text-sectionHeaderCol-100 hover:font-semibold transition-all ">{item}</a>)}
            </li>

            <li className='flex items-center gap-2 border h-[30px] rounded-[8px] py-[2px] px[20px] bg-searchInputCol-100 '>
               <IoSearchOutline className='inline-block p-[1px] ml-2 text-textColor-100'/>
                <input type="search" placeholder="Search" className='outline-none h-[100%] text-[16px] text-textColor-100 '/>
            </li>

            <li className='flex gap-[12px]'>
                <p className="text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer wishlist bg-searchInputCol-100 relative " onClick={handleNavigate}>
                    <CiHeart className="inline-block absolute wishlist" />
                    <NotificationCount count={"2"} checkclick={"wishlist"}/>
                </p>
                <RxPerson className="text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer bg-searchInputCol-100" onClick={handleNavigate} id="account"/>

                <p className="text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer bg-searchInputCol-100  relative cart" onClick={handleNavigate}>
                    <IoCartOutline className="inline-block absolute cart" />
                    <NotificationCount count={"2"} checkclick={"cart"}/>
                </p>
            </li>
        </ul>

    </nav>
  )
}
