import { useQuery } from "@tanstack/react-query"
import { fetchindPost } from "../Api/Api"
import { NavLink, useParams } from "react-router"

const FetchIndData = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['post'],
        queryFn: () => fetchindPost(id),

    });

    if (isLoading) return <p>Loading.....</p>
    if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>

    return (
        <div>
        <div className="p-4 border-2 mt-4">
            <div>
            <h2 className="text-xl font-bold mb-2">Post #{data.id}</h2>
            <p className="text-lg">{data.title}</p>
            <p>{data.body}</p>
            </div>

            
        </div>
           <div className="text-2xl border-2 w-32 p-2 mt-2 bg-gradient-to-r from-cyan-200 to-blue-200">
            <NavLink to="/FetchRq">
            <button>Go Back</button>
            </NavLink>
            </div>
        </div>
    )


}
export default FetchIndData