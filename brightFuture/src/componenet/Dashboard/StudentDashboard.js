import React, { useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import StudentHeader from '../Header/StudentHeader';
import TeacherListingCard from '../Card/TeacherListingCard';
import FilterCard from '../Card/FilterCard';
import SearchCard from '../Card/SearchCard';


export default function StudentDashboard() {
  return (
    <>
        <StudentHeader/>
        <section className="student_find_sec">
            <Container>
                <Row>
                    <Col sm="8">
                        <div className="col_flter_job">
                            <SearchCard/>
                            <div className="srt_jobs"></div> 
                            <TeacherListingCard/>
                        </div>
                    </Col>

                    <Col sm="4">
                        <FilterCard/>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
