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
                    Assignment Details
                    </h4>
                  </div>
                </div>
                <div className="portlet-body mx-3">
                  <hr style={{marginTop:"-10px"}} />
                  <div className="row">
                    <div className="col-sm-12">
                      <form
                        className="form-horizontal"
                        encType="multipart/form-data"
                        role="form"
                        method="post"
                        style={{marginTop:"-23px"}}
                      >
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="title"
                              className="col-sm-2 control-label"
                            >
                              Title
                            </label>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value=""
                              />
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="description"
                              className="col-sm-2 control-label"
                            >
                              Description{" "}
                            </label>
                            <div className="col-sm-6">
                              <textarea
                                className="form-control"
                                style={{ resize: "none" }}
                                id="description"
                                name="description"
                              ></textarea>
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="deadlinedate"
                              class="col-sm-2 control-label"
                            >
                              Deadline
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="date"
                                class="form-control"
                                id="deadlinedate"
                                name="deadlinedate"
                                value=""
                              />
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <label
                              htmlFor="s2id_autogen1"
                              className="col-sm-2 control-label"
                            >
                              Class{" "}
                            </label>
                            <div className="col-sm-6">
                              <select
                                name="classesID"
                                id="classesID"
                                className="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="0">Select Class</option>
                                <option value="1">I</option>
                                <option value="5">II</option>
                              </select>{" "}
                            </div>
                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="row">
                            <label
                              for="s2id_autogen2"
                              class="col-sm-2 control-label"
                            >
                              Section
                            </label>
                            <div class="col-sm-6">
                              <select
                                name="sectionID[]"
                                id="sectionID"
                                class="form-control select2 select2-offscreen"
                                tabIndex="-1"
                              >
                                <option value="">Select Section</option>
                                <option value="2">A</option>
                                <option value="3">B</option>
                                <option value="4">C</option>
                                <option value="5">D</option>
                              </select>
                            </div>
                            <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div class="form-group">
                         <div className="row">
                          <label
                            for="s2id_autogen3"
                            class="col-sm-2 control-label"
                          >
                            Subject{" "}
                          </label>
                          <div class="col-sm-6">
                            
                            <select
                              name="subjectID"
                              id="subjectID"
                              class="form-control select2 select2-offscreen"
                              tabindex="-1"
                            >
                              <option value="0">Select Subject</option>
                              <option value="34">HINDI</option>
                              <option value="35">ENGLISH</option>
                              <option value="36">MATHS</option>
                              <option value="37">SST</option>
                              <option value="38">COMPUTER</option>
                            </select>
                          </div>
                          <span class="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <label
                              htmlFor="file"
                              className="col-sm-2 control-label"
                            >
                              File{" "}
                            </label>
                            <div className="col-sm-6">
                              <div
                                className="input-group image-preview"
                                data-original-title=""
                                title=""
                              >
                                <input
                                  type="text"
                                  className="form-control image-preview-filename"
                                  disabled="disabled"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-default image-preview-clear"
                                    style={{ display: "none" }}
                                  >
                                    <span className="fa fa-remove"></span>
                                    Clear{" "}
                                  </button>
                                  <div className="btn btn-success image-preview-input">
                                    <span className="fa fa-repeat"></span>
                                    <span className="image-preview-input-title">
                                      File Browse
                                    </span>
                                    <input
                                      type="file"
                                      accept="image/png, image/jpeg, image/gif, application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                                      name="file"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>

                            <span className="col-sm-4 control-label"></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-8 add-class">
                            <input
                              type="submit"
                              className="btn btn-success"
                              value="Add Assignment"
                            />
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
