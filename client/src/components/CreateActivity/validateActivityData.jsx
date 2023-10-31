const validateActivityData = (form, errors, setErrors) => {
    let updatedErrors = { ...errors };
  
    if (!form.name) {
      updatedErrors.name = 'Assign a name';
    } else if (!/\d/.test(form.name)) {
      updatedErrors.name = 'Invalid Name';
    } else {
      updatedErrors.name = '';
    }
  
    if (!form.difficulty) {
      updatedErrors.difficulty = 'Assign Difficulty'; // Fixed the property name here
    } else if (form.difficulty < 1 || form.difficulty > 5) {
      updatedErrors.difficulty = 'Difficulty Range 1 to 5';
    } else {
      updatedErrors.difficulty = '';
    }
  
    if (!form.duration) {
      updatedErrors.duration = 'Assign Duration of Activity';
    } else {
      updatedErrors.duration = '';
    }
  
    if (form.countries.length === 0) { 
      updatedErrors.countries = 'Assign at least one Country';
    } else {
      updatedErrors.countries = '';
    }
  
    setErrors(updatedErrors);
  }
  
  export default validateActivityData;