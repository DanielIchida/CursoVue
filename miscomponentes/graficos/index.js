Vue.component('grafico-estadisticos',{
    props:{
        columnas: Array,
        id: String,
        tipo: String,
        colores: Array,
        size: Object
    },
    data: function(){
        return {
            dataColors: {}
        }
    },
    created: function(){
        this.dataColors = {};
        this.columnas.forEach((r,index) =>{
              r.forEach((value,i) => {
                  this.dataColors[r[0]] = this.colores[index]
              });
        });
    },
    mounted: function(){
        var vm = this;
        var chart = c3.generate({
            bindto: '#'+this.id,
            size: this.size,
            data: {
                columns: this.columnas,
                type: this.tipo,
                colors: this.dataColors,
                onclick: function(d,i){
                    console.log(d);
                    console.log(i);
                    vm.$emit("click",d,i)
                }
            }
        });
    },
    template: `<div :id="id"></div>`
});

var app = new Vue({
   el: "#graficos",
   data: {
        size: {height: 400 , width: 400},
        colores:["#FF0000","#00FF00","#0000FF"],
        listado: [
            ['data1', 300, 100, 250, 150, 300, 150, 500],
            ['data2', 100, 200, 150, 50, 100, 250]
        ],
        piedata:[
            ['Liverpol',70],
            ['M City',50],
            ['Leichester',35]
        ]
   },
   methods: {
       mensaje: function(d,i){
           console.log("D: "+d["value"]);
           console.log("I: "+i);
       }
   }
});

