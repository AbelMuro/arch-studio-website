import React, {useState, useRef} from 'react';
import styles from './styles.module.css';

function TextArea() {
    const [text, setText] = useState('');
    const textareaRef = useRef();
    const errorMessageRef = useRef();

    const addErrorStyles = () => {
        textareaRef.current.style.borderBottom = '1px solid #DF5656';
        textareaRef.current.style.setProperty('--placeholder', 'rgba(223, 86, 86, 0.5)');
        errorMessageRef.current.style.display = 'block'        
    }

    const removeErrorStyles = () => {
        textareaRef.current.style.borderBottom = '';
        textareaRef.current.style.setProperty('--placeholder', '#C8CCD8');
        errorMessageRef.current.style.display = '';    
    }

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        removeErrorStyles();
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(!isValid)
            addErrorStyles();
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        addErrorStyles();
    }

    return(
        <fieldset className={styles.container}>
            <textarea 
                className={styles.textarea}
                placeholder='Message'
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                ref={textareaRef}>
            </textarea>  
            <p className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </p>          
        </fieldset>

    )
}

export default TextArea;