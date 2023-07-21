let data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];

const generateSummary = () => {
  var summaryBreakdown = document.getElementById("summary-breakdown");
  while(summaryBreakdown.firstChild && summaryBreakdown.removeChild(summaryBreakdown.firstChild));

  data.forEach( category => {
    let categoryName = category.category;
    let categoryNameLower = categoryName.toLowerCase();
    let card = document.createElement('div');
    card.setAttribute('class',`summary-card ${categoryNameLower}`);

    let categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class',`${categoryNameLower}-font category`)

    let image = document.createElement('img');
    image.setAttribute('src',category.icon);
    image.setAttribute('alt',categoryNameLower);

    categoryDiv.appendChild(image);

    let span = document.createElement('span');
    span.setAttribute('class','category-name');
    span.textContent = categoryName;

    categoryDiv.appendChild(span);

    card.appendChild(categoryDiv);

    let scoreDiv = document.createElement('div');

    let score = document.createElement('p');
    scoreDiv.textContent = `${category.score} / `;

    span = document.createElement('span');
    span.setAttribute('class','light');
    span.textContent = '100';

    scoreDiv.appendChild(span);

    card.appendChild(scoreDiv);

    summaryBreakdown.appendChild(card);


  })
}

generateSummary();