document.addEventListener('DOMContentLoaded', () => {
  /* Mobile Navigation Toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    navList.classList.toggle('active');
  });

  // Close nav when clicking on a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
  
  // Close nav if clicking outside the menu and toggle button
  document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
      navList.classList.remove('active');
    }
  });

  /* Tabs for Products */
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  /* Fallback sample data */
  const sampleProductsPC = [
    {
      name: 'Gaming PC - 3080 Ti & i9-10850K',
      price: 1200,
      description: "—Beautiful, Massive Gaming PC-Ask about trade-in!—\n\nPerforms great and will run anything with ease (smoke-free).\n\nSpecs:\n• GPU: NVIDIA GeForce RTX 3080 Ti EVGA\n• CPU: Intel Core i9-10850K\n• Motherboard: ASUS ROG Strix Z490-E WiFi\n• RAM: 32GB Corsair Dominator @ 360MT/s\n• Storage: 2TB Total (1TB SSD + 1TB HDD)\n• PSU: 750 Watt RM750x\n• Cooler: Corsair 280mm AIO\n• Case: Corsair 5000X RGB\n• Extras: 10 RGB fans, CableMod kit",
      images: [
        "https://imgur.com/dbbbKuh.png",
        "https://imgur.com/h526UcM.png",
        "https://imgur.com/QaU0L71.png",
        "https://imgur.com/91rLvZB.png",
        "https://imgur.com/ofk1Zfj.png"
      ],
      video: "https://www.youtube.com/embed/mGZ_OBv_KUM"
    }
  ];
  const sampleProductsPeripherals = [
    {
      name: 'Gaming Mouse Pro',
      price: 50,
      description: "High precision gaming mouse with customizable buttons and RGB lighting.",
      images: ["https://via.placeholder.com/300x200.png?text=Gaming+Mouse"],
      video: ""
    }
  ];

  /* Load products from products.json with fallback */
  fetch('products.json')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      if (data.pcs && data.pcs.length > 0) {
        renderProducts(data.pcs, 'pc-grid');
      } else {
        renderProducts(sampleProductsPC, 'pc-grid');
      }
      if (data.peripherals && data.peripherals.length > 0) {
        renderProducts(data.peripherals, 'peripherals-grid');
      } else {
        renderProducts(sampleProductsPeripherals, 'peripherals-grid');
      }
    })
    .catch(err => {
      console.error('Error loading products, using fallback data:', err);
      renderProducts(sampleProductsPC, 'pc-grid');
      renderProducts(sampleProductsPeripherals, 'peripherals-grid');
    });

  /* Render Products Function */
  function renderProducts(products, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.addEventListener('click', () => openModal(product));
      
      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = product.name;
      
      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';
      
      const title = document.createElement('h3');
      title.textContent = product.name;
      
      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = `$${product.price}`;
      
      cardContent.appendChild(title);
      cardContent.appendChild(price);
      
      card.appendChild(img);
      card.appendChild(cardContent);
      
      grid.appendChild(card);
    });
  }

  /* Modal Functionality */
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCarousel = document.querySelector('.modal-carousel');
  const modalVideo = document.querySelector('.modal-video');
  const modalDescription = document.querySelector('.modal-description');

  function openModal(product) {
    modalCarousel.innerHTML = '';
    modalDescription.textContent = product.description;
    if (product.video) {
      modalVideo.style.display = 'block';
      modalVideo.src = product.video;
    } else {
      modalVideo.style.display = 'none';
      modalVideo.src = '';
    }
    product.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = product.name;
      modalCarousel.appendChild(img);
    });
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalCarousel.innerHTML = '';
    modalVideo.src = '';
    modalVideo.style.display = 'none';
    modalDescription.textContent = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });
});
