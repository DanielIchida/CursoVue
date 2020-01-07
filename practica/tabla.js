Vue.component('table-dinamic',{
    props: {
       columns : {
          type: Array,
          required: true
       },
       rows: {
          type: Array,
          required: true
       }
    },
   data: function(){
       return {
          objeto: {},
          search: []
       }
   },
   beforeMount: function () {
       var m = {};
       this.columns.forEach((e,i) => {
           m[e.model] = '';
       });
       this.objeto = m;
       this.search = this.rows;
   },
   methods: {
     filtros: function(row) {
        this.search = this.rows.filter((item) => {
           console.log(item[row]+" - "+this.objeto[row]);
           return item[row].toString().toLowerCase().startsWith(this.objeto[row].toString().toLowerCase());
           //return item[row].toLowerCase().indexOf(this.objeto[row].toLowerCase()) >= 0;
        });

     }
   },
    template: `
       <div class="table-responsive">
          <table class="table table-striped">
             <thead>
                 <tr>
                    <th v-for="col in columns">
                       <input v-show="col.filter" v-model="objeto[col.model]" @keyup="filtros(col.model)" class="form-control" type="text">
                    </th>
                 </tr>
                
                 <tr>
                    <th v-for="col in columns">{{col.title}}</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(row, index) in search">
                    <td v-for="(value,propertie) in row">
                       {{ value }}
                    </td>
                 </tr>
             </tbody>
          </table>
       </div> 
    `,
});
var app = new Vue({
   el: "#app",
   data: {
      titulos : [
         {
            title: "Nombre Equipo",
            model: "nombre",
            filter: true
         },
         {
            title: "PG",
            model: "pg",
            filter: true
         },
         {
            title: "PE",
            model: "pe",
            filter: false
         },
         {
            title: "PP",
            model: 'pp',
            filter: false
         },
         {
            title: "Puntos",
            model: 'puntos',
            filter: false
         }
      ],
      equipos:[
         {
            nombre: "Bayer",
            pg: 6,
            pe: 2,
            pp: 0,
            puntos: 20
         },
         {
            nombre: "Dormunt",
            pg: 5,
            pe: 1,
            pp: 1,
            puntos: 17
         },
         {
            nombre: "Sturgart",
            pg: 4,
            pe: 2 ,
            pp: 1,
            puntos: 15
         }
      ]

   }
});
