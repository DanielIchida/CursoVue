Vue.component('grafico-estadisticos',{
    props:{
        columnas: Array,
        id: String,
        tipo: String,
        colores: Array
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
        console.log(this.dataColors)
        var chart = c3.generate({
            bindto: '#'+this.id,
            data: {
                columns: this.columnas,
                type: this.tipo,
                colors: this.dataColors
            }
        });
    },
    template: `<div :id="id"></div>`
});

var app = new Vue({
   el: "#graficos",
   data: {
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
   }
});

