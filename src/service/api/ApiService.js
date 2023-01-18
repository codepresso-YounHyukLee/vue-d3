import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})

export default {
    data(){
        return{
            url: '',
            data: [],
            includeToken: false
        }
    },
    methods:{
        gets(url,data,includeToken){
            console.log(url)
            const header = this.makeRequestHeaders(includeToken);
           instance.get(url,data,header)
                .then(res => {
                    return res;
                })
                .catch(error => {
                    return error;
                })
        },
        posts(url,data,includeToken){
            const header = this.makeRequestHeaders(includeToken);
            instance.post(url,data,header)
                .then(res => {
                    return res;
                })
                .catch(error => {
                    return error;
                })
        },
        puts(url,data,includeToken){
            const header = this.makeRequestHeaders(includeToken);
            instance.put(url,data,header)
                .then(res => {
                    return res;
                })
                .catch(error => {
                    return error;
                })
        },
        deletes(url,data,includeToken){
            const header = this.makeRequestHeaders(includeToken);
            instance.delete(url,data,header)
                .then(res => {
                    return res;
                })
                .catch(error => {
                    return error;
                })
        },
        makeRequestHeaders(includeToken){
            const headers = {
                "content-type": "application/json"
            }
            if(includeToken){
                headers.authorization = 'Bearer '+this.$cookies.get("AccessToken")
            }
            return headers
        }
    }
}

