import { IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'
import { MdOutlineStar, MdStarOutline } from 'react-icons/md'
import { TbMessage } from 'react-icons/tb'
import FilterBySize from './FilterBySize'
import FilterByColor from './FilterByColor'
import Button from './Button'
import { PaymentSection } from './PaymentPreviewSection'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { IoManOutline } from 'react-icons/io5'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiOutlineRetweet } from 'react-icons/ai'
import PageTracker from './PageTracker'

export default function ProductPreviewDesAside() {
  return (
    <aside className="flex flex-col gap-3 w-[60%] px-8 pb-[1px] ">
                    <PageTracker arr={["Women", "Top"]}/>
    
                    <h1 className="text-[34px] text-sectionHeaderCol-100 font-medium leading-[140%] tracking-[2%] w-[60%] mt-5 ">Raven Hoodie With 
                    Black colored Design</h1>
    
                    <div className="flex gap-1 items-center">
                        <MdOutlineStar className="inline-block text-starCol-100"/>
                        <MdOutlineStar className="inline-block text-starCol-100"/>
                        <MdOutlineStar className="inline-block text-starCol-100"/>
                        <MdStarOutline className="inline-block text-starCol-100"/>
                        <MdStarOutline className="inline-block text-starCol-100"/>
    
                        <div className="flex gap-2 ml-1 items-center font-medium text-[16px] leading-[100%] text-textColor-100 ">
                            <p>3.5</p>
                            <TbMessage className="inline-block" />
                             <p>120 comment</p>   
                        </div>
                    </div>
    
                    <div className="my-3 flex flex-col gap-3">
                        <div className="flex items-center gap-5">
                            <p className="text-productCol-100 text-[17px] font-semibold ">Select Size</p>
                            <p className="text-textColor-100 text-[17px] font-medium ">
                                <span>Size Guide</span>
                                <IoIosArrowRoundForward  className="inline-block"/>
                            </p>
                        </div>
    
                        <div>
                            <FilterBySize data={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]} isHeader={false} />
                        </div>
                    </div>
    
                    <div className="flex flex-col gap-4 mt-1 mb-3">
                        <h4 className="font-semibold text-[18px] leading-[100%] text-productCol-100 ">Colours Available </h4>
    
                        <div>
                            <FilterByColor colorData={[
                                { "name": "Red", "rgb": "rgb(255, 0, 0)" },
                                { "name": "Green", "rgb": "rgb(0, 128, 0)" },
                                { "name": "Blue", "rgb": "rgb(0, 0, 255)" },
                                { "name": "Yellow", "rgb": "rgb(255, 255, 0)" },
                                { "name": "Cyan", "rgb": "rgb(0, 255, 255)" },
                                { "name": "Magenta", "rgb": "rgb(255, 0, 255)" },
                                { "name": "Black", "rgb": "rgb(0, 0, 0)" }]} isHeader={false}/>
                        </div>
                    </div>
    
                    <div className="border-b-[1px] py-4 pb-10 flex gap-3 border-b-feedbackCol-100">
                        <Button style={" bg-purpleCol-100 text-searchInputCol-100 rounded-[8px] h-[46px] w-[156px] flex items-center justify-center gap-1 text-[17px] font-semibold leading-[100%] "} isIcon = {true} contentStr={"Add to cart"} />
    
                        <p className="h-[46px] min-w-[149px] rounded-[8px] border-[1px] border-sectionHeaderCol-100 text-sectionHeaderCol-100 flex items-center justify-center text-[18px] font-semibold leading-[100%]">₦3,000</p>
                    </div>
    
                    <div className="grid grid-cols-2 gap-5">
                        <PaymentSection iconUrl={<RiSecurePaymentLine className="paymentStyle-1"/>} str={"Secure payment"}/>
    
                        <PaymentSection iconUrl={<IoManOutline className="paymentStyle-1"/>} str={"Size & Fit"}/>
    
                        <PaymentSection iconUrl={<CiDeliveryTruck className="paymentStyle-1"/>} str={"Free shipping"}/>
    
                        <PaymentSection iconUrl={<AiOutlineRetweet className="paymentStyle-1"/>} str={"Free Shipping & Returns"}/>
                    </div>
    
                </aside>
  )
}
