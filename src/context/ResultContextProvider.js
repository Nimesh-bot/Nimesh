import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState('Nimesh Shakya');
    const [search, setSearch] = useState(`/search/q=${searchTerm}&num=10`);
    const [pathname, setPathname] = useState('/search');

    const getResults = async (type) => {
        setLoading(true);
        const response = await axios(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'Nepal',
                'X-RapidAPI-Key': 'f342f6a74dmshb7128df1d14bcfep15b7dajsn6c37e84af7ce',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });
        // const data = await response.json();
        console.log(response.data);
        setResults(response.data);
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading, pathname, setPathname, search, setSearch }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);