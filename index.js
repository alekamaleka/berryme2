const catalogBtn = document.getElementById("catalog-btn");
const dropdownContent = document.querySelector(".dropdown-content");

catalogBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 768) { // только на телефонах
        dropdownContent.classList.toggle("show");
    }
});

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

// Показ/скрытие инпута
searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    searchInput.classList.add('show');
    searchInput.focus();
});

// Клик по документу скрывает инпут
document.addEventListener('click', () => {
    if(searchInput.classList.contains('show')){
        searchInput.classList.remove('show');
    }
});

// Клик по инпуту не закрывает его
searchInput.addEventListener('click', (e) => e.stopPropagation());

// Поиск по карточкам
searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const filter = searchInput.value.toLowerCase().trim();
        const allCards = document.querySelectorAll('.qwe-1-content, .qwe-2-content, .cake-card, .flower-card');
        let found = false;

        allCards.forEach(card => {
            const title = card.querySelector('h2, h3'); // берём h2 или h3
            const text = title ? title.innerText.toLowerCase() : '';
            
            if(text.includes(filter)){
                card.style.display = "block";
                if(!found){ 
                    card.scrollIntoView({behavior: "smooth", block: "center"});
                    found = true;
                }
            } else {
                card.style.display = "none";
            }
        });

        // Скрываем инпут после поиска
        searchInput.classList.remove('show');
    }
});