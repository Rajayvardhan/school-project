import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Syllabus(props) {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const fetchData = async () => {
    let datas = { "schoolyearID":10}
    // props.setProgress(10)
    setLoading(true);
    const response = await axios.post(
      `${BaseURL}/syllabus/getSyllabus`,datas);
    // props.setProgress(30)
    const data = await response.data;
    // props.setProgress(80);
    setTimeout(() => {
      if (data) {  
        setLoading(false);
        setSyllabus(data.syllabus); 
      }
      // props.setProgress(100)
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    {/* <Breadcrumb title="Syllabus" /> */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-flex">
            <div className="col-sm-4 add">
            <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/syllabus/add"><i className="fa fa-plus"></i>  Add Syllabus  </Link>
            </div>
            </div>
            <div>
              <hr />
            </div>
              <h5>All Syllabus</h5>
            </div>
            <div className="card-body">
            {loading && <Loader />}
              <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Discription</th>
                      <th>Date</th>
                      <th>Uploader</th>
                      <th>File</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {syllabus &&
                        syllabus.map((syllabuses, i) => {
                          return (
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{syllabuses.title}</td>
                            <td>{syllabuses.description}</td>
                            <td>{syllabuses.date}</td>
                            <td>Keendroid</td>
                            <td>{syllabuses.originalfile}</td>
                            <td>
                              <Link to="/syllabus/edit"><i className="fa fa-edit edit"></i> </Link>
                              <Link> <i className="fa fa-trash delete"></i></Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Syllabus;
