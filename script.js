// Gift data - Easy to edit and extend
const gifts = [
    {
        id: 1,
        title: "Chá para aguentar a ansiedade",
        description: "Serve pra acalmar o coração, ou pelo menos esquentar a mão enquanto espera o cerimonial.",
        price: 25,
        category: "preparacao",
        image: "cha.png"
    },
    {
        id: 2,
        title: "Torne o doguinho realidade",
        description: "Ele ainda vai ser da família… e já começou a dar despesa.",
        price: 50,
        category: "casa-nova",
        image: "dogo.png"
    },
    {
        id: 3,
        title: "Lenço salva-maquiagem",
        description: "Lágrimas liberadas! Só não vale escorrer rímel até o queixo.",
        price: 75,
        category: "preparacao",
        image: "choro.png"
    },
    {
        id: 4,
        title: "Apoio para comer mais saudável",
        description: "Porque dizer 'vamos pedir pizza hoje?' também é carinho, mas tem limite.",
        price: 100,
        category: "casa-nova",
        image: "nuggets.png"
    },
    {
        id: 5,
        title: "Maracujina para os noivos",
        description: "Basta um gole pra relevar a toalha molhada em cima da cama.",
        price: 125,
        category: "preparacao",
        image: "maracuja.png"
    },
    {
        id: 6,
        title: "Tampão de ouvido anti-ronco",
        description: "Manual de sobrevivência em casamento: item 1.",
        price: 150,
        category: "casa-nova",
        image: "tampao.png"
    },
    {
        id: 7,
        title: "Rolo p/ noivo malcriado",
        description: "Serve pra abrir massa ou corrigir atitudes.",
        price: 175,
        category: "casa-nova",
        image: "rolo.png"
    },
    {
        id: 8,
        title: "Capacete anti-rolo de macarrão",
        description: "Item de proteção homologado pelo ministério da paz conjugal.",
        price: 200,
        category: "casa-nova",
        image: "capacete.png"
    },
    {
        id: 9,
        title: "Conjunto controle democrático",
        description: "Dois controles remotos para evitar brigas na TV.",
        price: 225,
        category: "casa-nova",
        image: "controles.png"
    },
    {
        id: 10,
        title: "Taxa de buquê teleguiado",
        description: "Pequeno suborno social para evitar climão no evento.",
        price: 250,
        category: "preparacao",
        image: "buque.png"
    },
    {
        id: 11,
        title: "Garanta o jantar do 1º mês",
        description: "Plano de sobrevivência alimentar pós-casamento. Sem culpa!",
        price: 275,
        category: "casa-nova",
        image: "lanche.png"
    },
    {
        id: 12,
        title: "Receitas de macarrão instantâneo",
        description: "O primeiro livro de gastronomia do casal raiz.",
        price: 300,
        category: "casa-nova",
        image: "lamem.png"
    },
    {
        id: 13,
        title: "Novos filhos p/ pais de planta",
        description: "Filhos que não choram de madrugada, mas às vezes morrem desidratados.",
        price: 325,
        category: "casa-nova",
        image: "plantas.png"
    },
    {
        id: 14,
        title: "5 meses de streaming",
        description: "Plano premium de maratona com pipoca e discussão sobre qual série ver.",
        price: 350,
        category: "casa-nova",
        image: "streaming.png"
    },
    {
        id: 15,
        title: "Acordar c/ cheirinho de café",
        description: "Porque café na cama é amor. Café passado às 6h da manhã…",
        price: 375,
        category: "casa-nova",
        image: "cafe.png"
    },
    {
        id: 16,
        title: "Passeio p/ observar aves exóticas",
        description: "Inclui a experiência de ver o noivo tentando diferenciar pombo de arara.",
        price: 400,
        category: "lua-de-mel",
        image: "aves.png"
    },
    {
        id: 17,
        title: "Frigobar assaltável",
        description: "Casamento bom é quando você já sabe que vai dividir até o chocolate escondido.",
        price: 425,
        category: "casa-nova",
        image: "frigo.png"
    },
    {
        id: 18,
        title: "1ª compra no mercado",
        description: "Ajuda com a primeira compra de mantimentos para nossa casa.",
        price: 450,
        category: "casa-nova",
        image: "mercado.png"
    },
    {
        id: 19,
        title: "Cota restaurantes de luxo",
        description: "Pra comer como reis antes de voltar pra marmita do dia a dia.",
        price: 475,
        category: "lua-de-mel",
        image: "mc.png"
    },
    {
        id: 20,
        title: "Poltrona p/ esperar a noiva",
        description: "Tempo estimado de espera: 7 dias úteis. Poltrona inclusa.",
        price: 500,
        category: "casa-nova",
        image: "rip.png"
    },
    {
        id: 21,
        title: "Coral de 'Aleluia' p/ noivo",
        description: "Porque todo mundo merece seu momento épico… nem que seja no chuveiro.",
        price: 525,
        category: "preparacao",
        image: "coral.png"
    },
    {
        id: 22,
        title: "Adote os primeiros boletos",
        description: "Porque a vida a dois começa no amor… e continua no débito automático.",
        price: 550,
        category: "casa-nova",
        image: "conta.png"
    },
    {
        id: 23,
        title: "1 ano de barba feita p/ noivo",
        description: "Porque nem todo amor resiste a um cacto facial descontrolado.",
        price: 575,
        category: "preparacao",
        image: "barba.png"
    },
    {
        id: 24,
        title: "1 ano corte de cabelo p/ noiva",
        description: "Casamento passa, cabelo cresce. E não dá pra cortar em casa.",
        price: 600,
        category: "preparacao",
        image: "cabelo.png"
    },
    {
        id: 25,
        title: "Ajuda para pagar o Trump",
        description: "Ajude os noivos a comprar dólar para gastar tudo em bugiganga e voltar da viagem com lembrancinha de geladeira.",
        price: 625,
        category: "lua-de-mel",
        image: "dolar.png"
    },
    {
        id: 26,
        title: "Ajuda para mobiliar a casa",
        description: "Do colchão pro sofá, do sofá pra cama… móveis: todos precisamos.",
        price: 650,
        category: "casa-nova",
        image: "moveis.png"
    },
    {
        id: 27,
        title: "Contribuição hotel 5 estrelas",
        description: "Porque perrengue a dois só se for no acampamento do ano.",
        price: 675,
        category: "lua-de-mel",
        image: "tenda.png"
    },
    {
        id: 28,
        title: "Aposente os noivos",
        description: "Começar a planejar hoje pra poder reclamar do INSS amanhã.",
        price: 700,
        category: "casa-nova",
        image: "aposentadoria.png"
    },
    {
        id: 29,
        title: "Contribuição para a reforma infinita",
        description: "Toda casa precisa de reforma. Toda reforma precisa de casa.",
        price: 725,
        category: "casa-nova",
        image: "reforma.png"
    },
    {
        id: 30,
        title: "Engorde o porquinho de vidro duro",
        description: "Pra quando o 'futuro' chegar e bater na porta pedindo parcelamento.",
        price: "R$ Você decide",
        category: "casa-nova",
        image: "porquinho.png"
    }
];

// Payment link - Easy to change
const PAYMENT_LINK = "https://YOUR-LINK-HERE";

// Wedding date - Easy to change
const WEDDING_DATE = new Date('2025-11-23T00:00:00');

// Global variables
let currentFilter = 'all';
let currentSort = 'lowest';
let filteredGifts = [...gifts];

// DOM elements
const giftsGrid = document.getElementById('gifts-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const daysLeftElement = document.getElementById('days-left');
const visitorCountElement = document.getElementById('visitor-count');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    renderGifts();
    setupEventListeners();
    updateVisitorCount();
    
    // Update countdown every day
    setInterval(updateCountdown, 24 * 60 * 60 * 1000);
});

// Update countdown timer
function updateCountdown() {
    const now = new Date();
    const timeLeft = WEDDING_DATE - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    
    const countdownText = document.getElementById('countdown-text');
    
    if (daysLeft > 365) {
        const years = Math.floor(daysLeft / 365);
        const remainingDays = daysLeft % 365;
        if (years === 1) {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        } else {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        }
    } else if (daysLeft > 30) {
        const months = Math.floor(daysLeft / 30);
        const remainingDays = daysLeft % 30;
        if (months === 1) {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        } else {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        }
    } else if (daysLeft > 7) {
        const weeks = Math.floor(daysLeft / 7);
        if (weeks === 1) {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        } else {
            countdownText.innerHTML = `FALTAM <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
        }
    } else if (daysLeft > 1) {
        countdownText.innerHTML = `FALTAM APENAS <span id="days-left">${daysLeft}</span> DIAS PARA O GRANDE DIA`;
    } else if (daysLeft === 1) {
        countdownText.innerHTML = `AMANHÃ É O GRANDE DIA!`;
        daysLeftElement.textContent = '';
    } else if (daysLeft === 0) {
        countdownText.innerHTML = `HOJE É O GRANDE DIA!`;
        daysLeftElement.textContent = '';
    } else {
        // Wedding has passed
        const daysSince = Math.abs(daysLeft);
        if (daysSince === 1) {
            countdownText.innerHTML = `O GRANDE DIA FOI ONTEM!`;
        } else if (daysSince < 30) {
            countdownText.innerHTML = `O GRANDE DIA FOI HÁ <span id="days-left">${daysSince}</span> DIAS`;
        } else if (daysSince < 365) {
            const months = Math.floor(daysSince / 30);
            countdownText.innerHTML = `O GRANDE DIA FOI HÁ <span id="days-left">${daysSince}</span> DIAS`;
        } else {
            const years = Math.floor(daysSince / 365);
            countdownText.innerHTML = `O GRANDE DIA FOI HÁ <span id="days-left">${daysSince}</span> DIAS`;
        }
    }
    
    // Update the days element if it exists
    if (daysLeftElement && daysLeftElement.textContent !== '') {
        daysLeftElement.textContent = daysLeft > 0 ? daysLeft : Math.abs(daysLeft);
    }
}

// Render gifts based on current filter and sort
function renderGifts() {
    // Apply filter
    if (currentFilter === 'all') {
        filteredGifts = [...gifts];
    } else {
        filteredGifts = gifts.filter(gift => gift.category === currentFilter);
    }
    
    // Apply sort
    filteredGifts.sort((a, b) => {
        // Handle string prices (like "Você decide") - treat them as highest value
        const aPrice = typeof a.price === 'string' ? Infinity : a.price;
        const bPrice = typeof b.price === 'string' ? Infinity : b.price;
        
        if (currentSort === 'lowest') {
            return aPrice - bPrice;
        } else {
            return bPrice - aPrice;
        }
    });
    
    // Clear grid
    giftsGrid.innerHTML = '';
    
    // Render gifts
    filteredGifts.forEach(gift => {
        const giftCard = createGiftCard(gift);
        giftsGrid.appendChild(giftCard);
    });
}

// Create a gift card element
function createGiftCard(gift) {
    const card = document.createElement('div');
    card.className = 'gift-card';
    card.dataset.giftId = gift.id;
    
    // Format price
    let formattedPrice;
    if (typeof gift.price === 'number') {
        formattedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(gift.price);
    } else {
        formattedPrice = gift.price; // Use the string as is
    }
    
    // Check if image is a file (has extension) or emoji
    const isImageFile = gift.image.includes('.') || gift.image.includes('/');
    
    card.innerHTML = `
        <div class="gift-image ${isImageFile ? 'has-image' : ''}">
            ${isImageFile ? 
                `<img src="images/${gift.image}" alt="${gift.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                 <span class="fallback-emoji">🎁</span>` : 
                `<span>${gift.image}</span>`
            }
            <div class="category-badge">${getCategoryName(gift.category)}</div>
        </div>
        <div class="gift-content">
            <h3 class="gift-title">${gift.title}</h3>
            <p class="gift-description">${gift.description}</p>
            <div class="gift-price">${formattedPrice}</div>
            <a href="${PAYMENT_LINK}" class="gift-link" target="_blank" rel="noopener noreferrer">
                Presentear
            </a>
        </div>
    `;
    
    // Add click event listener to open modal (but not on the buy button)
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.gift-link')) {
            openModal(gift);
        }
    });
    
    return card;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'preparacao': 'Preparação para o casamento',
        'lua-de-mel': 'Lua de mel',
        'casa-nova': 'Casa nova'
    };
    return categories[category] || category;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update filter and re-render
            currentFilter = button.dataset.category;
            renderGifts();
        });
    });
    
    // Sort buttons
    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all sort buttons
            sortButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update sort and re-render
            currentSort = button.dataset.sort;
            renderGifts();
        });
    });
    
    // Modal event listeners
    const modal = document.getElementById('gift-modal');
    const modalClose = document.getElementById('modal-close');
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Update visitor count (simulated)
function updateVisitorCount() {
    // Get visitor count from localStorage or start with 48
    let visitorCount = localStorage.getItem('visitorCount') || 48;
    
    // Increment visitor count (simulate new visitor)
    visitorCount = parseInt(visitorCount) + Math.floor(Math.random() * 3) + 1;
    
    // Save to localStorage
    localStorage.setItem('visitorCount', visitorCount);
    
    // Update display
    visitorCountElement.textContent = `${visitorCount} PESSOAS ESTIVERAM AQUI`;
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some interactivity to gift cards
document.addEventListener('click', function(e) {
    if (e.target.closest('.gift-card')) {
        const card = e.target.closest('.gift-card');
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
});

// Modal functions
function openModal(gift) {
    const modal = document.getElementById('gift-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalCategory = document.getElementById('modal-category');
    const modalBuyButton = document.getElementById('modal-buy-button');
    
    // Format price
    let formattedPrice;
    if (typeof gift.price === 'number') {
        formattedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(gift.price);
    } else {
        formattedPrice = gift.price; // Use the string as is
    }
    
    // Check if image is a file (has extension) or emoji
    const isImageFile = gift.image.includes('.') || gift.image.includes('/');
    
    // Update modal content
    modalTitle.textContent = gift.title;
    modalDescription.textContent = gift.description;
    modalPrice.textContent = formattedPrice;
    modalCategory.textContent = getCategoryName(gift.category);
    modalBuyButton.href = PAYMENT_LINK;
    
    // Set image
    if (isImageFile) {
        modalImage.src = `images/${gift.image}`;
        modalImage.alt = gift.title;
        modalImage.style.display = 'block';
    } else {
        // For emoji gifts, create a styled container
        modalImage.style.display = 'none';
        const imageContainer = modalImage.parentElement;
        imageContainer.innerHTML = `
            <div class="modal-emoji-container">
                <span class="modal-emoji">${gift.image}</span>
            </div>
        `;
    }
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('gift-modal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
} 