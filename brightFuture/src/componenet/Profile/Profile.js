import React from 'react'
import StudentHeader from '../Header/StudentHeader'
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import UserProfileImg from '../../images/avtar2.png';
import MarkImg from '../../images/mark.png';
import BanImg from '../../images/ban.png';
import AboutCard from '../Card/AboutCard';
import ContactInfoCard from '../Card/ContactInfoCard';
import ProfileCard from '../Card/ProfileCard';


export default function Profile() {
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
                <ProfileCard
                    profileImg = {UserProfileImg}
                    verifyImg={MarkImg}
                    name={'Nikita'}
                    age={'18'}
                    gender={'Female'}
                    address={'abc colony-- Punjab, India'}
                    bioData={'Student bio data'}
                    rating={5}
                    role={'student'}
                />
                
                <div>
                    <AboutCard value={'student bio data'}/>
                    <ContactInfoCard
                        email={'student@gmail.com'} 
                        phone={'+91 7508378400'}
                        address={'student colony'}
                    />
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
                </div>   
            </Container>
        </section>
    </>
  )
}
