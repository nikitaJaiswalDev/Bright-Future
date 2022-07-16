import React, {useEffect, useState} from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Form,
    Label,
    FormGroup,
    Input
} from "reactstrap";
import axios from 'axios';
import {Button, TextField, Checkbox, Select, MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LinkedInImage from '../../images/in.png';

const CLIENT_ID = '771uzz96w5lajg';
const REDIRECT_URL = 'http://localhost:3000';
const OAUTH_URL = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code';
const SCOPE = 'r_liteprofile%20r_emailaddress';
const STATE = '123456';

export default function Login() {

    const navigate = useNavigate();

    useEffect(()=>{
        if (window.opener && window.opener !== window) {
          const code = getCodeFromWindowURL(window.location.href);
          window.opener.postMessage({'type': 'code', 'code': code}, '*')
          window.close();
        }
          window.addEventListener('message', handlePostMessage);
      }, [])
    
      const getCodeFromWindowURL = url => {
        const popupWindowURL = new URL(url);
        return popupWindowURL.searchParams.get("code");
      };
    
      const handlePostMessage = event => {
        if (event.data.type === 'code') {
          const { code } = event.data;
          getUserCredentials(code);
        }
      };
    
      const  getUserCredentials = code => {
        axios
          .get(`http://localhost:5000/getUserCredentials?code=${code}`)
          .then(res => {
            console.log('res--->', res);
            // Do something with user
          });
      };

      const showPopup = () => {
        const oauthUrl = `${OAUTH_URL}&client_id=${CLIENT_ID}&scope=${SCOPE}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;
        const width = 450,
          height = 730,
          left = window.screen.width / 2 - width / 2,
          top = window.screen.height / 2 - height / 2;
        window.open(
          oauthUrl,
          'Linkedin',
          'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
          width +
          ', height=' +
          height +
          ', top=' +
          top +
          ', left=' +
          left
        );
      };

  return (
    <div className="wraper_sgnup">
         <section className="logn_sec">
         <Container>
            <Row>
                <Col sm="7">
                <div className="col_slidr">
                    <Card className="logn_slider">
                    <CardBody>
                        <Slide easing="ease">
                        <div className="each-slide">
                            <div className="slid_inside">
                            <p>Welcome to</p>
                            <div className="text-center">
                                <h2>tutorchive</h2>
                                <p>Your search for tutor ends here</p>
                                <p>How it Works?</p>
                                <p>Testimonials</p>
                            </div>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="slid_inside">
                            <p>Welcome to</p>
                            <div className="text-center">
                                <h2>tutorchive</h2>
                                <p>Your search for tutor ends here</p>
                                <p>How it Works?</p>
                                <p>Testimonials</p>
                            </div>
                            </div>
                        </div>
                        </Slide>
                    </CardBody>
                    </Card>
                </div>
                </Col>
                <Col sm="5">
                <div className="lgn_frm">
                    <Card>
                    <CardBody>
                        <CardTitle tag="h6">Enter Login Details</CardTitle>
                        <div className="sgnup_div">
                        <Form>
                            <div className="width_form">
                            <FormGroup>
                                <TextField
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                name="username"
                                />
                                <div className="error_msg_shw">
                                <small className="text-danger"></small>
                                </div>
                            </FormGroup>
                            <FormGroup className="entr_passwod">
                                <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                name="password"
                                type="password"
                                />
                                <div className="error_msg_shw">
                                <small className="text-danger">
                                </small>
                                </div>
                            </FormGroup>
                            <FormGroup className="text-right forgt_pswd">
                                <a >Forgot Password?</a>
                            </FormGroup>
                            </div>
                            <Button
                            className="sgnup_btn"
                            variant="outlined"
                            color="primary"
                            type="submit"
                            >Login
                            </Button>
                        </Form>
                        <p className="alrd_regstrd">
                            Not registered with us? Start{" "}
                            <a onClick={()=> navigate('/register')}>here!</a>
                        </p>
                        <hr />
                        <div className="socail_up">
                            <p>Login using</p>
                            <Row>
                                <Col sm="6">
                                    <div
                                    className="d-flex align-items-center inner_socl"
                                    style={{ cursor: "pointer" }}
                                    >
                                    <div>
                                        <img
                                            src={LinkedInImage}
                                            className="img-fluid"
                                            alt="linkedin"
                                            onClick={showPopup }
                                        />
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        </div>
                    </CardBody>
                    </Card>
                </div>
                </Col>
            </Row>
         </Container>
         </section>
        <div>
        </div>
    </div>
  )
}
