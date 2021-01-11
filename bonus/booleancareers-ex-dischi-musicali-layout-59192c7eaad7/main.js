// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

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