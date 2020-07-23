const button = document.getElementById('button');

button.addEventListener('click', () => {
    /* axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('list');
        const fragment = document.createDocumentFragment();
        const res_data = res.data;
        for (const data of res_data) {
            const list_item = document.createElement('LI');
            list_item.textContent = `${data.id} - ${data.name}`;
            fragment.appendChild(list_item)
        }
        list.appendChild(fragment);
    })
    .catch(error => console.log(error)) */

    //Otra manera de hacer lo mismo pero de una manera optima
    const getUser = async () => {
        const {data:user} = await axios.get('https://jsonplaceholder.typicode.com/users')
        const list = document.getElementById('list');
        const fragment = document.createDocumentFragment();
        const res_data = user;
        for (const data of res_data) {
            const list_item = document.createElement('LI');
            list_item.textContent = `${data.id} - ${data.name}`;
            fragment.appendChild(list_item)
        }
        list.appendChild(fragment);
    }

    getUser();  

})