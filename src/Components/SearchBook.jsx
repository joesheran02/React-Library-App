import React from 'react'
import Navbar from './Navbar'

const SearchBook = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <center><button className="btn btn-warning">Search</button></center>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchBook
