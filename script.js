// JavaScript (script.js)

// Function to update cart totals
function updateCart() {
    const quantities = document.querySelectorAll('.quantity');
    const prices = document.querySelectorAll('.price');
    const totals = document.querySelectorAll('.total');
    let grandTotal = 0;
  
    quantities.forEach((quantity, index) => {
      const quantityValue = parseInt(quantity.value);
      const priceValue = parseFloat(prices[index].textContent.replace('$', ''));
      const total = quantityValue * priceValue;
      
      totals[index].textContent = `$${total.toFixed(2)}`;
      grandTotal += total;
    });
  
    document.getElementById('grandTotal').textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
  }

  
  // JavaScript (script.js)

// Function to validate the checkout form
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const shippingAddress = document.getElementById('shippingAddress');
    const billingAddress = document.getElementById('billingAddress');
    const creditCard = document.getElementById('creditCard');
  
    if (!shippingAddress.value || !billingAddress.value || !creditCard.value) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Simple credit card validation (for demonstration purposes)
    if (!/^\d{16}$/.test(creditCard.value)) {
      alert('Please enter a valid 16-digit credit card number.');
      return;
    }
  
    // If all validations pass, proceed with the order
    alert('Order placed successfully!');
    window.location.href = 'index.html';
  });
  