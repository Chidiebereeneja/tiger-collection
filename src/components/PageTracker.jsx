import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'


const pages = [
  {menproducts:  "Men's Clothing", id: "menproducts"},
  {womenproducts: "Women's Clothing", id: "womenproducts"},
  {unisexproducts: "Unisex Products", id: "unisexproducts"},
  {selectcategory: "Category Products", id: "selectcategory"},
  {productpreview: "Product Preview", id: "productpreview"},
  {wishlist: "WishList", id: "wishlist"},
  {cart: "Add to Cart", id: "cart"},
  {checkout: "Checkout", id: "checkout"},
  {account: "Account", id: "account"},
  {['/']: "Home", id: "/"},
]

export default function PageTracker({arr}) {
  const navigate = useNavigate()


  const handleNavigate = function(e) {
    if(e.target.id === "/") {
      navigate(`${e.target.id}`)
    } else {
      navigate(`/${e.target.id}`)
    }
    
  }

  return (
    <div className="text-[16px] flex gap-1 items-center w-full max-w-[1200px] self-center leading-[100%] font-medium text-textColor-100 mt-8">
        { 
        
        arr && arr.map((item, i) => {
          const [pagesArr] = pages.filter((obj) => obj[item.toLowerCase()])
          

          return (
            <p key={pagesArr?.id} className="flex gap-3 items-center">
              <span onClick={handleNavigate} id={pagesArr?.id} className={i === arr.length-1 ? "cursor-default" :"cursor-pointer" }>{pagesArr?.[item.toLowerCase()]}</span>
              {i === arr.length-1 ? "" :<IoIosArrowForward className="inline-block"/>}
            </p>
          )
        })}
    </div>
  )
}
