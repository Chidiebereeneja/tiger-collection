import { useEffect, useState } from 'react'
import ProductDisplay from '../components/ProductDisplay'
import axios from 'axios'

export default function WomenProducts() {
    const [filterData, setFilterData] = useState("")
    const [colorData, setColorData] = useState("")
    const [sizeData, setSizeData] = useState("")
    const [dressStyleData, setDressStyleData] = useState("")
    const [productData, setProductData] = useState("")
    const [desData, setDesData] = useState("")


    const fetchData = async function() {
        try {
            const filterRes = await axios.get("/filter.json")
            const colorRes = await axios.get("/colors.json")
            const sizeRes = await axios.get("/sizes.json")
            const dressStyleRes = await axios.get("/dressstyle.json")
            const productRes = await axios.get("/womencategories.json")
            const desRes = await axios.get("/womenDescription.json")

            setFilterData(filterRes.data)
            setColorData(colorRes.data.at(0).colors)
            setSizeData(sizeRes.data.at(0).clothingSizes.men.shirts)
            setDressStyleData(dressStyleRes.data)
            setProductData(productRes.data)
            setDesData(desRes.data)
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <div className="flex justify-center w-full">
        <ProductDisplay filterData={filterData} colorData={colorData} sizeData={sizeData} dressStyleData={dressStyleData} productCategory={productData} productDesData={desData} productHeader={"Women’s Clothing"} onlineDes={"Reexplore Women's Clothing Collection Online at Tiger Collection"} secHeader={"Clothing for Women Online in Nigeria"} tableHeader={"Women's Clothing"} salerHeader={"Women's Clothing "} bestSecHeader={"Buy Women’s Clothing at Best Price"} />
    </div>
  )
}
