document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const userList = document.querySelector(".user-list");
  const mapContainer = document.querySelector(".map-container");
  const btnVolverOpciones = document.getElementById("btnVolverOpciones"); // ← Botón a ocultar

  const ocultarExtras = () => {
    if (userList) userList.style.display = "none";
    if (mapContainer) mapContainer.style.display = "none";
  };

  // 🛒 Carrito de Compras
  document.getElementById("cartIcon").addEventListener("click", () => {
    if (btnVolverOpciones) btnVolverOpciones.style.display = "none";

    mainContent.innerHTML = `
      <h2>🛒 Carrito de Compras</h2>
      <div class="cards">
        <div class="card" data-name="Plan Premium" data-price="$29.99 / mes">
          <img src="https://i.imgur.com/xdbHo4E.png" alt="Producto 1">
          <h3>Plan Premium</h3>
          <p>$29.99 / mes</p>
        </div>
        <div class="card" data-name="Suscripción Básica" data-price="$9.99 / mes">
          <img src="https://i.imgur.com/5lH1ZzF.png" alt="Producto 2">
          <h3>Suscripción Básica</h3>
          <p>$9.99 / mes</p>          
        </div>       
      </div>      
      <button id="volverInicioCarrito" class="btn-volver">Volver al inicio</button>
    `;
    ocultarExtras();

    document.getElementById("volverInicioCarrito").addEventListener("click", () => {
      location.reload();
    });

    const cards = mainContent.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
        const price = card.getAttribute("data-price");

        mainContent.innerHTML = `
          <h2>Detalle del Producto</h2>
          <p><strong>Producto:</strong> ${name}</p>
          <p><strong>Precio:</strong> ${price}</p>
          <h3>Elige forma de pago:</h3>
          <button id="pagoTarjeta" class="btn-pago">Pago con Tarjeta</button>
          <button id="pagoEfectivo" class="btn-pago">Pago en Efectivo</button>          
          <button id="volverCarrito" class="btn-volver">Volver al carrito</button>
          <button id="volverInicioDesdeDetalleCarrito" class="btn-volver">Volver al inicio</button>
        `;

        document.getElementById("pagoTarjeta").addEventListener("click", () => {
          window.location.href = "pagotarjeta.html";
        });

        document.getElementById("pagoEfectivo").addEventListener("click", () => {
          alert(`Has elegido pagar ${name} en efectivo.`);
        });

        document.getElementById("volverCarrito").addEventListener("click", () => {
          document.getElementById("cartIcon").click();
        });

        document.getElementById("volverInicioDesdeDetalleCarrito").addEventListener("click", () => {
          location.reload();
        });
      });
    });
  });

  // 📦 Productos Disponibles
  document.getElementById("packageIcon").addEventListener("click", () => {
    if (btnVolverOpciones) btnVolverOpciones.style.display = "none";

    mainContent.innerHTML = `
      <h2>📦 Productos Disponibles</h2>
      <div class="cards">
        <div class="card" data-name="Tarjeta FintechOne" data-price="Consulta precio en detalle">
          <img src="https://i.imgur.com/7yUVEbm.png" alt="Producto">
          <h3>Tarjeta FintechOne</h3>
          <p>Ideal para tus compras online.</p>
        </div>
        <div class="card" data-name="Cuenta Digital" data-price="Consulta precio en detalle">
          <img src="https://i.imgur.com/5f2QzBd.png" alt="Producto">
          <h3>Cuenta Digital</h3>
          <p>Administra tu dinero fácilmente.</p>           
        </div>        
      </div>   
      <button id="volverInicioProductos" class="btn-volver">Volver al inicio</button>   
     
    `;
    ocultarExtras();

    document.getElementById("volverInicioProductos").addEventListener("click", () => {
      location.reload();
    });

    const cards = mainContent.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
        const price = card.getAttribute("data-price");

        mainContent.innerHTML = `
          <h2>Detalle del Producto</h2>
          <p><strong>Producto:</strong> ${name}</p>
          <p><strong>Precio:</strong> ${price}</p>
          <h3>Elige forma de pago:</h3>
          <button id="pagoTarjeta" class="btn-pago">Pago con Tarjeta</button>
          <button id="pagoEfectivo" class="btn-pago">Pago en Efectivo</button>        
          <button id="volverProductos" class="btn-volver">Volver a productos</button>
          <button id="volverInicioDesdeDetalleProductos" class="btn-volver">Volver al inicio</button>
        `;

        document.getElementById("pagoTarjeta").addEventListener("click", () => {
          window.location.href = "pagotarjeta.html";
        });

        document.getElementById("pagoEfectivo").addEventListener("click", () => {
          alert(`Has elegido pagar ${name} en efectivo.`);
        });

        document.getElementById("volverProductos").addEventListener("click", () => {
          document.getElementById("packageIcon").click();
        });

        document.getElementById("volverInicioDesdeDetalleProductos").addEventListener("click", () => {
          location.reload();
        });
      });
    });
  });

  // 💰 Transacciones Recientes
  document.getElementById("moneyIcon").addEventListener("click", () => {
    if (btnVolverOpciones) btnVolverOpciones.style.display = "none";

    mainContent.innerHTML = `
      <h2>💰 Transacciones Recientes</h2>
      <ul class="transactions">
        <li>Pago recibido - $120.000</li>
        <li>Suscripción FintechOne - $29.99</li>
        <li>Transferencia enviada - $45.000</li>
      </ul>      
      <button id="volverInicio" class="btn-volver">Volver al inicio</button>
    `;
    ocultarExtras();

    document.getElementById("volverInicio").addEventListener("click", () => {
      location.reload();
    });
  });
});

