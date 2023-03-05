import React, { useEffect, useState } from 'react'
import { Cards } from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';
import styles from './Text.module.scss';

const Episodes = () => {

  const [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let {air_date, name } = info;
  console.log(info)
  let [ results,setResults ] = useState([])
  console.log(results)
  let api = `https://rickandmortyapi.com/api/episode/${id}`



      useEffect(() => {

        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setInfo( data )

          let a = await Promise.all(
            data.characters.map((x)=>{
              return fetch(x).then((res => res.json()))
            }))
          setResults(a);
        })();

      }, [api])

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-2">
          Episode{" "}:{" "}
          <span className={`${styles.colortext}`}>{name === "" ?  "Unknown" : name}</span>
        </h1>
        <h5 className="text-center mb-5">
          <span className={`${styles.colortext}`}>{air_date === "" ?  "Unknown" : air_date}</span>
        </h5>
      </div>      
        <div className="row">
          <div className="col-lg-3 col-12">
            
            <h4 className="text-center mb-4">Pick Episodes</h4>
            <InputGroup setID={setID} name="Episode" total={51}/>
            
            </div>
          <div className="col-lg-8 col-12">
            <div className="row"><Cards results={results} /></div>
            </div>
        </div>      
    </div>
  )
}

export default Episodes