import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Form = ({...props}) => (
    <form>
     <Input/> 
     <Select/>   
    <button type="submit">add task</button>
  </form>
)

export default Form;