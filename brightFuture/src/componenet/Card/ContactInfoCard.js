import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap';

export default function ContactInfoCard(props) {
  return (
    <div className="div_contct_info">
        <Card>
            <CardBody>   
                    <div className="my_profile_div">
                        <Row className="align-items-center">
                            <Col sm="8">
                                <h5 className="font-weight-bold univ_name">Contact Information</h5>
                            </Col> 
                        </Row>
                        <div className="prfle_meta">
                            <Row>
                                <Col xs="12">
                                    <span className="fee_data">Email  :</span>
                                        
                                        <span className="prfle_mail_addrss">{props.email}</span>
                                        
                                </Col>
                                <Col xs="12" className="mt-3">
                                    <span className="fee_data">Phone :</span>
                                    <span className="prfle_mail_addrss">{props.phone}</span>
                                            
                                </Col>
                                <div className="adrss_div">
                                    <Col xs="12">
                                        <span className="fee_data">Address :</span>
                                        <span className="prfle_mail_addrss">{props.address}</span> 
                                    </Col>
                                </div>
                            </Row> 
                        </div>
                    </div>
            </CardBody>
        </Card>
    </div>
  )
}
