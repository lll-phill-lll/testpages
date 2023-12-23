document.addEventListener('DOMContentLoaded', function () {
    const achievementsContainer = document.getElementById('achievementsContainer');
    const addAchievementBtn = document.getElementById('addAchievementBtn');

    addAchievementBtn.addEventListener('click', function () {
        const achievement = prompt('Введите текст достижения:');
        const personName = prompt('Введите имя человека:');
        const imageUrl = prompt('Введите URL круглой картинки:');

        if (achievement && personName && imageUrl) {
            const achievementElement = document.createElement('div');
            achievementElement.className = 'achievement';

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = personName;

            const textElement = document.createElement('p');
            textElement.innerText = achievement;

            const personElement = document.createElement('p');
            personElement.innerText = personName;

            achievementElement.appendChild(imageElement);
            achievementElement.appendChild(textElement);
            achievementElement.appendChild(personElement);

            achievementsContainer.appendChild(achievementElement);
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});
