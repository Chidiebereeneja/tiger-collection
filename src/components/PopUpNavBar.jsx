import { LiaTimesSolid } from "react-icons/lia";


export default function PopUpNavBar({imageUrl, msgHeader, msgDescrip, style, isHidden}) {

    const hiddenStyle = isHidden ? "invisible" : "flex"
    
  return (
    <div className={"border-" + style + " bg-primaryCol-100 shadow-2xl shadow-shadowCol-100 border-[2.26px]  rounded-[8px] absolute right-8 top-[118px] z-50 h-[102.89px] w-[624px] flex-col justify-center box-border " + hiddenStyle}>
        <div className="relative h-full w-full">
            <div className="flex justify-between items-center px-6 absolute top-[20%] w-full">
                <figure className="flex gap-6 items-center  ">
                    <img src={imageUrl} className="h-[56.98px] w-[56.98px] object-contain object-center " alt="vector" />

                    <figcaption className="flex flex-col gap-2">
                        <span className="text-[22.58px] leading-[100%] font-medium text-black">{msgHeader}</span>
                        <span className="text-[18.06px] font-normal leading-[100%] text-popUpDesCol-100">{msgDescrip}</span>
                    </figcaption>
                </figure>

                <button className="text-popUpDesCol-100">
                    <LiaTimesSolid className="inline-block"/>
                </button>
            </div>


            <div className={"bg-" + style + " h-[3px] w-full justify-self-end absolute bottom-0"}></div>
        </div>
    </div>
  )
}
