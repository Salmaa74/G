import { Details } from "./details.module.js";
import { UI } from "./ui.module.js";

export class games {
    constructor() {
        this.getdata("mmorpg");
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".menu .active").classList.remove("active");
               e.target.classList.add("active");
               this.getdata(e.target.innerHTML);
            });
         });
     /*   const links = document.querySelectorAll('.nav-link');
        if (links.length) {
            links.forEach((link) => {
                link.addEventListener('click', (e) => {
                    links.forEach((link) => {
                        link.classList.remove('active');
                    });
                    e.preventDefault();
                    link.classList.add('active');
                });
            });
        } 
         var list = document.querySelectorAll('ul li');
        for (var i = 0; i < list.length; i++) {
            list[i].addEventListener('click', function (e) {
                var data = e.target.innerHTML;
                getdata(data)
            })
        } */
        this.ui = new UI();
    }

    async getdata(word) {

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2c6c988762msh13db8c9258e6506p1215c1jsn0655cbf23390',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${word}`, options);
        const arr = await data.json();
        this.ui.display(arr);
        this.select();
        loading.classList.add("d-none");
    }
    select() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.show(id);
           });
        });
     }
     show(id) {
        this.details = new Details(id);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector("#details").classList.remove("d-none");
     }
}

