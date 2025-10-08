document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const userList = document.querySelector(".user-list");
  const mapContainer = document.querySelector(".map-container");

  const ocultarExtras = () => {
    if (userList) userList.style.display = "none";
    if (mapContainer) mapContainer.style.display = "none";
  };

  // Carrito de compras
  document.getElementById("cartIcon").addEventListener("click", () => {
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
    `;
    ocultarExtras();

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
          <br><br>
          <button id="volverCarrito" class="btn-volver">Volver al carrito</button>
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
      });
    });
  });

  // Productos
  document.getElementById("packageIcon").addEventListener("click", () => {
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
    `;
    ocultarExtras();

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
          <br><br>
          <button id="volverProductos" class="btn-volver">Volver a productos</button>
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
      });
    });
  });

  // Transacciones recientes
  document.getElementById("moneyIcon").addEventListener("click", () => {
    mainContent.innerHTML = `
      <h2>💰 Transacciones Recientes</h2>
      <ul class="transactions">
        <li>Pago recibido - $120.000</li>
        <li>Suscripción FintechOne - $29.99</li>
        <li>Transferencia enviada - $45.000</li>
      </ul>
      <div style="text-align: center; margin-top: 20px;">
        <button id="volverusuario" class="btn-pago">Volver al usuario</button>
      </div>
    `;
    ocultarExtras();

    document.getElementById("volverusuario").addEventListener("click", () => {
      window.location.href = "opciones.html";
    });
  });

}); // <-- Cierre correcto del DOMContentLoaded

