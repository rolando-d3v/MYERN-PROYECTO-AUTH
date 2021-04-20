import axios from 'axios'


const clienteAxios = axios.create({
    baseURL: 'https'
})

export default clienteAxios