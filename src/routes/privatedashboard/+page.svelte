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

<section class="banner">
  <div class="semi-circle">
	<div class="content-banner">
	  <div class="text-content">
		<h1>Hotel Mirage</h1>
		<h4>MirageReser@gmail.com<br />+51 964882859</h4>
	  </div>
	</div>
  </div>
</section>

<div class="search-bar">
  <select class="location-input">
	  <option value="" disabled selected>Seleccionar ubicación</option>
	  <option value="ubicacion1">Av. El Golf 591</option>
	  <option value="ubicacion2">Victor Fajardo 411</option>
  </select>
  <p>Entrada:</p>
  <input type="date" class="date-input" />
  <p>Salida:</p>
  <input type="date" class="date-input" />
  <div class="guests-input">
	  <label for="adults">Adultos</label>
	  <input type="number" id="adults" min="0" value="1" />
	  <label for="children">Niños</label>
	  <input type="number" id="children" min="0" value="0" />
	  <label for="infants">Infantes</label>
	  <input type="number" id="infants" min="0" value="0" />
  </div>
  <button class="search-button">Buscar Habitación</button>
</div>

<div class="container">
<h1 class="title">ALGUNAS DE NUESTRAS<br> HABITACIONES</h1>
<div class="image-container">
  <img src="/foto 1.jpg" alt="Habitación 1" class="room-image">
  <img src="/foto 2.jpg" alt="Habitación 2" class="room-image">
</div>
</div>
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

.room-image {
  width: 800px; /* Ancho */
  height: 600px; /* Alto */
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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

.banner {
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url("/pexels-max-rahubovskiy-5997983.jpg");
  background-size: cover;
  background-position: center;
}

.background-image {
  position: absolute;
  width: 60%; /* Tamaño de la imagen o ajusta según necesites */
  height: 100%; /* Ajusta según tu diseño */
  background-size: cover;
  background-position: center;
  right: 0;
}

.semi-circle {
  width: 18%;
  height: 100%;
  border-radius: 0 50% 50% 0; /* Forma el semicírculo */
  background-color: #e3eded;
  position: absolute;
  left: 0;
  top: 0;
}

.semi-circle::before {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #e3eded;
  border-radius: 0 50% 50% 0; /* Forma el semicírculo */
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.content-banner {
  position: absolute;
  top: 50%;
  left: 25%; /* Ajusta el espacio entre el círculo y el texto */
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
}


.text-content {
  text-align:center; /* Centrar el texto */
  color: #000000; /* Color del texto */
}

.text-content h1 {
  text-align: center;
  font-size: 3em; /* Tamaño grande para el título */
  margin-bottom: 10px; /* Espacio inferior */
  font-family: "Ubuntu", sans-serif;
}

.text-content h4 {
  text-align: center;
  font-size: 1em; /* Tamaño grande para la información de contacto */
  margin-top: 0;
  margin-left: 30px; /* Eliminar margen superior */
  opacity: 0.8; /* Opacidad reducida para la información secundaria */
  font-family: "Ubuntu", sans-serif;
}




.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #eec981; /* Fondo ligeramente transparente */
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(5px); /* Efecto de desenfoque */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilos para los inputs y etiquetas */
.location-input,
.date-input,
.guests-input label,
.guests-input input {
  margin: 5px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Estilos para el botón */
.search-button {
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.search-button:hover {
  background-color: #0056b3;
}

/* Efectos de hover en inputs */
.location-input:focus,
.date-input:focus,
.guests-input label:hover,
.guests-input input:focus {
  border-color: #007bff;
  box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.5);
}

.location-input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Estilos para el select cuando está abierto */
.location-input:focus {
  border-color: #007bff;
  box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.5);
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


.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.room-image {
  width: 580px; /* Ancho */
  height: 500px; /* Alto */
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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

.footer {
  background-color: #ffffff;
  padding: 50px 0;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
}

.footer-links {
  width: 25%;
  padding: 0 15px;
}

.footer-links h4 {
  font-size: 20px;
  color: #d49313;
  margin-bottom: 25px;
  font-weight: 500;
  border-bottom: 2px solid #bcbdb8;
  padding-bottom: 10px;
  display: inline-block;
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

.social-link a {
  display: inline-block;
  min-height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #000000;
  transition: all 0.5s ease;
}

.credit {
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-family: "Ubuntu", sans-serif;
  background: #ffffff;
}

.credit span {
  color: #000000;
  font-family: "Ubuntu", sans-serif;
}

.social-link a:hover {
  background-color: #eec981;
}

@media (max-width: 991px) {
  .footer-row {
    text-align: center;
  }

  .footer-links {
    width: 100%;
    margin-bottom: 30px;
  }
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
