let results=this.document.getElementById(`results`);
window.addEventListener(`load`,function(){
    for (let i = 0; i < usuarios.length; i++) {
        results.innerHTML += `<div class="personas"><div class="imagen"><img src="Imagenes/`+usuarios[i].avatar+`" width="100px"></div><div class="info"><div class="name"><strong>`+usuarios[i].nombre+`</strong></div><div class="hobbie">`+ usuarios[i].hobby +`</div></div><div class="agg"><button class="boton">Agregar como amiga</button></div></div>`
    } // al cargar la pagina ya están todos los usuarios cargados
})

//Con el comando window.addEventListener(`load`,function(){}) voy a poder ejecutar en la página algo que este dentro de la funcion apenas se carga la página, por eso es `load`. Se llama a la ventana una vez se carga. Es un EVENTO. Es para segurar que se cargue la pagina por completo

let usuarios=[
    {
        nombre:`Catalina`,
        hobby:`futbol, musica`,
        sexo:`F`,
        avatar:`a1.png`
    },
    {
        nombre:`Marco`,
        hobby:`futbol, netflix`,
        sexo:`M`,
        avatar:`a2.png`
    },
    {
        nombre:`Felipe`,
        hobby:`netflix, basquet`,
        sexo:`M`,
        avatar:`a3.png`
    },
    {
        nombre:`Maria`,
        hobby:`musica, cocinar`,
        sexo:`F`,
        avatar:`a4.png`
    },
    {
        nombre:`Julieta`,
        hobby:`futbol, netflix`,
        sexo:`F`,
        avatar:`a5.png`
    },
    {
        nombre:`Javier`,
        hobby:`futbol, cocinar`,
        sexo:`M`,
        avatar:`a6.png`
    },
    {
        nombre:`Raquel`,
        hobby:`musica, basquet`,
        sexo:`F`,
        avatar:`a7.png`
    },
    {
        nombre:`Raul`,
        hobby:`netflix, basquet`,
        sexo:`M`,
        avatar:`a8.png`
    }
]; //vector usuarios

let botonBuscar=document.getElementById(`botonBuscar`); //obtengo el boton "buscar"
botonBuscar.addEventListener(`click`,function(){
    // al hacer click debo obtener los valores de los campos:

    //OBTENER DE UN OPTION
    let generoCampo = document.getElementById(`genero`); //obtengo objeto
    let resultado= generoCampo.selectedIndex; //obtengo la posicion del elemento seleccionado, ya que la variable generoCampo es un array
    let genero= generoCampo.options[resultado].value; //con .options[resultado] indico la posicion de la opcion elegida, y con .value obtengo el valor elegido
    

    //OBTENER DE UN INPUT
    let hobbiesCampo=document.getElementById(`hobbies`);
    let hobbies = hobbiesCampo.value;
    console.log(genero);
    console.log(hobbies);
    let busqueda=``;
    for (let i = 0; i < usuarios.length ; i++) {
        if (genero==`T` || genero==usuarios[i].sexo) {
            if (hobbies==`` || usuarios[i].hobby.includes(hobbies)) {
                 busqueda+=`<div class="personas"><div class="imagen"><img src="Imagenes/`+usuarios[i].avatar+`" width="100px"></div><div class="info"><div class="name"><strong>`+usuarios[i].nombre+`</strong></div><div class="hobbie">`+ usuarios[i].hobby +`</div></div><div class="agg"><button class="boton">Agregar como amiga</button></div></div>`;
            }
            
        }
    }
    results.innerHTML=busqueda;
    console.log(busqueda);
})