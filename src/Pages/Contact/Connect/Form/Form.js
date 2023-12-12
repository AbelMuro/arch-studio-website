import React from 'react';
import styles from './styles.module.css';
import Input from './Input';
import TextArea from './TextArea';
import icons from './icons';

function Form() {

    const handleSubmit = (e) => {
        alert('Message has been submitted');
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type='text' placeholder='Name'/>
            <Input type='email' placeholder='Email'/>
            <TextArea/>
            <button className={styles.submit}>
                <img className={styles.arrow} src={icons['arrow']}/>
            </button>
        </form>
    )
}

export default Form;