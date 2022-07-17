import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

export default function ProfileCard(props) {
  return (
    <div className="prfle_div">
        <Card>
            <CardBody>
                <Row>
                    <Col xs="2">
                        <img 
                        style={{borderRadius:"50%"}}
                        src={props.profileImg} 
                        className="img-prfle" alt="image" />
                            
                    </Col>
                    <Col xs="10">
                        <div className="d-flex justify-content-between">
                            <div>
                                {props.name}
                                <span className="verfd_prof">
                                    <img src={props.verifyImg} className="img-fluid" alt="image" />&nbsp; &nbsp; Verified
                                </span>
                            </div>
                            <div>
                                <span className="rting_prfle_rating star-star"><Rating
                                    name="half-rating"
                                    value={props.rating}
                                    precision={0.5}
                                    readOnly
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                /> </span>  &nbsp;
                                <span className="rtng_nmber">{props.rating}</span>
                            </div>
                        </div>
                        <p className="usr_age">
                            <span className="prfle_addrss">{props.age}</span>
                            <span className="prfle_addrss" >{props.gender}</span>
                        </p>
                        
                        <span className="prfle_addrss">{props.address}</span>
                        <p className="work_prfle">{props.bioData}</p>
                        {props.role === 'teacher' &&
                            <p className="texhng_exprnce">
                                <Button variant="outlined" className="sgnup_btn mr-3 mt-2"  color="primary">MESSAGE</Button>
                                <Button variant="outlined" className="sgnup_btn mt-2"  color="primary">VIEW CONTACT</Button> 
                                <span className="teching_exp">Total teaching experience : 
                                    <span className="year_exp">
                                        10 year
                                    </span>
                                </span>
                            </p>
                        }
                    </Col>     
                </Row>
            </CardBody>
        </Card> 
    </div>
  )
}
