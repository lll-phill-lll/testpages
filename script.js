document.addEventListener('DOMContentLoaded', function () {
    const achievementsContainer = document.getElementById('achievementsContainer');

    // Загружаем данные из файла achievements.json
    fetch('achievements.json')
        .then(response => response.json())
        .then(data => {
            // Отображаем достижения из файла
            data.forEach(achievementData => {
                displayAchievement(achievementData);
            });
        });

    // Функция для отображения достижения
    function displayAchievement(achievementData) {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement';

        const imageElement = document.createElement('img');
        imageElement.src = achievementData.imageUrl;
        imageElement.alt = achievementData.personName;

        const textElement = document.createElement('p');
        textElement.innerText = achievementData.achievement;

        const personElement = document.createElement('p');
        personElement.innerText = achievementData.personName;

        achievementElement.appendChild(imageElement);
        achievementElement.appendChild(textElement);
        achievementElement.appendChild(personElement);

        achievementsContainer.appendChild(achievementElement);
    }
});
