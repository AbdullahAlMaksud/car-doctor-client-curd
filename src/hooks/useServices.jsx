import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-swart-five.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })

    return services;
};

export default useServices;