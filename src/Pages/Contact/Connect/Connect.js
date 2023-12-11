import React from 'react';
import styles from './styles.module.css';
import Form from './Form';

function Connect() {
    return(
        <section className={styles.connect}>
            <h1>
                Connect with us
            </h1>
            <Form/>
        </section>
    )
}

export default Connect;