import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

function Input({type}) {
    const [text, setText] = useState('');
    const errorMessageRef = useRef();
    const inputRef = useRef();
    const invalidEmailRef = useRef();

    const removeErrorStyles = () => {
        inputRef.current.style.borderBottom = '';
        inputRef.current.style.setProperty('--placeholder', '#C8CCD8');
        errorMessageRef.current.style.display = '';
        invalidEmailRef.current.style.display = '';
    }

    const addErrorStyles = (error) => {
        inputRef.current.style.borderBottom = '1px solid #DF5656';
        inputRef.current.style.setProperty('--placeholder', 'rgba(223, 86, 86, 0.5)');

        if(error === 'empty')
            errorMessageRef.current.style.display = 'block';            
        else
            invalidEmailRef.current.style.display = 'block';
        
    }

    const handleChange = (e) => {
        removeErrorStyles();
        setText(e.target.value)
    }
    
    const handleBlur = (e) => {
        const isMissing = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isMissing)
            addErrorStyles('empty');
        else if(isInvalid)
            addErrorStyles('invalid')
        
    }

    const handleInvalid = (e) => {
        const isMissing = e.target.validity.valueMissing;

        if(isMissing)
            addErrorStyles('empty');
        else   
            addErrorStyles('invalid');
    }

    return(
        <fieldset className={styles.container}>
            <input 
                value={text} 
                onChange={handleChange} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={styles.input} 
                type={type} 
                placeholder='Name'
                required
                ref={inputRef}
            />
            <p className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </p>
            <p className={styles.errorMessage} ref={invalidEmailRef}>
                Invalid email
            </p>
        </fieldset>
    )
}

export default Input;