Vue.component('table-dinamic',{
    props: {
       columns : {
          type: Array,
          required: true
       },
       rows: {
          type: Array,
          required: true
       },
       pagination: {
          type: Array,
          required: true
       },
    },
   data: function(){
       return {
          objeto: {},
          search: [],
          numPage: 0,
          paginationNumber: 1,
          isActive: false,
          i: 1,
          isDisabledNext: false,
          isDisabledPrev: true
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
        });
        if(this.objeto[row] === ""){
           this.numPage = localStorage.getItem("paginacion");
           this.paginationSelect();
        }
     },
     paginationSelect: function(){
        this.i = 1;
        this.search = this.rows;
        this.search = this.search.slice(0,this.numPage);
        this.paginationNumber = this.rows.length / this.numPage;
        this.paginationNumber = Math.ceil(this.paginationNumber);
        localStorage.setItem("paginacion",this.numPage);
     },
     botonNumPagination: function (num) {
        this.i = num;
        if(this.i === this.paginationNumber){
           this.isDisabledNext = true;
           this.isDisabledPrev = false;
        }
        if(this.i === 1){
           this.isDisabledNext = false;
           this.isDisabledPrev = true;
        }
        if(this.i !== 1 && this.i !== this.paginationNumber){
           this.isDisabledNext = false;
           this.isDisabledPrev = false;
        }
        const indiceInicio = (num - 1) * this.numPage;
        const indiceFinal =  indiceInicio + this.numPage > this.rows.length
            ? this.rows.length
            : indiceInicio  + this.numPage;
        this.search = this.rows.slice(indiceInicio,indiceFinal)
     },
     nextPage: function(){
        if(this.isDisabledNext === false){
           if(this.i > 0){
              this.botonNumPagination(this.i += 1);
              this.isDisabledPrev = false;
           }
           if(this.i === (this.paginationNumber) ){
              this.isDisabledNext = true
           }
        }
     },
     prevPage: function(){
        if(this.isDisabledPrev === false){
           if(this.i > 0){
              this.botonNumPagination(this.i -= 1);
           }
           if(this.i < 2){
              this.isDisabledPrev = true;
              this.isDisabledNext = false;
           }
        }

     }
   },
    template: `
       <div class="row">
           <div class="col-sm-4">
             <select class="form-control" v-model="numPage" @change="paginationSelect()">
              <option v-for="n in pagination" :value="n">{{n}}</option>
             </select>
           </div>
            <div class="col-sm-12">
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
                <ul v-show="pagination.length != 0" class="pagination pull-right">
                    <li :class="{disabled : isDisabledPrev}" @click="prevPage()"><a>Previous</a></li>
                    <li v-for="x in paginationNumber" @click="botonNumPagination(x)"><a href="#">{{x}}</a></li>
                    <li :class="{disabled : isDisabledNext}" @click="nextPage()"><a>Next</a></li>
                 </ul> 
              </div> 
           </div>
       </div> 
    `,
});
var app = new Vue({
   el: "#app",
   data: {
      paginacion: [2,3,4],
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
         },
         {
            nombre: "Hanover",
            pg: 6,
            pe: 2,
            pp: 0,
            puntos: 20
         },
         {
            nombre: "Atletico",
            pg: 5,
            pe: 1,
            pp: 1,
            puntos: 17
         },
         {
            nombre: "Sevilla",
            pg: 4,
            pe: 2 ,
            pp: 1,
            puntos: 15
         },
         {
            nombre: "Atalanta",
            pg: 6,
            pe: 2,
            pp: 0,
            puntos: 20
         },
         {
            nombre: "Roma",
            pg: 5,
            pe: 1,
            pp: 1,
            puntos: 17
         },
         {
            nombre: "Napoli",
            pg: 4,
            pe: 2 ,
            pp: 1,
            puntos: 15
         },
      ],


   }
});
