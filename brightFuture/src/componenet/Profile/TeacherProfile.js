import React, {useState} from 'react'
import StudentHeader from '../Header/StudentHeader'
import {Container, Row, Col, Card, CardBody, UncontrolledDropdown,DropdownToggle,
    DropdownMenu,DropdownItem,} from 'reactstrap';
    
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AboutCard from '../Card/AboutCard';
import ContactInfoCard from '../Card/ContactInfoCard';

import MarkImg from '../../images/mark.png';
import BanImg from '../../images/ban.png';
import UserProfileImg from '../../images/avtar2.png';
import ReportImg from '../../images/report.png';
import ProfileCard from '../Card/ProfileCard';
import SubjectCard from '../Card/SubjectCard';
import EducationCard from '../Card/EducationCard';
import ExperienceCard from '../Card/ExperienceCard';
import RatingListCard from '../Card/RatingListCard';
import ReviewModal from '../Modal/ReviewModal';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },
}));

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
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

export default function TeacherProfile() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    //review modal state
    const[open, setOpen] = useState(false);

    function handleCancel(){
        setOpen(false);
    }
    function handleConfirm(){
        setOpen(false);
    }

  return (
    <div>
        <StudentHeader/>

        <section className="teacher_prfle_sec">
            <Container>
                <div className="ban_div position-relative">
                    <img className="ban_img" src={BanImg} alt="image" />
                        <div className="prfile_divv">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="user_drpdwn" caret><img src={ReportImg} className="report_icon" alt="image" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>Report Profile</DropdownItem>
                                <DropdownItem onClick={()=> setOpen(true)}> Add review </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                </div>
                <ProfileCard
                    profileImg = {UserProfileImg}
                    verifyImg={MarkImg}
                    name={'Nikita'}
                    age={'18'}
                    gender={'Female'}
                    address={'abc colony-- Punjab, India'}
                    bioData={'teacher bio data'}
                    rating={5}
                    role={'teacher'}
                />
                <div className="tabs_inr_page">
                    <AppBar position="static">
                        <Tabs
                          variant="fullWidth"
                          value={value}
                          onChange={(e, newValue)=> setValue(newValue)}
                          aria-label="nav tabs example"
                        >
                          <LinkTab label="PROFILE " href="/drafts" {...a11yProps(0)} />
                          <LinkTab label="REVIEWS & RATINGS" href="/trash" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <AboutCard value={'teacher bio data'}/>
                        <ContactInfoCard 
                            email={'teacher@gmail.com'} 
                            phone={'+91 8360651592'}
                            address={'teacher colony'}
                        />
                        <SubjectCard/>

                        <EducationCard/>

                        <ExperienceCard/>
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
                                                />  &nbsp;
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
                                                
                                            </span>
                                        </div>
                                    </div>
                                    <RatingListCard/>
                                </CardBody>
                            </Card>
                        </div>
                    </TabPanel>
                </div>
            </Container>
        </section>

        <ReviewModal
            open={open}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
        />
    </div>
  )
}
