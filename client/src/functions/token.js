import axios from "axios";

export const listdata = async() => {
    return await axios.get('http://localhost:5001/api/token')
}

export const finddata = async(id) => {
    return await axios.get('http://localhost:5001/api/token/'+id)
}

export const create = async(data) => {
    await axios.post('http://localhost:5001/api/token', data)
}