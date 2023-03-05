import React, { useEffect, useState } from 'react'
import { Cards } from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';
import styles from './Text.module.scss';

const Location = () => {

  const [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let { name, type, dimension,  } = info;
  let [ results,setResults ] = useState([])
  let api = `https://rickandmortyapi.com/api/location/${id}`



      useEffect(() => {

        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setInfo( data )

          let a = await Promise.all(
            data.residents.map((x)=>{
              return fetch(x).then((res => res.json()))
            }))
          setResults(a);
        })();

      }, [api])

  return (
    <div className="container">
        <div className="row">
          <h1 className="text-center mb-2">
            Location{" "}:{" "}
            <span className={`${styles.colortext}`}>{name === "" ?  "Unknown" : name}</span>
          </h1>
          <h5 className="text-center mb-3">
            Dimension : <span className={`${styles.colortext}`}>{dimension === "" ?  "Unknown" : dimension}</span>
            </h5>

            <h6 className="text-center mb-5">
            Type : <span className={`${styles.colortext}`}>{type === "" ?  "Unknown" : type}</span>
            </h6>
        </div>      
        <div className="row">
          <div className="col-lg-3 col-12">
            
            <h4 className="text-center mb-4">Pick Location</h4>
            <InputGroup setID={setID} name="Location" total={126}/>
            
            </div>
          <div className="col-lg-8 col-12">
            <div className="row"><Cards results={results} /></div>
            </div>
        </div>      
    </div>
  )
}

export default Location