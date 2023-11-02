'use client'
import styles from './accordians.module.css';
import { zenFont } from '@/utils/fonts';
import Accordian from './accordian';
import { useEffect, useState } from 'react';

const Accordians = () => {

    const [activitiesData, setActivitiesData] = useState([]);

    const getActivities = async () => {
        
        fetch(`https://glamping.webmcdm.dk/activities`).then(res => res.json()).then(data => setActivitiesData(data));
            
      }

      useEffect(() => {

        getActivities();
    
      }, []);

    return <div>

        <div className={styles.headerText}>
          <h1 className={zenFont.className}>Ingen skal kede sig hos Gitte</h1>
          <p>Glamping er mere end blot en indkvartering – det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig en chancen for at finde indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker.</p>

        </div>

      <div className={styles.list}>
        {activitiesData.map( (activity) => {

            return <Accordian  key={activity._id} body={activity.description} date={activity.date} time={activity.time} title={activity.title} img={activity.image}></Accordian>
           
        })}
         </div>
    </div>

};

export default Accordians;