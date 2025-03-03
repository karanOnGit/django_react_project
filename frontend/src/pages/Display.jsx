import AxiosInstance from './Axios';
import { useEffect, useState } from 'react'
import { Items } from '../components/Items';

const Display = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AxiosInstance
            .get("api/")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Items data={data} />
    )
}

export default Display