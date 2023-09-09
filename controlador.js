var usuarios = [];

function generarusuarios() {
    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respuesta => {
        usuarios = respuesta;
        console.log('El backend está funcionando');
        renderizarUsuarios();
    })
    .catch(error => {
        console.log(error);
    });
}

const renderizarUsuarios = () => {
    document.getElementById('usuarios').innerHTML=``;
    document.getElementById('con-tarjetas').innerHTML = '';

    usuarios.forEach((persona, i) => {
        let imagen = persona.imagenPerfil;
        let nombre = persona.nombre;
        intereses = persona.generoInteres;
        document.getElementById('usuarios').innerHTML += `
        <div onclick="contenidoU(${i})">
            <img src="${imagen}">
            <h5>${nombre}</h5>
        </div>
        `;
    });

};

generarusuarios();



function moverBtn(){
    let primerBoton = document.getElementById('bolita-boton')
    let segundoBoton = document.getElementById('bolitados-boton')
    if (window.getComputedStyle(primerBoton).backgroundColor === 'rgb(239, 236, 236)') {
        segundoBoton.style.backgroundColor = '#EFECEC';
        primerBoton.style.backgroundColor = '#c0bebe';
        document.getElementById('contenido').style.display = 'none';
        document.getElementById('imagen-logo').style.display = 'none';
        document.getElementById('usuarios').style.display= 'none';
        document.getElementById('cotenido-matches').style.display = 'block';
        document.getElementById('perfiles').style.display= 'none';
      } else if (window.getComputedStyle(segundoBoton).backgroundColor === 'rgb(239, 236, 236)') {
        primerBoton.style.backgroundColor = '#EFECEC';
        segundoBoton.style.backgroundColor = '#c0bebe';
        document.getElementById('cotenido-matches').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
        document.getElementById('imagen-logo').style.display = 'flex';
        document.getElementById('usuarios').style.display= 'none';
        document.getElementById('perfiles').style.display= 'none';
      }  
}

function mostrarInfo(indice){
    document.getElementById('usuarios').style.display= 'none';
    document.getElementById('contenido').style.display = 'none';
    document.getElementById('imagen-logo').style.display = 'none';
    document.getElementById('perfiles').style.display= 'block';
    document.getElementById('perfiles').innerHTML = `
    <img src="${usuarios[indice].imagenPortada}" id="imagen-perfil">
    <div id="info-perfil">
        <h2>${usuarios[indice].nombre}</h2>
        <h10>Genero: ${usuarios[indice].genero}</h10><br>
        <h10>Ocupacion: ${usuarios[indice].ocupacion}</h10><br>
        <h10>Ciudad: ${usuarios[indice].ciudad}</h10><br>
    </div>
    <div id="pie-perfil">
        <i class="fa-solid fa-chevron-left fa-2xl"></i>
        <div id="boton-corazon" onclick="like(${indice})"><i class="fa-solid fa-heart fa-2xl" style="color: #69c96f;"></i></div>
        <i class="fa-solid fa-chevron-right fa-2xl"></i>
    </div>
  `;}

  function mostrarU(){
    document.getElementById('contenido').style.display = 'none';
    document.getElementById('imagen-logo').style.display = 'flex';
    document.getElementById('perfiles').style.display= 'none';
    document.getElementById('usuarios').style.display= 'grid';
    document.querySelector('header').innerHTML=``;
    
  };

function generarusu(index){
    let intereses = usuarios[index].generoInteres;
    document.getElementById('con-tarjetas').innerHTML = '';

    usuarios.forEach((persona, i) => {
    let imagen = persona.imagenPerfil;
    let nombre = persona.nombre;
    let genero = persona.genero;
  if (Array.isArray(intereses)) {
    if (intereses.includes(genero)) {
      document.getElementById('con-tarjetas').innerHTML += `
        <div class="identificacion" onclick="mostrarInfo(${i})">
          <img src="${imagen}">
          <h3>${nombre}</h3>
        </div>
      `;
    }
  } else {
    if (genero === intereses) {
      document.getElementById('con-tarjetas').innerHTML += `
        <div class="identificacion" onclick="mostrarInfo(${i})">
          <img src="${imagen}">
          <h3>${nombre}</h3>
        </div>
      `;
    }
  }
});



};

function contenidoU(indice){
    generarusu(indice);
    document.getElementById('contenido').style.display = 'block';
    document.getElementById('perfiles').style.display= 'none';
    document.getElementById('usuarios').style.display= 'none';
    document.querySelector('header').innerHTML=`<!-- Icono de usuario -->
    <div class="icono" onclick="mostrarU()">
        <i class="fa-solid fa-user fa-2xl"></i>
    </div>
    <!-- boton slider -->
    <div class="boton">
        <div class="boton-animacion" onclick="moverBtn()">
            <div id="bolita-boton">
                <i class="fa-solid fa-fire-flame-curved fa-xl" style="color: #adafb3;"></i>
            </div>
            <div id="bolitados-boton">
                <i class="fa-solid fa-star" style="color: #adafb3;"></i>
            </div>`



};




