function obtenerPersonajes (done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    });
}
    
obtenerPersonajes(data => {
    data.results.forEach(personaje => {

        
        const div = document.createRange().createContextualFragment(
            `
            <div class="col-sm-3 mb-3 mb-sm-0 mt-4">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-tittle">
                        ${personaje.name}
                    </h6>
                </div>
                <img src="${personaje.image}" class="card-img-botton">
            </div>
            
            `);
            const main = document.querySelector('.row');

            main.append(div);
    }
    );
});

