import React from 'react'
import { Row, Col, Card, CardBody} from 'reactstrap';

export default function SubjectCard() {
  return (
    <div className="div_contct_info">
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
                                <p className="job_prfrnce">Subjects: </p>
                            </Col>
                            <Col xs="10">Hindi English</Col>
                            <Col sm="2">
                                <div className="btn_univ_edt d-none">
                                    <a className="font-weight-bold edt_btnn">SHOW ALL (17)</a>
                                </div>
                            </Col>
                            <Col xs="12">
                                <p className="job_prfrnce">Job Preferences: </p>
                            </Col>
                            <Col xs="6" className="py-1">
                                <span className="fee_data">Fees : </span>  
                                <span className="prfle_mail_addrss">
                                    100 INR/hr to &nbsp;&nbsp; 200 INR /hr
                                </span>
                            </Col>
                            <Col xs="6" className="py-1">
                                <span className="fee_data">Language Preference :  </span>
                                <span className="prfle_mail_addrss"> English</span>
                            </Col>
                            <Col xs="6" className="py-1">
                                <span className="fee_data">Availability : </span>
                                <span className="prfle_mail_addrss">Online </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}
