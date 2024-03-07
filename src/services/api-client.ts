import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0fef8c74649c4385be3decc1285cf0cb'
    }
})

export interface FetchResponse<T>{
    count:number,
    results: T[]
}