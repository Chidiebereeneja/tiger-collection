import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import axios from 'axios'
import { RateStar } from './RateStar'
import { Splide, SplideSlide } from '@splidejs/react-splide';

<Splide aria-label="My Favorite Images">
  <SplideSlide>
  </SplideSlide>
</Splide>


const FeedBackCard = function({data}) {
    return (
        <Splide options={{
            type: 'slide',            
            loop: "endlessly",
            perPage: 3,               
            perMove: 1,               
            gap: '1rem', 
            width: "100%",
            height: "257px ",           
            pagination: true,        
            arrows: true,             
            speed: 2000,               
            drag: true,               
            breakpoints: {
              768: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
          }}>
            {data && data.map((obj) => <SplideSlide>
                <div className="w-[396.87px] h-full rounded-[10px] border-[1.8px] border-feedbackCol-100 p-4 flex flex-col gap-3">
                    <figure className="flex justify-between h-[57.98px] ">
                        <img src={obj.profile} alt={obj.name + " profile picture"} className="h-full w-[57.98px] object-cover object-center"/>
                        {RateStar(obj.stars)}
                    </figure>

                    <h3 className="text-[19px] font-normal leading-[100%] tracking-[2%] text-sectionHeaderCol-100 ">{obj.name}</h3>

                    <p className="text-[14px] font-normal leading-[130%] tracking-[2%] ">{obj.description}</p>
                </div>
            </SplideSlide>)}
        </Splide>
    )
}

export default function FeedBack() {
    const [data, setData]  = useState("")

    const fetchData =  async function() {
        try {
             const res = await axios.get("/feedback.json")
             setData(res.data)
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="w-full max-w-[1200px] self-center flex flex-col gap-10">
        <SectionHeader str={"Feedback"}/>

        <FeedBackCard data={data} />

    </div>
  )
}
