import { useEffect, useState } from 'react';

const baseUrl = "http://localhost:3001";

const useApi = (url) => {
    const [json, setJson] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${baseUrl}${url}`);
            const body = await response.json();
            setJson(body);
        }
        fetchData();
    }, [url]);

    return json
};

export default useApi;
