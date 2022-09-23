new Vue({
    el: '#vue-app',
    data:{
       age:20,
       a:0,
       b:0,
    }, 
    methods: {
    //Comment this method to run the computed property, still same functionality
     /* addToA:function(){
        console.log('addToA');
        return this.a + this.age;
      },
      addToB:function(){
        console.log('addToB');
        return this.b + this.age;
      }*/
    },
    computed: {
      addToA:function(){
        console.log('addToA');
        return this.a + this.age;
      },
      addToB:function(){
        console.log('addToB');
        return this.b + this.age;
      }
    }
});