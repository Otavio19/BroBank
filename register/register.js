const inptNameEl = document.getElementById('inptName')
const inptLoginEl = document.getElementById('inptLogin')
const inptPassWordEl = document.getElementById('inptPassWord')
const inptPassWordReEl = document.getElementById('inptPassWordRe')
const btnAcess = document.getElementById('btnAcess')

const UrlApi = 'https://65ff6e9edf565f1a61451161.mockapi.io/users'

const register =(urlApi, user) =>{
    
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch(urlApi, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao criar usuário');
        }
        console.log('Dados do usuário atualizados com sucesso!');
        return response.json();
    }).then(res => { window.location.href = '../login'})
}

const createUser = (name,login,password) => {
    let user = {
        name : name,
        login : login,
        password : password,
        balance: 0
    }

    console.log(user)
    return user
}

btnAcess.addEventListener('click', (e)=>{
    e.preventDefault()

    if(inptPassWordEl.value != inptPassWordReEl.value || inptNameEl.value == "")
    return alert('Verifique os Campos!')

    let user = createUser(
        inptNameEl.value,
        inptLoginEl.value,
        inptPassWordEl.value
        )

        register(UrlApi, user)
        alert('Usuário Registrado!')
})