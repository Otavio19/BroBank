const dadosArmazenados = localStorage.getItem('usuarioLogado');
const UrlApi = 'https://65ff6e9edf565f1a61451161.mockapi.io/users'
const user = JSON.parse(dadosArmazenados);
var saldoAtual = user.balance

const nameUser = document.getElementById('userName')
const balanceEl = document.getElementById('balanceTxt')
const valueInpt = document.getElementById('valuetInpt')

nameUser.innerHTML = user.name
balanceEl.innerHTML = user.balance


function depositar(){
    user.balance += parseFloat(valueInpt.value)
    balanceEl.innerHTML = user.balance
    saldoAtual = user.balance
}

function sacar(){
    if(user.balance >= valueInpt.value){
        user.balance -= parseFloat(valueInpt.value)
        balanceEl.innerHTML = user.balance
        saldoAtual = user.balance
    }else{
        alert('Saldo insuficiente!')
    }
}

function transferir(){
    if(user.balance >= valueInpt.value){
        user.balance -= parseFloat(valueInpt.value)
        balanceEl.innerHTML = user.balance
        saldoAtual = user.balance
    }else{
        alert('Saldo insuficiente!')
    }
}

function emprestimo(){
    if(user.credit >= valueInpt.value){
        user.balance += parseFloat(valueInpt.value)
        user.credit -= parseFloat(valueInpt.value)
        balanceEl.innerHTML = user.balance
        creditEl.innerHTML = user.credit
        saldoAtual = user.balance
    }else{
        alert('Crédito insuficiente!')
    }
}

function updateBalance(urlApi){

    let userUpdate ={
        balance : user.balance
    }

    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userUpdate)
    };

    fetch(`${urlApi}/${user.id}`, options).then(res => {
        window.location.href = '../login/index.html'
    }
    )
}


document.getElementById('btnLeave').addEventListener('click', (e)=>{
    e.preventDefault()
    updateBalance(UrlApi);
})