'use client'
import React, { useState, useEffect } from 'react';
import {getStayById} from '@/services/dataservice';
import FullStay from '@/components/fullStay/fullStay';

const Page = ({params}) => {

    const [stayData, setStayData] = useState({});
    
    useEffect(() => {

        getStayById(params.id).then(data => {

            setStayData(data)

        });

    
    }, [params]);

    return <div>
        
            <FullStay stay={stayData}></FullStay>
        
    </div>
}

export default Page;