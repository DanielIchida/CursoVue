Vue.component('data-table',{
    props: {
        titles: Array,
        datalist: Array,
        button: Array,
        id: String
    },
    data: function(){
        return {
            content: '',
            datable: null
        }
    },
    template: `
     <div class="table-responsive">
            <table class="table table-bordered display nowrap" :id="id" cellspacing="0" width="100%">
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
    beforeCreate: function(){
        console.log("before created");
    },
    created: function(){
       console.log("created");
        console.log(" - - - ");
    },
    beforeMount: function(){

    },
    mounted: function(){
        this.datable = $("#"+this.id).DataTable();
    },
    beforeUpdate: function(){
        console.log("before update");
        if(this.datable){
            this.datable.destroy();
        }
    },
    updated: function(){
        console.log("updated")
        if(this.datable){
            this.datable = $("#"+this.id).DataTable();
        }
    },
    beforeDestroy: function(){
        console.log("before destroy");
    },
    destroyed: function(){
        this.data = [];
        console.log("destroyed");
    },
    methods: {
        click: function(metodo,value){
           this.$emit(metodo,value);
        },
    }
});
new Vue({
   el: "#app",
   data: {
       datatable: null,
       identificador: "tabla1",
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
           },
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
           }, {
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
           },
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
           }, {
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
       ],
       tabla: ""
   },
    methods: {
        borrar: function(value){

        },
        actualizar: function(value){

        },
        beforeUpdate: function(){
            this.identificador = "tabla1";
        },
        cambiarData: function(){
            this.data = [];
            this.data = [
                {
                    "id" : 5,
                    "pais" :  "Colombia",
                    "provincia" : "Cundinamarca",
                    "ciudad" : "Facatativa"
                },
                {
                    "id" : 6,
                    "pais" :  "Colombia",
                    "provincia" : "Boyaca",
                    "ciudad" : "Tunja"
                },
                {
                    "id" : 7,
                    "pais" :  "Colombia",
                    "provincia" : "Cundinamarca",
                    "ciudad" : "Funza"
                },
                {
                    "id" : 8,
                    "pais" :  "Colombia",
                    "provincia" : "Cundinamarca",
                    "ciudad" : "Guaduas"
                }
            ];
            this.identificador = "tabla2";
        }
    },

});

