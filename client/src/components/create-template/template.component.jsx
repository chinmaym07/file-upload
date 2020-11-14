import React,{ useState } from 'react';
import './template.styles.css';

const CreateTemplate = ({history}) => {
    const [inputFields,setInputFields] = useState([]);
    const [subField,setSubFields] = useState({});
    
    const handleSubmit = (e) => {
        history.push({pathname:'/upload',state:"Hello World"});
        e.preventDefault();
    }
    const handleChange = (e) => {
        if(e.target.id[0] === 'f')
            
        e.preventDefault();
    }
   
   /*  const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ firstName: '', lastName: '' });
        setInputFields(values);
      };
    
      const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
      }; */
    return (
    <div className="template">
        <h2>Create Template for Validation Checks</h2>
        <form onSubmit={handleSubmit} className="template-form">
            <input id="f1" type="text" name="field-1" placeholder="Field Name 1" onChange={handleChange}/>
            <div className="subfield">
                <input id="k1" type="text" name="k1" placeholder="key1" onChange={handleChange}/>    
                <input id="v1" type="text" name="v1" placeholder="value1" onChange={handleChange}/>
            </div>
            <input id="f2" type="text" name="field-2" placeholder="Field Name 2" onChange={handleChange}/>
            <div className="subfield">
                <input id="k2" type="text" name="k2" placeholder="key2" onChange={handleChange}/>    
                <input id="v2" type="text" name="v2" placeholder="value2" onChange={handleChange}/>
            </div>
            <input  id="f3" type="text" name="field-3" placeholder="Field Name 3" onChange={handleChange}/>
            <div className="subfield">
                <input id="k3" type="text" name="k3" placeholder="key3" onChange={handleChange}/>    
                <input id="v3" type="text" name="v3" placeholder="value3" onChange={handleChange}/>
            </div>
            
            <input type="submit" value="Submit Template"/>
            
        </form>
    </div>
    );

}

export default CreateTemplate;