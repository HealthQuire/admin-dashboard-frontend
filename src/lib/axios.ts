import axios from 'axios'

const mockURL = import.meta.env.VITE_API_MOCK_URL
const userServiceURL = import.meta.env.VITE_API_USERSERVICE_URL
const doctorServiceURL = import.meta.env.VITE_API_DOCTORSERVICE_URL

export const app = axios.create({
    baseURL: mockURL
})

export const userServiceApp = axios.create({
    baseURL: userServiceURL
})

export const doctorServiceApp = axios.create({
    baseURL: doctorServiceURL
})