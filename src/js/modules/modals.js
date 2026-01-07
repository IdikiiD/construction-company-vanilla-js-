const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        triggerSelector.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            modalSelector.style.display = 'block' ;
            document.body.style.overflow = 'hidden';
        })
        closeSelector.addEventListener('click', () => {
            modalSelector.style.display = 'none';
            document.body.style.overflow = '';
        })
        modalSelector.addEventListener('click', (e) => {
            if (e.target === modalSelector) {
                modalSelector.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }
    const callEngineerButton = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerButton, modalEngineer, modalEngineerClose);
}

export default modals;