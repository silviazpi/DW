window.onload = () => {
    new ParallaxHero('.hero')
}

class ParallaxHero {
    constructor(q) {
        this.element = q;
        this.bindScroll();
    }

    bindScroll() {
        $(window).on('scroll', () => {
            var scrolled = $(window).scrollTop();
            // Mueve el elemento H1 reduciendo 0.3 su velocidad y cambia su opacidad en funcion del scroll
            $(`${this.element} h1`).css({
                'top': `${scrolled * 0.7}px`,
                'opacity': `${1 - (scrolled / $(this.element).outerHeight()) * 1.8}`
            });
            // Mueve la posición del fondo
            $(this.element).css({
                'background-position': `50% calc(50% + ${scrolled * 0.2}px)`,
            });
        });
    }
};