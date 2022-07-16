import React, { useState, useEffect } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle,
    Form, FormGroup, Label, Input, FormText, CustomInput, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter,Spinner
} from 'reactstrap';
import { makeStyles,TextField, Typography,InputLabel,FormControl,MenuItem,Select,Button, Switch } from "@material-ui/core";
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

export default function UpdatePreferences() {

  const classes = useStyles();

  //currencies
  const [currency, setCurrency] = useState([ 
    { name: 'BA', id: 1},
    { name: 'MA', id: 2},
  ])
  
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
  const handleChnage = () => {

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
                                onChange={handleChnage}
                                color="primary"
                                name="modeOnline"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                              />Online
                            </Col>
                            <Col className="teach_mode" sm="12">
                              <Switch
                                checked={preference.modeOffline}
                                onChange={handleChnage}
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
                                    options={currency}
                                    renderOption={(option) => (
                                      <Typography style={{ fontSize: "13px" }}>{option}</Typography>
                                    )}
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
                        <Button variant="outlined" color="primary" className="sgnup_btn" >Confirm </Button>
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
