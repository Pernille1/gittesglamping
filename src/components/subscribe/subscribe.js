'use client'
import styles from './subscribe.module.css';
import { useState } from 'react';
import SubscribeResponseView from './subscribeResponse';
import SubscribeForm from './subscribeForm';
import { zenFont } from '@/utils/fonts';

const Subscribe = () => {

    const [subscriberName, setSubscriberName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div className={styles.wholeComponent}>
            <div className={`${styles.headerText} ${zenFont.className}`}>
                <h1>Vil du booke et ophold? <br/> Eller har du blot et spørgsmål?</h1>
                <p>Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer</p>
            </div>
            {formSubmitted ? <SubscribeResponseView name={subscriberName} /> :
           <SubscribeForm setFormSubmitted={setFormSubmitted} setSubscriberName={setSubscriberName}/>}
        </div>
    )

}

export default Subscribe;