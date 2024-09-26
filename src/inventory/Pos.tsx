import React from 'react'

function Pos() {
  return (
    <div>
      <div className="posHeader">
          <div className="backIcon">
            <i>a</i>
          </div>
          <div className="headerTitle">
            john top foods
          </div>
          <div className="dottedIcon">
            <i>.</i>
          </div>
      </div>

      {/* =============== */}

      <div className="posmainwrapper">

        {/* selected item */}
        <div className="posSelectItem">

            <div className="tablecontainer">
            <table className="trbdy">
                <tbody>
                    {/* <div className="thead"> */}
                    <tr>
                    <th>name</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>total</th>
                    <th>action</th>
                    </tr>
                    
                    {/* </div> */}
                <tr>
            <input type="hidden" className="count" value="1" />

            <td className="productname0">
            STRAWBERRY FLOVOR BREAD DULCET      
            <input type="hidden" id="productId270189" value="product64b85a3c192ad" />
                </td>

                <td className="productquantity0">
                    <div className="productCount">
                    <div className="minus">-</div>
                    1
                    <div className="plus">+</div>
                    </div>
            {/* <input type="number" className="prdquantity0" id="productQuantity270189" value="1" /> */}
                </td>
        
                    <td className="unitprice0">
                    150    
                    <input type="hidden" id="productPrice270189" value="150" />
                    </td>

                <td className="totalprice0" id="totalPrice270189">
                150
                </td>


                    <td>
                    <a href="include/delete.php?msg=product64b85a3c192ad">
                    <div className="delete">
                        *
                    <div className="angle" >
                    <div className="right-arr" ></div>
                    <div className="left-arr" > </div>
                    </div>

                    </div>
                    </a>
                    </td>

                </tr>
                        
            </tbody>
                </table>
            </div>

         <div className="totalcontainer">
        <div className="subtotalflex">
        <p>subtotal</p>
        <p id="totalSumPrice">
            150        </p>
    </div>
    <div className="vat">
    </div>
    <div className="groundtotal">
        <p>groundtotal</p>
        <p id="groundTotalPrice">
            150.00         </p>
    </div>
          </div>
          
          <div className="paymentflex">
        <div className="cash">
            cash
        </div>
 
        <div className="transfer">
           pos
        </div>

        <div className="transfer">
           uba
        </div>

     </div>

        </div>

         {/* selected item end */}


{/* pos main container */}
        <div className="posMainContainer">

        <div className="searchflex">
        <div className="input">
        <input type="text" id="inputdata" className="searchItem" name="" placeholder="search an item" />
        </div>
        </div>

           <div className="posProductCon">
           <div className="posProduct">
    <div className="productIcon">
        image
        {/* <img src="images/box.png" style="width: 100%; height: 100%"> */}
    </div>
    <div className="productNameCon" >
        <p id="productName"> STRAWBERRY FLOVOR BREAD DULCET</p>

        <p>Quantity <span>1219</span></p>

        {/* <p>sale <span>6</span> (#19,00000)</p>  */}
    </div>
    
    <div className="productPrice">
        <div className='currency'> 
          naira
        {/* <img src="images/naira.png" alt="" style="width: 100%; height: 100%"> */}

       </div> 
       150 
    </div>
    
    <a href="sell.php?id=1818">
    <div className="productBtn" >
        sell
    </div>
    </a>
    
    </div>
           </div>

        </div>
        {/* pos main container end */}

      </div>


    </div>
  )
}

export default Pos
