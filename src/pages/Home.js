import { Link } from "react-router-dom";
import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product-list/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;