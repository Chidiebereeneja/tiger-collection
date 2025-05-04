import{useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdStarOutline } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import FilterBySize from '../components/FilterBySize';
import FilterByColor from '../components/FilterByColor';
import Button from '../components/Button';
import ImagePreviewAside from '../components/ImagePreviewAside';
import ProductPreviewDesAside from '../components/ProductPreviewDesAside';
import PreviewProductDescription from '../components/PreviewProductDescription';
import SimilarProduct from '../components/SimilarProduct';


const imageArr = ["src/assets/images/Hoodies_female.png",  "src/assets/images/Coats_female.png", "src/assets/images/Tees-female.jpeg", "src/assets/images/boxers-female.png"]


export default function ProductPreview() {
    const [manageImgSrc, setManageImgSrc] = useState("src/assets/images/Hoodies_female.png")
    
    const handleImageDisplay = function(e) {
        setManageImgSrc(e.target.src)
        
    }

  return (
    <div className="w-full flex flex-col gap-2">
        <div className="flex gap-14 w-full max-w-[1300px] ">
            <ImagePreviewAside onclick={handleImageDisplay} manageImgSrc={manageImgSrc} imageArr={imageArr}/>


            <ProductPreviewDesAside/>
        </div>
        
        <PreviewProductDescription/>

        <SimilarProduct/>
    </div>
  )
}
