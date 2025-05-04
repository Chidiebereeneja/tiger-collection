import SectionHeader from './SectionHeader'

export default function BestPriceTable({dataObj , salerHeader, secHeader}) {
    
  return (
    <div className=" flex flex-col gap-4 mt-20 mb-20">
        <SectionHeader str={secHeader}/>
        <table className="w-[96%] self-center table-fixed mt-10 bg-searchInputCol-100">
            <thead className="text-[17px] text-textColor-100 font-normal leading-[100%]">
                <tr>
                    <th className="text-start py-7 border-b-[1px] border-r-[1px] border-feedbackCol-100 pl-11 w-[70%] ">{salerHeader}</th>
                    <th className="text-center border-b-[1px] border-feedbackCol-100">Best Price</th>
                </tr>
            </thead>

            <tbody className="text-[17px] text-textColor-100 font-normal leading-[100%]">
                {dataObj && dataObj.map((obj, i) => <tr className="py-10">
                    <td className={ i === 0 ? "pt-10 text-start py-4 border-r-[1px] border-feedbackCol-100 pl-11" : " text-start py-4 border-r-[1px] border-feedbackCol-100 pl-11" }>{obj.name}</td>
                    <td className={i === 0 ? "text-center pt-10" : "text-center"}>₦{obj.price}</td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}
