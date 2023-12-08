<script>
    import { onMount } from 'svelte';
  
    // Función para manejar la apertura de la ventana de reservas
    const handleReservaClick = () => {
      // Obtener todos los elementos con la clase 'offer-section'
      const offerSections = document.querySelectorAll('.offer-section');
  
      // Crear un nuevo documento
      const reservaDocument = document.implementation.createHTMLDocument();
      const reservaBody = reservaDocument.body;
  
      // Clonar cada 'offer-section' al nuevo documento
      offerSections.forEach((section) => {
        const clonedSection = section.cloneNode(true);
        reservaBody.appendChild(clonedSection);
      });
  
      // Abrir una nueva ventana con el contenido de la reserva
      const reservaWindow = window.open('', '_blank');
      reservaWindow.document.write(reservaDocument.documentElement.outerHTML);
    };
  
    // Ejecutar la función al cargar el componente
    onMount(() => {
      // Agregar el evento click a todos los botones con la clase 'precio'
      const precioButtons = document.querySelectorAll('.precio');
      precioButtons.forEach((button) => {
        button.addEventListener('click', handleReservaClick);
      });
    });
  </script>
  
  <style>
    /* Estilos según sea necesario */
  </style>
  
  <div>
    <h1>Reservas</h1>

  </div>