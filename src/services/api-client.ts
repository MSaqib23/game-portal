import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[]
}

const axiosInstance= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0fef8c74649c4385be3decc1285cf0cb'
    }
})

class APICLIENT<T>{

    endpoint: string
    
    constructor(_endpoint:string) {
        this.endpoint = _endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APICLIENT;