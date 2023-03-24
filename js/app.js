const performer = document.getElementById('singer');
const performerContainer = document.createElement('div');
performerContainer.id = 'performer';
performer.appendChild(performerContainer);
const featureTitle = document.createElement('h3');
featureTitle.innerHTML = 'FEATURED PERFORMER';
featureTitle.classList = 'featureTitle';
performerContainer.appendChild(featureTitle);

const mainContainer = document.createElement('div');
mainContainer.id = 'main';
performerContainer.insertAdjacentElement('afterend', mainContainer);

const singer = [
  {
    id: 1,
    name: 'Justin Bieber',
    occupation: 'Singer, songwriter',
    description:
      'Justin Drew Bieber is a Canadian singer. Bieber is recognized for his genre-melding musicianship and global influence in modern-day popular music.',
    image: './Assets/Justin Beiber.png',
  },
  {
    id: 2,
    name: 'Adam levine',
    occupation: 'Singer, songwriter, actor',
    description:
      'Adam Levine is an American singer and songwriter. He serves as the lead vocalist and rhythm guitarist of the pop rock band Maroon 5.',
    image: './Assets/Adam Levine.png',
  },
  {
    id: 3,
    name: 'Enrique Iglesias',
    occupation: 'Singer, songwriter, record producer, composer, actor',
    description:
      'Enrique Miguel Iglesias Preysler is a Spanish singer and songwriter. He started his recording career in the mid-1990s on the Mexican indie label Fonovisa.',
    image: './Assets/Enrique Iglesias.png',
  },
  {
    id: 4,
    name: 'Christopher Comstock',
    occupation: 'DJRecord, producerInternet, personality',
    description:
      'Christopher Comstock, known professionally as Marshmello, is an American electronic music producer and DJ. His songs "Silence", "Wolves", "Friends", "Happier".',
    image: './Assets/Christopher Comstock.png',
  },
  {
    id: 5,
    name: 'Eminem',
    occupation: 'Rappersinger, songwriterrecord',
    description:
      'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer.',
    image: './Assets/Eminem.png',
  },
  {
    id: 6,
    name: 'Billie Eilish',
    occupation: 'Singer, songwriter',
    description:
      "Billie Eilish Pirate Baird O'Connell is an American singer-songwriter. She first gained public attention in 2015.",
    image: './Assets/Billie Eilish.png',
  },
];

const htmlStructure = (id, name, occupation, description, image) => ` 
<div class="singer-container" id="singer-${id}">
    <div class="singer-image">
        <img src="${image}"/>
    </div>
    <div class="singer-info">
        <h3 class="singer-name">${name}</h3>
        <hr class="singer-line">
        <p class="singer-occupation">${occupation}</p>
        <p class="singer-description">${description}</p>
    </div>
</div>
`;

singer.forEach((sing) => {
  const html = htmlStructure(
    sing.id,
    sing.name,
    sing.occupation,
    sing.description,
    sing.image,
  );
  mainContainer.innerHTML += html;
});

// more singer button
const moreSingers = document.createElement('div');
performer.appendChild(moreSingers);
moreSingers.classList.add('moreSingerBtn-Container');
const moreSingersBtn = document.createElement('button');
moreSingersBtn.textContent = 'More Singers';
moreSingersBtn.classList.add('moreSingerBtn');
moreSingers.appendChild(moreSingersBtn);
const moreSingersBtnIcon = document.createElement('img');
moreSingersBtnIcon.src = './Assets/more-singers.png';
moreSingersBtnIcon.classList.add('moreSingerBtn-Icon');
moreSingersBtn.appendChild(moreSingersBtnIcon);

// event listener for more singer btn;
const moreBtn = document.querySelector('.moreSingerBtn');
const hiddenSingers = [
  document.getElementById('singer-3'),
  document.getElementById('singer-4'),
  document.getElementById('singer-5'),
  document.getElementById('singer-6'),
];

moreBtn.addEventListener('click', () => {
  hiddenSingers.forEach((singer) => {
    singer.style.display = 'flex';
  });
});

// Mobile menu

const ham = document.querySelector('.hamBtn');
const closeBtn = document.querySelector('.closeBtn');
const mobMenu = document.querySelector('.mob-menu');

ham.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  mainContainer.style.filter = 'blur(100px)';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});

mobMenu.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});
