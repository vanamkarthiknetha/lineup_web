import{createContext} from 'react'
import {  useState } from "react";
import { Slide } from 'react-toastify';

export const JoinWaitListContext=createContext();


export const JoinWaitListState = (props) => {
  const [selectedPlanOption, setSelectedPlanOption] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [otherValue, setOtherValue] = useState('');
  const [selectedBetaOption, setselectedBetaOption] = useState(null);
  const [details, setDetails] = useState({
    name:'',
    surname:'',
    email:'',
    phone:'',
    countryCode:''
  });

  
  const toastStyles={
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Slide,
    closeButton:false
  }

    
    return (
        <JoinWaitListContext.Provider
            value={{
                selectedPlanOption,
                setSelectedPlanOption,
                selectedUserType, setSelectedUserType,otherValue, setOtherValue,
                selectedBetaOption, setselectedBetaOption,
                details, setDetails,
                toastStyles
            }}
        >
            {props.children}
        </JoinWaitListContext.Provider>
    );
};
