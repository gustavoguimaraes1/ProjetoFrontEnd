/* =========================
   ABRIR PROJETOS
========================= */

function abrirProjeto() {

    window.open(
        "https://github.com/",
        "_blank"
    );
}

/* =========================
   CADASTRO
========================= */

const formCadastro =
document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();

            const nome =
            document.getElementById("nome").value;

            const email =
            document.getElementById("email").value;

            const senha =
            document.getElementById("senha").value;

            const data =
            document.getElementById("data").value;

            if (
                nome === "" ||
                email === "" ||
                senha === "" ||
                data === ""
            ) {

                alert(
                    "Preencha todos os campos."
                );

                return;
            }

            const usuario = {

                nome: nome,
                email: email,
                senha: senha,
                data: data
            };

            localStorage.setItem(
                email,
                JSON.stringify(usuario)
            );

            alert(
                "Cadastro realizado com sucesso!"
            );

            formCadastro.reset();
        }
    );
}

/* =========================
   LOGIN
========================= */

function login() {

    const email =
    document.getElementById("Email").value;

    const senha =
    document.getElementById("Senha").value;

    if (
        email === "" ||
        senha === ""
    ) {

        alert(
            "Preencha todos os campos."
        );

        return;
    }

    const usuarioSalvo =
    localStorage.getItem(email);

    if (usuarioSalvo === null) {

        alert(
            "Usuário não encontrado."
        );

        return;
    }

    const usuario =
    JSON.parse(usuarioSalvo);

    if (
        usuario.senha === senha
    ) {

        alert(
            "Login realizado com sucesso!"
        );

        localStorage.setItem(
            "usuarioLogado",
            usuario.nome
        );

        mostrarUsuarioLogado();

    } else {

        alert(
            "Senha incorreta."
        );
    }
}

/* =========================
   LOGOUT
========================= */

function logout() {

    localStorage.removeItem(
        "usuarioLogado"
    );

    alert(
        "Você saiu da conta."
    );

    location.reload();
}

/* =========================
   RECUPERAR SENHA
========================= */

function recuperarSenha() {

    const email = prompt(
        "Digite seu e-mail:"
    );

    if (email === null) {

        return;
    }

    const usuarioSalvo =
    localStorage.getItem(email);

    if (usuarioSalvo === null) {

        alert(
            "Conta não encontrada."
        );

        return;
    }

    const usuario =
    JSON.parse(usuarioSalvo);

    alert(
        "Senha encontrada:\n\n" +
        usuario.senha
    );
}

/* =========================
   USUARIO LOGADO
========================= */

function mostrarUsuarioLogado() {

    const usuario =
    localStorage.getItem(
        "usuarioLogado"
    );

    if (usuario !== null) {

        const mensagem =
        document.createElement("div");

        mensagem.innerHTML =
        "Usuário logado: <strong>" +
        usuario +
        "</strong>";

        mensagem.style.position =
        "fixed";

        mensagem.style.bottom =
        "20px";

        mensagem.style.right =
        "20px";

        mensagem.style.background =
        "cyan";

        mensagem.style.color =
        "black";

        mensagem.style.padding =
        "15px";

        mensagem.style.borderRadius =
        "10px";

        mensagem.style.fontWeight =
        "bold";

        mensagem.style.zIndex =
        "9999";

        document.body.appendChild(
            mensagem
        );
    }
}

mostrarUsuarioLogado();

/* =========================
   GOOGLE LOGIN
========================= */

const botaoGoogle =
document.querySelector(
    ".google-login button"
);

if (botaoGoogle) {

    botaoGoogle.addEventListener(
        "click",
        function() {

            alert(
                "Login com Google será integrado futuramente utilizando Firebase Authentication."
            );
        }
    );
}

/* =========================
   FORMULARIO CONTATO
========================= */

const formularioContato =
document.querySelector(
    ".formulario-contato"
);

if (formularioContato) {

    formularioContato.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();

            alert(
                "Mensagem enviada com sucesso!"
            );

            formularioContato.reset();
        }
    );
}

/* =========================
   SPA - NAVEGACAO
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const links =
        document.querySelectorAll(".menu a");

        const paginas =
        document.querySelectorAll(".pagina");

        links.forEach(link => {

            link.addEventListener(
                "click",
                function(evento) {

                    evento.preventDefault();

                    const id =
                    this.getAttribute("href");

                    paginas.forEach(pagina => {

                        pagina.classList.remove(
                            "ativa"
                        );
                    });

                    const paginaSelecionada =
                    document.querySelector(id);

                    if (paginaSelecionada) {

                        paginaSelecionada.classList.add(
                            "ativa"
                        );
                    }

                    window.scrollTo({

                        top: 0,
                        behavior: "smooth"
                    });
                }
            );
        });

    }
);

        