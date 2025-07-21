
import { baseUrl} from '../apis/fetchData';
import { useEffect, useState } from "react";


interface Datas {
id: string;
reviewImage :  string;
reviewLink : string;
  }
  
function Testimonies() {

  const [data, setData] = useState<Datas[]>([]);
  const [selectedImage, setSelectedImage] = useState<Datas | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const openPopup = (supplier: Datas) => setSelectedImage(supplier);
  const closePopup = () => setSelectedImage(null);

  useEffect(() => {
    const fetchSupplier = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      try {
        const response = await fetch(`${baseUrl}/review`, requestOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }    
        const result = await response.json();
        setData(result.data);

      } catch (error: any) {
        setError(`Failed to fetch products: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (

    <div className="Testimonies" style={{  padding: "10px"}}>
    
        <div className="header-title">
                    <div className="doticon"></div>
                    <h2>Some Testimonies</h2>
        </div>

    <div className="testimoniesContainer">

     {data.map((items, index)=>(

         items.reviewImage ? (
       <div className="testimonies" key={index} >
            <img src={items.reviewImage} alt="" />
            <div className="preview" onClick={() => openPopup(items)}>
              <p>click to preview</p> 
            </div>
        </div>
      ): (
         <div className="testimonies">
            <div style={{ position: 'relative',  height: '100%' }}>
          <iframe
            src={items.reviewLink}
            title="YouTube Shorts Embed"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
         </div>
      )
     ))}


      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-image-container">
            <img
              src={selectedImage.reviewImage}
              className="popup-image"
            />
          </div>
        </div>
      )}
 
    </div>
    </div>
    
  )
}

export default Testimonies