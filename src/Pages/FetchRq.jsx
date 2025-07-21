import { NavLink } from "react-router-dom";
import fetchdata, { deletepost, updatepost } from "../Api/Api";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const FetchRq = () => {
    const [pagenumber, setpagenumber] = useState(0);

    const QueryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", pagenumber],
        queryFn: () => fetchdata(pagenumber),
        // staleTime:10000
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
    });



    //  Correct delete mutation 
    const deletepostmutation = useMutation({
        mutationFn: (id) => deletepost(id),
        onSuccess: (data, id) => {
            QueryClient.setQueryData(["post", pagenumber], (currentData) => {
                return currentData?.filter((post) => post.id !== id);
            })
        }
    })



    // correct update mutation

    const updatepostmutation = useMutation({
        mutationFn: (id) => updatepost(id),
        onSuccess: (apidata, postid) => {
            QueryClient.setQueryData(["post", pagenumber], (postData) => {
                return postData?.map((post) => {
                    return post.id === postid
                        ? { ...post, title: apidata.data.title }
                        : post
                }

                );
            });
        },
    });


    if (isLoading) return <p>Loading.....</p>;
    if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;
    if (!Array.isArray(data)) {
        console.warn("Unexpected data:", data);
        return <p>Unexpected data format received!</p>;
    }

    return (
        <div>
            <ul>
                {data.map(({ id, title, body }) => (
                    <li key={id} className="border-2 mt-6 p-4">
                        <NavLink to={`/FetchRq/${id}`}>
                            <p>{id}</p>
                            <p>{title}</p>
                            <p>{body}</p>
                        </NavLink>
                        <button
                            className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition mt-4 bg-red-400"
                            onClick={() => deletepostmutation.mutate(id)}
                        >
                            Delete
                        </button>

                        <button
                            className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition ml-2 mt-4 bg-red-200"
                            onClick={() => updatepostmutation.mutate(id)}
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
                    disabled={pagenumber === 0}
                    onClick={() => setpagenumber(pagenumber - 3)}
                >
                    Prev
                </button>

                <h2 className="text-lg font-semibold">{(pagenumber / 3) + 1}</h2>

                <button
                    className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
                    onClick={() => setpagenumber(pagenumber + 3)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FetchRq;
