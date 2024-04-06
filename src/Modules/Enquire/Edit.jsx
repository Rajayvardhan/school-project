import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import axios from "axios";
import request from '../../Apis/request';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams  } from "react-router-dom";
import { BaseURL } from "../../api/DataApis";



const EnquireAdd= (props) => {
  // const[EnquiryData, setEnquiryData] = useState({});
  console.log("enquireDataProps", props);
  const [classes, setClasses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [ saveDataa, setDataa ] = useState({});
  const[AssignTo, setAssignTo] = useState([]);
  const[EnquiryNumber, setEnquiryNumber] = useState([]);
  const [ saveData, setData ] = useState({});
  const [loading, setLoading] = useState(false);

  const UpdateExamData = async ( e ) => {

    // const data = {
    //           "exam": ExamState,
    //           "classesID":ClassState,
    //           "passmark": PassMarkState,
    //           "finalmark": ExamFinalMark,
    //           "date": StartDateState,
    //           "end_date": "0",
    //           "note": noteState,
    //           "subject_type": "0",
    //           "term":TermState ,
    //           "exam_type": "0",
    //           "parentStatus": "0",
    //           "assessment": AssessmentState,
    //           "schoolyearID": "7"
    // };
    e.preventDefault();
    let response = await request({
      // url: 'https://demo.keendroid.in/exam/editExam/'+examdata?.examID,
      // url: 'posts',
      method:"POST",
      // data: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  
    if( response.status == "200" ) {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text:' Enquiry Updated Successfully...',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/exam');
    } else {
      alert(response.message);
    }
  }

  let navigate = useNavigate();
  let location = useLocation();
  let Enquiredata  =  location.state.students;
  

  
  const params = useParams();
  let EnquiryID = params.eid;
  let classesID = params.cid;
  // setEnquiryData(Enquiredataaa);
  // console.log("Enquiredata", EnquiryData); 
  // console.log(EnquiryData);
  useEffect(() => {

    setData(Enquiredata)


  // useEffect(() => {
  //   setEnquiry(Enquiredata?.enquiryID);
  //   setForm(Enquiredata?.formNO)
  //   setSchoolYearID(Enquiredata?.schoolyearID);
  //   setUserType(Enquiredata?.create_usertype);
  //   setSessionID(Enquiredata?.createschoolyearID);
  //   setUserName(Enquiredata?.username);
  //   setName(Enquiredata?.name);
  //   setFatherName(Enquiredata?.father_name);
  //   setMotherName(Enquiredata?.mother_name);
  //   SetAddressLine1(Enquiredata?.address);
  //   setAddressLine2(Enquiredata?.address)
  //   setLoginuserID(Enquiredata?.LoginuserID);
  //   setUserID(Enquiredata?.create_userID);
  //   setRegisterNumber("");
  //   setDistrict(Enquiredata?.district);
  //   setLocality(Enquiredata?.locality);
  //   setArea(Enquiredata?.area);
  //   setPinNumber(Enquiredata?.pincode);
  //   setCountry(Enquiredata?.country);
  //   setState(Enquiredata?.state)
  //   setmobile_number(Enquiredata?.phone);
  //   setcontact_person(Enquiredata?.classesID);
  //   setRelation(Enquiredata?.relation);
  //   setfather_mobileNumber(Enquiredata?.father_phone);
  //   setmother_number(Enquiredata?.mother_phone);
  //   setpreviousSchool(Enquiredata?.school);
  //   setpreviousClass(Enquiredata?.p_class);
  //   setpercentage(Enquiredata?.percentage);
  //   setMedium(Enquiredata?.medium)
  //   setBoard(Enquiredata?.board);
  //   setreferenceRemark(Enquiredata?.remark);
  //   setReference(Enquiredata?.reference)
  //   setHostelRequired(Enquiredata?.hostel);
  //   setTransportRequired(Enquiredata?.transport);
  //   setGenderRequired(Enquiredata?.sex);
  //   setEmailRequired(Enquiredata?.email);
  //   setEnquiryTypeRequired(Enquiredata?.enquirytype);
  //   setdob(Enquiredata?.dob);
  //   setRemark(Enquiredata?.remark)
  //   setCourseFees(Enquiredata?.assessment);
  //   setHostelFees(Enquiredata?.classesID);
  //   setTransportFees(Enquiredata?.exam);
  //   setTotalFees(Enquiredata?.date);
  //   setScholarshipFees(Enquiredata?.end_date);
  //   setExtraScholarshipFees(Enquiredata?.passmark);
  //   setExtraScholarshipReason(Enquiredata?.note);
  //   setHostelFacility(Enquiredata?.hostel);
  //   setTransportStoppage(Enquiredata?.term)
  //   setEnquiryStatus(Enquiredata?.assessment);
  //   setCloseReason(Enquiredata?.classesID);
  //   setReminderDate(Enquiredata?.exam);
  //   setAssignTo(Enquiredata?.date);
  //   setEnquiryNumber(Enquiredata?.enquiryID);
    // setPassMarkState(Enquiredata?.passmark);
    // setNoteState(Enquiredata?.note);
    
    }, []);

    const apiEndpoint = `${BaseURL}/classes/getClasses`;
    const editEnquiryEndPoint =`${BaseURL}/enquiry/editEnquiries`
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

// const EnquireHandle = (event) => {
//   alert("hello");
//   setEnquiry(event.target.value)
// }
  
  const handleChange = (e) => {
   const { name, value } = e.target;
     setData({
       ...saveData,
       [name]: value,
     });
   }
 
   const savaeData = async (e)=> {
    
    saveData.loginuserID = "3";
    saveData.enquiryID = "87564533";
    saveData.userID = "1";
    saveData.registerNO = "65435353";
    saveData.formNO = "MP93";
    saveData.schoolyearID ="10";
    saveData.usertype = "Admin";
    saveData.sectionID = "123";
    saveData.username ="admin";

    
     console.log(saveData);
     
     e.preventDefault();
    
    let response = await request({
      url: `${editEnquiryEndPoint}/${EnquiryID}/${classesID}`,
      
      // url: 'posts',
      method: "POST",
      data: JSON.stringify(saveData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
 
      //  const response = await axios.post('https://demo.keendroid.in/student/addStudent', requestOptions);
      //  const result = await response.json();
      
        if( response.status == "200" ) {
          Swal.fire({
            icon: "success",
            title: "success!",
            text: "Enquiry Submitted Successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          fetchData();
        } else {
          alert("Error");
        }
         console.log(response);
        //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
      
       
   }
 
const Handle = () => {
    // alert("hello");
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
    {/* <Breadcrumb title="Student" path="/viho/students/students" subtitle="Add" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h1 className="page-title"></h1>
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-dark">
                    <h4 className="caption-subject bold uppercase mx-3">
                      Student Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        style={{marginTop:"-18px"}}>
                         <div className="form-group">
                          
                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Enquiry   <span className="text-red"></span></label>
                              <input type="text" className="form-control" id="enquiry_number" name="enquiryID" onChange={handleChange} value={saveData?.enquiryID}/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Form/Token No <span className="text-red"></span>
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                id="token_number"
                                name="formNO"
                                value={saveData?.formNO}
                                onChange={handleChange}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Name <span className="text-red">*</span>
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={saveData?.name}
                                onChange={handleChange}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Father's Name
                            </label>
                            <input  
                                type="text"
                                className="form-control"
                                id="father_name"
                                name="father_name"
                                value={saveData?.father_name}
                                onChange={handleChange}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Mother Name <span className="text-red"></span></label>
                              <input  type="text" className="form-control" id="mother_name" name="mother_name" value={saveData?.mother_name}
                                onChange={handleChange}/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                            Enquiry for Class <span className="text-red"></span>
                            </label>
                            <select 
                                
                                className="form-control"
                                id="enquiry_class"
                                name="enquiry_class"
                                onChange={handleChange}
                                value={saveData?.enquiry_class}
                              >
                                <option value="">Select Class</option>
                      
                      {classes.map((classes) => {
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
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Address Line-1 <span className="text-red">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={saveData?.address}

                                onChange={handleChange}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Address Line-2
                            </label>
                            <input onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={saveData?.address}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              District <span className="text-red"></span></label>
                              <input onChange={handleChange} type="text" className="form-control" id="district" name="district" value={saveData?.district}/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Locality/Tehsil <span className="text-red"></span>
                            </label>
                            <input onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="locality"
                                name="locality"
                                value={saveData?.locality}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Area/Village <span className="text-red">*</span>
                            </label>
                            <input onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                                value={saveData?.pincode}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="country" >
                              Country <span className="text-red"></span></label>
                              <select onChange={handleChange}  value={saveData?.country} className="form-control" id="country" name="country">
                               <option>select country</option>
                               <option>India</option>
                               <option>USA</option>
                               <option>China</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="state">
                              State <span className="text-red"></span>
                            </label>
                            <select onChange={handleChange}
                                
                                className="form-control"
                                id="state"
                                name="state"
                                value={saveData?.state}
                              >
                                <option>select state</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="punjab">Punjab</option>
                                <option value="haryana">Haryana</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="mobile">
                              Mobile <span className="text-red">*</span>
                            </label>
                            <input onChange={handleChange} 
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={saveData?.phone}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Contact Person
                            </label>
                            <input onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="contact_person"
                                name="contact_person"
                                value={saveData?.contact_person}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="relation" >
                              Relation <span className="text-red"></span></label>
                              <input onChange={handleChange} type="text" className="form-control" id="relation" name="relation" value={saveData?.relation}/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="f_number">
                              Father's Mobile No <span className="text-red"></span>
                            </label>
                            <input onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="father_phone"
                                name="father_phone"
                                value={saveData?.father_phone}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Mother's Mobile No <span className="text-red">*</span>
                            </label>
                            <input onChange={handleChange} 
                                type="number"
                                className="form-control"
                                id="mother_phone"
                                name="mother_phone"
                                value={saveData?.mother_phone}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Previous School Name
                            </label>
                            <input onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="school"
                                name="school"
                                value={saveData?.school}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                            Previous Class <span className="text-red"></span></label>
                              <select onChange={handleChange} type="text" className="form-control" id="p_class" name="p_class" value={saveData?.p_class}>
                               <option>select class</option>
                               {classes.map((classes) => {
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
                  
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="percentage">
                              Percentage <span className="text-red"></span>
                            </label>
                            <input onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="percentage"
                                name="percentage"
                                value={saveData?.percentage}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="medium">
                              Medium <span className="text-red">*</span>
                            </label>
                            <select onChange={handleChange} 
                                className="form-control"
                                id="medium"
                                name="medium"
                                value={saveData?.medium}
                              >
                                <option>select medium</option>
                                <option>Hindi Medium</option>
                                <option>English Medium</option>
                                <option>Punjabi Medium</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                            Board/College
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="board"
                                name="board"
                                value={saveData?.board}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Reference <span className="text-red"></span></label>
                              <select onChange={handleChange} className="form-control" id="reference" name="reference" value={saveData?.reference}>
                               <option>select reference</option>
                               <option>staff</option>
                               <option>student</option>
                               <option>other</option>
                               
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Reference Remark <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="remark"
                                name="remark"
                                value={saveData?.remark}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                            Is Hostel Required? <span className="text-red">*</span>
                            </label>
                            <select onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="hostel"
                                name="hostel"
                                value={saveData?.hostel}
                              >
                                <option>select hostel preference</option>
                                <option value="1">yes</option>
                                <option value= "0">no</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id" >
                              Is Transport Required?
                            </label>
                            <select onChange={handleChange} 
                                type="text"
                                className="form-control"
                                id="transport"
                                name="transport"
                                value={saveData?.transport}
                              >
                                <option>select transport preference</option>
                                <option value="1">yes</option>
                                <option value="0">no</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            </div>

                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="Gender" >
                              Gender <span className="text-red"></span></label>
                              <select  onChange={handleChange} type="text" className="form-control" id="sex" name="sex" value={saveData?.sex}>
                              <option value="0">select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option>Transgender</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Email <span className="text-red"></span>
                            </label>
                            <input onChange={handleChange} 
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={saveData?.email}
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Enquire Type <span className="text-red">*</span>
                            </label>
                            <select onChange={handleChange} 
                                
                                className="form-control"
                                id="enquiry_type"
                                name="enquiry_type"
                                value={saveData?.enquirytype}
                              >
                                <option value="">select enquire type</option>
                                <option value="new_enquiry">new enquiry</option>
                                <option value="regular_enquiry">regular enquiry</option>
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="name_id">
                              Date of Birth <span className="text-red">*</span>
                            </label>
                            <input type="date" onChange={handleChange} 
                                className="form-control"
                                id="dob"
                                name="dob"
                                value={saveData?.dob}
                              />
                                <span className="col-sm-4 control-label"></span>
                            </div>
</div>
                        </div>
                        

                      
                       
                        <br />
                        <h4>Activity Log </h4>
                        <br />
                        
                        <div className="row">
                            <div className="col-md-6">
                            <label htmlFor="name_id" >
                              Remark <span className="text-red"></span></label>
                              <textarea onChange={(e)=>handleChange(e)} type="text" className="form-control" id="remark" name="remark"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-6">
                            <label
                              htmlFor="pin" >
                              Fees Detail
                            </label>
                            <textarea onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="fee_details"
                                name="fee_details"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>
                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Course Fees <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="course_fee" name="course_fee"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Hostel Fees <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="Hostel_fee"
                                name="Hostel_fee"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Transport Fees<span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="transport_fee"
                                name="transport_fee"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Total Fees
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="total_fee"
                                name="total_fee"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                          </div>
                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                              Scholarship(if any) <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="scholarship" name="scholarship"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Extra Scholarship (if any) <span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="extra_scholarship"
                                name="extra_scholarship"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-6">
                            <label
                              htmlFor="Area/village">
                              Extra Scholarship Reason <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="scholarship_reason"
                                name="scholarship_reason"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            {/* <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}

                          </div>
                          <div className="row">
                            <div className="col-md-6">
                            <label htmlFor="name_id" >
                            Hostel Facility <span className="text-red"></span></label>
                              <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="hostel_facility" name="hostel_facility"/>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-6">
                            <label
                              htmlFor="locality/tehsil">
                              Transport Stoppage<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="transport_stoppage"
                                name="transport_stoppage"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            {/* <div className="col-md-3">
                            <label
                              htmlFor="Area/village">
                              Area/Village <span className="text-red">*</span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}

                            {/* <div className="col-md-3">
                            <label
                              htmlFor="pin" >
                              Pin
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="number"
                                className="form-control"
                                id="pin"
                                name="pin"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div> */}

                          </div>
                          <div className="row">
                            <div className="col-md-3">
                            <label htmlFor="name_id" >
                            Enquiry Status <span className="text-red"></span></label>
                              <select onChange={(e)=>handleChange(e)}  className="form-control" id="enquiry_status" name="enquiry_status">
                               <option>select enquiry status</option>
                               <option value="open">OPEN</option>
                               <option value="intrested">INTRESTED</option>
                               <option value= "progress">IN PROGRESS</option>
                               <option value="short_listed">SHORT LISTED</option>
                               <option value="enrolled">ENROLLED</option>
                               <option></option>
                               
                                </select>
                            <span className="col-sm-4 control-label"></span>
                            </div>

                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Close Reason<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="close_reason"
                                name="close_reason"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Reminder Date<span className="text-red"></span>
                            </label>
                            <input onChange={(e)=>handleChange(e)} 
                                type="date"
                                className="form-control"
                                id="reminder_date"
                                name="reminder_date"
                              />
                            <span className="col-sm-4 control-label"></span>
                            </div>
                            <div className="col-md-3">
                            <label
                              htmlFor="locality/tehsil">
                              Assign To<span className="text-red"></span>
                            </label>
                            <select onChange={(e)=>handleChange(e)} 
                                type="text"
                                className="form-control"
                                id="assign_to"
                                name="assign_to"
                              >
                                <option defaultValue="selected">select option</option>
                                <option value="mahesh">Mahesh</option>
                                <option value="gopal">Gopal</option>
                                <option value="pp">PP</option>
                                </select>

                            <span className="col-sm-4 control-label"></span>
                            </div>
                           </div>
                       </form>
                       <div className="col-md-2 col-xs-12">
                            <div className="row">
                              <div className="col-md-12 col-xs-12">
                                <div className="form-group">
                                  <input
                                    type="button"
                                    value="Update"
                                    className="btn btn-success col-md-12 col-xs-12"
                                    style={{ marginTop: "20px" }}
                                    onClick= {savaeData}
                                  >
                                 </input>
                                </div>
                        </div>
                          </div>
                          
</div>
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
};

export default EnquireAdd;
