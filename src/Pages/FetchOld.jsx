import { useEffect, useState } from "react";
// import getpostdata from "../Api/Api";
import fetchdata from "../Api/Api";

const FetchOld = () => {
    const [data, setdata] = useState([]);

    //Loading error state in TSQ
    const [error, iserror] = useState(false);
    const [loading, setloading] = useState(true);
    //Loading error state in TSQ
    const getpostdata = async () => {
        try {
            const res = await fetchdata();
            setdata(res.data);
            //-Loading error state in TSQ
            setloading(false);
        } catch (error) {
            console.log(error);
            //Loading error state in TSQ
            iserror(true);
        }
    }

    useEffect(() => {
        getpostdata();
    }, [])


    // Loading error state in TSQ
    if (loading) {
        return (<p>Loading.....</p>)
    }
    if (error) {
        return (<p>Error...</p>)
    }
    //------------------------
    return (
        <div>
            <ul>
                {data?.map((data) => (
                    <li key={data.id} className="border-2 md-4 mt-4">
                        <p className="text-2xl">{data.title}</p>
                        <p className="text-2xl">{data.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FetchOld;