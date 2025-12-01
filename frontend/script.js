function init() {
    const navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    //verifica se existe um usuario logado e mostra o nome na tela e o botao de sair
    if (user) {
        navUl.innerHTML += `
            <li>
                <a href="./pages/jogar.html">Jogar</a>
            </li>
        
            <li>
                <h2>Usuário: ${user.name}</h2>
            </li>
            <li>
                <button>Sair</button>
            </li>
            
        `
        return
    }

    //so vai aparecer quando o usuario nao tiver logado
    navUl.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()