import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import Card from './Card';


export default function ArrivalCardContainer() {
    const [data, setData] = useState("")



    const fetchData = async function() {
        try {
            const res = await axios.get("public/newarrival.json")
            setData(res.data)
            
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // console.log(data);
    

  return (
       <Splide options={{
        rewind: true,
        type         : 'loop',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        speed: 2500,
        perPage: 4 ,
        perMove: 1,
        pagination: false
       }}>
           { data && data.map((obj) => <SplideSlide>
                <Card imageUrl={obj.image} name={obj.name} key={obj.id} isHeart={true} /> 
            </SplideSlide>)}
        </Splide> 
  )
}
