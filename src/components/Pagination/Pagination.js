import React ,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss'

const Pagination = ({ info, setPageNumber, pageNumber }) => {
    let [ width, setWidth ] =useState(window.innerWidth);

    let updateDimension = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateDimension);
      return () => window.removeEventListener("resize", updateDimension);
      
    
    }, [])
    
    // let next = () => {
    //     setPageNumber( (x) => x + 1  )
    // };
    // let prev = () => {
    //     if( pageNumber > 1 ){
    //         setPageNumber( x => x - 1 )
    //     }

    // };
  return (
    // <div className="container d-flex justify-content-center gap-5 my-5">
    //     <button onClick={prev} className="btn btn-primary">Prev</button>
    //     <button onClick={next} className="btn btn-primary">Next</button>
    // </div>
    <>
        <style>
          {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none
            }
            .pagination{
              font-size: 14px;
            }
          }
          `}
        </style>
        <ReactPaginate 
            className= "pagination justify-content-center gap-4 my-5"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1 }
            nextLabel= "Next"
            previousLabel= "Prev"
            nextClassName= {`${style.boton} btn next`}
            previousClassName= {`${style.boton} btn prev`}
            pageClassName={`${style.page} page-item`}
            pageLinkClassName="page-link"
            pageRangeDisplayed={width < 576 ? 1 : 2}
            marginPagesDisplayed={width < 576 ? 1 : 2}
            onPageChange={(data) => {setPageNumber( data.selected + 1 )}}
            pageCount={info?.pages} 
            activeClassName="active"
        />
    </>
    
        
  )
}

export default Pagination