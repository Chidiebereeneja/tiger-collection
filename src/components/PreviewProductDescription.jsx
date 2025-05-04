import React, { useEffect, useRef, useState} from 'react'
import SectionHeader from './SectionHeader'
import axios from 'axios';
import { VideoPlayer } from './VideoPlayer';

const ButtonModal = function({str, btnStyle, counter, countStyle, isCount = false, btnParent}) {

    const handleModal = function(e) {
        const targetEl = e.target;
        Array.from(btnParent.current.children).map((el) => {
            el.classList.remove("isActivePreviewModal")
            el.classList.add("isNotActivePreviewModal")
        } )


        if(targetEl.tagName.toLowerCase() === "button") { 
            targetEl.classList.add("isActivePreviewModal")
            targetEl.classList.remove("isNotActivePreviewModal")
        }

        else if(targetEl.tagName.toLowerCase() === "span") {
            targetEl.parentNode.classList.add("isActivePreviewModal")
            targetEl.parentNode.classList.remove("isNotActivePreviewModal")
        }
        
    }

    return (
        <button className={btnStyle} onClick={handleModal} >
            <span>{str}</span>
            {isCount ? <span className={countStyle}>{counter}</span> : ""}
        </button>
    )
}

export default function PreviewProductDescription() {
    const [data, setData] = useState("")
    const divEl = useRef()

    const fetchData = async function () {
        try {
            const res = await axios.get("/desMake.json")
            setData(res.data)
        } catch(err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    
  return (
    
    <section className="flex flex-col gap-9 my-20 w-full max-w-[1200px] self-center">
        <SectionHeader str={"Product Description"} />

        <div className="flex gap-15 w-full">
            <div className="flex flex-col gap-7 w-[50%] ">
                <div className="flex gap-3 " ref={divEl} >
                    <ButtonModal str={"Description"} btnStyle={"isActivePreviewModal"} btnParent={divEl} />
                    <ButtonModal str={"User comments"} isCount={true} counter={3} btnStyle={"isNotActivePreviewModal"} btnParent={divEl} countStyle={"bg-purpleCol-100 spanStyle "}  />
                    <ButtonModal str={"Question & Answer"} isCount={true} counter={3} btnStyle={"isNotActivePreviewModal"} btnParent={divEl} countStyle={"bg-sectionHeaderCol-100 spanStyle "} />
                </div>

                <div>
                    <p className="text-[16px] leading-[25px] tracking-[2%] font-normal text-textColor-100 ">100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                </div>

                <div className="bg-searchInputCol-100  w-full grid grid-cols-3 border border-feedbackCol-100">
                    {data && data.map((item) => <p className="p-6 flex flex-col gap-4 border-feedbackCol-100 border " key={item.id}>
                        <span className="text-[15px] leading-[16px] tracking-[2%] font-semibold text-textColor-100 ">{item.make}</span>
                        <span className="text-[15px] leading-[16px] tracking-[2%] font-semibold text-sectionHeaderCol-100">{item.description}</span>
                        </p>) 
                    }
                </div>
            </div>

            <VideoPlayer videoSrc={"src/assets/images/products_video.mp4"}/>
        </div>
    </section>
  )
}
