document.addEventListener('DOMContentLoaded', () => {
  /* Mobile Navigation Toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
  });

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('active'));
  });

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

  /* Updated PRODUCTS DATA SECTION with revised peripheral descriptions */
  const productsData = {
    pcs: [
      {
        name: 'Gaming PC HardLine 6950XT & Ryzen 9 5950X',
        price: 1850,
        description: "--MID-MICHIGAN DELIVERY--\n\n—Beautiful, Shiny HardLine Acrylic Water Cooled Gaming PC - ask abt trade-in!—\n\nBrand-New Coolant—& perfect for streaming/multitasking!\n\nPerforms great, and will run anything with ease! (Smoke-free)\n\nInquire about gaming mice, keyboards, and monitors and with any questions at all! :)\n\nAll of my PCs are rigorously tested and tweaked for maximum performance and reliability. Get a great deal and support a local small business 😁\n\nGod Bless,\n\n—SPECS—\n\n💪GPU: Radeon RX 6950 XT\n\n🧠CPU: AMD Ryzen 9 5950X 16-core processor\n\n🛜Motherboard: X570 Aorus Master (WiFi)\n\n📝RAM: 32GB DDR4 cl-16\n\n💾Storage: 2TB Gen4 M.2 WD_Black NVMe SSD\n\n^^ add 2TB Game HDD = $30 ^^\n\n⚡️PSU: EVGA 850w\n\n🌊Cooling: Corsair XC7 CPU block & D5 pump/reservoir combo - Acrylic Tubing - Metal Fittings - 360mm radiator\n\n💼Case: Lian Li Dynamic EVO RGB\n\n🎁Misc: 6 case fans, vertical GPU mount, Windows 11 home installed, Corsair thermal paste, WiFi booster if needed :)",
        images: [
          "https://imgur.com/HuVhcE3.png",
          "https://imgur.com/xjNcuD8.png",
          "https://imgur.com/7MgeZVF.png",
          "https://imgur.com/h85FSIn.png",
          "https://imgur.com/shY5KxD.png",
          "https://imgur.com/bK2YyWG.png",
          "https://imgur.com/ax4Q69N.png",
          "https://imgur.com/aQx2Xli.png"
        ],
        video: "https://i.imgur.com/o9fgSkw.mp4"
      }
    ],
    peripherals: [
      // Mice
      {
        name: 'Razer Viper Ultimate',
        category: 'mice',
        price: 90,
        description: 'Wireless gaming mouse featuring a 20,000 DPI sensor, ultra-lightweight design (approx. 74g), ambidextrous shape, and up to 70 hours battery life.',
        images: ['https://m.media-amazon.com/images/I/618J0JFnhWL.jpg'],
        video: ''
      },
      {
        name: 'Logitech G602',
        category: 'mice',
        price: 20,
        description: 'Wireless gaming mouse with a 1600 DPI sensor, optimized for extended use with up to 250 hours battery life, and an ambidextrous design.',
        images: ['https://m.media-amazon.com/images/I/51PyuzFECNL.jpg'],
        video: ''
      },
      {
        name: 'Skytech M-1000',
        category: 'mice',
        price: 10,
        description: 'Used gaming mouse featuring an optical sensor with adjustable DPI up to 1600 and an ergonomic design, ideal for entry-level gaming.',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxaT6hSkiYVOKA8Ph2K4W5v9mFL7-0tHTXQ&s'],
        video: ''
      },
      {
        name: 'iBUYPOWER Chimera M7 RGB',
        category: 'mice',
        price: 15,
        description: 'Wired gaming mouse with a high-precision optical sensor (up to 3200 DPI), customizable RGB lighting, and an ergonomic design for competitive performance.',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROz6m1pBGTtr2AYskkCKyxssOQMnUTp02ZQQ&s'],
        video: ''
      },
      {
        name: 'Logitech M705',
        category: 'mice',
        price: 25,
        description: 'Wireless mouse with an optical sensor (up to 1600 DPI) and ultra-long battery life (up to 3 years), designed for comfort and reliability.',
        images: ['https://m.media-amazon.com/images/I/71i8hHdMUlL.jpg'],
        video: ''
      },
      {
        name: 'Onn Camo (Pink)',
        category: 'mice',
        price: 10,
        description: 'Wired gaming mouse featuring a 1200 DPI optical sensor, lightweight construction, and a distinctive pink camo finish for style on a budget.',
        images: ['https://i.ebayimg.com/images/g/C4AAAOSwWXVj5FQe/s-l400.jpg'],
        video: ''
      },
      // Keyboards
      {
        name: 'iBUYPOWER Chimera K7 RGB',
        category: 'keyboards',
        price: 15,
        description: 'Full-size gaming keyboard with anti-ghosting features and dynamic RGB backlighting for enhanced visibility.',
        images: ['https://cdn11.bigcommerce.com/s-v5cphvs3s0/products/143620/images/211452/chimera-km7-20240412091107-original__01039.1731949331.386.513.jpg?c=1'],
        video: ''
      },
      {
        name: 'Ajazz Silver Speed Switch',
        category: 'keyboards',
        price: 40,
        description: 'Mechanical gaming keyboard featuring silver speed switches for rapid actuation, full n-key rollover, and a sleek design.',
        images: ['https://s.alicdn.com/@sc04/kf/Hacdcdb241c68467ebb5a51db6d70c2f5E.jpg_720x720q50.jpg'],
        video: ''
      },
      {
        name: 'Logitech YU0039',
        category: 'keyboards',
        price: 50,
        description: 'Compact keyboard with low-profile keys and a spill-resistant design, optimized for efficient typing and everyday use.',
        images: ['https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-gallery-1.png?v=1'],
        video: ''
      },
      {
        name: 'MSI GK300',
        category: 'keyboards',
        price: 20,
        description: 'Budget-friendly gaming keyboard with membrane keys, anti-ghosting functionality, and a minimalist, spill-resistant build.',
        images: ['https://storage-asset.msi.com/global/picture/image/feature/Gaming-Gear/keyboards/gk300/msi-gk300-keyboard-kv-mobile.png'],
        video: ''
      },
      {
        name: 'Redragon K585',
        category: 'keyboards',
        price: 20,
        description: 'Mechanical gaming keyboard featuring tactile switches, customizable RGB backlighting, and full anti-ghosting support.',
        images: ['https://i5.walmartimages.com/asr/a20115c3-639a-4d55-8f37-fba6917207f1.3d54b20e3e3ea13d6a7742d6b9dcf338.jpeg'],
        video: ''
      },
      // Monitors
      {
        name: 'XF273U X',
        category: 'monitors',
        price: 200,
        description: '27-inch IPS gaming monitor with 1920x1080 resolution, 240Hz refresh rate, and 1ms response time for smooth, immersive gameplay.',
        images: ['https://m.media-amazon.com/images/I/61oLUBtT8sL.jpg'],
        video: ''
      },
      {
        name: 'LG ULTRAGEAR+ 27GR95QE-B',
        category: 'monitors',
        price: 475,
        description: '27-inch OLED gaming monitor offering 2560x1440 resolution, 240Hz refresh rate, and 1ms response time, delivering excellent color accuracy and performance.',
        images: ['https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/7c0ede6c-d409-45fe-a79f-7145c930684e/Monitor_27GS95QE-B_gallery_04_5804x4354'],
        video: ''
      },
      {
        name: 'Acer XB273 GXBMIIPRZX',
        category: 'monitors',
        price: 175,
        description: '27-inch IPS gaming monitor featuring 2560x1440 resolution, 144Hz refresh rate, and 1ms response time for a balanced gaming experience.',
        images: ['https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7689020/7689020_o01_092221/7689020'],
        video: ''
      },
      {
        name: 'DELL AW2518HF',
        category: 'monitors',
        price: 175,
        description: '24.5-inch TN gaming monitor with 1920x1080 resolution, 240Hz refresh rate, and 1ms response time, optimized for competitive gaming.',
        images: ['https://m.media-amazon.com/images/I/81H2MDBrbPL.jpg'],
        video: ''
      }
    ]
  };

  // Initial render for both sections
  renderProducts(productsData.pcs, 'pc-grid');
  renderProducts(productsData.peripherals, 'peripherals-grid');

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
      img.loading = "lazy";

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

  // Filtering logic for peripherals
  const peripheralsFilters = document.querySelectorAll('.peripherals-filters .filter-btn');
  peripheralsFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      peripheralsFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let filteredProducts;
      if (filter === 'all') {
        filteredProducts = productsData.peripherals;
      } else {
        filteredProducts = productsData.peripherals.filter(product => product.category === filter);
      }
      renderProducts(filteredProducts, 'peripherals-grid');
    });
  });

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCarousel = document.querySelector('.modal-carousel');
  const modalVideo = document.querySelector('.modal-video');
  const modalDescription = document.querySelector('.modal-description');

  function openModal(product) {
    modalCarousel.innerHTML = '';
    modalDescription.textContent = product.description;
    
    // Append price and a "Contact Us" button after the description
    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';
    
    const priceEl = document.createElement('p');
    priceEl.className = 'price';
    priceEl.textContent = `Price: $${product.price}`;
    modalInfo.appendChild(priceEl);
    
    const contactBtn = document.createElement('button');
    contactBtn.className = 'btn contact-btn';
    contactBtn.textContent = 'Contact Us';
    contactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(); // Close the modal first
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
    modalInfo.appendChild(contactBtn);
    
    // Append modalInfo to the same parent as modalDescription
    modalDescription.parentElement.appendChild(modalInfo);

    if (product.video) {
      modalVideo.style.display = 'block';
      modalVideo.src = product.video;
      modalVideo.load();
    } else {
      modalVideo.style.display = 'none';
      modalVideo.src = '';
    }
    product.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = product.name;
      img.loading = "lazy";
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
    // Remove modalInfo if it exists
    const modalInfo = document.querySelector('.modal-info');
    if (modalInfo) modalInfo.remove();
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

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
