import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

export const Filters = ({setStatus, setPageNumber, setGender, setSpecie}) => {

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-3">Filters</div>

      <div className="accordion" id="accordionExample">

        <Status setStatus={ setStatus } setPageNumber={ setPageNumber }/>
        <Species setSpecie={ setSpecie } setPageNumber={ setPageNumber }/>
        <Gender setGender={ setGender } setPageNumber={ setPageNumber }/>

      </div>
    </div>
  )
}
