import axios from "axios"

const MyRequest = (params: any) => {
    const MyPro = axios({
        method: params.method ? params.method : 'GET',
        // url: `http://47.100.201.199:9007/${params.url}`,
        url: `/api/${params.url}`,
        data: params.data ? params.data : {},
        params: params.params ? params.params: {},
        headers: params.headers ? params.headers : {}
    });

    return MyPro

}

export {
    MyRequest
}