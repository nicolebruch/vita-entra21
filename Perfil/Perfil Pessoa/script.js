function saveBloodHumano(){
    const nameHuman = document.getElementById('nomeHumano')
    const birthDayHuman = document.getElementById('txtData')
    const email = document.getElementById('dados')
    const cpf = document.getElementById('dadosRg')
    const endereco = document.getElementById('cep')
    const peso = document.getElementById("txtPeso");

    const bloodElement = document.getElementById("bloodTypeSelect");
    const selectedBloodType = bloodElement.value;

    const elementBlood = document.getElementById('bloodType')
    const selectBlood = elementBlood.value

    
    let humanoDataJson = localStorage.getItem('humanoData')
    let humanoDataArray = []

    if(humanoDataJson){
        humanoDataArray = JSON.parse(humanoDataJson)
    }

    const newHumanoData = {
        name: nameHuman.value,
        date: birthDayHuman.value,
        mail: email.value,
        rg: cpf.value,
        cepp: endereco.value,
        weight: peso.value,
        blood: selectBlood,
        bloodType: selectedBloodType,
    }

    humanoDataArray.push(newHumanoData);

    humanoDataJson = JSON.stringify(humanoDataArray);

    localStorage.setItem('humanoData', humanoDataJson);
}

/* const selectBloodType = () => {
  let selectElement = document.getElementById("bloodTypeSelect");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectBloodType = selectedOption.value;
  document.getElementById(
    "selectedBloodType"
  ).textContent = `${selectBloodType}`;
};

const selectedBlood = () => {
    let selectElement = document.getElementById('bloodType')
    let selectedOption = selectElement.options[selectElement.selectedIndex]
    let selectedBlood = selectElement.options.value
    document.getElementById(
        'selectedBlood'
    ).textContent = '${selectedBlood}'
} */

document.addEventListener("DOMContentLoaded", function() {
    // Adicionar event listeners aos dropdowns
    addDropdownListeners();

    // Adicionar event listener para duplicar o cadastro
    const addButton = document.querySelector(".botao-clicar");
    addButton.addEventListener("click", function() {
        duplicateForm();
        addDropdownListeners(); // Adicionar event listeners aos novos elementos após a duplicação
    });
});

function addDropdownListeners() {
    // Dropdown seta gênero
    document.querySelectorAll('.seta-label').forEach(function(setaLabel) {
        let opcoesGenero = setaLabel.nextElementSibling; // Encontrar as opções de gênero

        setaLabel.addEventListener("click", function() {
            if (opcoesGenero.style.display === "block") {
                opcoesGenero.style.display = "none";
            } else {
                opcoesGenero.style.display = "block";
            }
        });
    });

    // Dropdown seta tipo sanguíneo
    document.querySelectorAll('.seta').forEach(function(seta) {
        let opcoesTipoSangue = seta.nextElementSibling; // Encontrar as opções de tipo sanguíneo

        seta.addEventListener("click", function() {
            if (opcoesTipoSangue.style.display === "block") {
                opcoesTipoSangue.style.display = "none"; // Esconder as opções
            } else {
                opcoesTipoSangue.style.display = "block"; // Exibir as opções
            }
        });
    });
}

function duplicateForm() {
    const originalForm = document.querySelector(".retangulo");
    const clonedForm = originalForm.cloneNode(true);
    originalForm.parentNode.appendChild(clonedForm);
}


