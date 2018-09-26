/**
 * Created by lenovo on 18/9/15 015.
 */

new Vue({
    el:'#app',
    data:{
        text:'座位表',
        lists:'',
        isActive: true,
        hasError: false
    },
    methods:{
        move:function(index){
            var li=document.querySelectorAll('.box li')
           li[index].style.border="1px solid aqua"
            li[index].style.background="beige"

        }
    },
    mounted:function(){
        //发送get请求
        this.$http.get('../json/mingdan.json').then(function(res){
            console.log(res.body);
            this.lists = res.body;

        },function(){
            console.log('请求失败处理');
        });
    }
})