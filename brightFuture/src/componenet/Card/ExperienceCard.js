import React from 'react'
import { Row, Col, Card, CardBody} from 'reactstrap';

export default function ExperienceCard() {
  return (
    <div className="div_contct_info">
        <Card>
            <CardBody>
                <Row className="align-items-center">
                    <Col sm="8">
                        <h5 className="font-weight-bold univ_name">Experience</h5>
                    </Col>
                </Row>
                
                <div className="my_profile_div">
                    <div className="updte_values_view">
                        <Row className="align-items-center">
                            <Col sm="8">
                                <h6 className="font-weight-bold univ_name">web developer</h6>
                            </Col>
                        </Row>
                        <div className="prfle_meta">
                            <p><span className="fee_dataa">LN WEB WORKS</span></p> 
                            
                            {/* <span className="quaL_year"> { item.exp_start_year ? moment(item.exp_start_year).format("MMM YYYY"):"" } - Present &nbsp;
                                <span className="theme_color">

                                        { item.exp_start_year && diff_year_month_day(new Date(), new Date(item.exp_start_year))}
                            </span></span> */}
                            <p className="pt-3">
                                experience description
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="brk-line" />
                        
            </CardBody>
        </Card>
    </div>
  )
}
