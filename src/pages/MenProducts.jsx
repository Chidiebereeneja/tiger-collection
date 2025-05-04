import { useEffect, useState } from 'react'
import ProductDisplay from '../components/ProductDisplay'
import axios from 'axios'

export default function MenProducts() {
    const [filterData, setFilterData] = useState("")
    const [colorData, setColorData] = useState("")
    const [sizeData, setSizeData] = useState("")
    const [dressStyleData, setDressStyleData] = useState("")
    const [ menProduct, setMenProduct] = useState("")
    const [menDesData, setMenDesData] = useState("")


    const fetchData = async function() {
        try {
            const filterRes = await axios.get("/filter.json")
            const colorRes = await axios.get("/colors.json")
            const sizeRes = await axios.get("/sizes.json")
            const dressStyleRes = await axios.get("/dressstyle.json")
            const menProductRes = await axios.get("/mencategories.json")
            const menDesRes = await axios.get("/menDescription.json")

            setFilterData(filterRes.data)
            setColorData(colorRes.data.at(0).colors)
            setSizeData(sizeRes.data.at(0).clothingSizes.men.shirts)
            setDressStyleData(dressStyleRes.data)
            setMenProduct(menProductRes.data)
            setMenDesData(menDesRes.data)
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <div className="flex justify-center w-full">
        <ProductDisplay filterData={filterData} colorData={colorData} sizeData={sizeData} dressStyleData={dressStyleData} productCategory={menProduct} productDesData={menDesData} productHeader={"Men’s Clothing "} onlineDes={"Reexplore Men's Clothing Collection Online at Tiger Collection"} secHeader={"Clothing for Men Online in Nigeria"} tableHeader={"Men's Clothing"} salerHeader={"Men's Clothing "} bestSecHeader={"Buy Men’s Clothing at Best Price"} />
    </div>
  )
}
