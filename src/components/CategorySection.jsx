import SectionHeader from './SectionHeader'
import Card from './Card'



export default function CategorySection({data, subPara = "", isArrow, isSubPara, isHeight, headerStr, isHeart = false, formatText = false}) {
    
  return (
    <div className="w-full max-w-[1200px] self-center flex flex-col gap-10">
        <SectionHeader str={headerStr}/>

        <div className="grid grid-cols-4">
            {data && data.map((obj) => <Card key={obj.id} imageUrl={obj.image} name={obj.name} isArrow={isArrow} subPara={subPara === "" ? obj?.brand : subPara} isSubPara={isSubPara} isHeight={isHeight} amount={obj?.price} isHeart={isHeart} formatText={formatText} /> )}
        </div>
    </div>
  )
}
