import  { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl} from "../apis/fetchData";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Category{
  id : number; 
  categoryName : string;
  products : Product[]
}
interface Product {
  productId: number;
  productName: string;
  productWeight: number;
  productSize: string;
  productPrice: number;
  productImage: string;
}

function Product() {
    const [products, setProducts] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      try {
        const response = await fetch(`${baseUrl}/limitproduct`, requestOptions);  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseDetails = await response.json();
        setProducts(responseDetails.data);
      } catch (error: any) {
        setError(`Failed to fetch products: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='landingPageWrap'>
      <div className="flex-parent">

        <div className="flex-header">
           <div className="header-title">
            <div className="doticon"></div>
             <h1>Shop by Category</h1>
           </div>
           <div className="header-read-more">
              <NavLink to="/product-list">Read more  <FontAwesomeIcon icon={faArrowRight} /></NavLink>
           </div>
        </div>

      {products.map((category) => (
        category.products.length > 0 && (
          <div key={category.id} className="category-section">

            <div className="flex-category-name">
               <div className="doticon"></div>
              <h2>{category.categoryName}</h2>
            </div>
            

            <div className="flex">
              {category.products.map((value, index) => (
                <div className="flex-child" key={index}>
                  <div className="imagewrapper">
                    <div className="flex-img">
                    <img src={value.productImage} />
                  </div>
                  </div>
                  <div className="flex-title">
                    <div className="flex-title-name">
                      {value.productName}
                    </div>
                    <div className="flex-readmore">
                      <a href={`https://wa.me/2348057386375?text=Hello,  I need quotation or price on ${value.productName}`} target="_blank" >
                        request price
                      </a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}


      </div>
    </div>
  )
}

export default Product
