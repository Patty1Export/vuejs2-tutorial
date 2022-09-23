new Vue({
    el: '#vue-app',
    data:{
        name:'Shaun',
        job:'Ninja',
        age:25,
        website:"www.thenetninja.co.uk", // Add data website property
        websiteTag:'<a href="www.thenetninja.co.uk"> The Net Ninja Website</a>',
        x:0,
        y:0,
    },  //store all the data in vue instance
    methods: {
       add:function(inc) {
        this.age += inc;
       },
       subtract:function(dec){
        this.age -= dec;
       },
       updateXY:function(event){
        this.x =event.offsetX;
        this.y =event.offsetY;
       }
    }
});