import { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import FilterHeader from './FilterHeader';

const RangeSlider = () => {
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(800000);
    const [maxCount, setMaxCount] = useState(0);
    const [minCount, setMinCount] = useState(0);
  
    const handleMinChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      setMinCount(newValue < minValue ? minCount + 1000 : minCount - 1000);
      setMinValue(newValue);
    };
  
    const handleMaxChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      setMaxCount(newValue > maxValue ? maxCount - 1000 : maxCount + 1000);
      setMaxValue(newValue);
    };
  
    return (
      <div className="slider-container border-b-[1px] border-feedbackCol-100">
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            value={minValue}
            onChange={handleMinChange}
            className="thumb thumb-left rotate-180 w-[38%] mr-[-5px] "
          />
          <div className="h-[8px] w-[15%]  bg-blue-500 "></div>
          <input
            type="range"
            min="0"
            max="100"
            value={maxValue}
            onChange={handleMaxChange}
            className="thumb thumb-right w-[38%] ml-[-5px] "
          />
        </div>

        <div className="flex mt-[30px] justify-around items-center h-[30px] mb-5">
            <p className="h-full min-w-[97px] border-[1px] rounded-[8px] border-feedbackCol-100 flex items-center justify-center text-[15px] font-semibold leading-[100%]  "> ₦{minCount}</p>
            <p className="h-full min-w-[97px] border-[1px] rounded-[8px] border-feedbackCol-100 flex items-center text-[15px] font-semibold leading-[100%] justify-center ">₦{maxCount}</p>
        </div>
      </div>
    );
  };

export default function FilterByPrice() {
  return (
    <div>
         <FilterHeader str={"Price"}/>

        <RangeSlider/>

    </div>
  )
}
