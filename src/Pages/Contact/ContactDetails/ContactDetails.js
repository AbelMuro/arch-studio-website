import React from 'react';
import styles from './styles.module.css';
import details from './Details';
import icons from './icons';

function ContactDetails() {
    return(
        <section className={styles.details}>
            <hr/>
            <h1>
                Contact Details
            </h1>
            {
                details.map((detail) => {
                    const title = detail.title;
                    const mail = detail.mail;
                    const address = detail.address;
                    const phone = detail.phone;

                    return(
                        <div className={styles.detail}>
                            <h2>
                               {title} 
                            </h2>
                            <p>
                                Mail: &nbsp;&nbsp;{mail}
                            </p>
                            <address>
                                Address: &nbsp;&nbsp;{address}
                            </address>
                            <p>
                                Phone: &nbsp;&nbsp;{phone}
                            </p>
                            <button>
                                View on map
                                <img src={icons['arrow']}/>
                            </button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ContactDetails;