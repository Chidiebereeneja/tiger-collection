import axios from 'axios';
import { useEffect, useState } from 'react'
import CategorySection from './CategorySection';

export default function CategoryForWomen() {
    const [data, setData] = useState("")  

    const fetchData = async function() {
        try {
            const res = await axios.get("/womencategories.json")
            setData(res.data);
            
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <CategorySection headerStr={"Categories For Women"} data={data} subPara={"Explore now"} isArrow={true} isSubPara={true} isHeight={true}/>
  )
}
