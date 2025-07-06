# Simulador de Cadastro de Clientes (React)

Este projeto foi desenvolvido para praticar os conceitos básicos do React com um caso de uso realista e simples: o cadastro de clientes. Funciona 100% no navegador, usando apenas `useState` e lógica básica do React — sem API ou backend.

---

## 🚀 O que o app faz

- Permite cadastrar **clientes** com:
  - Nome (obrigatório)
  - Telefone (obrigatório)
  - Observação (opcional)
- Exibe uma **lista de clientes** cadastrados
- Inclui **navegação por abas** entre “Cadastrar” e “Ver Clientes”
- Tudo funciona com `useState` (memória local)

---

## 🧠 O que você vai aprender

- Organização em componentes
- Inputs controlados com `useState`
- Eventos com `onChange` e `onClick`
- Renderização de listas com `map`
- Renderização condicional
- Estilização com CSS

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

Depois abra o navegador em: `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── ClientForm.jsx
│   └── ClientList.jsx
└── styles/
    ├── global.css
    └── form.css
```

---

## ✅ Checklist básico

- [x] Usa `useState` para controlar formulário e lista de clientes
- [x] Dados são passados por props entre componentes
- [x] Sem bibliotecas ou APIs externas
- [x] CSS simples, responsivo e organizado

---

## 💻 Hacker Edition – Para quem quiser ir além

Quer deixar sua aplicação mais completa? Aqui vão ideias para desafiar suas habilidades em React:

### 📱 Validação do telefone

- Validar se o número contém **apenas dígitos** e tem 10 ou 11 caracteres.
- Exibir uma mensagem de erro ou impedir envio.

```js
const isPhoneValid = (phone) => /^\d{10,11}$/.test(phone)
```

---

### 💾 Salvar com Local Storage

- Salve os dados dos clientes no `localStorage` para que não se percam ao recarregar a página.

```js
useEffect(() => {
  const saved = localStorage.getItem('clients')
  if (saved) setClients(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem('clients', JSON.stringify(clients))
}, [clients])
```

---

### 🌀 Adicionar Feedback de Carregamento

- Mostre uma mensagem ou um spinner enquanto os dados estão sendo processados ou trocando de aba.

---

### 🧪 Testes Unitários (Avançado)

- Utilize **Vitest** ou **Jest** para testar:
  - Validação do telefone
  - Cadastro de clientes
  - Renderização da lista

---

### ✨ Sugestões de UX

- Adicionar botão “Limpar Tudo” para remover todos os clientes.
- Animar a troca de abas.
- Destacar novos cadastros por 2 segundos.

---

🎯 Construa algo que você tenha orgulho de mostrar. E depois... publique! 🚀
