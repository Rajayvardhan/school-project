import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Loader from "../../../Components/Loader/Loader";
import axios from "axios";
import { BaseURL } from "../../../api/DataApis";

function Period(props) {
  const [period, setPeriod] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // props.setProgress(10);
    setLoading(true);
    const response = await axios.get(
      `${BaseURL}/period/getPeriods`
    );
    // props.setProgress(30);
    const data = await response.data;
    // props.setProgress(80);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setPeriod(data.period);
      }
      // props.setProgress(100);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((results) => {
      if (results.value) {
        axios.delete(`${BaseURL}/period/delPeriod/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Data Deleted Successfully...",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchData();
      }
    });
  };

  return (
    <>
      {/* <Breadcrumb title="Period" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex">
                  <div className="col-sm-4 add">
                    <Link
                      className="btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                      style={{ width: "auto" }}
                      to="/period/add"
                    >
                      <i className="fa fa-plus"></i> Add Period
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <h5>All Period</h5>
              </div>
              <div className="card-body">
                {loading && <Loader />}
                <div className="table-responsive">
                  <table className="display dataTable" id="advance-1">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Period Name</th>
                        <th>Period Id</th>
                        <th>Class</th>
                        <th>Period Start Time</th>
                        <th>Period End Time</th>
                        <th>Period Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {period &&
                        period.map((u, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{u.period_name}</td>
                              <td>{u.periodID}</td>
                              <td>{u.classes}</td>
                              <td>{u.periodSTime}</td>
                              <td>{u.periodETime}</td>
                              <td>{u.periodOrder}</td>
                              <td>
                                <Link to={`/period/edit/${u.periodID}`}>
                                  <i
                                    className="fa fa-edit edit"
                                  ></i>
                                </Link>
                                <Link
                                  onClick={() =>
                                    handleDelete(u.periodID)
                                  }
                                >
                                  <i
                                    className="fa fa-trash delete"
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                    {/* <tfoot>
                      <tr>
                      <th>#</th>
                        <th>Period Name</th>
                        <th>Period Id</th>
                        <th>Class</th>
                        <th>Period Start Time</th>
                        <th>Period End Time</th>
                        <th>Period Number</th>
                        <th>Action</th>
                      </tr>
                    </tfoot> */}
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

export default Period;
