import React, { useEffect, useState } from 'react'
import Adsidenav from '../Elements/Adsidenav'
import axios from 'axios';
import { Link } from 'react-router-dom';

function News() {

  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [edit, setEdit] = useState("")

  async function handlesubmit(e) {
    e.preventDefault()
    const n = { title, desc };
    if (edit) {
      var response = await axios.put(`http://localhost:3000/api/news/${edit}`, n)
      setEdit("")
      setTitle("")
      setDesc("")
      localStorage.removeItem('edit')
    } else {
      var response = await axios.post(`http://localhost:3000/api/news/`, n)
      setTitle("")
      setDesc("")
    }
    if (response.data.msg == "success") {
      window.alert("success")
      getnews();
    } else {
      window.alert("something went wrong")
    }

  }
  async function getonenews(id) {
    const response = await axios.get(`http://localhost:3000/api/news/${id}`)
    console.log(response)
    setTitle(response.data.value.title)
    setDesc(response.data.value.desc)
  }

  async function getnews() {
    const response = await axios.get('http://localhost:3000/api/news');
    console.log(response.data);
    if (response.data.msg == "success") {
      setNews(response.data.value)
    }

  }
  useEffect(() => {
    getnews();
    setEdit(localStorage.getItem('edit'))

  }, [])

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
              <form action="" onSubmit={handlesubmit} className="w-75 bg-light my-4 p-5 shadow-lg rounded-5 mx-auto">
                <h4>Add News</h4>
                <br /><br />
                <label htmlFor="">Enter Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                  name='title' className='form-control' />
                <br />
                <label htmlFor="">Enter Description</label>
                <textarea name="desc" value={desc} onChange={(e) => setDesc(e.target.value )} className='form-control' id=""></textarea>
                <br />
                <input type="submit" value="Add News" className='form-control btn btn-primary' />
              </form>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8 mx-auto p-5 bg-light shadow-lg rounded-5">
              <h4>View News</h4>
              <br />
              <br />
              <table className='table table-light bg-light'>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Action</th>
                  </tr>

                </thead>
                <tbody>
                  {
                    news.map((n, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{n.title}</td>
                        <td>{n.desc}</td>
                        <td>
                          <Link
                            onClick={() => {
                              console.log(n._id);
                              localStorage.setItem('edit', n._id);
                              getonenews(n._id)
                            }}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>
                          <Link className="btn btn-sm btn-danger">Delete</Link>
                        </td>

                      </tr>

                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
