import axios from 'axios';

const local = 'http://localhost:8001';
const production = 'https://vinyl-store-backend-14g7.onrender.com'; // ✅ Fixed: 14g7 not k4g7

let api_url = '';
let mode = 'pro';

if (mode === 'pro') {
    api_url = production;
} else {
    api_url = local;
}

const api = axios.create({
    baseURL: `${api_url}/api`,
    withCredentials: true, // ✅ Added: Essential for cookies/sessions
    headers: {
        'Content-Type': 'application/json', // ✅ Added: Good practice
    }
});

// ✅ Optional: Add response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api; 
