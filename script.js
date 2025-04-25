function searchGoogle() {
    // Отримуємо значення введене користувачем у полі вводу
    const query = document.getElementById('searchInput').value;

    // Перевіряємо, чи введено запит
    if (query) {
        // Перенаправляємо на пошукову сторінку Google з результатами для запиту
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Будь ласка, введіть запит для пошуку...");
    }
}


document.getElementById("mainWord").addEventListener("click", () => {
    document.getElementById("wordLinks").classList.toggle("visible");
  });

  


document.getElementById('mainWord').addEventListener('click', function() {
    const wordLinks = document.getElementById('wordLinks');
    const verticalLine = document.getElementById('verticalLine');

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("searchButton").addEventListener("click", searchGoogle);
    });
    
    function searchGoogle() {
        let query = document.getElementById("searchInput").value;
        if (query) {
            let url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(url, "_blank");
        } else {
            alert("Будь ласка, введіть запит для пошуку!");
        }
    }
    
    // Перевіряємо, чи вже посилання показуються
    if (wordLinks.style.opacity === '0' || wordLinks.style.opacity === '') {
        verticalLine.style.height = '200px';  // Збільшуємо висоту лінії
        wordLinks.style.opacity = 1;
        wordLinks.style.visibility = 'visible';
        wordLinks.classList.add('visible');
        
        // Покажемо посилання з анімацією
        const wordItems = document.querySelectorAll('.word-item');
        wordItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
            }, index * 100); // Часова затримка між появою кожного посилання
        });
    } else {
        verticalLine.style.height = '60px';  // Зменшуємо висоту лінії
        wordLinks.style.opacity = 0;
        wordLinks.style.visibility = 'hidden';
        wordLinks.classList.remove('visible');
        
        // Приховуємо посилання
        const wordItems = document.querySelectorAll('.word-item');
        wordItems.forEach((item) => {
            item.style.opacity = 0;
            item.style.transform = 'translateX(20px)';
        });
    }
});

document.getElementById("mainWord").addEventListener("click", () => {
    document.getElementById("wordLinks").classList.toggle("visible");
  });
  