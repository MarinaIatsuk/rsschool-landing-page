(function () {
  'use strict';

  const products = {
    coffee: [
      {
        id: 'coffee-1',
        name: 'Irish coffee',
        description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        image: 'assets/images/menu/cards/coffee-1.jpg',
        basePrice: 7.0,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-2',
        name: 'Kahlua coffee',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        image: 'assets/images/menu/cards/coffee-2.jpg',
        basePrice: 7.0,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-3',
        name: 'Honey raf',
        description: 'Espresso with frothed milk, cream and aromatic honey',
        image: 'assets/images/menu/cards/coffee-3.jpg',
        basePrice: 5.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-4',
        name: 'Ice cappuccino',
        description: 'Cappuccino with soft thick foam in summer version with ice',
        image: 'assets/images/menu/cards/coffee-4.jpg',
        basePrice: 5.0,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-5',
        name: 'Espresso',
        description: 'Classic black coffee',
        image: 'assets/images/menu/cards/coffee-5.jpg',
        basePrice: 4.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-6',
        name: 'Latte',
        description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
        image: 'assets/images/menu/cards/coffee-6.jpg',
        basePrice: 5.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-7',
        name: 'Latte macchiato',
        description: 'Espresso with frothed milk and chocolate',
        image: 'assets/images/menu/cards/coffee-7.jpg',
        basePrice: 5.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'coffee-8',
        name: 'Coffee with cognac',
        description: 'Fragrant black coffee with cognac and whipped cream',
        image: 'assets/images/menu/cards/coffee-8.jpg',
        basePrice: 6.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Cinnamon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      }
    ],
    tea: [
      {
        id: 'tea-1',
        name: 'Black tea',
        description: 'Fragrant classic black tea with a rich full taste',
        image: 'assets/images/menu/cards/tea-1.jpg',
        basePrice: 3.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Lemon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'tea-2',
        name: 'Green tea',
        description: 'Delicate green tea with light floral notes',
        image: 'assets/images/menu/cards/tea-2.jpg',
        basePrice: 3.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Lemon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'tea-3',
        name: 'Matcha latte',
        description: 'Ceremonial matcha whisked with steamed milk',
        image: 'assets/images/menu/cards/tea-3.jpg',
        basePrice: 5.0,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Lemon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      },
      {
        id: 'tea-4',
        name: 'Chai latte',
        description: 'Spiced black tea with milk and a touch of honey',
        image: 'assets/images/menu/cards/tea-4.jpg',
        basePrice: 4.5,
        sizes: [
          { label: 'S (200ml)', price: 0 },
          { label: 'M (300ml)', price: 0.5 },
          { label: 'L (400ml)', price: 1.0 }
        ],
        additives: [
          { label: 'Sugar', price: 0.5 },
          { label: 'Lemon', price: 0.75 },
          { label: 'Syrup', price: 1.0 }
        ]
      }
    ],
    dessert: [
      {
        id: 'dessert-1',
        name: 'Cheesecake',
        description: 'Creamy vanilla cheesecake with berry sauce',
        image: 'assets/images/menu/cards/dessert-1.jpg',
        basePrice: 6.0,
        sizes: [
          { label: 'S (50g)', price: 0 },
          { label: 'M (100g)', price: 1.0 },
          { label: 'L (200g)', price: 2.0 }
        ],
        additives: [
          { label: 'Berries', price: 1.0 },
          { label: 'Nuts', price: 1.5 },
          { label: 'Jam', price: 0.75 }
        ]
      },
      {
        id: 'dessert-2',
        name: 'Chocolate brownie',
        description: 'Warm brownie with dark chocolate chunks',
        image: 'assets/images/menu/cards/dessert-2.jpg',
        basePrice: 5.5,
        sizes: [
          { label: 'S (50g)', price: 0 },
          { label: 'M (100g)', price: 1.0 },
          { label: 'L (200g)', price: 2.0 }
        ],
        additives: [
          { label: 'Berries', price: 1.0 },
          { label: 'Nuts', price: 1.5 },
          { label: 'Jam', price: 0.75 }
        ]
      },
      {
        id: 'dessert-3',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with mascarpone and coffee',
        image: 'assets/images/menu/cards/dessert-3.jpg',
        basePrice: 6.5,
        sizes: [
          { label: 'S (50g)', price: 0 },
          { label: 'M (100g)', price: 1.0 },
          { label: 'L (200g)', price: 2.0 }
        ],
        additives: [
          { label: 'Berries', price: 1.0 },
          { label: 'Nuts', price: 1.5 },
          { label: 'Jam', price: 0.75 }
        ]
      },
      {
        id: 'dessert-4',
        name: 'Croissant',
        description: 'Buttery croissant with a flaky crust',
        image: 'assets/images/menu/cards/dessert-4.jpg',
        basePrice: 4.0,
        sizes: [
          { label: 'S (50g)', price: 0 },
          { label: 'M (100g)', price: 1.0 },
          { label: 'L (200g)', price: 2.0 }
        ],
        additives: [
          { label: 'Berries', price: 1.0 },
          { label: 'Nuts', price: 1.5 },
          { label: 'Jam', price: 0.75 }
        ]
      }
    ]
  };

  let currentProduct = null;
  let selectedSize = 0;
  let selectedAdditives = [];

  const modal = document.getElementById('product-modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalClose = document.querySelector('.modal__close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalSizes = document.getElementById('modal-sizes');
  const modalAdditives = document.getElementById('modal-additives');
  const modalPrice = document.getElementById('modal-price');

  function parseSizeLabel(label) {
    const match = /^([SML])\s*\((\d+)\s*(ml|g)\)$/i.exec(label);
    if (match) {
      return {
        badge: match[1].toUpperCase(),
        text: `${match[2]} ${match[3]}`
      };
    }
    return { badge: label.charAt(0).toUpperCase(), text: label };
  }

  function createOptionButton(className, badgeText, labelText, index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;

    const badge = document.createElement('span');
    badge.className = 'modal__badge';
    badge.textContent = badgeText;

    const label = document.createElement('span');
    label.className = 'modal__option-label';
    label.textContent = labelText;

    button.appendChild(badge);
    button.appendChild(label);
    button.dataset.index = String(index);
    return button;
  }

  function openModal(productId) {
    const allProducts = products.coffee.concat(products.tea, products.dessert);
    currentProduct = allProducts.find((product) => product.id === productId);
    if (!currentProduct) return;

    selectedSize = 0;
    selectedAdditives = [];

    modalImage.src = currentProduct.image;
    modalImage.alt = currentProduct.name;
    modalTitle.textContent = currentProduct.name;
    modalDescription.textContent = currentProduct.description;

    modalSizes.textContent = '';
    currentProduct.sizes.forEach((size, index) => {
      const parsed = parseSizeLabel(size.label);
      const button = createOptionButton(
        `modal__size-btn${index === 0 ? ' is-selected' : ''}`,
        parsed.badge,
        parsed.text,
        index
      );
      button.addEventListener('click', () => selectSize(index));
      modalSizes.appendChild(button);
    });

    modalAdditives.textContent = '';
    currentProduct.additives.forEach((additive, index) => {
      const button = createOptionButton(
        'modal__additive-btn',
        String(index + 1),
        additive.label,
        index
      );
      button.addEventListener('click', () => toggleAdditive(index));
      modalAdditives.appendChild(button);
    });

    updatePrice();
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    currentProduct = null;
    selectedAdditives = [];
  }

  function selectSize(index) {
    selectedSize = index;
    modalSizes.querySelectorAll('.modal__size-btn').forEach((button, i) => {
      button.classList.toggle('is-selected', i === index);
    });
    updatePrice();
  }

  function toggleAdditive(index) {
    const position = selectedAdditives.indexOf(index);
    if (position > -1) {
      selectedAdditives.splice(position, 1);
    } else {
      selectedAdditives.push(index);
    }

    modalAdditives.querySelectorAll('.modal__additive-btn').forEach((button, i) => {
      button.classList.toggle('is-selected', selectedAdditives.indexOf(i) > -1);
    });
    updatePrice();
  }

  function updatePrice() {
    if (!currentProduct) return;

    let total = currentProduct.basePrice;
    total += currentProduct.sizes[selectedSize].price;
    selectedAdditives.forEach((index) => {
      total += currentProduct.additives[index].price;
    });

    modalPrice.textContent = `$${total.toFixed(2)}`;
  }

  function attachProductClickHandlers() {
    document.querySelectorAll('.catalog-card').forEach((card) => {
      card.addEventListener('click', () => {
        const listElement = card.closest('ul[id^="catalog-"]');
        if (!listElement) return;

        const category = listElement.dataset.category;
        const itemIndex = Array.prototype.indexOf.call(
          listElement.querySelectorAll('.catalog-card'),
          card
        );

        if (itemIndex === -1) return;

        const categoryProducts = products[category] || [];
        const product = categoryProducts[itemIndex];
        if (product) openModal(product.id);
      });
    });
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  attachProductClickHandlers();
})();
