/**
 * Created by lenovo on 18/9/15 015.
 */

new Vue({
    el:'#app',
    data:{
        text:'座位表',
        lists:''

    },
    methods:{
        move:function(index,m){
          this.lists[index][m].bool= !this.lists[index][m].bool;

        }
    },
    mounted:function(){
        //发送get请求
        this.$http.get('../json/data.json').then(function(res){
            console.log(res.body);
            this.lists = res.body;

        },function(){
            console.log('请求失败处理');
        });
    }
})