import React from 'react'
import SectionHeader from './SectionHeader'
import ArrivalCardContainer from './ArrivalCardContainer'

export default function NewArrival() {
  return (
    <section className="w-full max-w-[1200px] self-center flex flex-col gap-10">
        <SectionHeader str={"New Arrival"}/>
        <ArrivalCardContainer/>
    </section>
  )
}
