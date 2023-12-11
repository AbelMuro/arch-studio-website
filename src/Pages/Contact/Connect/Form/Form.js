import React from 'react';
import styles from './styles.module.css';
import Input from './Input';

function Form() {
    return(
        <form className={styles.form}>
            <Input type='text'/>
        </form>
    )
}

export default Form;