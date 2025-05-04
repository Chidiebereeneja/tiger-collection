import FilterByType from './FilterByType';
import FilterByPrice from './FilterByPrice';
import FilterByColor from './FilterByColor';
import FilterBySize from './FilterBySize';
import DressStyle from './DressStyle';
import Card from './Card';
import SectionHeader from './SectionHeader';
import CategoryDescription from './CategoryDescription';
import BestPriceTable from './BestPriceTable';




export default function ProductDisplay({filterData, colorData, sizeData, dressStyleData, productCategory, productDesData, productHeader, onlineDes, secHeader, salerHeader, bestSecHeader, dressHeader}) {


  return (
    <div className="w-full max-w-[1200px] self-center flex flex-col gap-10">
        <section className="w-full flex gap-10">
            <aside className="w-[295px] border-x-[1px] h-fit border-feedbackCol-100 " >
                <FilterByType filterData={filterData}/>

                <FilterByPrice/>

                <FilterByColor colorData={colorData}/>

                <FilterBySize data={sizeData}/>

                <DressStyle dataObj={dressStyleData} dressHeader={dressHeader} />
            </aside>

            <aside className="w-[80%]" >
                <header className="flex justify-between w-full my-15 ">
                    <h1 className="text-[22px] font-semibold leading-[100%] text-productCol-100 " >{productHeader}</h1>

                    <h3 className="text-[22px] flex items-center gap-2 font-medium leading-[100%] text-productCol-100 " >
                        <span className="text-purple-600" >New</span>
                        <span>Recommended</span>
                    </h3>
                </header>

                <div className="grid grid-cols-3 w-full">
                {productCategory && productCategory.map((obj) => <Card imageUrl={obj.image} name={obj.name} isHeart={true} subPara={obj.brand} isSubPara={true} formatText={true} amount={obj.price} isHeight={true} />)}
                </div>
            </aside>
        </section>

        <div className="w-full mt-7">
            <SectionHeader str={secHeader}/>

            <CategoryDescription dataObj={productDesData} desHeader={onlineDes}/>
        </div>

        <BestPriceTable dataObj={productCategory} salerHeader={salerHeader} secHeader={bestSecHeader}/>
    </div>
  )
}
