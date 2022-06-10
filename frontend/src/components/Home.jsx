import React, { useEffect, useState } from 'react'
import MetaData from './layouts/MetaData';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../redux/actions/productActions';
import Product from './product/Product';
import Loader from './layouts/Loader';
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";


const Home = () => {
 
  const alert = useAlert();
  const dispatch = useDispatch();
  
  const { loading, products, error, productsCount, resultsPerPage } = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    if (error) {
      return alert.error(error);
     }

    dispatch(getProducts(currentPage));

 }, [dispatch, alert, error, currentPage])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Buy Best Products Online"} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
          {resultsPerPage <= productsCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultsPerPage}
                totalItemsCount={productsCount}
                onChange={(e) => setCurrentPage(e)}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home
