Vue.component('data-table',{
    props: {
        titles: Array,
        datalist: Array,
        button: Array,
    },
    template: `
     <div class="table-responsive">
            <table class="table display table-bordered nowrap" id="table-person" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th># Acciones</th>
                        <th v-for="(t,index) in titles">{{t}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in datalist">
                        <td>
                            <button type="button" :class="b.clases" @click="click(b.metodo,row.id)" v-for="(b,index) in button">{{b.name}}</button>
                        </td>
                        <td v-for="(v,p) in row" v-if="p != 'id'">{{v}}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    `,
    mounted: function(){
        $('#table-person').DataTable();
    },
    methods: {
        click: function(metodo,value){
           this.$emit(metodo,value);
        }
    }
});
new Vue({
   el: "#app",
   data: {
       titulos: ["Pais","Provincia","Ciudad"],
       data:[
           {
               "id" : 1,
               "pais" :  "Colombia",
               "provincia" : "Cundinamarca",
               "ciudad" : "Madrid"
           },
           {
               "id" : 2,
               "pais" :  "Colombia",
               "provincia" : "Quindio",
               "ciudad" : "Armenia"
           },
           {
               "id" : 3,
               "pais" :  "Colombia",
               "provincia" : "Cundinamarca",
               "ciudad" : "Mosquera"
           },
           {
               "id" : 4,
               "pais" :  "Colombia",
               "provincia" : "Cundinamarca",
               "ciudad" : "Villeta"
           }
       ],
       botones: [
           {
               "name" : "Eliminar",
               "clases" : "btn btn-danger",
               "metodo" : "delete"
           },
           {
               "name" : "Actualizar",
               "clases" : "btn btn-warning",
               "metodo" : "update"
           }
       ]
   },
    methods: {
        borrar: function(value){

        },
        actualizar: function(value){

        }
    }
});

