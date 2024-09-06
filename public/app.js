const form = document.getElementById('conversionForm');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = document.getElementById('value').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const type = document.getElementById('conversionType').value;

  try {
    const response = await fetch('/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value, fromUnit, toUnit, type })
    });
    const data = await response.json();
    if (response.ok) {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `Converted Value: ${data.convertedValue}`;
      resetButton.style.display = 'block';
    } else {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `Error: ${data.message}`;
    }
  } catch (error) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = 'An error occurred. Please try again.';
  }
});

resetButton.addEventListener('click', () => {
  resultDiv.style.display = 'none';
  resetButton.style.display = 'none';
  form.reset();
});
