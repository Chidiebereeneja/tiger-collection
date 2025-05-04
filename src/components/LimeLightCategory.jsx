import { useEffect, useState } from 'react'
import CategorySection from './CategorySection'
import axios from 'axios'

export default function LimeLightCategory() {
    const [data, setData] = useState("")  

    const fetchData = async function() {
        try {
            const res = await axios.get("/limelight.json")
            setData(res.data);
            
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <CategorySection headerStr={"In The Limelight"} data={data}  isArrow={false} isSubPara={true} isHeight={true} isHeart={true} formatText={true} />
  )
}
