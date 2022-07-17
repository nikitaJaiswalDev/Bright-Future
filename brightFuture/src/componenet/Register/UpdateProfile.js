import React, { useState, useEffect, useContext} from "react";
import { Container, Row, Col, Card, CardBody, CardTitle,Form, FormGroup, Label, Input } from 'reactstrap';
import { makeStyles,TextField, Typography,InputLabel,FormControl,MenuItem,Select,Button } from "@material-ui/core";
import moment from "moment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Country, State, City }  from 'country-state-city';
import DeleteIcon from "@material-ui/icons/Delete";
import { FormContext } from '../../App';
import { userService } from "../../services";
var FormData = require('form-data');

const useStyles = makeStyles((theme) => ({
    paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(5),
          borderradius: '6',
  
      },
      root: {
          '& > *': {
              margin: theme.spacing(1),
              width: '50ch',
          },
      },
  
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
export default function UpdateProfile() {

    const { activeStepIndex,setActiveStepIndex, formData, setFormData,countries } = useContext(FormContext);
    const classes = useStyles();
    //state to store all the country
    var [states, setStates] = useState([])

  //USER STATE
  const [profile, setProfile] = useState({
    name: '',
    password: '',
    role: '',
    email: '',
    gender: '',
    dob: '',
    country: '',
    state: '',
    address: '',
    zip_code: '',
    ph_code: '',
    phone_no: '',
    bio: '',
    profile_img_file: '',
    profile_img_name: '',
  });

    //change the state as per country
    const getStatesOfCountry = (isoCode) => {
      const states = State.getStatesOfCountry(isoCode)
      return states;
    };
    
    //upload user image
    const handleImage = (e) => {
      var file = e.target.files[0];
      var fileSplit = file.type.split("/");
      var validExt = ["png", "jpeg", "jpg"];
      if (fileSplit[1] && validExt.indexOf(fileSplit[1]) >= 0) {
        var image = URL.createObjectURL(e.target.files[0]);
        setProfile((profile) => ({
          ...profile,
          profile_img_file: file,
          profile_img_name: image,
        }));
        return;
      } else {
        alert("JPG,JPEG and PNG format supported");
      }
    }

    //DELETE PROFILE IMAGE
    async function deleteImg() {
      setProfile({ ...profile, profile_img_file: '', profile_img_name: ''});
    }

    //on form submit
    async function onSubmit(){
      console.log(profile);
      var data = new FormData();
      if(profile.role === 'student'){
        data.append('name', profile.name);
        data.append('password', profile.password);
        data.append('email', profile.email);
        data.append('role', profile.role);
        data.append('gender', profile.gender);
        data.append('dob', profile.dob);
        data.append('country', profile.country.name);
        data.append('state', profile.state.name);
        data.append('address', profile.address);
        data.append('zip_code', profile.zip_code);
        data.append('phone_code', profile.ph_code.phonecode);
        data.append('phone_number', profile.phone_no);
        data.append('bio', profile.bio);
        data.append('profile_image', profile.profile_img_file);
        const obj = { ...formData, ...profile };
        setFormData(obj);

        const res = await userService.userRegister(data);
        if(res && res.status === 201){
          alert('user created successfully');
        }
      }else{
        const data = { ...formData, ...profile };
        console.log('data', data);
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }
    }

  return (
    <div className="wraper_dashbrd">

        <section className="update_prof_sec">
          <Container>
            <Row>
              <Col sm="8">
                <div className="col_slidr">
                  <Card>
                    <CardBody>
                      <CardTitle className="updat_prfle_title" tag="h6">
                          <small className="nmbr_cntr">Step 1/4</small>
                      </CardTitle>
                      <div className="sgnup_div">
                        <p>Update Profile</p>
                        <Form>
                          <div className="width_form">
                            <FormGroup row>
                              <Label for="name" sm={3}>
                                Name*
                              </Label>
                              <Col sm={4}>
                                <TextField
                                  id="outlined-basic"
                                  label="Name"
                                  variant="outlined"
                                  name="name"
                                  value={profile.name}
                                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                                />
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label for="name" sm={3}>
                                Password*
                              </Label>
                              <Col sm={4}>
                                <TextField
                                  type="password"
                                  id="outlined-basic"
                                  label="Password"
                                  variant="outlined"
                                  name="password"
                                  value={profile.password}
                                  onChange={(e) => setProfile({...profile, password: e.target.value})}
                                />
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label for="name" sm={3}>
                                Email*
                              </Label>
                              <Col sm={4}>
                                <TextField
                                  id="outlined-basic"
                                  label="Email"
                                  variant="outlined"
                                  name="name"
                                  value={profile.email}
                                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                                />
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label for="gender" sm={3}>
                                Role*
                              </Label>
                              <Col sm={4}>
                                <FormControl
                                  variant="outlined"
                                  className={classes.formControl}
                                >
                                  <InputLabel id="demo-simple-select-outlined-label">
                                    Role
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="role"
                                    label="Gender"
                                    value={profile.role}
                                    onChange={(e) => setProfile({...profile, role: e.target.value})}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="student">Student</MenuItem>
                                    <MenuItem value="tutor">Tutor</MenuItem>
                                  </Select>
                                </FormControl>
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label for="gender" sm={3}>
                                Gender*
                              </Label>
                              <Col sm={4}>
                                <FormControl
                                  variant="outlined"
                                  className={classes.formControl}
                                >
                                  <InputLabel id="demo-simple-select-outlined-label">
                                    Gender
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="gender"
                                    label="Gender"
                                    value={profile.gender}
                                    onChange={(e) => setProfile({...profile, gender: e.target.value})}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                  </Select>
                                </FormControl>
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row className="custm_picker">
                              <Label for="nickname" sm={3}>
                                Birth Date
                              </Label>
                              <Col sm={4}>
                                <form className={classes.container} noValidate>
                                  <TextField
                                    id="date"
                                    type="date"
                                    name="dob"
                                    className={classes.textField}
                                    InputProps={{
                                      inputProps: {
                                        max: moment(
                                          moment().subtract(1, "d")
                                        ).format("YYYY-MM-DD"),
                                      },
                                    }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    value={profile.dob}
                                    onChange={(e) => setProfile({...profile, dob: e.target.value})}
                                  />
                                </form>
                              </Col>
                            </FormGroup>

                            <FormGroup row className="adrss_dtail">
                              <Label sm={3}>Country*</Label>
                              <Col sm={4} className="autocmplte_dta">
                                <FormControl
                                  variant="outlined"
                                  className={classes.formControl}
                                >
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={countries}
                                        value={profile.country}
                                        onChange={(e, newValue)=>{
                                          setProfile({...profile, country: newValue})
                                          setStates( getStatesOfCountry( newValue.isoCode));
                                        }}
                                        renderOption={(option) => (
                                        <Typography style={{ fontSize: "13px" }}>
                                            {option.name}
                                        </Typography>
                                        )}
                                        getOptionLabel={(option) => option.name}
                                        autoComplete="off"
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Country"
                                            variant="outlined"
                                        />
                                        )}
                                    />
                                </FormControl>
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row className="adrss_dtail">
                              <Label sm={3}>State</Label>
                              <Col sm={4} className="autocmplte_dta">
                                <FormControl
                                  variant="outlined"
                                  className={classes.formControl}
                                >
                                  <Autocomplete
                                        id="combo-box-demo"
                                        options={states}
                                        value={profile.state}
                                        onChange={(e, newValue) => setProfile({...profile, state: newValue})}
                                        renderOption={(option) => (
                                        <Typography style={{ fontSize: "13px" }}>
                                            {option.name}
                                        </Typography>
                                        )}
                                        getOptionLabel={(option) => option.name}
                                        autoComplete="off"
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Country"
                                            variant="outlined"
                                        />
                                        )}
                                    />
                                </FormControl>
                              </Col>
                            </FormGroup>

                            <FormGroup row className="adrss_dtail">
                              <Label sm={3}>Address</Label>
                              <Col sm={9}>
                                <Input
                                  type="textarea"
                                  rows="5"
                                  name="address"
                                  maxlength="500"
                                  className="form-control"
                                  placeholder="Default address from profile will be autofilled"
                                  value={profile.address}
                                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                                />
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label sm={3}>Zip Code*</Label>
                              <Col sm={4}>
                                <TextField
                                  id="outlined-basic"
                                  type="text"
                                  label="Zip Code"
                                  variant="outlined"
                                  name="zip_code"
                                  value={profile.zip_code}
                                  onChange={(e)=> setProfile({...profile, zip_code: e.target.value})}
                                />
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label className="ph_nmber_label" sm={3}>
                                Phone Number
                              </Label>
                              <Col sm={2} className="autocmplte_dta">
                                <FormControl
                                  variant="outlined"
                                  className={classes.formControl}
                                >
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={countries}
                                        value={profile.ph_code}
                                        onChange={(e, newValue)=> setProfile({...profile, ph_code: newValue})}
                                        renderOption={(option) => (
                                        <Typography style={{ fontSize: "13px" }}>
                                            {option.phonecode}
                                        </Typography>
                                        )}
                                        getOptionLabel={(option) => option.phonecode}
                                        autoComplete="off"
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Ph. code"
                                            variant="outlined"
                                        />
                                        )}
                                    />
                                </FormControl>
                              </Col>
                              <Col sm={5} className="ph_nuber_dtail">
                                <TextField
                                  id="outlined-basic"
                                  label="Mobile no"
                                  variant="outlined"
                                  name="phone_no"
                                  value={profile.phone_no}
                                  onChange={(e) =>setProfile({...profile, phone_no: e.target.value})}
                                />
                                <div className="error_msg_shw">
                                  <small className="text-danger">
                                  </small>
                                </div>
                              </Col>
                              
                            </FormGroup>

                            <FormGroup row>
                              <Label sm={3}>Bio</Label>
                              <Col sm={9}>
                                <Input
                                  type="textarea"
                                  rows="6"
                                  name="bio"
                                  maxlength="1000"
                                  className="form-control"
                                  placeholder="Add description"
                                  value={profile.bio}
                                  onChange={(e)=> setProfile({...profile, bio: e.target.value})}
                                />
                              </Col>
                              <Col sm={12}>
                                <span className="text_warnng">
                                  **Do not post your contact information such as
                                  mobile number, email or website/social media
                                  account
                                </span>
                              </Col>
                            </FormGroup>
                          </div>
                          <Row className="text-right">
                            <Col sm="12" className="submit_dtail_btn">
                              <div className="d-flex justify-content-end">

                                  <div>
                                    <Button
                                      variant="outlined"
                                      className="sgnup_btn"
                                      color="primary"
                                      onClick={onSubmit}
                                    >
                                      Next
                                    </Button>
                                  </div>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col sm="4">
                <div className="updt_sidbr">
                  <Card>
                    <CardBody className="card_uplod_docs">
                      <CardTitle className="updat_prfle_title" tag="h6">
                        Uploads{" "}
                        <small className="nmbr_cntr text-muted">
                          (optional)
                        </small>
                      </CardTitle>
                      <div className="updte_prfle_div">
                        <Form>
                          <FormGroup row className="align-items-center">
                            <Label for="idcard" sm={6} className="pr-0">
                              Profile Image
                            </Label>
                            <Col sm={6} className="text-right">
                              <div class="inpt_uplod_file">
                                <label htmlFor="raised-button-file">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    component="span"
                                  >
                                    <input
                                      accept="image/*"
                                      className={classes.input}
                                      style={{ display: "none" }}
                                      id="raised-button-file"
                                      multiple
                                      type="file"
                                      onChange={handleImage}
                                    />
                                    Upload Image
                                  </Button>
                                </label>
                              </div>
                            </Col>
                          </FormGroup>
                        </Form>
                        </div>
                        {profile.profile_img_file && 
                        <>
                          <div className="id_crd_img mt-2">
                              <Row>
                                <Col sm={10}>
                                  <p className="text-secondary id_img">Image</p>
                                </Col>
                                <Col sm={2} className="del_icon">
                                  <span
                                    className="delt_icon"
                                    onClick={deleteImg}
                                  >
                                    <DeleteIcon></DeleteIcon>
                                  </span>
                                </Col>
                              </Row>
                            </div>
                            <img
                              src={profile.profile_img_name}
                              className="img-fluid docs_img"
                              alt="image"
                            />
                        </>
                      }
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div> 
  )
}
