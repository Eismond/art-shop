const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windowWithAttr = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windowWithAttr.forEach((item) => {
                    item.style.display = 'none';
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

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');

    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    showModalByTime('.popup-consultation', 6000)
}

export default modals;