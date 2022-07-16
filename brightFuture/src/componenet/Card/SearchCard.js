import React, {useContext, useState} from 'react'
import { Row, Col, Card, CardBody, CardTitle,
    Form
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function SearchCard() {
    const classes = useStyles();
    const [search, setSearch] = useState('');
  return (
    <Card className="srch_tutors">
        <CardBody>
            <Row>
                <Col xs="8">
                    <CardTitle className=" my_jbs_title" tag="h6">SEARCH TUTORS NAME
                    </CardTitle>
                </Col>
                <Col xs="4" className="text-right">
                    <span onClick={()=> setSearch('')} className="fltr_clr pr-4" style={{ cursor: "pointer" }}>CLEAR</span>
                </Col>
            </Row>

            <div className="fltr_jobs_div nme_tutors">
                <Form>
                    <div className="width_form position-relative">
                        <Row>
                            <Col sm={12} className="post_chips">
                                <div className={classes.root}>
                                        <TextField id="outlined-basic"  variant="outlined" 
                                            value={search}
                                            onChange={(e)=>{
                                                setSearch(e.target.value);
                                            }}
                                        />
                                <Row></Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </CardBody>
    </Card>
  )
}
