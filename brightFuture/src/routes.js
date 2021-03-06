import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import StudentDashboard from './componenet/Dashboard/StudentDashboard';
import Login from './componenet/Login/Login';
import Profile from './componenet/Profile/Profile';
import TeacherProfile from './componenet/Profile/TeacherProfile';
import Register from './componenet/Register/Register';


const UserRoute = () => {
    return(
       <Router>
           <Routes>
                <Route path="/" exact element={ <Login />}/>
                <Route path="/register" element={ <Register />}/>
                <Route path="/student_dashboard" element={ <StudentDashboard />}/>
                <Route path="/student_profile" element={ <Profile />}/>
                <Route path="/teacher_profile" element={ <TeacherProfile />}/>
            </Routes>
       </Router>
    )
}
export default UserRoute;