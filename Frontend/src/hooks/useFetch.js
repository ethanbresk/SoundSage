import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        {/*setTimeout(() => {*/}

            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Error 404: Broken Link!');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        {/*}, 10);*/} /* this is used to force wait time */

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;