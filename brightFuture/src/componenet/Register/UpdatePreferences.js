import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle,
    Form, FormGroup, Label} from 'reactstrap';
import { makeStyles,TextField, Typography,InputLabel,FormControl,MenuItem,Select,Button, Switch } from "@material-ui/core";
import moment from "moment";
import validator from "validator";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FormContext } from '../../App';
import { userService } from "../../services";
import FormData from 'form-data';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UpdatePreferences() {

  const classes = useStyles();
  const { activeStepIndex,setActiveStepIndex, formData, setFormData,currencies } = useContext(FormContext);
  console.log('currencies', currencies);
  //Preference states
  const [preference, setPreference] = useState({
    exp: '',
    language: '',
    modeOnline: false,
    modeOffline: false,
    feeFrom: '',
    feeToo: '',
    currency: ''
  });

  //handle change
  const handleChnage = (event) => {
    setPreference({...preference, [event.target.name]: event.target.value});
  }

  //onSubmit
  async function onSubmit(){
    console.log(preference);
    var data = new FormData();
    console.log('formData', formData);
    data.append('name', formData.name);
    data.append('password', formData.password);
    data.append('email', formData.email);
    data.append('role', formData.role);
    data.append('gender', formData.gender);
    data.append('dob', formData.dob);
    data.append('country', formData.country.name);
    data.append('state', formData.state.name);
    data.append('address', formData.address);
    data.append('zip_code', formData.zip_code);
    data.append('phone_code', formData.ph_code.phonecode);
    data.append('phone_number', formData.phone_no);
    data.append('bio', formData.bio);
    data.append('profile_image', formData.profile_img_file);

    data.append('degree', formData.edu.deg.name);
    data.append('institute', formData.edu.inst.name);
    data.append('edu_year', formData.edu.startYear + '-' + formData.edu.endYear);
    data.append('education_description', formData.edu.desc);
    data.append('education_document', formData.edu.documentImage);

    data.append('organization', formData.expe.org.name);
    data.append('designation', formData.expe.des.name);
    data.append('exp_year', formData.expe.startYear + '-' + formData.expe.endYear);
    data.append('exp_description', formData.expe.desc);
    data.append('exp_document', formData.expe.documentImage);

    data.append('teaching_exp', preference.exp);
    data.append('language_preference', preference.language);
    data.append('mode_of_teaching', preference.modeOffline + '-' +  preference.modeOnline);
    data.append('fees_from', preference.feeFrom);
    data.append('fees_to', preference.feeToo);
    data.append('fees_currency', preference.currency);

    const res = await userService.userRegister(data);
    console.log('res-->', res);

  }
  return (
    <section className="update_prefernce_sec">
        <Container>
          <Row>
            <Col sm="8">
              <div className="col_slidr">
                <Card>
                  <CardBody>
                    <CardTitle className="updat_prfle_title" tag="h6">Update Your Profile <small className="nmbr_cntr">Step 4/4</small></CardTitle>

                    <div className="udte_prfle_div sgnup_div">
                      <p>Preference</p>
                      <Form >
                        <div className="width_form">
                          <FormGroup row>
                            <Label for="" sm={4}>Teaching Experience</Label>
                            <Col sm={6}>
                              <TextField 
                                id="outlined-basic" 
                                label="In Years" 
                                variant="outlined"
                                name="exp"
                                value={preference.exp}
                                onChange={handleChnage} 
                              />
                              <div className="error_msg_shw">
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>

                          <FormGroup row>
                            <Label for="" sm={4}>Language Preference</Label>
                            <Col sm={6}>
                              <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Language"
                                  name="language"
                                  value={preference.language}
                                  onChange={handleChnage} >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value="english">English</MenuItem>
                                  <MenuItem value="hindi">Hindi</MenuItem>
                                </Select>
                              </FormControl>
                            </Col>
                          </FormGroup>
                          
                          <FormGroup row className="align-items-center">
                            <Label className="" sm={12} for="exampleCheckbox">Mode Of Teaching *</Label>
                            <Col className="teach_mode" sm="12">
                              <Switch
                                checked={preference.modeOnline}
                                onChange={(e)=> setPreference({...preference, modeOnline: e.target.checked})}
                                color="primary"
                                name="modeOnline"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                              />Online
                            </Col>
                            <Col className="teach_mode" sm="12">
                              <Switch
                                checked={preference.modeOffline}
                                onChange={(e)=> setPreference({...preference, modeOffline: e.target.checked})}
                                color="primary"
                                name="modeOffline"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                              />Offline
                              <div className="error_msg_shw">
                                <small className="text-danger"></small>
                              </div>
                            </Col>
                          </FormGroup>

                          <FormGroup row className="align-items-center">
                            <Label for="" sm={12}>Fees <span className="lab_spnn">(Cost/hr)</span></Label>
                            <Col sm={2}>
                              <FormControl variant="outlined" className={classes.formControl}>
                                <TextField id="outlined-basic" label="From" variant="outlined"
                                  name="feeFrom"
                                  value={preference.feeFrom}
                                  onChange={handleChnage} 
                                />
                              </FormControl>
                            </Col>
                            <Col sm={1} className="lne_spce">
                              <span><strong>-</strong></span>
                            </Col>
                            <Col sm={2} className="amt_dtail">
                              <FormControl variant="outlined" className={classes.formControl}>
                                <TextField id="outlined-basic" label="To" variant="outlined"
                                  name="feeToo"
                                  value={preference.feeToo}
                                  onChange={handleChnage} 
                                />
                              </FormControl>
                            </Col>
                            <Col sm={3} className="currency_col">
                              <div class="autocmplte_dta">
                                <FormControl variant="outlined" className={classes.formControl}>
                                  <Autocomplete
                                    id="combo-box-demo"
                                    options={currencies}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option.name}</Typography>
                                    )}
                                    getOptionLabel={(option) => option.name}
                                    value={preference.currency}
                                    onChange={(event, newInputValue) => {
                                      setPreference((preference) => ({ ...preference, currency: newInputValue }));
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Currency" variant="outlined" />}
                                  />
                                </FormControl>
                              </div>
                            </Col>
                          </FormGroup>
                          
                        </div>
                      </Form>
                    </div>
                    <Row className="text-right dsh_btn">
                      <Col sm="12" className="submit_dtail_btn">
                        <Button variant="outlined" className="sgnup_btn" color="primary" >Back</Button> &nbsp;&nbsp;
                        <Button variant="outlined" color="primary" className="sgnup_btn" 
                          onClick={onSubmit}>Confirm </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
  )
}
