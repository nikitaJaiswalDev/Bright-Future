import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap';
export default function AboutCard(props) {
  return (
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
                            <p>{props.value}</p>
                        </div>
                    </div>
            </CardBody>
        </Card>
    </div>
  )
}
