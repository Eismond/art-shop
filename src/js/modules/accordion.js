const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);

    btns.forEach((item) => {
        item.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {

            } else {

            }
        })
    })

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // })

    // btns.forEach((btn) => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btn.classList.remove('active', 'active-style');
    //             btns.forEach((btn) => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //         }

    //         this.classList.add('active', 'active-style');
    //     })
    // })
}

export default accordion;