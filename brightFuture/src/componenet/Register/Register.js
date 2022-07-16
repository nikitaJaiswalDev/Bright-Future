import React, { useState } from 'react'
import UpdateEducation from './UpdateEducation';
import UpdateExperience from './UpdateExperience';
import UpdatePreferences from './UpdatePreferences';
import UpdateProfile from './UpdateProfile';

export default function Register() {

  const [step, setStep] = useState(1);

  switch(step){
    case 1:
      return(
        <UpdateProfile />
      )
    case 2:
      return(
        <UpdateEducation />
      )
    case 3:
      return(
        <UpdateExperience/>
      )
    case 4:
      return(
        <UpdatePreferences />
      )
  }
}
