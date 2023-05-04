import axiosBase, { Axios } from 'axios';
import CandidateResponse from '../model/CandidateResponse';

const API_URL = 'http://localhost:8000';

class ApiRequestUtil {

    private $axios: Axios;

    constructor(apiUrl: string) {
        const axios = axiosBase.create({
            baseURL: apiUrl, // バックエンドB のURL:port を指定する
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            responseType: 'json'  
        });

        this.$axios = axios;
    }

    private get(url: string) {
        return this.$axios.get(url).then(res => res.data);
    }

    private post(url: string, parameter: any) {
        return this.$axios.post(url, parameter).then(res => res.data);
    }

    public async fetchCandidateList() {
        return await this.get('/');
    }

    public async favor(candidate: CandidateResponse) {
        return await this.post('/favor', candidate);
    }
}

const apiRequestUtil = new ApiRequestUtil(API_URL);

export default apiRequestUtil;