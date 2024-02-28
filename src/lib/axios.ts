import axios from 'axios'

const mockURL = import.meta.env.VITE_API_MOCK_URL

export const app = axios.create({
    baseURL: mockURL
})