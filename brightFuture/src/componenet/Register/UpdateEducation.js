import React, { useState, useContext} from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { makeStyles,TextField, Typography,InputLabel,FormControl,MenuItem,Select,Button } from "@material-ui/core";
import moment from "moment";
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

const UpdateEducation = () => {

  const classes = useStyles();

  const [degree, setDegree] = useState([
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ]);
  //institiue state
  const [institute, setInstitute] = useState([
    { name: 'PU', id: 11},
    { name: 'PAU', id: 22},
  ]);
  
  //update education state
  const [education, setEducation] = useState({
    deg: '',
    inst: '',
    startYear: '',
    endYear: '',
    desc: '',
    documentName: '',
    documentImage: ''
  })

  //buffer education state
  const [allEducationData, setAllEducationData] = useState([]);

  //handle update education onChange
  const handleChange = (event) => {
    setEducation({...education, [event.target.name]: event.target.value});
  }
  

  const addDocument = () => {
    console.log(education);
    let arr = allEducationData;
    arr.push(education)
    setAllEducationData(arr);
  }

  //handleDocument
  const handleDocument = (e) => {
    var file = e.target.files[0];
    var fileSplit = file.type.split("/");
    var validExt = ["png", "jpeg", "jpg", "pdf", "doc", "docx", "txt", "ppt", "pptx", "wps-office.docx","wps-office.doc"];

    if (fileSplit[1] && validExt.indexOf(fileSplit[1]) >= 0) {
      var image = URL.createObjectURL(e.target.files[0]);
      setEducation((education) => ({
        ...education,
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
            <Col sm="7">
              <div className="col_slidr">
                <Card>
                  <CardBody>
                    <CardTitle className="updat_prfle_title" tag="h6">Update your profile  <small className="nmbr_cntr">Step 2/4</small></CardTitle>
                    <div className="udte_prfle_div sgnup_div ">
                      <p>Education</p>
                      <Form>
                        <div className="width_form">
                          <FormGroup row>
                            <Label for="degree" sm={3}>Degree*</Label>
                            <Col sm={6}>
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  <Autocomplete
                                    options={degree}
                                    name='deg'
                                    value = {education.deg}
                                    onChange={(event, newInputValue) => {
                                      setEducation({ ...education, deg: newInputValue });
                                    }}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option.name}</Typography>
                                    )}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                      <TextField {...params} variant="outlined" placeholder="Degree" />
                                    )}
                                  />
                                </FormControl>
                              </div>
                              <div className="error_msg_shw">
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>
                          
                          <FormGroup row>
                            <Label for="" sm={3}>Institute*</Label>
                            <Col sm={6}>
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  <Autocomplete
                                    options={institute}
                                    value = {education.ins}
                                    name='ins'
                                    onChange={(event, newInputValue) => {
                                      setEducation({ ...education, inst: newInputValue });
                                    }}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option.name}</Typography>
                                    )}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                      <TextField {...params} variant="outlined" placeholder="Institute" />
                                    )}
                                  />
                                </FormControl>
                              </div>
                              <div className="error_msg_shw">
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
                                  className={classes.textField}
                                  value={education.startYear}
                                  onChange={handleChange}
                                  InputProps={{ inputProps: { max: moment().format('YYYY/MM/DD') } }}
                                  //  InputProps={{inputProps:  {max: moment(moment().subtract(1,'d')).format('YYYY-MM-DD')} }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                              <div className="error_msg_shw">
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
                                  value={education.endYear}
                                  onChange={handleChange}
                                  className={classes.textField}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                              <div className="error_msg_shw">
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>

                          <FormGroup row>
                            <Label for="exampleText" sm={3}> Description</Label>
                            <Col sm={9} className="mb-2">
                              <Input 
                                value={education.desc} 
                                onChange={handleChange}
                                type="textarea" 
                                rows="6" 
                                name="desc" 
                                id="exampleText"
                                placeholder="Add description" />
                            </Col>
                            <Col sm={12}>
                              <span className="text_warnng">**Do not post your contact information such as mobile number, email or website/social media account.</span>
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
                              <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                  <input 
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleDocument}
                                  />
                                  Upload Documents
                                </Button>
                              </label>
                            </Col>
                            <Col sm={7}>
                            </Col>
                            <Col sm={5} className="upload_img_msg">
                            </Col>

                          </FormGroup>
                        </div>

                        <Row className="text-right">
                          <Col sm="12">
                            <Button onClick={ addDocument } variant="outlined" className="sgnup_btn" color="primary">Add</Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <hr />
                    <Row className="text-right mt-3">
                      <Col sm="12" className="submit_dtail_btn">
                        <Button variant="outlined" className="sgnup_btn" color="primary">Back</Button> &nbsp;&nbsp;
                        <Button variant="outlined" className="sgnup_btn" color="primary"
                          >Next
                        </Button>

                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="5">
                <Card className="eduction_card">
                  <CardBody className="card_uplod_docs">
                    <CardTitle className="updat_prfle_title" tag="h6" onClick={() => console.log(allEducationData)}>Preview <small className="nmbr_cntr text-muted">(Optional)</small></CardTitle>
                    
                    { allEducationData && allEducationData.length > 0 ? 
                      allEducationData.map((v, i) =>(
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
                            <p>{v.deg.name}</p>
                            <p>{v.inst.name}</p>
                            <p className="quaL_year">{v.startYear} - {v.endYear}</p>
                            <p>{v.desc}</p>
                          </div>
                        </div>
                      ))
                       : ""
                    }
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default UpdateEducation;