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
    template: `
       <div class="table-responsive">
          <table class="table">
             <thead>
                 <th v-for="col in columns">{{col}}</th>
             </thead>
             <tbody>
                 <tr v-for="(row, index)  in rows">
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
          "Nombre",
          "PG",
          "PE",
          "PP",
          "Puntos"
      ],
      equipos:[
         {
            nombre: "Bayer",
            pg: 6,
            pe: 2,
            pp: 0,
            puntos: 20
         }
      ]

   }
});
