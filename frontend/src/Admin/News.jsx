import React from 'react'
import Adsidenav from '../Elements/Adsidenav'

function News() {
  return (
    <div>
       <div className="row dash">
        <div className="col-2 h-100 bg-dark">
              <Adsidenav />
        </div>
        <div className="col-10 bg-white">
           <div className="row text-center mt-3">
            <div className="col-sm-12">
                <h3>News</h3>
            </div>
           </div>
           <div className="row">
            <div className="col-md-8 mx-auto">
                <form action="" className="w-75 bg-light my-4 p-5 shadow-lg rounded-5 mx-auto">
                    <h4>Add News</h4>
                    <br /><br />
                    <label htmlFor="">Enter Title</label>
                    <input type="text" name='title' className='form-control' />
                    <br />
                    <label htmlFor="">Enter Description</label>
                    <textarea name="desc" className='form-control' id=""></textarea>
                    <br />
                    <input type="submit" value="Add News" className='form-control btn btn-primary' />
                </form>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default News
