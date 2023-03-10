import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();

    const getApiData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json)

    };

    useEffect(() => {
        getApiData();
    }, []);

    return data;
};

export default useFetch;