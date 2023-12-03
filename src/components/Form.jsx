import React, { useState } from 'react';

function Form({ onSubmit }) {
  
  const [formData, setFormData] = useState({ linkName: '', URL: '' });

 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  
  const submitForm = () => {
    onSubmit(formData);
    setFormData({ linkName: '', linkURL: '' });
  };

  return (
    <form>
      <label htmlFor="linkName">Link Name:</label>
      <input type="text" id="linkName" name="linkName" value={formData.linkName} onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="linkURL">Link URL:</label>
      <input
        type="text" id="linkURL" name="linkURL" value={formData.linkURL} onChange={handleChange}
      />
      <br />
      <br />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;