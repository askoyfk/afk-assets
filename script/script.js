var menu = document.querySelector('nav'), header = document.querySelector('header'), wrapper = document.getElementById('wrapper');

var hugeMin = window.matchMedia('(min-width: 1280px)');
var smallMax = window.matchMedia('(max-width: 767px)');

hugeMin.addListener(isHuge);
isHuge(hugeMin);

smallMax.addListener(isSmall);
isSmall(smallMax);

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

function isSmall(mq) {
    if (smallMax.matches) {
        console.log('small or less');
        document.body.insertBefore(menu, wrapper.nextSibling);
    } else {
        console.log('not small');
        wrapper.insertBefore(menu, header.nextSibling);
    }
}
