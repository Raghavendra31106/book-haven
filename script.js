let cart = [];

function addToCart(title, author, price) {
    cart.push({ title, author, price });
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${item.title} by ${item.author} - ${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(cartItem);
    });
}

function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    books.forEach(function(book) {
        const title = book.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            book.style.display = 'inline-block'; // Keep the book visible if matched
        } else {
            book.style.display = 'none'; // Hide if it doesn't match
        }
    });
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, we will get back to you soon!');
        document.getElementById('contactForm').reset();
    }
}


  // Auth logic
  function toggleAuth(showLogin) {
    document.getElementById('signup-form').style.display = showLogin ? 'none' : 'flex';
    document.getElementById('signin-form').style.display = showLogin ? 'flex' : 'none';
  }

  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registration successful! Now sign in.');
    toggleAuth(true);
  });

  document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored && username === stored.username && password === stored.password) {
      document.getElementById('auth-container').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });

  // Show sign-in on load
  document.getElementById('auth-container').style.display = 'flex';