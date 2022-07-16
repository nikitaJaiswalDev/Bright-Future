import React, {useState} from 'react'
import { Row, Col, Card, CardBody, FormGroup, Input
} from 'reactstrap';
import {FormControl,TextField, Select, MenuItem, Checkbox} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function FilterCard() {
    const classes = useStyles();
    const [filter, setFilter] = useState({
        rating: '',
        feesFrom: '',
        feesTo: '',
        language: '',
        modeOfTeaching: ''
    })

  return (
    <div className="myjbs_sidbr">
        <Card className="post_tutor_jbs">
            <CardBody>
                <div className="job_searchh_div">
                    <Row>
                        <Col xs="6">
                            <span className="srch_job" onClick={()=> console.log(filter)}>FILTERS</span>
                        </Col>
                        <Col className="text-right" xs="6">
                            <span className="font-weight-bold dte_deadline" style={{ cursor: "pointer" }}>RESET</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="align-items-center">
                        <Col xs="12">
                            <span className="srch_job">Rating</span>
                        </Col>
                        <Col xs="12">
                            <div className="width_form">
                                <FormGroup>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={filter.rating}
                                            onChange={(e) => {
                                                setFilter({...filter, rating: e.target.value})
                                            }}
                                            label="Organisation">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="4">above 4</MenuItem>
                                            <MenuItem value="3">above 3</MenuItem>
                                            <MenuItem value="2">above 2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col xs="12">
                            <span className="srch_job">Fees</span><span className="tme_dtailss">&nbsp;(/hour)</span>
                        </Col>
                        <Col sm={4}>
                            <TextField id="outlined-basic" label="From" variant="outlined"
                                value={filter.feesFrom}
                                onChange={(e) => {
                                    setFilter({ ...filter, feesFrom: e.target.value })
                                }} 
                            />
                        </Col>
                        <Col sm={1}>
                            <span className="fee_dtail">-</span>
                        </Col>
                        <Col sm={4}>
                            <TextField id="outlined-basic" label="To" variant="outlined"
                                value={filter.feesTo}
                                onChange={(e) => {
                                    setFilter({ ...filter, feesTo : e.target.value })
                                }}
                            />
                        </Col>

                    </Row>

                    <Row className="align-items-center">
                        <Col xs="12">
                            <span className="srch_job">Language</span>
                        </Col>
                        <Col className="selct_col" xs="12">
                            <div className="width_form">
                                <FormGroup>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="age"
                                            value={filter.language}
                                            onChange={(e) => {
                                                setFilter({...filter, language: e.target.value})
                                            }}
                                            label="Organisation">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="hindi">Hindi</MenuItem>
                                            <MenuItem value="english">English</MenuItem>
                                            <MenuItem value="punjabi">Punjabi</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col xs="12">
                            <span className="srch_job">Mode of teaching</span>
                        </Col>
                        <Col xs="6">
                            <Input 
                                type="radio" 
                                value="online" 
                                checked={filter.modeOfTeaching === "online" ? true:false} 
                                onChange={ (e)=> setFilter({...filter, modeOfTeaching: e.target.value})} 
                                name="modeOfTeaching" 
                            />
                            <span className="status_open">Online</span>
                        </Col>
                        <Col xs="6">
                            <Input 
                                type="radio" 
                                value="offline" 
                                checked={filter.modeOfTeaching === "offline" ? true:false} 
                                onChange={ (e)=> setFilter({...filter, modeOfTeaching: e.target.value})} 
                                name="modeOfTeaching" 
                            /><span className="status_open">Offline</span>
                        </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}
