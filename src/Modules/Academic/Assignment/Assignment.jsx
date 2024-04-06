import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from '../../../api/DataApis';

function Assignment() {
  const [assignment, setAssignment] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`${BaseURL}/assignment/getAssignments`)
      .then((resp) => {
        setAssignment(resp.assignments);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //https://demo.keendroid.in/assignment/getAssignments
  return (

    <>
   
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
         
            <div className="card-header pb-0">
              <div className="d-flex">
            <div className="col-sm-4 add">
            <Link className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" style={{width:'auto'}} to="/academic/assignment/add"><i className="fa fa-plus"></i>  Add Assignment  </Link>
            </div>
            
            </div>
            <div>
              <hr />
            </div>
              <h5>All Assignment</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="display dataTable" id="advance-1">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Discription</th>
                      <th>Deadline</th>
                      <th>Class</th>
                      <th>Uploader</th>
                      <th>File</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {assignment && assignment.map((index, i) => {
                    <tr>
                            <td>{i+1}</td>
                            <td>{i.title}</td>
                            <td>{i.description}</td>
                            <td>{i.deadlinedate}</td>
                            <td>{i.classesID}</td>
                            <td>{}</td>
                            <td>{i.originalfile}</td>
                            <td>
                              <Link to="/assignment/view"><i className="fa fa-check-square-o" style={{fontSize:"18px"}}></i> </Link>
                              <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link>
                            </td>
                          </tr>
                  })}
                  </tbody>
                  <tfoot>
                    {/* <tr>
                    <th>#</th>
                      <th>Title</th>
                      <th>Discription</th>
                      <th>Deadline</th>
                      <th>Class</th>
                      <th>Uploader</th>
                      <th>File</th>
                      <th>Action</th>
                    </tr> */}
                  </tfoot>
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

export default Assignment;
