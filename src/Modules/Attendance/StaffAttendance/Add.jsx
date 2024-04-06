import React from "react";
import { Link } from "react-router-dom";
function Add() {
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
                      Staff Attendance
                    </h4>
                  </div>
                </div>
                <div className="box-body">
                  <hr style={{marginTop:"-3px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form class="form-horizontal" role="form" method="post" style={{marginTop:"-23px"}}>
                        <div className="row">
                          <div className="col-md-9">
                            <div className="row">
                              
                              <div class="col-md-4 col-md-offset-4" style={{marginLeft:"200px"}}>
                                <div class="form-group">
                                  <label class="control-label">Date</label>
                                  <input type="date"
                                    class="form-control"
                                    name="date"
                                    id="date"
                                  />
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="row">
                                <div class="col-md-12">
                                <div class="form-group">
                                <button type="submit" class="btn btn-success col-md-12" style={{marginTop: "25px"}}>Attendance</button>
                                </div>
                                </div>
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
