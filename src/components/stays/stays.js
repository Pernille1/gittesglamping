'use client'
import styles from './stays.module.css';
import { useState, useEffect } from 'react';
import Header from '../common/header/header';
import { getAllStays } from '../../services/dataservice';
import { zenFont, nanumFont } from '@/utils/fonts';
import Stay from '../stay/stay';


const Stays = ({}) => {

    const [stayData, setStayData] = useState([]);
    
   

    const getStays = async () => {
        
        getAllStays().then(data => setStayData(data));
            
    }

    const showAllStays = () => {

        return stayData.length !== 0 ? stayData.map((stay, index) => <div key={index} className={styles.product}><Stay
            key={index} 
            stay={stay} 
            
            >
        </Stay></div>) : null;

    }


    useEffect(() => {

        getStays();
    
    }, []);

    return <div className={styles.products}>
        <div>
     <div className={styles.headerText}>
       <h1 className={zenFont.className}> Vi har ophold til enhver smag</h1>
       <p className={nanumFont.className}>Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.</p>
    </div>

        <div className={styles.list}>

            {showAllStays()}
        </div>

    </div>
    </div>
}

export default Stays;