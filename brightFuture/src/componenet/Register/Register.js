import React, { useState , useContext} from 'react'
import UpdateEducation from './UpdateEducation';
import UpdateExperience from './UpdateExperience';
import UpdatePreferences from './UpdatePreferences';
import UpdateProfile from './UpdateProfile';
import { FormContext } from '../../App';

export default function Register() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

  switch(activeStepIndex){
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
