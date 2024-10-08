import React from 'react';
import styles from './WhatsApp.module.css';

import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {

    return(
        <div className={styles.container}>
            <button 
                className={styles.buttonWhatsapp}
            >
                <FaWhatsapp 
                    className={styles.iconWhatsapp}
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=12997575004")}
                />
            </button>
        </div>
    )
}

export default WhatsApp;