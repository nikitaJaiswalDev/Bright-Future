import React from 'react'
import { Row, Col, Card, CardBody} from 'reactstrap';

export default function EducationCard() {
  return (
    <div className="div_contct_info">
        <Card>
            <CardBody>
                <Row className="align-items-center">
                    <Col sm="8">
                        <h5 className="font-weight-bold univ_name">Education</h5>
                    </Col>
                </Row>
                <div className="my_profile_div">
                    <div className="updte_values_view">
                        <Row className="align-items-center">
                            <Col sm="8">
                                <h5 className="font-weight-bold univsty_name">
                                    PCTE GROUP of INSTITUTE
                                </h5>
                                
                            </Col>
                        </Row>
                        <div className="qualf_meta">
                            <p>MCA</p>=
                            <p className="quaL_year">
                                2019-2022   
                            </p>
                            <p>degree secription</p>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}
