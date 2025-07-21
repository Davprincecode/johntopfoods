import React, { useEffect, useState } from 'react'
import { baseUrl} from "../apis/fetchData";
import seaFoods from '../assets/images/Combine.jpg';
import Header from '../component/Header'
import Footer from '../component/Footer'
import { NavLink, useLocation } from 'react-router-dom';


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

const ProductList = () => {

   const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

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
            const response = await fetch(`${baseUrl}/productweb`, requestOptions);
            
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
    <div className="bodyWrapper">
        <Header/>
    <div className='aboutUs ' id="aboutUs">
      <div className="aboutCon ">

        <div className="aboutUsImg">
            <img src={seaFoods} alt="" />
        </div>

        <div className="product-list-con">
            
            <div className="header-title">
            <div className="doticon"></div>
             <h1>Shop by Category</h1>
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
                                  <NavLink to='#'>
                                    request price
                                  </NavLink>
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
    </div>
        <Footer/>
    </div>
  )
}

export default ProductList