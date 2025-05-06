import { createBrowserRouter } from "react-router-dom";
import MainWebLayout from "../layouts";
import App from "../pages/App";
import MenProducts from "../pages/MenProducts";
import WomenProducts from "../pages/WomenProducts";
import UnisexProducts from "../pages/UnisexProduct";
import SelectCategory from "../pages/SelectCategory";
import ProductPreview from "../pages/ProductPreview";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AccountUser from "../pages/AccountUser";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainWebLayout,
        children: [  
            { index: true, Component: App },
            {path: "menproducts", Component: MenProducts},
            {path: "womenproducts", Component: WomenProducts},
            {path: "unisexproducts", Component: UnisexProducts},
            {path: "selectcategory", Component: SelectCategory},
            {path: "productpreview", Component: ProductPreview},
            {path: "wishlist", Component: WishList},
            {path: "cart", Component: Cart},
            {path: "checkout", Component: Checkout},
            {path: "account", Component: AccountUser},
        ]
    }
])
