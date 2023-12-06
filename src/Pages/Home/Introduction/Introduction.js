import React from 'react';
import styles from './styles.module.css';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Introduction() {

    const [mobile] = useMediaQuery('(max-width: 600px)');

    return(
        <div className={styles.container}>
       
            <section className={styles.intro}>
                {mobile ? <hr/> : 
                <h1 className={styles.intro_title}>
                    Welcome
                </h1>}                     
                <h2>
                    Welcome to Arch Studio
                </h2>
                <p>
                    We have a unique network and skillset 
                    to help bring your projects to life. 
                    Our small team of highly skilled 
                    individuals combined with our large 
                    network put us in a strong position 
                    to deliver exceptional results.<br/><br/>

                    Over the past 10 years, we have worked 
                    on all kinds of projects. From stations 
                    to high-rise buildings, we create spaces 
                    that inspire and delight.<br/><br/>

                    We work closely with our clients so 
                    that we understand the intricacies 
                    of each project. This allows us to work 
                    in harmony the surrounding area to create 
                    truly stunning projects that will stand 
                    the test of time.<br/><br/>
                </p>
                <img src={images['welcome']} alt="front view of the company's headquarters building"/>  
            </section>            
        </div>

    )
}

export default Introduction;