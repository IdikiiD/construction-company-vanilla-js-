import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');



    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    }

    const clearInputs = (statusMessage) => {
        inputs.forEach(item => {
            item.value = '';

        })
    }
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            const data = {};
            new FormData(item).forEach((value, key) => {
                data[key] = value;
            });
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    data[key] = state[key];
                }
            }

            postData('http://localhost:3000/login', data)
                .then(res => {
                    console.log('RESPONSE:', res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => statusMessage.remove(), 5000);
                });
        });


    })

}
export default forms;
