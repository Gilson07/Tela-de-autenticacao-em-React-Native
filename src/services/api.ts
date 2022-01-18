import axios from 'axios';

// Import Types
import { Props } from './types'

const api = axios.create({
    baseURL: 'https://processoreact.projetos.jrmendonca.com.br/',
});

export default {
    login: async (userData: Props) => {
        try {
            const { email, password } = userData;
            const response = await api.post('/Usuario/ValidaUsuario', { email, password });
            return response.data;
        } catch (error) {
            return error;
        }
    }
}