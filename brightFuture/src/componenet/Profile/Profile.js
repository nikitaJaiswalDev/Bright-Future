import React from 'react'
import StudentHeader from '../Header/StudentHeader'
import {Container, Row, Col, Card, CardBody, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {AppBar, Tabs, Box, Typography} from '@material-ui/core';
import moment from 'moment'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import UserProfileImg from '../../images/avtar2.png';
import MarkImg from '../../images/mark.png';
import BanImg from '../../images/ban.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box p={3}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}
   
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
   
function a11yProps(index) {
    return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
    };
}

export default function Profile() {
    const [value, setValue] = React.useState(0);
  return (
    <>
        <StudentHeader/>
        <section className="student_prfle_sec">
            <Container>
                <div className="ban_div position-relative">
                    <img className="ban_img" src={BanImg} alt="image" />
                    <div>
                        <button className="edt_button_btn">
                            <span> <CreateRoundedIcon /> EDIT PROFILE</span></button>
                    </div>
                </div>
                <div className="lst_login_dtail">
                    <span className="hedng_dedlne">Last Login :</span> 
                    <span className="dte_deadline">few seconds ago</span>
                </div>
                <div className="prfle_div">
                    <Card>
                        <CardBody>
                            <Row className="align-items-center">
                                <Col sm="2">
                                    <img style={{borderRadius:"50%"}}
                                        src={UserProfileImg} className="img-prfle" alt="image" 
                                    />
                                </Col>
                                <Col sm="8">
                                    <div className="d-flex justify-content-between">
                                        <div>Nikita
                                            <span className="verfd_prof"><img src={MarkImg} className="img-fluid" alt="image" /> Verified</span>
                                        </div>
                                        <div>
                                            <span className="rting_prfle_rating star-star">
                                            <Rating
                                                name="half-rating"
                                                value={5}
                                                precision={0.5}
                                                readOnly
                                                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                            /> </span> &nbsp;
                                            <span className="rtng_nmber">5</span>
                                        </div>
                                    </div>
                                    <p className="usr_age">18 years Female</p>
                                    <span className="prfle_addrss">abc colony </span>
                                    India, Punjab-Ludhiana
                                    <p className="work_prfle">I am a teacher</p>
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <Row className="align-items-center">
                                    <Col sm="2">
                                    </Col> 
                                     <Col sm="4">
                                    
                                        {/* <div className="cntact_verify">
                                            <span className="contct_dtails"><a>Message</a></span> 
                                            <span className="contct_dtails ml-3"><a>View Contact</a></span>
                                        </div>  */}
                                    </Col>
                                    <Col sm="6" className="text-right">
                                        {/* <p className="totl_exp">Total teaching experience: <span>8 Years</span></p> */}
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card> 
                </div>
                <div>
                    <AppBar position="static">
                        <Tabs
                          variant="fullWidth"
                          value={value}
                        //   onChange={handleChange}
                          aria-label="nav tabs example"
                        >
                          {/* <LinkTab label="PROFILE " href="/drafts" {...a11yProps(0)} />
                          <LinkTab label="REVIEWS & RATINGS" href="/trash" {...a11yProps(1)} /> */}
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div className="div_about">
                            <Card>
                                <CardBody>   
                                        <div className="my_profile_div">
                                            <Row className="align-items-center">
                                                <Col sm="8">
                                                    <h5 className="font-weight-bold univ_name">About</h5>
                                                </Col>
                                                <Col sm="4">
                                                    
                                                </Col>
                                            </Row>
                                            <div className="prfle_meta">
                                                <p>Bio datta</p>  
                                            </div>
                                            <div className="">
                                                 {/* <a className="cont_read">SEE MORE</a> */}
                                            </div>
                                        </div>
                                </CardBody>
                            </Card>
                        </div>
                <div className="div_contct_info">
                    <Card>
                        <CardBody>   
                            <div className="my_profile_div">
                                <Row className="align-items-center">
                                    <Col sm="8">
                                        <h5 className="font-weight-bold univ_name">Contact Information</h5>
                                    </Col> 
                                </Row>
                                <div className="prfle_meta pt-2">
                                    <Row>
                                        <Col xs="6">
                                            <span className="fee_data">Email : </span>
                                            <span className="prfle_mail_addrss pr-3">abc.gmail.com</span>
                                        </Col>
                                        <Col xs="6">
                                            <span className="fee_data">Phone  :  </span>
                                            <span className="prfle_mail_addrss pr-3">+910750837849</span>
                                        </Col>
                                        <Col className="availble_mode" xs="6">
                                            <span className="fee_data">Address : </span>
                                            <span className="prfle_mail_addrss pr-3">address is ancnmb </span>
                                        </Col>
                                    </Row> 
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>  

                        {/* <div className="div_contct_info">
                            <Card>
                                <CardBody>   
                                        <div className="my_profile_div">
                                            <Row className="align-items-center">
                                                <Col sm="8">
                                                    <h5 className="font-weight-bold univ_name">Subjects and Job Preference</h5>
                                                </Col> 
                                            </Row>
                                            <div className="prfle_meta">
                                                <Row>
                                                    <Col xs="12">
                                                        <p>Subjects  :</p>
                                                    </Col>
                                                    <Col xs="10">
                                                        <span className="all_sbjects">Civil Engineering</span>
                                                        <span className="all_sbjects">Fluid Mechanics</span>
                                                        <span className="all_sbjects">Materials Engineering</span>
                                               
                                                    </Col>
                                                    <Col sm="2">
                                                        <div className="btn_univ_edt">
                                                            <a className="font-weight-bold edt_btnn">SHOW ALL (17)</a>
                                                        </div>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="job_prfrnce">Job Preferences: </p>
                                                    </Col>
                                                    <Col xs="6">
                                                        <span className="fee_data">Fees : </span><span className="prfle_mail_addrss">30 USD/hr to 50 USD/hr</span>
                                                    </Col>
                                                    <Col xs="6">
                                                        <span className="fee_data">Language Preference :  </span><span className="prfle_mail_addrss"> English</span>
                                                    </Col>
                                                    <Col className="availble_mode" xs="6">
                                                        <span className="fee_data">Availibility : </span><span className="prfle_mail_addrss">  Online & Offline</span>
                                                    </Col>
                                                    <Col className="availble_mode" xs="6">
                                                        <span className="fee_data">Availibility : </span><span className="prfle_mail_addrss"> 20hrs / week</span>
                                                    </Col>
                                                </Row> 
                                            </div>
                                        </div>
                                </CardBody>
                            </Card>
                        </div>
                        */}
                        <div className="div_contct_info">
                            <Card className="regster_card">
                                <CardBody> 
                                    <Row className="text-right align-items-center">
                                        <Col className="availble_mode" xs="12">
                                            <span className="fee_data">Registered On : </span><span className="prfle_mail_addrss"> Today</span>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="div_ratss">
                            <Card>
                                <CardBody>
                                    <div className="ovral_ratng">
                                        <h5 className="font-weight-bold univ_name">Rating</h5>
                                        <div className="d-flex rting_prfle_rating">
                                            <div>
                                                <Rating
                                                    name="half-rating"
                                                    value={5}
                                                    precision={0.5}
                                                    readOnly
                                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                />
                                            </div>
                                            <div><strong>5</strong></div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="div_ratss_list my-3">
                            <Card>
                                <CardBody>   
                                    <div className="fltr_rat_hdr">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="font-weight-bold univ_name">Rating</h5>
                                            <span>
                                                <ul className="list-inline">
                                                    {/* <li className="list-inline-item">
                                                        <img src="./../assets/imgs/star_border.png" className="img-fluid" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <img src="./../assets/imgs/star_border.png" className="img-fluid" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <img src="./../assets/imgs/star_border.png" className="img-fluid" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <img src="./../assets/imgs/star_border.png" className="img-fluid" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <img src="./../assets/imgs/star_border.png" className="img-fluid" />
                                                    </li> */}
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                        <div className="rtng_lst_lst">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="name_post_dt">
                                                    <h5>Nikita</h5>
                                                    <p>monday 25-05-1999</p>
                                                </div>
                                                <div className="d-flex rting_prfle_rating">
                                                    <div>
                                                        <Rating
                                                            name="half-rating"
                                                            value={5 }
                                                            precision={0.5}
                                                            readOnly
                                                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                        /> 
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="rtng_feed">jh khjdfgjgfj</p>
                                        </div>
                                </CardBody>
                            </Card>
                        </div>

                        <Card className="number_counts">
                          <CardBody className="post_jbs">
                              <div className="job_srt_div1">
                                  <Row className="align-item-center justify-content-end">
                                      <span className="inln_pagnt">
                                        <UncontrolledDropdown setActiveFromChild>
                                          <DropdownToggle tag="a" className="user_drpdwn" caret>  <span className="srt_rows">Rows Per Page: 10 </span>
                                          </DropdownToggle>
                                          <DropdownMenu right>
                                              <DropdownItem tag="a">10</DropdownItem>
                                              <DropdownItem tag="a">20</DropdownItem>
                                              <DropdownItem tag="a">30</DropdownItem>
                                          </DropdownMenu>
                                        </UncontrolledDropdown>
                                      </span>
                                      <span className="inln_pagnt">
                                          <span className="srt_rows">1 to 3 of 5</span>:
                                          <span className="srt_rows">1 to 10 of 30 </span>
                                      </span>
                                  </Row>
                              </div>
                          </CardBody>
                        </Card>
                    </TabPanel>
                </div>   
            </Container>
        </section>
    </>
  )
}
