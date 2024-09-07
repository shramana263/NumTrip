import axiosClient from "../axios-client";

export function fetchUser(){
    return axiosClient.get("/user")
    .then(({data})=>{
        return data;
    })
}