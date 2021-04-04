import { type } from "os";

const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGrandDad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        portfolioNo = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        })

        portfolioNo.style.display = "none";
        portfolioNo.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            })
        } else {
            portfolioNo.style.display = 'block';
            portfolioNo.classList.add('animated', 'fadeIn');
        }
    }

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    })

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    })

    btnChef.addEventListener(() => {
        typeFilter(markChef);
    })

    btnGirl.addEventListener(() => {
        typeFilter(markGirl);
    })

    btnGuy.addEventListener(() => {
        typeFilter(markGuy);
    })

    btnGrandmother.addEventListener(() => {
        typeFilter();
    })

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    })
}

export default filter;