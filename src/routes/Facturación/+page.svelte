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

  <div class="banana">
    <div class="container">
      <form
        action="https://formsubmit.co/servicemirage877@gmail.com"
        method="POST"
      >
        <div class="row">
          <div class="col">
            <h3 class="title">Detalles de facturación</h3>

            <div class="inputBox">
              <span>Nombre :</span>
              <input type="text" name="name" placeholder="Escribir nombre" />
            </div>
            <div class="inputBox">
              <span>Apellido :</span>
              <input
                type="text"
                name="name"
                placeholder="Escribir apellido"
              />
            </div>
            <div class="inputBox">
              <span>Correo Electronico :</span>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="PAGADO EXITOSO!!!"
              />
            </div>
          </div>

          <div class="col">
            <h3 class="title">Pago</h3>

            <div class="inputBox">
              <span>Tarjetas aceptadas :</span>
              <img src="/Imagenes/Tarjetas.png" alt="" />
            </div>
            <div class="inputBox">
              <span>Nombre de la tarjeta :</span>
              <input type="text" name="name" placeholder="mr. john deo" />
            </div>
            <div class="inputBox">
              <span>Número de Tarjeta :</span>
              <input
                type="number"
                name="number "
                placeholder="1111 - 2222 - 3333 - 4444"
              />
            </div>
            <div class="inputBox">
              <span>Caducidad :</span>
              <input type="text" name="number " placeholder="junio" />
            </div>

            <div class="flex">
              <div class="inputBox">
                <span>Año caducidad :</span>
                <input type="number" name="number " placeholder="2022" />
              </div>
              <div class="inputBox">
                <span>CVV :</span>
                <input type="text" name="name " placeholder="1234" />
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" name="_template" value="table">
        <center>
          <button type="submit" class="submit-btn">PAGAR</button>
        </center>
      </form>
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


.container {
  text-align: center;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  color: black;
  padding-top: 40px;
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
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  /*background: #00ff00;*/
  background: url("/Imagenes/Imagen-Inicio.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}

.banana {
  background: #f5f3e9;
  background-image: url(/Imagenes/pexels-max-rahubovskiy-5997983.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  min-height: 10vh;
  background: transparent;
}

.container form {
  padding: 20px;
  width: 700px;
  background: transparent;
  backdrop-filter: blur(4.5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 2px solid rgba(19, 18, 18, 0.5);
}

.container form .row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.container form .row .col {
  flex: 1 1 250px;
}

.container form .row .col .title {
  font-size: 20px;
  color: #000000;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.container form .row .col .inputBox {
  margin: 15px 0;
}

.container form .row .col .inputBox span {
  margin-bottom: 10px;
  display: block;
}

.container form .row .col .inputBox input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px 15px;
  font-size: 15px;
  text-transform: none;
  border-radius: 20px;
}

.container form .row .col .inputBox input:focus {
  border: 1px solid #000000;
}

.container form .row .col .flex {
  display: flex;
  gap: 15px;
}

.container form .row .col .flex .inputBox {
  margin-top: 5px;
}

.container form .row .col .inputBox img {
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.container form .submit-btn {
  width: 80%;
  padding: 12px;
  font-size: 17px;
  background: #856019;
  color: #fff;
  margin-top: 5px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
}

</style>