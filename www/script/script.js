var menu = document.querySelector('nav'), header = document.querySelector('header');

var hugeMin = window.matchMedia('(min-width: 1280px)');

hugeMin.addListener(isHuge);
isHuge(hugeMin);

function isHuge(mq) {
    if (hugeMin.matches) {
        console.log('huge');
        header.appendChild(menu);
      /* the view port is at least 400 pixels wide */
    } else {
        header.parentNode.insertBefore(menu, header.nextSibling);
        console.log('less than huge');
      /* the view port is less than 400 pixels wide */
    }
}
