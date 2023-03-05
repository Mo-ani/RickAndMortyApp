import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ( { setSpecie, setPageNumber } ) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
      ];
  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Species
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-3">
            {species.map((item, index) => (
                
                <FilterBTN 
                    task={setSpecie}
                    setPageNumber={setPageNumber}
                    key={index} 
                    name="species"  
                    index={index} 
                    item={item} 
                />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Species