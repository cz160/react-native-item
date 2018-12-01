import config from '../config'
//封装异步请求
const Fetch = (url:string)=>{
    return new Promise(resolve=>{
        fetch(config.baseUrl+url).then(response=>response.json())
            .then(res=>resolve(res))
    })
}
export default Fetch