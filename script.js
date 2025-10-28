// Existing duration slider logic
const rangeInput = document.querySelector('input[type="range"]');
const rangeValue = document.querySelector('.planner-inputs span');

if (rangeInput && rangeValue) {
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `${rangeInput.value} Year${rangeInput.value > 1 ? 's' : ''}`;
  });
}

// Financial planner logic
document.getElementById('calculateBtn')?.addEventListener('click', () => {
  const amount = parseFloat(document.querySelector('input[placeholder="₹ 100"]').value);
  const duration = parseInt(document.querySelector('input[type="range"]').value);
  const returns = parseFloat(document.querySelector('input[placeholder="2%"]').value);

  if (isNaN(amount) || isNaN(duration) || isNaN(returns)) {
    document.getElementById('result').textContent = "⚠️ Please fill all fields correctly.";
    return;
  }

  // SIP future value formula
  const monthlyRate = returns / 100 / 12;
  const months = duration * 12;
  const maturity = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  document.getElementById('result').textContent =
    `💰 Expected Maturity Value after ${duration} years: ₹ ${maturity.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
});
