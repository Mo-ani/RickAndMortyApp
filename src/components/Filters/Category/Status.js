import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ( {setStatus, setPageNumber} ) => {
    let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            Status
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-3">
            {status.map((item, index) => (
                
                <FilterBTN 
                        task={setStatus}
                        setPageNumber={setPageNumber}
                        key={index} 
                        name="gender"  
                        index={index} 
                        item={item} 
                />
            
            ))}
            
          </div>
        </div>
    </div>
  )
}

export default Status