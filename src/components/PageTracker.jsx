import { IoIosArrowForward } from 'react-icons/io'

export default function PageTracker({arr}) {
  return (
    <div className="text-[16px] flex gap-1 items-center leading-[100%] font-medium text-textColor-100 mt-8 ">
        <p className="cursor-pointer">{arr.at(0)}</p>
        <IoIosArrowForward/>
        <p>{arr.at(1)}</p>
    </div>
  )
}
