import React from 'react'

const ImageTag = function({url, altTxt}) {
    return (
        <figure className="h-full w-[177.52px] bg-primaryCol-100 p-2 rounded-[12px] ">
            <img className="h-full w-full object-contain object-center" src={url} alt={altTxt} />
        </figure>
    )
}

export default function TopBrand() {
  return (
    <div className="w-full max-w-[1200px] h-[357.17px] flex flex-col justify-center items-center self-center bg-topbrandCol-100 text-primaryCol-100 rounded-[12px]">
        <h3 className="text-[50px] font-bold ">Top Brands Deal</h3>
        <p className="text-[22px] font-normal leading-[100%]">Up To <span className="text-amber-500">60%</span> off on brands</p>

        <div className="h-[85.55px] w-full flex justify-center gap-6 mt-7 ">
            <ImageTag url={"src/assets/images/nike.png"} altTxt={"Nike brand"}/>
            <ImageTag url={"src/assets/images/H&M.png"} altTxt={"H&M brand"}/>
            <ImageTag url={"src/assets/images/levis.png"} altTxt={"Levi's brand"}/>
            <ImageTag url={"src/assets/images/gucci.png"} altTxt={"Gucci brand"}/>
            <ImageTag url={"src/assets/images/puma.png"} altTxt={"Puma brand"}/>
        </div>
    </div>
  )
}
