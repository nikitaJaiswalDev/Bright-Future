import React, {useState} from 'react';
import {Avatar} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Row, Col, Card, CardBody } from 'reactstrap';
import Notify from '../../images/notify2.png';

export default function TeacherListingCard() {

    const [profile, setProfile] = useState([{
        name: 'Nikita',
        image: '',
        location: 'India, Punjab-Ludhiana',
        rating: 5,
        about: 'Hii my name is nikita. I am a teacher',
        mode: 'Online',
        fees: '100-200 rs/hr',
        language: 'English, Hindi',
        subjects: ['Computer','Math']
    }])
    
  return (
    <div className="div_about mb-4">
        <Card>
            <CardBody>
                {profile && profile.length > 0 ?
                    profile.map((v, i) =>(
                        <div className="my_profile_div">
                            <div className="transction_info_div">
                                <Row className="align-item-center">
                                    <Col className="img_col" xs="1">
                                        {v.image ? 
                                            <img style={{ borderRadius: "50%" }} className="img-tutor" src={v.image} alt="tutor" />
                                        :
                                            <Avatar>abc</Avatar> 
                                        }
                                        
                                    </Col>
                                    <Col className="crdts_col pl-5" xs="6">
                                        <span className="all_crdts"><strong>{v.name}</strong></span>
                                        <p className="cntct_dtail">{v.location}</p>
                                    </Col>
                                    <Col className="text-right crdts_col" xs="5">
                                        <p style={{ cursor: "pointer" }} className="fltr_clr">
                                            <span className="rte_prfle pl-3">
                                                <Rating
                                                    name="half-rating"
                                                    value={v.rating}
                                                    precision={0.5}
                                                    readOnly
                                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                /> 
                                            </span>VIEW PROFILE</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="prfle_meta">
                                <p>{v.about}</p>
                            </div>
                            <Row className="prfle_availbility">
                                <Col xs="6">
                                    <span className="fee_data">Mode of Teaching :</span>
                                    <span className="prfle_mail_addrss">
                                        {v.mode}
                                    </span>
                                </Col>
                                <Col xs="6">
                                    <span className="fee_data">Fees : </span>
                                        <span className="prfle_mail_addrss">{v.fees}</span>
                                </Col>
                                <Col className="availble_mode" xs="6">
                                    <span className="fee_data"> Language Preference </span>
                                    {v.language}
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs="8">
                                    {v.subjects && v.subjects.length > 0 && v.subjects.map((sub) => (
                                        <span>{sub} </span>
                                    ))}
                                </Col>
                                <Col xs="4" className="text-right sbjects_dtail_coins"> </Col>
                            </Row>
                        </div>
                    ))
                : 
                <Card className="job_notifction">
                    <CardBody>
                        <div className="dedlne_jobs_div">
                            <Row className="align-items-center">
                                <Col xs="1">
                                    <img className="img-fluid" src={Notify} alt="tutor" />
                                </Col>
                                <Col xs="10">
                                    <p className="notify_info">No tutor to display.
                                    </p>
                                </Col>
                                <Col xs="1">
                                </Col>
                            </Row>

                        </div>
                    </CardBody>
                </Card>
                }
            </CardBody>
        </Card>
    </div>
  )
}
