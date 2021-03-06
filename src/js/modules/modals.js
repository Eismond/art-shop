const modals = () => {
    let btnPressed = false;


    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windowWithAttr = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windowWithAttr.forEach((item) => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn')
                })

                modal.style.display = 'block';
                // document.body.style.overflow = 'hidden';
                document.body.classList.add('modal-open');
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            windowWithAttr.forEach((item) => {
                item.style.display = 'none';
            })
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                windowWithAttr.forEach((item) => {
                    item.style.display = 'none';
                })
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time = 6000) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time)
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (Math.floor(window.pageYOffset + document.documentElement.clientHeight) + 1 >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');

    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true, true);
    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 6000000)
}

export default modals;