import axiosBase, { Axios } from 'axios';

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

    public async fetchCandidateList() {
        return await this.get('/');
    }
}

const apiRequestUtil = new ApiRequestUtil(API_URL);

export default apiRequestUtil;