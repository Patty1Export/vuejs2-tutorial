new Vue({
    el: '#vue-app',
    data:{
        name:'Shaun',
        job:'Ninja',
        age:25,
        website:"www.thenetninja.co.uk", // Add data website property
        websiteTag:'<a href="www.thenetninja.co.uk"> The Net Ninja Website</a>'
    },  //store all the data in vue instance
    methods: {
        greet: function(time) {
            
            return `Good ${time} ${this.name}` 
            //change time using passed  parameters
            //add return name property in function method greet to access the data
        }
    }
});