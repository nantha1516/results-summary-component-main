import data from './data.json' assert { type: 'json' };

let categoriesHtml = '';

data.forEach((category) => {
  categoriesHtml += `
    <div class="category">
        <div class="category__name">
            <img src="${category.icon}"/>
            <p>${category.category}</p>
        </div>
        <p class="category__score">
        ${category.score} <span> / 100</span>
        </p>
    </div>
    `;
});

document.querySelector('.categories').innerHTML = categoriesHtml;