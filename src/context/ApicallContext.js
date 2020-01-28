import React, {useState} from 'react';

const ApicallContext = React.createContext({});

export const ApicallProvider = (props) => {

    const [apiResults, setApiResults] = useState(null);
    const [ lastType, setLastType ] = useState(null);

    const apiCall = (type, data = [] ) => {

        let url='https://api.themoviedb.org/3/';
        let apiKeyJoin='?';
        switch(type) {
            case 'upcoming':
                url += 'movie/upcoming';
                break;

            case 'movieDatasheet':
                const id = data[0];
                url += 'movie/'+id;
                break;

            case 'search':
                const keyword = data[0];
                url += 'search/movie/?query='+keyword;
                apiKeyJoin='&';
                break;
        }
        setLastType( type );
        url += apiKeyJoin+'api_key=0e3a1c69551919117da517944e8887f0&language=en-US';

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setApiResults(result);
                }
            );
    }

    return (
        <ApicallContext.Provider value={{
            apiCall: apiCall,
            apiResults: apiResults,
            setLastType: setLastType,
            lastType: lastType
        }}>
            {props.children}
        </ApicallContext.Provider>
    )

}

export default ApicallContext;