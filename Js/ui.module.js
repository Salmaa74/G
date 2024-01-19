export class UI{
    display(arr) {
        var count = ``;
        for (var i = 0; i < arr.length; i++) {
            count += `<div class="col">
            <div data-id="${arr[i].id}"  class="card h-100 bg-transparent" role="button" ">
               <div  class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${arr[i].thumbnail}" />
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="d-flex flex-row align-items-center justify-content-between">
                        <h3 class="h6 small">${arr[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50">
                        ${arr[i].short_description.split(" ", 8)}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small d-flex flex-row align-items-center justify-content-between">
      
                  <span class="badge badge-color">${arr[i].genre}</span>
                  <span class="badge badge-color">${arr[i].platform}</span>
      
               </footer>
            </div>
         </div>
            `;
        }
        document.querySelector('#data').innerHTML = count
    }
    
    details(arr) {
        const content = `
        <div class="col-md-4">
        <img src="${arr.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${arr.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${arr.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${arr.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${arr.status}</span> </p>
        <p class="small">${arr.description}</p>
        <a class="btn btn-outline-info" target="_blank" href="${arr.game_url}">Show Game</a>
     </div>
        
        `;
        document.querySelector('#detailsGame').innerHTML = content;
    }
}

