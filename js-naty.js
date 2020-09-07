const   nav         = document.querySelector ('#nav'),
        humIcon     = document.querySelector ('.hum-icon'),
        humLineT    = document.querySelector ('#top'),
        humLineB    = document.querySelector ('#bottom'),
        humLineM    = document.querySelector ('#middle'),
        linksDiv    = document.querySelector ('.links'),
        searchInput = document.querySelector ('.find')
        login       = document.querySelector('.header-links .login'),
        signup      = document.querySelector('.header-links .signup'),
        navLi       = document.querySelectorAll('.links .header-links> li'),
        userLinkA   = document.querySelectorAll('.right-nav-elements .users a');

humIcon.addEventListener('click', () => {
    humIcon.classList.toggle('x');
    if (humIcon.classList.contains('x')) {
        humEffectOpen();
    } else {
        humEffectClose();
    }
});

window.addEventListener('resize', resized );

navLi.forEach(li => {
    li.addEventListener ('click', e => {
        li.classList.toggle ('open');
    })
});

function humEffectOpen () {
    humLineT.classList.add('top');
    humLineB.classList.add('bottom');
    humLineM.classList.add('middle');
    userLinkA.forEach (aTag => {
        aTag.style.display = 'none';
    });

    nav.classList.add('nav');
    searchInput.style.display = 'none';
    linksDiv.classList.add('vert');
    login.style.display = 'block';
    signup.style.display = 'block';
} 

function humEffectClose () {
    humIcon.classList.remove ('x');
    humLineT.classList.remove('top');
    humLineB.classList.remove('bottom');
    humLineM.classList.remove('middle');
    userLinkA.forEach(aTag => {
        aTag.style.display = 'block';
    });

    nav.classList.remove('nav');
    searchInput.style.display = 'block';
    linksDiv.classList.remove('vert');
    login.style.display = 'none';
    signup.style.display = 'none';

    navLi.forEach(li => {
        li.classList.remove('open');
    });
}

function resized () {
    if (window.screen.width > 1023) {
        humIcon.classList.remove('x');
        humEffectClose();
    }
}

