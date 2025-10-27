const shootType = document.getElementById('shootType');
const extras = document.querySelectorAll('.extras input[type="checkbox"]');
const totalPrice = document.getElementById('totalPrice');

function updatePrice() {
  let total = parseInt(shootType.value);
  extras.forEach(extra => {
    if (extra.checked) total += parseInt(extra.value);
  });
  totalPrice.textContent = total;
}

shootType.addEventListener('change', updatePrice);
extras.forEach(extra => extra.addEventListener('change', updatePrice));