import React, { useEffect, useState } from "react";
import { baseUrl } from "../apis/fetchData";
import { useLocation } from "react-router-dom";


interface Datas {
id: string;
reviewImage :  string;
reviewLink : string;
  }

const ImageGallery: React.FC = () => {

   const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const [suppliers, setSuppliers] = useState<Datas[]>([]);
  const [selectedImage, setSelectedImage] = useState<Datas | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const openPopup = (supplier: Datas) => setSelectedImage(supplier);
  const closePopup = () => setSelectedImage(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch(`${baseUrl}/review`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setSuppliers(result.data); 
      } catch (err: any) {
        setError(`Failed to fetch suppliers: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  if (loading) return <p>Loading suppliers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="testimoniesContainer">
        {suppliers.map((supplier, index) => (
       <div className="testimonies">
          <img
            key={supplier.id || index}
            src={supplier.reviewImage}
            alt={`Supplier ${supplier.id}`}
            className="thumbnail"
            onClick={() => openPopup(supplier)
              
            }
          />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-image-container">
            <img
              src={selectedImage.reviewImage}
              alt="Enlarged Supplier"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
