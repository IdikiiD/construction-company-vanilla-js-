const checkNumInputs = (selector)=>{
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^+\d]/g, '');
        })
    });

}

export default checkNumInputs;