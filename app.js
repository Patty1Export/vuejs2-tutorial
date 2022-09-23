new Vue({
    el: '#vue-app',
    data:{
        name:'Shaun',
        job:'Ninja'
    },  //store all the data in vue instance
    methods: {
        greet: function(time) {
            
            return `Good ${time} ${this.name}` 
            //change time using passed  parameters
            //add return name property in function method greet to access the data
        }
    }
});