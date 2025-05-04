import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const FooterActionBtns = function({headerStr, btnArr}) {
    return (
        <ul>
            <h3 className="text-[24.58px] font-semibold leading-[217%] ">{headerStr}</h3>

            <li className="flex flex-col gap-2">
                {btnArr && btnArr.map((item) => <a key={item} href="" className="text-[16px] font-normal leading-[217%] " >{item}</a> )}
            </li>
        </ul>
    )
}

export default function AppFooter() {
    const year = new Date().getFullYear()
    

  return (
    <div  className="bg-topbrandCol-100 text-searchInputCol-100 flex flex-col gap-12 py-9">
        <div className="flex justify-between w-[80%] max-w-[1200px] self-center">
            <FooterActionBtns headerStr={"Need Help"} btnArr={["Contact Us", "Track Order", "Returns & Refunds", "FAQ's", "Career"]} />

            <FooterActionBtns headerStr={"Company"} btnArr={["About Us", "Products", "Terms & Conditions", "Collaboration", "Media"]} />

            <FooterActionBtns headerStr={"More Info"} btnArr={["Term and Conditions", "Privacy Policy", "Shipping Policy", "Sitemap"]} />

            <FooterActionBtns headerStr={"Location"} btnArr={["support@tigercollecction.in", "No 13 Enugu Road Nsukka, Enugu State, Nigeria"]} />
        </div>

        <div className=" self-center w-[80%] max-w-[1200px] mt-4 flex flex-col gap-9">
            <figure className="flex h-[37px] w-full gap-4">
                <img src={"src/assets/images/logos_facebook.png"} alt="facebook" className="h-full object-contain object-center bg-searchInputCol-100 p-[5px] w-[37px] rounded-[10.68px] " />
                <img src={"src/assets/images/instagram.png"} alt="Instagram" className="h-full object-contain object-center bg-searchInputCol-100 p-[5px] w-[37px] rounded-[10.68px] " />
                <img src={"src/assets/images/logos_tiktok-icon.png"} alt="Tiktok" className="h-full object-contain object-center bg-searchInputCol-100 p-[5px] w-[37px] rounded-[10.68px] " />
            </figure>

            <div className="border-t-[1px] border-b-[1px] border-feedbackCol-100 py-4 ">
                <p className="flex justify-between items-center">
                    <span className="text-[24.58px] font-semibold leading-[200%] ">Popular Categories</span>
                    <MdKeyboardArrowDown  className="inline-block text-[28.58px]"/>

                </p>
            </div>

            <div className="flex justify-center">
                <p className="text-[16px] font-normal leading-[200%]">
                Copyright © {year} Tiger Collection Ltd. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}
