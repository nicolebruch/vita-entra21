function savePetDog() {
  const eDogName = document.getElementById("nomePetCachorro");
  const eBirthDay = document.getElementById("txtDataCachorro");
  const ePeso = document.getElementById("txtPesoCachorro");

  const bloodElement = document.getElementById("bloodTypeSelect");
  const selectedBloodType = bloodElement.value;

  let petDataJSON = localStorage.getItem("petDataCachorro");
  let petDataArray = [];

  if (petDataJSON) {
    petDataArray = JSON.parse(petDataJSON);
  }

  const newPetData = {
    name: eDogName.value,
    birthDate: eBirthDay.value,
    weight: ePeso.value,
    bloodType: selectedBloodType,
  };

  petDataArray.push(newPetData);

  petDataJSON = JSON.stringify(petDataArray);

  localStorage.setItem("petDataCachorro", petDataJSON);
}

function savePetDog2() {
  const eDogName = document.getElementById("nomePetCachorro2");
  const eBirthDay = document.getElementById("txtDataCachorro2");
  const ePeso = document.getElementById("txtPesoCachorro2");

  const bloodElement = document.getElementById("bloodTypeSelect2");
  const selectedBloodType = bloodElement.value;

  let petDataJSON = localStorage.getItem("petDataCachorro2");
  let petDataArray = [];

  if (petDataJSON) {
    petDataArray = JSON.parse(petDataJSON);
  }

  const newPetData = {
    name: eDogName.value,
    birthDate: eBirthDay.value,
    weight: ePeso.value,
    bloodType: selectedBloodType,
  };

  petDataArray.push(newPetData);

  petDataJSON = JSON.stringify(petDataArray);

  localStorage.setItem("petDataCachorro2", petDataJSON);
}

function savePetCat() {
  const eGatoName = document.getElementById("nomePetGato");
  const eBirthDayGato = document.getElementById("txtDataGato");
  const ePesoGato = document.getElementById("txtPesoGato");

  const bloodElementGato = document.getElementById("bloodTypeSelectGato");
  const selectedBloodType = bloodElementGato.value;

  let petDataJSON = localStorage.getItem("petDataGato");
  let petDataArray = [];

  if (petDataJSON) {
    petDataArray = JSON.parse(petDataJSON);
  }

  const newPetData = {
    name: eGatoName.value,
    birthDate: eBirthDayGato.value,
    weight: ePesoGato.value,
    bloodType: selectedBloodType,
  };

  petDataArray.push(newPetData);

  petDataJSON = JSON.stringify(petDataArray);

  localStorage.setItem("petDataGato", petDataJSON);
}

function savePetCat2() {
  const eGatoName = document.getElementById("nomePetGato2");
  const eBirthDayGato = document.getElementById("txtDataGato2");
  const ePesoGato = document.getElementById("txtPesoGato2");

  const bloodElementGato = document.getElementById("bloodTypeSelectGato2");
  const selectedBloodType = bloodElementGato.value;

  let petDataJSON = localStorage.getItem("petDataGato2");
  let petDataArray = [];

  if (petDataJSON) {
    petDataArray = JSON.parse(petDataJSON);
  }

  const newPetData = {
    name: eGatoName.value,
    birthDate: eBirthDayGato.value,
    weight: ePesoGato.value,
    bloodType: selectedBloodType,
  };

  petDataArray.push(newPetData);

  petDataJSON = JSON.stringify(petDataArray);

  localStorage.setItem("petDataGato2", petDataJSON);
}

const selectBloodType = () => {
  let selectElement = document.getElementById("bloodTypeSelect");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectBloodType = selectedOption.value;
  document.getElementById(
    "selectedBloodType"
  ).textContent = `${selectBloodType}`;
};

const selectBloodType2 = () => {
  let selectElement = document.getElementById("bloodTypeSelect2");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectBloodType = selectedOption.value;
  document.getElementById(
    "selectedBloodType2"
  ).textContent = `${selectBloodType}`;
};

const selectBloodTypeGato = () => {
  let selectElement = document.getElementById("bloodTypeSelectGato");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectBloodType = selectedOption.value;
  document.getElementById(
    "selectedBloodTypeGato"
  ).textContent = `${selectBloodType}`;
};

const selectBloodTypeGato2 = () => {
  let selectElement = document.getElementById("bloodTypeSelectGato2");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectBloodType = selectedOption.value;
  document.getElementById(
    "selectedBloodTypeGato2"
  ).textContent = `${selectBloodType}`;
};

document.addEventListener("DOMContentLoaded", function () {
  // Dropdown para o tipo sanguíneo do cachorro
  document
    .querySelectorAll("#formulario_cachorro .seta")
    .forEach(function (setaCachorro) {
      const opcoesTipoSangueCachorro = setaCachorro.nextElementSibling;
      setaCachorro.addEventListener("click", function () {
        if (opcoesTipoSangueCachorro.style.display === "block") {
          opcoesTipoSangueCachorro.style.display = "none"; // Esconder as opções
        } else {
          opcoesTipoSangueCachorro.style.display = "block"; // Exibir as opções
        }
      });
    });

  // Dropdown para o tipo sanguíneo do gato
  document
    .querySelectorAll("#formulario_gato .seta")
    .forEach(function (setaGato) {
      const opcoesTipoSangueGato = setaGato.nextElementSibling;
      setaGato.addEventListener("click", function () {
        if (opcoesTipoSangueGato.style.display === "block") {
          opcoesTipoSangueGato.style.display = "none"; // Esconder as opções
        } else {
          opcoesTipoSangueGato.style.display = "block"; // Exibir as opções
        }
      });
    });

  // Duplicar o formulário de cachorro
  const addButtonCachorro = document.querySelector(
    "#formulario_cachorro2 .botao-clicar2"
  );
  addButtonCachorro.addEventListener("click", duplicateFormCachorro);

  // Duplicar o formulário de gato
  const addButtonGato = document.querySelector(
    "#formulario_gato2 .botao-clicarGato"
  );
  addButtonGato.addEventListener("click", duplicateFormGato);
});

function duplicateFormCachorro() {
  const originalForm = document.querySelector(
    "#formulario_cachorro2 .retangulo_cachorro"
  );
  const clonedForm = originalForm.cloneNode(true);

  // Limpa os valores dos inputs no formulário clonado
  clonedForm.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  const parentElement = originalForm.parentNode;

  // Função para inserir o formulário clonado após o formulário original
  const insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  };

  // Insere o formulário clonado após o formulário original
  insertAfter(clonedForm, originalForm);
}

function duplicateFormGato() {
  const originalForm = document.querySelector(
    "#formulario_gato2 .retangulo_gato"
  );
  const clonedForm = originalForm.cloneNode(true);

  // Limpa os valores dos inputs no formulário clonado
  clonedForm.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  const parentElement = originalForm.parentNode;
  parentElement.insertBefore(clonedForm, parentElement.lastElementChild);

  // Função para inserir o formulário clonado após o formulário original
  const insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  };

  // Insere o formulário clonado após o formulário original
  insertAfter(clonedForm, originalForm);
}

const botaoMostrarFormularioCachorro2 = document.getElementById("botaoAdd");
botaoMostrarFormularioCachorro2.addEventListener(
  "click",
  mostrarFormularioCachorro2
);

function mostrarFormularioCachorro2() {
  const formularioCachorro2 = document.getElementById("formulario_cachorro2");
  formularioCachorro2.style.display = "block";
}

const botaoMostrarFormularioGato2 = document.getElementById("botaoAdd2");
botaoMostrarFormularioGato2.addEventListener("click", mostrarFormularioGato2);

function mostrarFormularioGato2() {
  const formularioGato2 = document.getElementById("formulario_gato2");
  formularioGato2.style.display = "block";
}
