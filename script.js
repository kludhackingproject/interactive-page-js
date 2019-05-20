
// A - lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// B - Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic
let iteration = 1;

function FooterClick() {
  console.log('click');
  console.log(`clic numéro ${i}`);
  iteration ++;
}

let footer = document.getElementsByTagName('footer')[0];

footer.addEventListener('click', FooterClick);



// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader
let collapse = false;
let buttonCollapse = document.getElementsByClassName('navbar-toggler')[0];


function CollapseMenu() {
  let navbarCollapse = document.getElementById('navbarHeader');
  // if (collapse == true) {
  //   navbarCollapse.classList.remove("collapse")
  //   collapse = false;
  //   console.log(`hello ${collapse}`);
  // } else {
  //   navbarCollapse.classList.add("collapse")
  //   collapse = true;
  //   console.log(`hello ${collapse}`);
  // }

  navbarCollapse.classList.toggle("collapse");
}

buttonCollapse.addEventListener('click', CollapseMenu);



// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
let buttonEdit1 = document.querySelectorAll('.btn-outline-secondary')[0];

function ChangeColorRed() {
  console.log('click');
  this.style.backgroundColor = 'red';
}

buttonEdit1.addEventListener('click', ChangeColorRed);

// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.
let buttonEdit2 = document.querySelectorAll('.btn-outline-secondary')[1];

function ChangeColorGreen() {
  this.style.backgroundColor = this.style.backgroundColor === 'green' ? 'white' : 'green';
}

buttonEdit2.addEventListener('click', ChangeColorGreen);



// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let headerSelector = document.querySelector('header');

function RemoveBootstrap() {
  document.styleSheets[0].disabled = document.styleSheets[0].disabled === true ? false : true;
  console.log('hello');
}

headerSelector.addEventListener('dblclick', RemoveBootstrap);



// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
let viewCard = document.querySelectorAll('.btn-success');

for (let i = 0; i < viewCard.length; i++) {
  viewCard[i].addEventListener('mouseover', function () {
    let textCard = document.querySelectorAll('.card .card-text');
    let imgCard = document.querySelectorAll('.card .card-img-top');
    textCard[i].style.display  = textCard[i].style.display === 'none' ? 'inline-block' : 'none';
    imgCard[i].style.width  = imgCard[i].style.width === '20%' ? '' : '20%';
  });
}



// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !
let buttonNext = document.querySelector('.jumbotron a.btn-secondary');

buttonNext.addEventListener('click', function () {
  let lastCard = document.getElementsByClassName("row")[1].lastChild;
  let cardList = document.getElementsByClassName("row")[1];
  cardList.insertBefore(lastCard, cardList.childNodes[0]);
});



// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.
let buttonBefore = document.querySelector('.jumbotron a.btn-primary');

buttonBefore.addEventListener('click', function () {
  let firstCard = document.getElementsByClassName("row")[1].firstChild;
  let cardList = document.getElementsByClassName("row")[1];
  cardList.insertBefore(firstCard, cardList.lastChild.nextSibling);
});




// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
let eventsButton = document.querySelector('a.navbar-brand');
let clikEvent = false;
let keypressed = "";

eventsButton.addEventListener('click', function () {
  clikEvent = clikEvent === false ? true : false;
  console.log(clikEvent);
});

document.addEventListener('keypress', (event) => {
  keypressed = event.key;

  if (clikEvent) {
    let allCards = document.querySelectorAll('.row > div');
    document.querySelector('.album .container').style.marginLeft = 'auto';
    document.querySelector('.album .container').style.marginRight = 0;

    switch (keypressed) {
      // Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
      case 'a':
        allCards.forEach( item => {
          item.className = '';
          item.className = 'col-3';
          item.style.paddingRight = 0;
          item.style.paddingLeft = 0;
        });
        document.querySelector('.album .container').style.marginLeft = 0;
        break;
      // Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
      case 'y':
        allCards.forEach( item => {
          item.className = '';
          item.className = 'col-3';
          item.style.paddingRight = 0;
          item.style.paddingLeft = 0;
        });
        document.querySelector('.album .container').style.marginRight = 'auto';
        document.querySelector('.album .container').style.marginLeft = 'auto';
        break;
      // Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
      case 'p':
        allCards.forEach( item => {
          item.className = '';
          item.className = 'col-3';
          item.style.paddingRight = 0;
          item.style.paddingLeft = 0;
        });
        document.querySelector('.album .container').style.marginRight = 0;
        break;
      // Si l'utilisateur presse la touche "b", tout redevient normal.
      case 'b':
        allCards.forEach( item => {
          item.className = '';
          item.className = 'col-md-4';
          item.style.paddingRight = '15px';
          item.style.paddingLeft = '15px';
        });
        document.querySelector('.album .container').style.marginRight = 'auto';
        document.querySelector('.album .container').style.marginLeft = 'auto';
        break;
      default:
        console.log('Sorry, wrong key');
    }
  }

});
