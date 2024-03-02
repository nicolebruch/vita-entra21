# Trabalho Final - ENTRA21
Projeto: **VITA**

Alunos: **Nicole Bruch, Sabrina Hedler, Leonardo Martins, Bruna Winter e Sara Rubio.**

Instrutora: **Maju Testoni.** 


## Git

Funcionamento do GIT
- instale o git https://git-scm.com/
- executando == ok

#### Projeto em sua maquina
- criar uma pasta em seu computador 
- abrir um terminal git bash (e não powershell)
- dar o comando

```sh
git clone https://github.com/nicolebruch/VITA-APP.git
```

- gerencia as alterações nos arquivos desse diretorio usando o GIT
```sh
git init
```
- serve p/ conectar o seu repositório local do Git a um repositório remoto especificado pela URL.
- isso permite enviar e receber alterações entre o seu repositório local e o remoto.
```sh
git remote add origin https://github.com/nicolebruch/VITA-APP.git
```

- add um README no projeto caso nao tenha
```sh
git add README.md
```

## Configurando GIT
- colocar o email nas aspas
```sh
git config --global user.email "nicole@gmail.com"
```
- colocar seu nome nas aspas
```sh
git config --global user.name "nicolebruch"
```

#### Trabalhando com branch
- sempre acessar a main para começar a trabalhar
- na main
```sh
git pull
```

- criando branch

>  padrão do nome das branchs --> oQueFez-seuNome

```sh
git checkout -b home-nicole
```

- para mudar de branch
```sh
git checkout cronograma-nicole
```
```sh
git checkout main
```
- após fazer as alterações desejadas e queira unir ao projeto
```sh
git add .
```
> padrão do commit "[branch] o que foi feito"
```sh
git commit -m "ponto de coleta add"
```
```sh
git push
```
- no github terá a solicitação do merge e as alterações feitas
- após feito o code review, pode seguir para o merge com a main
- por isso, ao começar a trabalhar em uma nova branch sempre dar pull na main para atualizar
