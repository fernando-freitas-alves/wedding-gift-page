// Gift data - Easy to edit and extend
const gifts = [
    {
        id: 1,
        title: "Chá para aguentar a ansiedade",
        description: "Uma seleção especial de chás para ajudar a relaxar durante os preparativos do casamento",
        price: 381.80,
        category: "cha-casa-nova",
        image: "cha.png"
    },
    {
        id: 2,
        title: "Torne o doguinha realidade",
        description: "Ajude-nos a realizar o sonho de ter nosso primeiro pet juntos",
        price: 181.80,
        category: "casa",
        image: "dogo.png"
    },
    {
        id: 3,
        title: "Lenço salva maquiagem",
        description: "Para aqueles momentos emocionais que não podem estragar a make",
        price: 377.82,
        category: "cha-casa-nova",
        image: "choro.png"
    },
    {
        id: 4,
        title: "Apoio para comer mais saudável",
        description: "Utensílios de cozinha para incentivar uma alimentação mais equilibrada",
        price: 103.09,
        category: "casa",
        image: "ovos.png"
    },
    {
        id: 5,
        title: "Maracujina para os noivos",
        description: "Um estoque de maracujá para os momentos de estresse",
        price: 128.87,
        category: "cha-casa-nova",
        image: "maracuja.png"
    },
    {
        id: 6,
        title: "Tampão de ouvido anti ronco",
        description: "Para garantir uma boa noite de sono para ambos",
        price: 154.64,
        category: "casa",
        image: "tampao.png"
    },
    {
        id: 7,
        title: "Rolo p/ noivo malcriado",
        description: "Um rolo de macarrão para manter a ordem na cozinha",
        price: 180.41,
        category: "casa",
        image: "rolo.png"
    },
    {
        id: 8,
        title: "Capacete anti-rolo de macarrão",
        description: "Proteção essencial para o noivo na cozinha",
        price: 206.19,
        category: "casa",
        image: "capacete.png"
    },
    {
        id: 9,
        title: "Conjunto controle democrático",
        description: "Dois controles remotos para evitar brigas na TV",
        price: 231.06,
        category: "casa",
        image: "controles.png"
    },
    {
        id: 10,
        title: "Taxa de buquê teleguiado",
        description: "Para garantir que o buquê chegue nas mãos certas",
        price: 297.73,
        category: "experiencias",
        image: "buque.png"
    },
    {
        id: 11,
        title: "Garanta o jantar do 1º mês",
        description: "Ajuda com as despesas de alimentação do primeiro mês de casados",
        price: 281.80,
        category: "casa",
        image: "lanche.png"
    },
    {
        id: 12,
        title: "Receitas de macarrão instantâneo",
        description: "Um livro de receitas para os dias preguiçosos",
        price: 209.20,
        category: "casa",
        image: "lamem.png"
    },
    {
        id: 13,
        title: "Novos filhos p/ pais de planta",
        description: "Plantas para começar nossa família verde",
        price: 85.06,
        category: "casa",
        image: "plantas.png"
    },
    {
        id: 14,
        title: "5 meses de streaming",
        description: "Para maratonar séries juntos nos fins de semana",
        price: 360.82,
        category: "experiencias",
        image: "streaming.png"
    },
    {
        id: 15,
        title: "Acordar c' cheirinho de café",
        description: "Uma máquina de café para começar os dias com energia",
        price: 388.60,
        category: "casa",
        image: "café.png"
    },
    {
        id: 16,
        title: "Passeio p/ observar aves exóticas",
        description: "Uma experiência única para observarmos pássaros juntos",
        price: 412.87,
        category: "experiencias",
        image: "aves.png"
    },
    {
        id: 17,
        title: "Frigobar assaltável",
        description: "Um frigobar cheio de guloseimas para os ataques de fome",
        price: 438.14,
        category: "casa",
        image: "frigo.png"
    },
    {
        id: 18,
        title: "1ª compra no mercado",
        description: "Ajuda com a primeira compra de mantimentos para nossa casa",
        price: 463.92,
        category: "casa",
        image: "mercado.png"
    },
    {
        id: 19,
        title: "Cota restaurantes de luxo",
        description: "Para celebrar momentos especiais em restaurantes finos",
        price: 489.69,
        category: "experiencias",
        image: "mc.png"
    },
    {
        id: 20,
        title: "Poltrona p/ esperar a noiva",
        description: "Uma poltrona confortável para os momentos de espera",
        price: 515.46,
        category: "casa",
        image: "tenda.png"
    },
    {
        id: 21,
        title: "Coral de 'Aleluia' p/ noivos",
        description: "Para celebrar nossa união com música celestial",
        price: 541.24,
        category: "experiencias",
        image: "coral.png"
    },
    {
        id: 22,
        title: "Adote os primeiros boletos",
        description: "Ajuda com as primeiras contas da casa nova",
        price: 567.01,
        category: "casa",
        image: "conta.png"
    },
    {
        id: 23,
        title: "1 ano de barba feita p/ noivo",
        description: "Para manter o noivo sempre bem apresentável",
        price: 592.78,
        category: "cha-casa-nova",
        image: "barba.png"
    },
    {
        id: 24,
        title: "1 ano norte de cabelo p/ noiva",
        description: "Para manter a noiva sempre linda e arrumada",
        price: 618.55,
        category: "cha-casa-nova",
        image: "cabelo.png"
    },
    {
        id: 25,
        title: "Ajuda para pagar o Trump",
        description: "Contribuição para as despesas do casamento",
        price: 644.33,
        category: "experiencias",
        image: "tax.png"
    },
    {
        id: 26,
        title: "Ajuda para mobiliar a casa",
        description: "Contribuição para comprar móveis para nossa casa nova",
        price: 670.10,
        category: "casa",
        image: "moveis.png"
    },
    {
        id: 27,
        title: "Contribuição hotel 5 estrelas",
        description: "Para nossa lua de mel em um hotel de luxo",
        price: 695.88,
        category: "experiencias",
        image: "spa.png"
    },
    {
        id: 28,
        title: "Aposente os noivos",
        description: "Contribuição para nossa aposentadoria futura",
        price: 721.65,
        category: "experiencias",
        image: "aposentadoria.png"
    },
    {
        id: 29,
        title: "Engorde a porquinha de vidro duro",
        description: "Contribuição para nossa reserva de emergência",
        price: 747.42,
        category: "casa",
        image: "porquinho.png"
    },
    {
        id: 30,
        title: "Contribuição para a reforma infinita",
        description: "Para as futuras reformas da casa que sempre aparecem",
        price: 773.20,
        category: "casa",
        image: "reforma.png"
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
    
    if (daysLeft > 0) {
        daysLeftElement.textContent = daysLeft;
    } else {
        daysLeftElement.textContent = '0';
        document.getElementById('countdown-text').textContent = 'HOJE É O GRANDE DIA!';
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
        if (currentSort === 'lowest') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
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
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(gift.price);
    
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
                Comprar Presente
            </a>
        </div>
    `;
    
    return card;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'cha-casa-nova': 'Chá de Casa Nova',
        'casa': 'Casa',
        'experiencias': 'Experiências'
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