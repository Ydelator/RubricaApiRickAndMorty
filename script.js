//funcion para obtener los personajes de la API, está limitada solo a los 12 primeros resultados

function obtenerPersonajes(done) {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const results = data.results.slice(0, 12);
        done(results);
      });
  }
  
  /*funcion para mostrar los personajes obtenidos, el crearselector automaticamente crea la división
  'Mostrar todos' en el select HTML mostrando la extensión completa de personajes*/
  function mostrarPersonajes(personajes) {
    const main = document.querySelector('.row');
  
    personajes.forEach(personaje => {
      const div = document.createRange().createContextualFragment(`
        <div class="fra col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 mb-sm-4 mt-4" data-name="${personaje.name}">
          <div class="card">
            <div class="card-body">
              <h6 class="card-tittle">${personaje.name}</h6>
            </div>
            <img src="${personaje.image}" class="card-img-bottom">
          </div>
        </div>
      `);
  
      main.append(div);
    });
  
    crearSelector([{ name: 'Mostrar todos' }, ...personajes]);
  }
  
  /*Aquí a la función crear selector se le da cuerpo para que reciba los parametros que van en el select
  los cuales son los nombres de los personajes y vaya agregando dichas opciones, luego, se crea el evento dependiendo
  del valor seleccionado para posteriormente apuntar a la tarjeta correspondiente al nombre seleccionado para
  mostrar unicamente esa tarjeta y luego se hace el llamado a obtener esos personajes y mostrarlos. 
  */
  function crearSelector(personajes) {
    const select = document.querySelector('#selector');
  
    personajes.forEach(personaje => {
      const option = document.createElement('option');
      option.value = personaje.name;
      option.text = personaje.name;
      select.add(option);
    });
  

    select.addEventListener('change', () => {
      const selectedName = select.value;
  

      const tarjetas = document.querySelectorAll('.row > .fra');
      tarjetas.forEach(tarjeta => {
        tarjeta.style.display = (tarjeta.dataset.name === selectedName || selectedName === 'Mostrar todos') ? 'block' : 'none';
      });
    });
  }
  

  obtenerPersonajes(mostrarPersonajes);
