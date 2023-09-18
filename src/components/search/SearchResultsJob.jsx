import React from 'react';
import './SearchResults.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function SearchResultsJob ({ resultJobs }) {

    return (<>
      { resultJobs.length !== 0 ? <h1>List of Jobs</h1> : null }
        <div className='resultGrid'>
            {resultJobs.map((data) => {
                return (
                    <div className='resultCard' key={data.idJob}>
                        <li>Name: {data.providerJob}</li>
                        <li>Profession: {data.nameJob}</li>

                        <li>Contact: {data.whatsapp === true  ? 
                        <FaWhatsapp style={{
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            color: 'green'
                          }}
                        /> : null}{data.contactJob}</li>


                        <li>Price: {data.priceJob}</li>
                    </div>

                )
            })}
        </div></>
    )
}