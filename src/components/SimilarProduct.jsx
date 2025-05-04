import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import axios from 'axios'

export default function SimilarProduct() {
    const [similarData, setSimilarData] = useState("")

    const fetchData = async function() {
        try {
            const res = await axios.get("/unisexcategories.json")
            setSimilarData(res.data)
        } catch(err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    

  return (
    <div className="flex flex-col gap-9 my-8 w-full max-w-[1200px] self-center">
        <SectionHeader str={"Similar Products"}/>

        <div className="grid grid-cols-4">
           {similarData && similarData.map((obj) => <Card imageUrl={obj.image} isHeight={true} isHeart={true} name={obj.name} isSubPara={true} subPara={obj.brand} formatText={true} amount={obj.price}  />)}
        </div>
    </div>
  )
}
