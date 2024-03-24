let users;

/* Função que vai retornar os dados da API */
fetch('https://65ff6e9edf565f1a61451161.mockapi.io/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        users = data;
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });


/* Função para Realizar o login */
function fazerLogin(login, senha) {
    fetch('https://65ff6e9edf565f1a61451161.mockapi.io/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados');
            }
            return response.json();
        })
        .then(data => {
            const usuario = data.find(user => user.login === login && user.password === senha);
            if (usuario) {
                console.log('Login bem-sucedido! Bem-vindo,', usuario);
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                window.location.href = '../index/index.html';
            } else {
                alert('Credenciais inválidas. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

const loginEl = document.getElementById('inptLogin')
const passwordEl = document.getElementById('inptPassWord')
const acessEl = document.getElementById('btnAcess')

acessEl.addEventListener('click', (e)=>{
    e.preventDefault()

    console.log('Dados '+loginEl.value + passwordEl.value)
    
    fazerLogin(loginEl.value, passwordEl.value);
})