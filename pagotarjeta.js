/* Funciones auxiliares */
function detectBrand(num) {
  const n = num.replace(/\D/g, '');
  if (/^4/.test(n)) return 'VISA';
  if (/^5[1-5]/.test(n) || /^2(2|3|4|5)/.test(n)) return 'MASTERCARD';
  if (/^3[47]/.test(n)) return 'AMEX';
  return 'CARD';
}

function formatNumber(value) {
  const v = value.replace(/\D/g, '');
  if (/^3[47]/.test(v)) {
    // Amex 4-6-5
    return v.replace(/(\d{1,4})(\d{1,6})?(\d{1,5})?/, (m, a, b, c) => [a, b, c].filter(Boolean).join(' '));
  } else {
    return v.replace(/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/, (m, a, b, c, d) => [a, b, c, d].filter(Boolean).join(' '));
  }
}

/* Elementos del DOM */
const cardNumber = document.getElementById('cardNumber');
const cardName = document.getElementById('cardName');
const expMonth = document.getElementById('expMonth');
const expYear = document.getElementById('expYear');
const cvv = document.getElementById('cvv');

const displayNumber = document.getElementById('displayNumber');
const displayName = document.getElementById('displayName');
const displayExpiry = document.getElementById('displayExpiry');
const displayCvv = document.getElementById('displayCvv');
const brandIcon = document.getElementById('brandIcon');

const cardInner = document.getElementById('cardInner');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');

/* Actualizar número de tarjeta */
cardNumber.addEventListener('input', () => {
  let formatted = formatNumber(cardNumber.value);
  displayNumber.textContent = formatted || '#### • ###• #### • ####';
  brandIcon.textContent = detectBrand(cardNumber.value);
});

/* Actualizar nombre */
cardName.addEventListener('input', () => {
  displayName.textContent = cardName.value.trim().toUpperCase() || 'NOMBRE APELLIDO';
});

/* Actualizar fecha de expiración */
function updateExpiry() {
  let month = expMonth.value.padStart(2, '0').slice(0, 2);
  let year = expYear.value.padStart(2, '0').slice(0, 2);
  displayExpiry.textContent = (month && year) ? `${month}/${year}` : 'MM/AA';
}
expMonth.addEventListener('input', updateExpiry);
expYear.addEventListener('input', updateExpiry);

/* Actualizar CVV */
cvv.addEventListener('focus', () => {
  cardInner.style.transform = 'rotateY(180deg)';
});
cvv.addEventListener('blur', () => {
  cardInner.style.transform = 'rotateY(0deg)';
});
cvv.addEventListener('input', () => {
  let cvvValue = cvv.value.replace(/\D/g, '').slice(0, 4);
  displayCvv.textContent = cvvValue ? '•'.repeat(cvvValue.length) : '•••';
});

/* Cambiar tema */
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');

theme1.addEventListener('click', () => {
  cardFront.style.background = 'linear-gradient(135deg,#7C5CFF,#4AE3C6)';
  cardBack.style.background = 'linear-gradient(135deg,#FF6B6B,#FFB86B)';
});

theme2.addEventListener('click', () => {
  cardFront.style.background = 'linear-gradient(135deg,#FF6B6B,#FFB86B)';
  cardBack.style.background = 'linear-gradient(135deg,#7C5CFF,#4AE3C6)';
});

/* Subir imagen de fondo */
const bgFile = document.getElementById('bgFile');
bgFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    cardFront.style.background = `url(${reader.result}) center/cover no-repeat`;
    cardBack.style.background = `url(${reader.result}) center/cover no-repeat`;
  };
  reader.readAsDataURL(file);
});

/* Alerta al pulsar "Pagar ahora" */
const payBtn = document.getElementById('payBtn');
if (payBtn) {
  payBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evita envío del formulario si lo hay
    alert('Ya fue pagado exitosamente');
  });
}