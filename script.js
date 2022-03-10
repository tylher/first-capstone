const featuredSpeakers = [
  {
    arstistImage: 'Images/speaker-images/pexels-andrea-piacquadio-762020.jpg',
    artistName: 'kelvin Okafor',
    arttistTitle:
      'hyper-realistic pencil artist and a guest speaker in HA conference',
    artistDescription:
      'Okafor undertook a Foundation Art & Design course at City and Guilds Art School.Awards he has won include the Catherine Petitgas Visitors Choice Prize, part of the National Open Art Competition.',
  },
  {
    arstistImage: 'Images/speaker-images/pexels-creation-hill-1681010.jpg',
    artistName: 'Robin Eley',
    arttistTitle: 'A hyperrealist painter and conductor of art workshop',
    artistDescription:
      'Eley was born to an Australian father and Chinese mother.His work was recently recognized in the Doug Moran National Portrait Prize (highly commended runner-up in 2010 and highly commended 3rd place in 2011).',
  },
  {
    arstistImage: 'Images/speaker-images/pexels-italo-melo-2379004.jpg',
    artistName: 'Ron Mueck',
    arttistTitle: 'Hyperrealistic sculptor -- a major shareholder in Hyperrealism Artists',
    artistDescription: `Mueck's sculpture responds to the minute details of the human
              body, playing with scale to produce engrossing visual images (a
              style known as hyperrealism). Mueck spends a long time, sometimes
              more than a year, creating each sculpture. His subject matter is
              deeply private, and is often concerned with people's unspoken
              thoughts and feelings.`,
  },
  {
    arstistImage: 'Images/speaker-images/pexels-pixabay-220453.jpg',
    artistName: 'Arinze Stanley',
    arttistTitle: 'Hyper-realistic pencil artist, lead pencil artist in Nigeria',
    artistDescription: `Arinze is best known for creating hyperrealistic pencil drawings.
              Working primarily with charcoal and graphite on paper, Arinze uses
              his works as a medium for social and political activism. His work
              addresses matters including racism, modern slavery, and feminism
              both in his community and worldwide.`,
  },
  {
    arstistImage: 'Images/speaker-images/pexels-simon-robben-614810.jpg',
    artistName: 'Jason de Graaf',
    arttistTitle: 'hyperrealist Still-life painter in Chelsea art organisation',
    artistDescription: `Born in 1971 in Montreal, Quebec, Canada, artist Jason de Graaf
              specializes in hyperrealistic still life paintings using acrylics.
              In an interview with Poets and Artists magazine (p. 83), de Graaf
              says he went to college for illustration and design but fell in
              love with painting after an illustrator named Sharif Taraby came
              into his class to give a painting demonstration.`,
  },
  {
    arstistImage: 'Images/speaker-images/pexels-tubarones-photography-5045094.jpg',
    artistName: 'Oscar Ukonu',
    arttistTitle: 'A ball-point pen artist, winner of 2019 hyper-realistic art competition',
    artistDescription: `Oscar Ukonu is a visual artist living and working in Lagos,
              Nigeria.Through an iconography of personal and cultural
              references, Ukonu constantly explores black identity and pride in
              an increasingly globalized world, around an idea and style he
              refers to as Afrorealism.`,
  },
];

const mainNav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');
const ProgramItem = document.querySelectorAll('.program-menu-item');
const divOne = document.querySelector('.one');
const divTwo = document.querySelector('.two');
const divThree = document.querySelector('.three');
const homeMain = document.querySelector('.main-background');
const body = document.querySelector('body');
const showToggle = document.querySelector('.featured-speakers button');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('nav-active');
  divOne.classList.toggle('one-active');
  divTwo.classList.toggle('two-active');
  divThree.classList.toggle('three-active');
  hamburger.classList.toggle('hamburger-close');
  body.classList.toggle('body-overflow');
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 68) {
    mainNav.classList.add('fixed-nav');
    homeMain.classList.add('m-t');
  } else {
    mainNav.classList.remove('fixed-nav');
    homeMain.classList.remove('m-t');
  }

  ProgramItem.forEach((item) => {
    if ((window.scrollY >= 300) && (window.scrollY < 1050)) {
      item.classList.add('main-program-animation');
    } else {
      item.classList.remove('main-program-animation');
    }
  });
});

const featuredSpeakerList = document.querySelector('.featured-speaker-list');
/* eslint-disable */
featuredSpeakers.map((speaker) => featuredSpeakerList.innerHTML += `<div class="featured-speaker-item">
          <div class="img-box">
            <img
              src=${speaker.arstistImage}
              alt=""
            />
          </div>

          <div>
            <h3 class="artist-name">${speaker.artistName}</h3>
            <i class="artist-title"
              >
              ${speaker.arttistTitle}
            </i>
            <div class="underline"></div>
            <p>
              ${speaker.artistDescription}
            </p>
          </div>
        </div>`);
        /* eslint-enable */