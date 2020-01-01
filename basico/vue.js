var app = new Vue({
    el: ".vue",
    data: {
        mensaje: "Daniel",
        imagen: "https://vuejs.org/images/logo.png",
        primero: 0,
        segundo: 0,
        nombre: ''
    },
    methods: {
        mostrarMensaje: function(){
            return "Aprender";
        }
    },
    computed: {
        total: function(){
            return this.primero + this.segundo;
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate");
    },
    created: function(){
        console.log("created");
    },
    beforeMount: function(){
        console.log("beforeMount");
    },
    mounted: function(){
        console.log("mounted");
    },
    beforeUpdate: function(){
        console.log("beforeUpdate");
    },
    updated: function(){
        console.log("updated");
    },
    beforeDestroy: function(){
        console.log("beforeDestroy");
    },
    destroyed: function(){
        console.log("destroyed");
    }
});
