const validateActivityData = (form, errors, setErrors) => {
    let updatedErrors = { ...errors };
    
    if (!form.name) {
      updatedErrors.name = 'Assign a name';
    } else 
    if (/\d/.test(form.name)) {
      updatedErrors.name = 'Invalid Name';
    } else {
      updatedErrors.name = '';
    }
  
    if (!form.difficulty) {
      updatedErrors.difficulty = 'Assign Difficulty';
    } else 
    if (form.difficulty < 1 || form.difficulty > 5) {
      updatedErrors.difficulty = 'Difficulty Range 1 to 5';
    } else {
      updatedErrors.difficulty = '';
    }
  
    if (!form.duration) {
      updatedErrors.duration = 'Assign Duration of Activity';
    } else {
      updatedErrors.duration = '';
    }
  
    if(form.season === ""){
      updatedErrors.season = "Choose a Season"
      
    }else{updatedErrors.season = ""}
  
    // if (form.countries.length === 0) { 
    //   updatedErrors.countries = 'Assign at least one Country';
      
    // } else {
    //   updatedErrors.countries = '';
      
    // }
    setErrors(updatedErrors);
  }
  
  const validateCountries = (form, errors, setErrors) => {
    let updatedErrors = { ...errors };
    
    if (form.countries.length === 0) { 
      updatedErrors.countries = 'Assign at least one Country';
      
    } else {
      updatedErrors.countries = '';
      
    }
    setErrors(updatedErrors);
  }
  
  export {validateActivityData, validateCountries};