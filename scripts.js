// Helper function to determine the appropriate email link.
// Width defaults to the current window width when running in the browser.
function getEmailHref(width = (typeof window !== 'undefined' ? window.innerWidth : 0)) {
  return width <= 768
    ? 'mailto:brandonwilson0279737@gmail.com'
    : 'https://mail.google.com/mail/?view=cm&fs=1&to=brandonwilson0279737@gmail.com';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getEmailHref };
}

if (typeof document !== 'undefined') {
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

  /* Updated PRODUCTS DATA SECTION with revised peripheral and PC details */
 const productsData = {
  pcs: [
    {
      name: 'Gaming PC HardLine 6950XT & Ryzen 9 5950X',
      price: 1650,
      description: `--MID-MICHIGAN DELIVERY--

—Beautiful, Shiny HardLine Acrylic Water Cooled Gaming PC - ask abt trade-in!—

Brand-New Coolant—& perfect for streaming/multitasking!

Performs great, and will run anything with ease! (Smoke-free)

Inquire about gaming mice, keyboards, and monitors—ask any questions at all! :)

All of my PCs are rigorously tested and tweaked for maximum performance and reliability. Get a great deal and support a local small business 😁

God Bless,

—SPECS—
💪GPU: Radeon RX 6950 XT
🧠CPU: AMD Ryzen 9 5950X 16-core processor
🛜Motherboard: X570 Aorus Master (WiFi)
📝RAM: 32GB DDR4 cl-16
💾Storage: 2TB Gen4 M.2 WD_Black NVMe SSD
^^ add 2TB Game HDD = $30 ^^
⚡️PSU: EVGA 850w
🌊Cooling: Corsair XC7 CPU block & D5 pump/reservoir combo - Acrylic Tubing - Metal Fittings - 360mm radiator
💼Case: Lian Li Dynamic EVO RGB
🎁Misc: 6 case fans, vertical GPU mount, Windows 11 home installed, Corsair thermal paste, WiFi booster if needed :)`,
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
    },
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
        name: 'Razer DeathAdder Essential',
        category: 'mice',
        price: 10,
        description: 'Essential gaming mouse with 6,400 DPI optical sensor',
        images: ['https://assets3.razerzone.com/9NAIe5Ijdo7WnYAnQXeNpwHmWK4=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fha9%2Fhe6%2F9234225496094%2Fdeathadder-essential-2021-black-1500x1000-3.jpg'],
        video: ''
      },
      {
        name: 'Logitech G903 Lightspeed Mouse',
        category: 'mice',
        price: 90,
        description: 'High-performance wireless gaming mouse with advanced sensor and customizable RGB lighting, designed for competitive gaming.',
        images: ['https://i.rtings.com/assets/products/k0yzRxSz/logitech-g903-lightspeed/design-large.jpg?format=auto'],
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
        name: 'Glorious GMMK White Ice Edition - Compact',
        category: 'keyboards',
        price: 40,
        description: 'The Glorious GMMK is a fully modular mechanical gaming keyboard that comes pre-installed with Gateron Brown switches and a complete toolkit (including key and switch removers, extra caps, and stickers), supports hot-swapping for nearly any Cherry MX or Kailh switch, offers fully customizable RGB lighting and macros via optional software, and provides fast, precise performance for both serious gaming and everyday typing.',
        images: ['https://m.media-amazon.com/images/I/61VhxW-reiS._AC_SX466_.jpg'],
        video: ''
      },
      {
        name: 'HyperX Alloy Core RGB - Gaming Keyboard',
        category: 'keyboards',
        price: 20,
        description: 'RGB Backlighting. Quiet, responsive keys.',
        images: ['https://hyperx.com/cdn/shop/files/hyperx_alloy_core_rgb_us_1_main_720x.jpg?v=1688318411.jpg'],
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
        name: 'YAWYORE 87-Key Mechanical Keyboard',
        category: 'keyboards',
        price: 20,
        description: '87-Key Mechanical Keyboard with Dazzling RGB Backlight, Compatible with Windows and Mac Computers. Perfect for Gaming (Black/Purple)',
        images: ['https://m.media-amazon.com/images/I/71TvxV18d6L.jpg'],
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
      {
        name: 'Redragon Ashe Pro K626 RGB Pro',
        category: 'keyboards',
        price: 20,
        description: 'The Redragon Ashe Pro K626 RGB Pro is a compact 78-key mechanical keyboard featuring tactile blue switches for a balanced typing experience. It comes with hot-swappable keys, durable double-shot keycaps, and a sleek metal panel design for enhanced durability and style. Enjoy full n-key rollover and a detachable Type-C wired connection, making it ideal for both gaming and professional use.',
        images: ['https://microless.com/cdn/products/ccc40ec9d6dbafb30c97c888ae8e63dd-hi.jpg'],
        video: ''
      },
      // Monitors
      {
        name: 'ACER 27" 240Hz 1440p',
        category: 'monitors',
        price: 200,
        description: '27-inch IPS gaming monitor with 1920x1440p resolution, 240Hz refresh rate, and 1ms response time for smooth, immersive gameplay.',
        images: ['https://m.media-amazon.com/images/I/61oLUBtT8sL.jpg'],
        video: ''
      },
      {
        name: 'LG 27" 240Hz 1440p OLED',
        category: 'monitors',
        price: 475,
        description: '27" UltraGear™ OLED Gaming Monitor QHD with 240Hz Refresh Rate 0.03ms Response Time',
        images: ['https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/7c0ede6c-d409-45fe-a79f-7145c930684e/Monitor_27GS95QE-B_gallery_04_5804x4354'],
        video: ''
      },
      {
        name: 'Samsung 27" 72Hz 1080p',
        category: 'monitors',
        price: 100,
        description: 'Immerse yourself in rich, panoramic visuals on the 27" Full HD Samsung C27F396FHU Curved Monitor, featuring AMD FreeSync for smooth gameplay, Eye Saver Mode for comfortable viewing, and a sleek black design that complements any setup.',
        images: ['https://m.media-amazon.com/images/I/61baA6enRAL._AC_SX466_.jpg'],
        video: ''
      },
      {
        name: 'AW 25" 240Hz 1080p',
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
    
    // Append price and contact buttons
    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';
    
    const priceEl = document.createElement('p');
    priceEl.className = 'price';
    priceEl.textContent = `Price: $${product.price}`;
    modalInfo.appendChild(priceEl);
    
    const callBtn = document.createElement('a');
    callBtn.className = 'btn contact-btn';
    callBtn.textContent = 'Call Now';
    callBtn.href = 'tel:8104413020';
    callBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
    modalInfo.appendChild(callBtn);
    
    const emailBtn = document.createElement('a');
    emailBtn.className = 'btn contact-btn';
    emailBtn.textContent = 'Email Us';
    emailBtn.href = getEmailHref();
    emailBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setTimeout(closeModal, 200);
    });
    modalInfo.appendChild(emailBtn);
    
    modalDescription.parentElement.appendChild(modalInfo);

    // Video logic: if the video field starts with an embed code, insert it; otherwise, use the video element.
    if (product.video && product.video.trim().startsWith('<')) {
      modalVideo.style.display = 'none';
      let embedContainer = document.createElement('div');
      embedContainer.className = 'modal-video-embed';
      embedContainer.innerHTML = product.video;
      modalCarousel.appendChild(embedContainer);
    } else if (product.video) {
      modalVideo.style.display = 'block';
      modalVideo.src = product.video;
      modalVideo.load();
    } else {
      modalVideo.style.display = 'none';
      modalVideo.src = '';
    }
    
    // Append all images to the modal carousel
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
    const modalInfo = document.querySelector('.modal-info');
    if (modalInfo) modalInfo.remove();
    const embedContainer = document.querySelector('.modal-video-embed');
    if (embedContainer) embedContainer.remove();
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

  // Update static email links
  document.querySelectorAll('.email-link').forEach(link => {
    link.href = getEmailHref();
  });

  window.addEventListener('resize', () => {
    document.querySelectorAll('.email-link').forEach(link => {
      link.href = getEmailHref();
    });
  });
});
}
