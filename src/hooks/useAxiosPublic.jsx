import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5001'
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://backend-kappa-topaz.vercel.app'
    // baseURL: 'https://hall-management-beta.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;