import React from 'react'
import styles from './Filter.module.scss'

const FilterBTN = ({name,index,item, task, setPageNumber}) => {
  return (
    <div>
        <style>
            {`
            .x:checked + label{
                background-color: #109965;
                color: white;
            }
            input[type="radio"]{
                display:none
            }
            `}
        </style>
        <div className="form-check">
            <input onClick={()=>{
                        setPageNumber(1);
                        task( item );
                    }} 
                    className="form-check-input x" 
                    type="radio" 
                    name={name} 
                    id={`${name}-${index}` } />
            <label className={`btn ${styles.btnFilter}`} htmlFor={`${name}-${index}`}>{item}</label>
        </div>
    </div>
  )
}

export default FilterBTN