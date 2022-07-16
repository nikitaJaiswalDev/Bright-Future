import React, { useState, useEffect } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle,
    Form, FormGroup, Label, Input, FormText, CustomInput, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter,Spinner
} from 'reactstrap';
import { makeStyles,TextField, Typography,InputLabel,FormControl,MenuItem,Select,Button } from "@material-ui/core";
import moment from "moment";
import validator from "validator";
import Autocomplete from "@material-ui/lab/Autocomplete";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UpdateExperience() {

  const classes = useStyles();

  //Organisation state
  const [organisation, setOrganisation] = useState([
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ]);
  //Designation state
  const [designation, setDesignation] = useState([
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ]);

  //update Experience state
  const [experience, setExperience] = useState({
    des: '',
    org: '',
    startYear: '',
    endYear: '',
    desc: '',
    documentName: '',
    documentImage: ''
  })

  //buffer Experience state
  const [allExperienceData, setAllExperienceData] = useState([]);

  //handle update Experience onChange
  const handleChange = (event) => {
    setExperience({...experience, [event.target.name]: event.target.value});
  }

  //add experience
  const addExperience = () => {
    let arr = allExperienceData;
    arr.push(experience)
    setAllExperienceData(arr);
  }

  //handleDocument
  const handleDocument = (e) => {
    var file = e.target.files[0];
    var fileSplit = file.type.split("/");
    var validExt = ["png", "jpeg", "jpg", "pdf", "doc", "docx", "txt", "ppt", "pptx", "wps-office.docx","wps-office.doc"];

    if (fileSplit[1] && validExt.indexOf(fileSplit[1]) >= 0) {
      var image = URL.createObjectURL(e.target.files[0]);
      setExperience((experience) => ({
        ...experience,
        documentName: file,
        documentImage: image,
      }));
      return;
    } else {
      alert("JPG,JPEG and PNG format supported");
    }
  }

  return (
    <section className="update_prof_sec">
        <Container>
          <Row>
            <Col sm="8">
              <div className="col_slidr">
                <Card>
                  <CardBody>
                    <CardTitle className="updat_prfle_title" tag="h6">Update Your Profile <small className="nmbr_cntr">Step 3/4</small></CardTitle>

                    <div className="udte_prfle_div sgnup_div-experence">
                      <p>Experience</p>
                      <Form>
                        <div className="width_form">
                          <FormGroup row>
                            <Label for="organisation" sm={3}>Organisation*</Label>
                            <Col sm={6}>
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  <Autocomplete
                                    options={organisation}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option.name}</Typography>
                                    )}
                                    getOptionLabel={(option) => option.name}
                                    value={experience.org}
                                    onChange={(event, newInputValue) => {
                                      setExperience({ ...experience, org: newInputValue });
                                    }}
                                    renderInput={(params) => (
                                      <TextField {...params} variant="outlined" placeholder="Organisation" />
                                    )}
                                  />
                                </FormControl>
                              </div>
                              <div>
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label for="" sm={3}>Designation*</Label>

                            <Col sm={6}>
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  <Autocomplete
                                    options={designation}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option.name}</Typography>
                                    )}
                                    getOptionLabel={(option) => option.name}
                                    value={experience.des}
                                    onChange={(event, newInputValue) => {
                                      setExperience({ ...experience, des: newInputValue });
                                    }}
                                    renderInput={(params) => (
                                      <TextField {...params} variant="outlined" placeholder="Designation" />
                                    )}
                                  />
                                </FormControl>
                              </div>
                             
                              <div>
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>
                          <FormGroup row className="align-items-center">
                            <Label for="" sm={3}>Year*</Label>
                            <Col sm={3} className="year_selct">
                              <form className={classes.container} noValidate>
                                <TextField
                                  id="date"
                                  type="date"
                                  name="startYear"
                                  value={experience.startYear}
                                  onChange={handleChange}
                                  format={'YYYY/MM/DD'}
                                  className={classes.textField}
                                  InputProps={{ inputProps: { max: moment().format('YYYY/MM/DD') } }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                              <div>
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                            <Col sm={1} className="lne_spce">
                              <span><strong>-</strong></span>
                            </Col>
                            <Col sm={3} className="year_selct">
                              <form className={classes.container} noValidate>
                                <TextField
                                  id="date"
                                  type="date"
                                  name="endYear"
                                  value={experience.endYear}
                                  onChange={handleChange}
                                  className={classes.textField}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                              <div>
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label for="exampleText" sm={3}>Description</Label>
                            <Col sm={9} className="mb-2">
                              <Input 
                                name="desc"
                                value={experience.desc}
                                onChange={handleChange}
                                type="textarea" rows="6"
                                id="exampleText"
                                placeholder="Add description" />

                            </Col>
                            <Col sm={12}>
                              <span className="text_warnng">**Do not post your contact information such as mobile number, email or website/social media account</span>
                            </Col>
                          </FormGroup>
                          <FormGroup row className="add_docs align-items-center">
                            <Label sm={3}>Add document</Label>
                            <Col sm={5} className="currency_col">
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  
                                </FormControl>
                              </div>
                            </Col>
                            <Col sm={4} className="upload_all_docs">
                              <input 
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={handleDocument}
                              />
                              <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                  Upload Documents
                                </Button>
                              </label>
                            </Col>
                            <Col sm={7}>
                            </Col>
                            <Col sm={5} className="upload_img_msg">
                              <div>
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>
                        </div>
                        <Row className="text-right">
                          <Col sm="12">
                            <Button onClick={addExperience} variant="outlined" className="sgnup_btn" color="primary">Add</Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <hr />
                    
                    
                    <Row className="text-right mt-3">
                      <Col sm="12" className="submit_dtail_btn">
                        <Button variant="outlined" className="sgnup_btn" color="primary" >Back</Button> &nbsp;&nbsp;
                        <Button variant="outlined" className="sgnup_btn" color="primary">Next
                        </Button>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <div className="updt_sidbr_expernce">
                <Card className="experce_card">
                  <CardBody className="card_uplod_docs">
                      <CardTitle onClick={()=> console.log(allExperienceData)} className="updat_prfle_title" tag="h6">Preview <small className="nmbr_cntr text-muted">(Optional)</small></CardTitle>
                      
                      { allExperienceData && allExperienceData.length > 0 ? 
                        allExperienceData.map((v, i) =>(
                          <div className="updt_sidbr_education">
                            <Row className="align-items-center">
                              <Col sm="8">
                                  <h5 className="font-weight-bold univ_name">Ins</h5>
                              </Col>
                              <Col sm="4">
                                <div className="btn_univ_edt">
                                  <span className="edt_btn" >Edit</span>
                                  <span className="edt_btn">Delete</span>
                                </div>
                              </Col>
                            </Row>
                            <div className="qualf_meta">
                              <p>{v.org.name}</p>
                              <p>{v.des.name}</p>
                              <p className="quaL_year">{v.startYear} - {v.endYear}</p>
                              <p>{v.desc}</p>
                            </div>
                          </div>
                        ))
                        : ""
                      }
                    </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}
