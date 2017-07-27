/**
 * Created by Administrator on 2017/6/23.
 */
new Vue({
    el:'#box',
    data: {
        imgVerifyCode:""
    },
    methods: {
        flash :() =>{
            // 需要给出一个参数，这个参数每次都不同，这样才能干掉浏览器缓存！
            this.imgVerifyCode.src = "/fishery/tools/VerifyCodeServlet?a=" + new Date().getTime()
        }

    }
});