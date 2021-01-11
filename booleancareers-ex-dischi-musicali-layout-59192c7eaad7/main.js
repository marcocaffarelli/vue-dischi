// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

let app = new Vue({
    el: "#app",
    data:{
        listaCd: [],

    },
    mounted(){
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response =>{
                //verifico lo stato della risposta
                //console.log(response);
				// stampo in console i cd
				//console.log(response.data.response);
				//aggiungo i cd all'interno dell'array lista
				this.listaCd.push(response.data.response)
			})
			.catch(function (error) {
				//console.log(error);
			}); 
			//console.log(this.listaCd);
        
    }
});