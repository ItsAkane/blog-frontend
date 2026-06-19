# 📝 Blog Front-end

Este repositório contém o código-fonte do front-end de um sistema de blog. O projeto tem como objetivo construir uma interface de utilizador moderna, rápida e responsiva para a leitura e gestão de postagens.

Esta é apenas a camada visual da aplicação. O back-end (API e Base de Dados) será desenvolvido posteriormente num repositório separado.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando um ecossistema moderno de desenvolvimento web, focado em performance e produtividade:

* **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção da interface de utilizador.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e otimizada para projetos web modernos.
* **[React Router](https://reactrouter.com/)**: Biblioteca para gestão de rotas e navegação na aplicação.
* **[Material-UI (MUI)](https://mui.com/)**: Biblioteca de componentes UI estilizados e prontos a usar.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilizações rápidas e customizadas (configurado via `tailwind.config.js`).
* **[ESLint](https://eslint.org/)**: Linter para garantir a padronização e qualidade do código.

## 📂 Estrutura do Projeto

A organização de pastas segue o padrão convencional de aplicações geradas com Vite:

```text
blog-frontend/
├── public/                # Arquivos estáticos (favicon, imagens, etc.)
├── src/                   # Código-fonte principal da aplicação React
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação
│   └── ...
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── eslint.config.js       # Configurações do linter
├── index.html             # Arquivo HTML principal
├── package.json           # Dependências e scripts do projeto
├── tailwind.config.js     # Configurações de estilo do Tailwind CSS
└── vite.config.js         # Configurações do bundler Vite
```

## ⚙️ Como executar o projeto localmente

Para correr o projeto na sua máquina, certifique-se de ter o **[Node.js](https://nodejs.org/)** instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ItsAkane/blog-frontend.git](https://github.com/ItsAkane/blog-frontend.git)
   ```

2. **Aceda à pasta do projeto:**
   ```bash
   cd blog-frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. O projeto estará disponível no seu navegador, geralmente no endereço: `http://localhost:5173`.