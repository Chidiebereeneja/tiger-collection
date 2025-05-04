import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

export default function ImagePreviewAside({imageArr, onclick, manageImgSrc}) {
  return (
    <aside className="h-[621px] flex items-center bg-searchInputCol-100">
      <div className="h-[345.87px]  w-[181px] pr-8 flex justify-end overflow-hidden">
        <Splide options={{
          rewind: true,
          type         : 'loop',
          speed: 2500,
          perPage: 3 ,
          perMove: 1,
          direction: 'ttb',
          pagination: false,
          height: "355.87px",
          width: "75.6px",
        }}>
            {imageArr && imageArr.map((item) => <SplideSlide key={item.split("/").slice(-1)}>
                <img onClick={onclick} src={item} className="h-[98px] w-[88px] object-cover object-center rounded-[9.07px] curesor-pointer" /> 
            </SplideSlide> )}
        </Splide>
      </div>

      <div className="h-full">
        <img src={manageImgSrc}  alt="" className="h-full w-[430px] object-cover object-center " />
      </div>
    </aside>
  )
}
