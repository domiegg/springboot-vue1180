const base = {
    get() {
        return {
            url : "http://localhost:8080/shiwuzhaoling/",
            name: "shiwuzhaoling",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shiwuzhaoling/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "失物招领平台"
        } 
    }
}
export default base
