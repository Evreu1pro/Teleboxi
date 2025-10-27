document.addEventListener('DOMContentLoaded', () => {

    // Находим все карточки, которые нужно анимировать
    const featureCards = document.querySelectorAll('.feature-card');

    // Настройки для IntersectionObserver
    // threshold: 0.1 означает, что анимация сработает,
    // когда 10% карточки появится на экране.
    const observerOptions = {
        root: null, // Следим относительно всего экрана
        rootMargin: '0px',
        threshold: 0.1
    };

    // Создаем "наблюдателя"
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если карточка появилась на экране
            if (entry.isIntersecting) {
                // Добавляем ей класс "is-visible", который запускает CSS-анимацию
                entry.target.classList.add('is-visible');
                
                // Перестаем следить за этой карточкой, чтобы анимация не повторялась
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // "Прикрепляем" наблюдателя к каждой карточке
    featureCards.forEach(card => {
        observer.observe(card);
    });

});