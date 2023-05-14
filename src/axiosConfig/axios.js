
import axios from 'axios'

const axiosInstance= axios.create({

    baseURL:"https://api.themoviedb.org/3",
    // headers:{
    //     'lang':'en'
    // },
    params:{
        api_key:"b746a48c899a20b9ebf7387c563e02c6"
    }



})

export default axiosInstance