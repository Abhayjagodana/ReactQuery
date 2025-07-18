import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// create a post
const fetchdata = async (pagenumber) => {
    try {
        const res = await api.get(`/posts?_start=${pagenumber}&_limit=3`);
        return res.data

    }
    catch (error) {
        console.log(error)
        return []
    }
}
export default fetchdata;


// Individual post 
export const fetchindPost = async (id) => {
    try {
        const res = await api.get(`posts/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)

    }
}

//Mutation post delete

export const deletepost=(id)=>{
    api.delete(`posts/${id}`)
}


// mutation post Upadetd
export const updatepost=(id)=>{
  return  api.patch(`posts/${id}`,{title:"i have a updated"});
}

