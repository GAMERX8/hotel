<script>
	import AuthReset from '../../components/AuthReset.svelte';
	import { auth } from '../../lib/firebase/firebase.client';
	import { authHandlers, authStore } from '../../stores/authStore';

	let email;
	authStore.subscribe((curr) => {
		console.log('CURR', curr);
		email = curr?.currentUser?.email;
	});
</script>

{#if $authStore.currentUser}
<div class="container-navbar">
	<nav class="navbar container">
	  <h1>Hotel Mirage</h1>
	  <i class="fa-solid fa-bars"></i>
	  <ul class="menu">
		<li>
		  <a href="/privatedashboard"><ion-icon name="home"></ion-icon> INICIO</a>
		</li>
		<li><a href="/Habitaciones">HABITACIONES</a></li>
		<li><a href="#">RESERVAS</a></li>
	  </ul>

	  <div class="usuario">
		<button class="btn-usuario">
		  <span class="usuario-nombre">{email}</span>
		  <ion-icon name="person-circle-outline"></ion-icon>
		</button>
	  </div>
	  <button class="btn-usuario" on:click={authHandlers.logout}>Logout</button>
	</nav>
  </div>

<div class="title-container">
    <h2 class="title">Algunos de los más solicitados</h2>
  </div>
  
  <div class="offer-section">
    <div class="offer-content">
      <img src="/habi.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <h3>Habitacion A10</h3>
        <p>"Disfruta de la versatilidad en nuestra
           habitación con dos camas individuales. Perfecta para grupos o
           para quienes prefieren su propio espacio, esta habitación ofrece
           comodidades modernas y un diseño funcional. Ideal para una estancia 
           relajante y placentera con la privacidad que necesitas." </p>

           <a href="/Facturación">
            <button class="precio">S/ 120</button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <div class="offer-content">
      <img src="/habi2.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <h3>Habitacion A102</h3>
        <p>"Experimenta la comodidad y la versatilidad en nuestra habitación con camas separadas. 
          Perfecta para aquellos que viajan en grupo o prefieren su propio espacio, esta habitación 
          ofrece la privacidad necesaria con dos camas individuales. Equipada con comodidades modernas
           y un diseño funcional, es el espacio ideal para una estancia relajante y placentera."</p>

          <a href="Facturacion.html">
            <button class="precio" > S/ 100 </button>
            </a>
            <a href="#">
                <button class="precio">Reservar</button>
              </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi3.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Descubre el confort en nuestra habitación doble con vista panorámica. Dos camas individuales, comodidades modernas y un entorno acogedor para una estancia relajante.</p>

      <a href="Facturacion.html">
        <button class="precio" > S/ 190 </button>
        </a>
        <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi4.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Experimenta la tranquilidad en nuestra habitación con dos camas separadas. Espacio amplio, equipamiento completo y una atmósfera relajante para tu descanso.</p>
  
      <a href="Facturacion.html">
        <button class="precio" > S/ 90 </button>
        </a>
        <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi5.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>La habitación con camas individuales es tu espacio privado en nuestro hotel. Comodidades modernas, diseño acogedor y la privacidad que necesitas para tu estancia.</p>

      <a href="Facturacion.html">
        <button class="precio" > S/ 80 </button>
        </a>
        <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

 <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi6.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>SDescansa a tu manera en nuestra habitación doble. Dos camas individuales, ambiente acogedor y comodidades modernas para una estancia agradable.</p> 
        <a href="Facturacion.html">
          <button class="precio" > S/ 140 </button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi7.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Nuestra habitación twin es un espacio acogedor y versátil. Dos camas individuales, comodidades modernas y un ambiente relajante para tu descanso.</p> 
        <a href="Facturacion.html">
          <button class="precio" > S/ 120 </button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi8.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Descripción de la otra habitación.</p>
        <a href="Facturacion.html">
          <button class="precio" > S/ 160 </button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi9.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Disfruta de la privacidad y comodidad en nuestra habitación con camas individuales. Equipada con lo necesario para una estancia relajada y placentera.</p>
        <a href="Facturacion.html">
          <button class="precio" > S/ 150 </button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>

  <div class="offer-section">
    <h2> Promoción</h2>
    <div class="offer-content">
      <img src="/habi10.jpg" alt="Otra Habitación" class="offer-image">
      <div class="offer-description">
        <p>Disfruta de la versatilidad en nuestra habitación con dos camas individuales. Espacio funcional y confortable para tu descanso.</p>
        <a href="Facturacion.html">
          <button class="precio" > S/ 90 </button>
          </a>
          <a href="#">
            <button class="precio">Reservar</button>
          </a>
      </div>
    </div>
  </div>
  <br>
<div class="Iconos">
	<div class="Contenido-iconos">
	  <div>
		<ion-icon name="wifi-outline"></ion-icon>
		<h6>wifi<br />Gratuido</h6>
	  </div>
  
	  <div>
		<ion-icon name="cafe-outline"></ion-icon>
		<h6>Desayuno<br />Buffet</h6>
	  </div>
  
	  <div>
		<ion-icon name="checkmark-circle-outline"></ion-icon>
		<h6>Mejor Tarifa</h6>
	  </div>
  
	  <div>
		<ion-icon name="water-outline"></ion-icon>
		<h6>Agua<br />Gratis</h6>
	  </div>
	</div>
  </div>
{:else}
	<div>Loading....</div>
{/if}

<style>
	* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.container-navbar {
  background-color: #d49313;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.navbar .fa-bars {
  display: none;
}

.menu {
  display: flex;
  gap: 25px;
}

.menu li {
  list-style: none;
}

.container-navbar h1 {
  font-family: "Ubuntu", sans-serif; /* Tipo de fuente */
  color: #ffffff; /* Color del texto */
  font-size: 25px;
  
}

.container-navbar a{
  text-decoration: none;
}

.menu a {
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  font-family: "poppins", sans-serif;
  padding-left: 15px;
}

.menu a::after {
  content: "";
  width: 1.5rem;
  height: 1px;
  background-color: black;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%, 50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.menu a:hover::after {
  opacity: 1;
}

.menu a:hover {
  color: black;
}

.btn-usuario {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.btn-usuario:hover {
  background-color: #f5f5f5; /* Cambio de color al pasar el mouse */
}

/* Estilos para el nombre de usuario dentro del botón */
.usuario-nombre {
  font-weight: bold;
  margin-right: 5px; /* Espacio entre el nombre y el icono */
}


.container {
  text-align: center;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  color: black;
  padding-top: 40px;
}

.title-container {
  text-align: center;
  margin-bottom: 30px; /* Espacio entre el título y la siguiente sección */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}



.Iconos {
  padding: 0px, 50px;
  background: #eec981;
}

.Contenido-iconos {
  padding: 5px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.Contenido-iconos div {
  flex: 1;
  margin: 0px;
}



.Contenido-iconos div ion-icon {
  color: #000000;
  font-size: 80px;
}

.Contenido-iconos div h6 {
  color: #000000;
  font-size: 20px;
  font-weight: 100;
  margin: 10px 0px;
}

.offer-section {
  text-align: center;
  margin-top: 50px;
}

.offer-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: black;
}

.offer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.offer-image {
  width: 300px; /* Ancho de la imagen */
  margin-right: 20px; /* Espacio entre la imagen y el texto */
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.offer-description {
  max-width: 300px;
}

.offer-description p {
  font-size: 16px;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}



.footer-links ul li a {
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  display: block;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.footer-links ul li a:hover {
  color: #eec981;
  padding-left: 6px;
}
button.precio {
  padding: 10px 20px;
  background-color: #eec981;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-family: "Ubuntu", sans-serif;
}

button.precio:hover {
  background-color: #d49313;
}

.offer-description p{
  font-family: "Ubuntu", sans-serif;
}

</style>