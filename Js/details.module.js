import {UI} from "./ui.module.js"

export class Details{
constructor(id){
    this.ui= new UI();
    document.getElementById("btnClose").addEventListener("click", () => {
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector("#details").classList.add("d-none");
     });
     this.getdetails(id)
}
getdetails(id) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c6c988762msh13db8c9258e6506p1215c1jsn0655cbf23390',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    .then((response) => response.json())
    .then((response) => this.ui.details(response))
    .catch((err) => console.error(err))
    .finally(() => {
       loading.classList.add("d-none");
    });
   

}
}

