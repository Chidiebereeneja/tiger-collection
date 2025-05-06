import React from 'react'
import LandingPage from '../components/LandingPage'
import DealCard from '../components/DealCard'
import NewArrival from '../components/NewArrival'
import BigSavingsContainer from '../components/BigSavingsContainer'
import WeMadeContainer from '../components/WeMadeContainer'
import CatergoryForMen from '../components/CatergoryForMen'
import CategoryForWomen from '../components/CategoryForWomen'
import TopBrand from '../components/TopBrand'
import LimeLightCategory from '../components/LimeLightCategory'
import FeedBack from '../components/FeedBack'

export default function HomePage() {
  return (
    <main className="w-full flex flex-col gap-[80px]">
      <LandingPage/>

      <section className="flex gap-4 self-center">
        <DealCard subHeaderTxt={"Low Price"} headerTxt={"High Coziness"} imgUrl={"src/assets/images/cooziness_background.jpeg"} />
        <DealCard subHeaderTxt={"Beyoung Presents"} headerTxt={"Breezy Summer Style"} imgUrl={"src/assets/images/breezy _background.jpeg"} />
      </section>

      <NewArrival/>

      <BigSavingsContainer/>

      <WeMadeContainer/>

      <CatergoryForMen/>

      <CategoryForWomen/>

      <TopBrand/>

      <LimeLightCategory/>

      <FeedBack/>
    </main>
  )
}
