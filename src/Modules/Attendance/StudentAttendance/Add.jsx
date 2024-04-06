import React, { useState, useEffect } from "react";
import _, { transform } from "lodash";
import "../../../assets/css/datatables.css";
import "../../../assets/css/style_my.css";
import { getStudentsList } from "../../../Apis/AddStudentAtt";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import AddButton from "../../../Components/Buttons/AddButton";
import ClassList from "../../../Components/../Components/ClassList/ClassList";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import ReactPaginate from "react-paginate";
import { PieChart } from "react-minimal-pie-chart";
// import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios";
import Swal from "sweetalert2";
import request from "../../../Apis/request";
import { BaseURL } from "../../../api/DataApis";

function Add() {
  const [classs, setClasses] = useState([]);
  const [setData, saveData] = useState([]);
  const [date, setDate] = useState([]);
  const [students, setStudents] = useState([]);
  const [paginatedstudents, setPaginatedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const  apiEndpoint = `${BaseURL}/classes/getClasses`;
  function Hello() {
    // alert("hello");
  }

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  const requestData = async (class_id) => {
    setTimeout(() => {
      if (getStudentsList.length == 0) {
        // props.setProgress(70);
        setLoading(false);
        // props.setProgress(100);
      }
    }, 1000);
    // props.setProgress(20);
    setLoading(true);
    // props.setProgress(40);
    const data = await getStudentsList(class_id, date);
    // props.setProgress(70);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        setStudents(data);
        setPaginatedStudents(_(data).slice(0).take(pageSize).value());
      }
      // props.setProgress(100);
    }, 1000);
  };

  const onchange = (e) => {
    setPageSize(e.target.value);
    // requestData();
  };
  const fetchData = async ( ) => {
    // console.log("classID", classesID);
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = apiEndpoint;
 
    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"GET",
   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    if (res && res.classes) {
      //const data = res.data.student;
       //console.log("res",res.students)
      // setExamState(res.exam_list);
      setClasses(res.classes);  
      // console.log("exam state", ExamState);
      //sreturn res.student;
      }

  
    return [];
}

useEffect(() => {
  fetchData ();
}, []);
  const handleClassChange = (event) => {
    setClasses(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let response = await request({
      url: `${BaseURL}/sattendance/addAttendance`,
      // url: 'posts',
      method:"POST",
      // classid : class_id;
      data: JSON.stringify(saveData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
  // Perform API call to mark attendance with selectedClass and selectedSection

  // https://demo.keendroid.in/sattendance/addAttendance 
  };

  const studentList = (e) => {
    if (e.target.value == students.length) {
      setPaginatedStudents(students);
    } else if (e.target.value != students.length) {
      requestData(e.target.value);
      setPageSize(pageSize);
      setPaginatedStudents(_(students).slice(0).take(pageSize).value());
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                     Add Student Attendance
                    </h4>
                  </div>
                </div>
                <div className="box-body">
                  <hr style={{marginTop:"-4px"}}/>
                  <div className="row">
                    <div className="col-sm-12">
                      <form class="form-horizontal" role="form" method="post" style={{marginTop:"-23px"}}>
                        <div className="row">
                          <div className="col-md-9">
                            <div className="row">
                              <div class="col-md-4">
                                <div class="form-group" style={{marginLeft:"18px"}}>
                                  <label style={{marginLeft:"3px"}} class="control-label">Class</label>
                                  <select
                                    onChange={studentList}
                                    className="form-control text-center"
                                  >
                                    <option value="">Select Class</option>
                                    {/* <option value="-1">View All</option> */}
                                    {classs.map((classes) => {
                                      return (
                                        <option
                                          key={classes.classesID}
                                          value={classes.classesID}
                                        >
                                          {classes.classes}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label style={{marginLeft:"3px"}} class="control-label">Section</label>
                                  <select
                                    name="sectionID"
                                    id="sectionID"
                                    class="form-control select2 select2-offscreen"
                                    tabindex="-1"
                                  >
                                    <option value="0" selected="selected">
                                      Select Section
                                    </option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                    <option value="4">C</option>
                                    <option value="5">D</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label style={{marginLeft:"3px"}} class="control-label">Date</label>
                                  <input
                                    type="date"
                                    class="form-control"
                                    name="date"
                                    max={today}
                                    id="date"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <button
                                    type="submit"
                                    onClick={handleSubmit()}
                                    class="btn btn-success col-md-12"
                                    style={{ marginTop: "25px",width:"59%" }}
                                  >
                                    Attendance
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add;
