<script>
	import { authHandlers, authStore } from '../stores/authStore';

	let register = false;
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}

		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			window.location.href = '/privatedashboard';
		}
	}
</script>

<div class="container">
	<h1>{register ? 'Registro' : 'Iniciar Sesión'}</h1>
	<form >
		<label>
			<input bind:value={email} type="email" placeholder="Email" required />
		</label>
		<label>
			<input bind:value={password} type="password" placeholder="Contraseña" required pattern="{8}" />
		</label>
		{#if register}
			<label>
				<input bind:value={confirmPassword} type="password" placeholder="Confirmar Contraseña" required />
			</label>
		{/if}
		<button on:click={handleSubmit}>Ingresar</button>
	</form>
	{#if register}
		<div
			on:click={() => {
				register = false;
			}}
			on:keydown={() => {}}
		>
			<h2>Ya tienes una cuenta? Inicia Sesión</h2>
		</div>
	{:else}
		<div
			on:click={() => {
				register = true;
			}}
			on:keydown={() => {}}
		>
			<h2>No tienes una cuenta? Registrate</h2>
		</div>
		<div
			on:click={() => {
				authHandlers.resetPassword(email)
			}}
			on:keydown={() => {}}
		>
		</div>
		<div
			on:click={() => {
				authHandlers.resetPassword(email)
			}}
			on:keydown={() => {}}
		>
			<h2>Forgot Password?</h2>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

	* {
  margin: 0;
  padding: 0;
  font-family: "poppins", sans-serif;
  box-sizing: border-box;
  list-style: none;
}
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 100vh;
	  background-color: #f0f0f0; /* Color de fondo */
	}
  
	h1 {
	  color: #333; /* Color del texto */

	}
	h2{
		font-size: 15px;
		color: #333;
		margin-top: 10px;
		cursor: pointer;
	}
  
	h2:hover{
		color: #007bff;
	}
	form {
	  display: flex;
	  flex-direction: column;
	  width: 300px;
	  margin-top: 20px;
	}
  
	label {
	  margin-bottom: 10px;
	}
  
	input {
	  width: 100%;
	  padding: 10px;
	  margin-top: 5px;
	  margin-bottom: 10px;
	  border: 1px solid #ccc; /* Borde del input */
	  border-radius: 5px;
	}
  
	button {
	  background-color: #12cf41; /* Color de fondo del botón */
	  color: #fff; /* Color del texto del botón */
	  padding: 10px;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;
	}
  
	div {
	  margin-top: 20px;
	  color: #007bff; /* Color del texto del enlace */
	}
  
	/* Cambiar color al pasar el ratón sobre el enlace */
	div:hover {
	  text-decoration: none;
	}
  </style>
