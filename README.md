# 🩸 Trabalho Final - ENTRA21

## Projeto: **VITA**

### 👥 Equipe
- **Bruna Winter**
- **Leonardo Martins**
- **Nicole Bruch**
- **Sabrina Hedler**
- **Sara Rubio**

### 🧑‍🏫 Instrutora
- **Maju Testoni**

### 🔗 Link do Projeto
Acesse o projeto no link abaixo (inspecionar em um dispositivo móvel, como iPhone 14 para melhor visualização):

🌐 [VITA - Aplicativo de Doação de Sangue](https://vita-app-six.vercel.app)

---

## 🚀 Sobre o Projeto
VITA é um aplicativo desenvolvido como trabalho final do curso ENTRA21, com o objetivo de facilitar a doação de sangue para humanos, gatos e cachorros. O projeto busca conectar doadores a instituições e tutores de animais que precisam de doação.

---

## 🛠 Configuração do Git

### 🔹 Instalação do Git
Caso ainda não tenha o Git instalado, faça o download e instale através do link:
🔗 [Git SCM](https://git-scm.com/)

### 🔹 Clonando o Projeto
Para obter uma cópia do projeto em sua máquina:

1. Crie uma pasta no seu computador.
2. Abra um terminal Git Bash (não use PowerShell).
3. Execute o comando abaixo para clonar o repositório:

```sh
git clone https://github.com/nicolebruch/VITA-APP.git
```

4. Entre na pasta do projeto e inicialize o repositório Git (caso necessário):
```sh
git init
```

5. Conecte o repositório local ao repositório remoto:
```sh
git remote add origin https://github.com/nicolebruch/VITA-APP.git
```

6. Se necessário, adicione um README ao projeto:
```sh
git add README.md
```

---

## 🔧 Configuração do Usuário no Git
Defina seu nome e e-mail para garantir que seus commits sejam identificados corretamente:

```sh
git config --global user.email "seu-email@gmail.com"
git config --global user.name "seu-nome"
```

---

## 🌿 Trabalhando com Branches

### 🔹 Atualizando a Main antes de iniciar
Antes de criar uma nova branch, atualize a branch `main` com as últimas alterações:
```sh
git pull
```

### 🔹 Criando uma nova branch
Padrão de nomenclatura: **oQueFez-seuNome**

Exemplo:
```sh
git checkout -b home-nicole
```

### 🔹 Alternando entre branches
Para mudar de branch, utilize:
```sh
git checkout nome-da-branch
```
Exemplo:
```sh
git checkout cronograma-nicole
```
```sh
git checkout main
```

### 🔹 Salvando e Enviando Alterações
1. Adicione todas as alterações ao controle de versão:
```sh
git add .
```

2. Faça um commit seguindo o padrão: `[branch] descrição do commit`
```sh
git commit -m "[ponto-de-coleta] Adicionado novo ponto de coleta"
```

3. Envie as alterações para o repositório remoto:
```sh
git push
```

### 🔹 Criando e Realizando Merge
1. No GitHub, faça a solicitação do *merge* da sua branch com a `main`.
2. Após a revisão do código (*code review*), o merge será aprovado.
3. Antes de começar a trabalhar em uma nova branch, sempre atualize a `main`:
```sh
git pull
```

---

## 📌 Considerações Finais
Esse projeto foi desenvolvido com muito empenho e dedicação. Esperamos que ele possa contribuir para facilitar o processo de doação de sangue e salvar vidas! ❤️🐶🐱

Se tiver dúvidas ou sugestões, fique à vontade para contribuir! 🚀
