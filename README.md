# 🧪 S206-L1_prova

Repositório referente à **Prova de laboratório da disciplina de Qualidade de Software (S206)**.  
O objetivo deste projeto é realizar uma atividade utilizando **Cypress** e outra utilizando **Postman**, aplicando os conceitos aprendidos em aula.  

---

## 📘 Questão sobre Cypress  

Neste exercício foram desenvolvidos **casos de teste automatizados** em Cypress, com o intuito de validar o funcionamento de um website real.  
A atividade que foi passada, foi a seguinte: Utilizando todo o conhecimento obtido durante as aulas, desenvolva no mínimo 3 casos de testes para algum website de sua escolha (Pelo menos 1 caso deve ser negativo).  

---

# ⚙️ Instalação das dependências  

Antes de rodar os testes, instale as dependências do projeto executando:  

```bash
npm install
```

---

# 🚀 Como abrir o Cypress

Para abrir a interface interativa do Cypress e visualizar os testes manualmente:

```bash
./node_modules/.bin/cypress open
```

---

# 🧭 Como rodar os testes via terminal

Para executar todos os testes automaticamente, sem abrir a interface do Cypress:

```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

---



---