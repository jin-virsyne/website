(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    /**
     * Let Hero height be dynamic
     */
    window.addEventListener('load', function() {
      
    });

    /**
     * Hero type effect
     */
    const typed = select('.typed')
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items')
            typed_strings = typed_strings.split(',')
            new Typed('.typed', {
                strings: typed_strings,
                typeSpeed: 40,
                backSpeed: 0,
                backDelay: 1500,
                startDelay: 1000,
                fadeOut: false,
                loop: true
        });
    }

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()