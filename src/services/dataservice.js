

export const getAllReviews = async () => {


    return fetch(`https://glamping.webmcdm.dk/reviews`).then(res => res.json());
            
};

export const getAllStays = async () => {
    

    return fetch(`https://glamping.webmcdm.dk/stays`).then(res => res.json());
        
}


export const getStayById = async (id) => {
    

    return fetch(`https://glamping.webmcdm.dk/stays/` + id).then(res => res.json()).then(data => data[0]);
        
}