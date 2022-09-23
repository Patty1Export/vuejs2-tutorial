new Vue({
    el: '#vue-app',
    data:{
        name:'Shaun',
        job:'Ninja'
    },  //store all the data in vue instance
    methods: {
        greet: function(time) {
            return `Good ${time}` //change time using passed  parameters
        }
    }
});