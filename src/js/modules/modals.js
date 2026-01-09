const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                const scrollWidth = getScrollWidth()
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.classList.add('modal-open')
                document.body.style.marginRight = `${scrollWidth}px`;
            })
        })


        close.addEventListener('click', () => {
            modal.style.display = 'none';

            windows.forEach(item => {
                item.style.display = 'none';
            });
            document.body.classList.remove('modal-open')
            document.body.style.marginRight = '';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                document.body.classList.remove('modal-open')
                document.body.style.marginRight = '';
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open')
        }, time);
    }

    function getScrollWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime('.popup', 60000);


}

export default modals;