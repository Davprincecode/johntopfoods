import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl} from "../apis/fetchData";

interface Product {
  productId: number;
  productName: string;
  productWeight: number;
  productSize: string;
  productPrice: number;
  productImage: string;
}

function LandingPage() {
    const [products, setProducts] = useState<Product[]>([]);
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
    <div className='landingPageWrap'>
      <div className="flex-parent">
        <div className="flex-header">
          <h1>our bestsellers</h1>
        </div>
        <div className="flex">

      {
        products.map((value, index)=>(
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
                  read more
                </NavLink>
              </div>
            </div>
          </div>
        ))
      }


        </div>

      </div>
    </div>
  )
}

export default LandingPage
