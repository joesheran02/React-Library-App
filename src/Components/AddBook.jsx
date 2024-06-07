import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
        <Navbar/>
      <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Book  Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Author Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Book Description</label>
                        <textarea name="" id="" class="form-control"></textarea>
                        
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Price</label>
                       <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Category</label>
                        <select name="" id="">
                            <option value="--select category--">--select category--</option>
                            <option value="n">Novel</option>
                            <option value="a">Autobiography</option>
                            <option value="p">Poem</option>
                            <option value="f">Fictional</option>
                            <option value="t">Thriller</option>
                            <option value="h">Horror</option>
                        </select>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Publish Year</label>
                        <input type="date" name="" id="" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Publisher Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Distributer Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">Edition</label>
                       <input type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success">Add Book</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddBook
