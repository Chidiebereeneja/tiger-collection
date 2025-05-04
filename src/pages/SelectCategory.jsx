import { useEffect, useState } from 'react'
import ProductDisplay from '../components/ProductDisplay'
import axios from 'axios'

export default function UnisexProducts() {
    const [filterData, setFilterData] = useState("")
    const [colorData, setColorData] = useState("")
    const [sizeData, setSizeData] = useState("")
    const [dressStyleData, setDressStyleData] = useState("")
    const [productData, setProductData] = useState("")
    const [desData, setDesData] = useState("")
    const storeTarget = localStorage.getItem("navCategory");

    const fetchData = async function() {
        try {
            const bagRes = await axios.get("/bagcategories.json")
            const [dataCheck] =bagRes.data;
            

            setFilterData(dataCheck["sub-category"]["filter-by-type"])
            setColorData(dataCheck["sub-category"]["filter-by-color"])
            setSizeData(dataCheck["sub-category"]["filter-by-size"].at(0).men.shirts)
            setDressStyleData(dataCheck["sub-category"]["filter-by-dress"])
            setProductData(dataCheck["products-category"])
            setDesData(dataCheck["products-description"])


            
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    
  return (
    <div className="flex justify-center w-full">
        <ProductDisplay filterData={filterData} colorData={colorData} sizeData={sizeData} dressStyleData={dressStyleData} productCategory={productData} productDesData={desData} productHeader={storeTarget} onlineDes={"Reexplore " + storeTarget + " Online at Tiger Collection"} secHeader={"Online " +  storeTarget + "  Shopping in Nigeria"} tableHeader={storeTarget + " Clothing"} salerHeader={storeTarget + " Collection"} bestSecHeader={"Buy Tiger Collection’s " + storeTarget + " at Best Price"} dressHeader={ storeTarget + " Style"} />
    </div>
  )
}