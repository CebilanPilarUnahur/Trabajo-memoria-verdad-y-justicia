// ==========================================
// 1. CONTADOR DE AÑOS
// ==========================================

const anio = 1976
const anioActual = new Date().getFullYear();
const anios = anioActual - anio;
document.getElementById("contador-anios").textContent = `Van ${anios} años de Memoria, verdad y justicia.`;

// ==========================================
// 2. TESTIMONIOS + BUSCADOR EN TIEMPO REAL
// ==========================================

buscador.addEventListener("input", () =>{
    const texto = buscador.value.toLowerCase();

    if(contenido.incluides(texto)){
        testimonio.style.display = "block";
    } else {
        testimonio.style.display = "none";
    };
});

// ==========================================
// 3. GENERADOR DE TARJETA CONMEMORATIVA
// ==========================================

const botonGenerar = document.getElementById("boton-generar");
const inputMensaje = document.getElementById("mensaje-tarjeta");
const resultadoTarjeta = document.getElementById("tarjeta-resultado");

botonGenerar.addEventListener("click", () => {
    const mensaje = inputMensaje.value.trim();
    if (mensaje) {
        resultadoTarjeta.innerHTML = `<p>Escribi tu mensaje</p>`;
        return;
    } 

    resultadoTarjeta.innerHTML = `
        <div class="tarjeta-memoria">
            <p class="tarjeta-fecha">24 de marzo - 1976 - 2026</p>
            <p class="tarjeta-mensaje">${mensaje}</p>
            <p class="tarjeta-firma">Memoria, verdad y justicia</p>
        </div>
    `;
});

// ==========================================
// 4. VALIDACIÓN DE FORMULARIO DE ADHESIÓN
// ==========================================

document.getElementById('form-adhesion').addEventListener('submit', function (event) {
 const nombre = document.getElementById('nombre').value.trim();
 const email = document.getElementById('email').value.trim();
 const mensaje = document.getElementById('mensaje').value.trim();
 
})
