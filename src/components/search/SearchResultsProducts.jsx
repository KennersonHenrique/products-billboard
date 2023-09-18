import React from 'react';
import './SearchResults.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function SearchResultProducts ({ resultProducts }) {
    return (
        <>  { resultProducts.length !== 0 ? <h1>List of Products</h1> : null }
            <div className='resultGrid'>
                {resultProducts.map((data) => {
                    return (
                        <div className='resultCard' key={data.idProduct}>
                            <li>Product: {data.nameProduct}</li>
                            <li>Description: {data.descrProduct}</li>
                            <li>Price: {data.priceProduct}</li>
                           
                            <div>
                            <li>Seller: {data.vendor.providerSeller}</li>
                            <li>Contact: {data.vendor.whatsapp === true  ? 
                            <FaWhatsapp style={{
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            color: 'green'
                             }}
                            /> : null}{data.vendor.contactSeller}</li>

                            </div>
                        </div>
                    )
                })}
            </div></>

    )
}