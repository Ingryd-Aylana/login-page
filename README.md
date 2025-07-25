# Particles Login Background - React

Projeto front-end construído em **React.js** com o efeito de partículas animadas de fundo utilizando a biblioteca [`tsParticles`](https://particles.js.org/). Ideal para ser aplicado como plano de fundo de páginas de login, onboarding ou landing pages institucionais.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [tsParticles](https://particles.js.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 🎯 Funcionalidade

- Efeito visual moderno com partículas interativas animadas.
- Responsivo, leve e totalmente personalizável.
- Sem imagens externas — apenas renderização via canvas.

## 📂 Estrutura de Pastas

src/
├── components/
│ └── ParticlesBackground.jsx # Componente com o efeito de partículas
│ └── Login.jsx # Componente com do form login
├── styles/
│ └── Login.css # Estilização opcional para sobreposição
├── App.jsx # Página principal do projeto
└── main.jsx # Ponto de entrada do React


## ⚙️ Como Rodar Localmente

1. **Clone o repositório**

```bash
git clone git@github.com:Ingryd-Aylana/login-page.git
cd particles-login-react

2. **Instale as dependências**

npm install

3. **Rode o projeto** 

npm run dev

## ⚙️ Como Rodar Localmente

 - O comportamento das partículas pode ser customizado diretamente no componente ParticlesBackground.jsx, alterando o objeto options.


## Exemplo de customização:

const particlesOptions = {
  background: { color: { value: "#0d47a1" } },
  particles: {
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff", distance: 150 },
    move: { enable: true, speed: 2 },
    number: { value: 50 },
    shape: { type: "circle" },
  }
}

 ## 🧠 Créditos
- Projeto inspirado na documentação e exemplos da biblioteca tsParticles, mantida por Matteo Bruni.

## 🧑‍💻 Desenvolvido por:

Ingrid Aylana | Desenvolvedora Front-End | Linkedin: www.linkedin.com/in/ingryd-aylana-silva-dos-santos-4a2701158