const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

let listaDeItens = [];

function addNovaTarefa() {
  listaDeItens.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefa();
}

function mostrarTarefa() {
  let novaLi = "";

  listaDeItens.forEach((item, index) => {
    novaLi = `${novaLi}

        <li class="list ${item.concluida && "done"}">
          <img src="./imagem/ok.jpg" alt="imagem de icon concluido" onclick = "okTarefa(${index})"/>
          <p> ${item.tarefa} </p>
          <img src="./imagem/rem.png" alt="imagem de icon remove" onclick ="eliminaItem(${index})" />
        </li>
        `;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(listaDeItens));
}
function eliminaItem(index) {
  listaDeItens.splice(index, 1);

  mostrarTarefa();
}

function okTarefa(index) {
  listaDeItens[index].concluida = !listaDeItens[index].concluida;

  mostrarTarefa();
}

function carregarTarefa() {
  const tarefaLocalStorage = localStorage.getItem("lista");

  if (tarefaLocalStorage) {
    listaDeItens = JSON.parse(tarefaLocalStorage);
  }

  mostrarTarefa();
}

carregarTarefa();
button.addEventListener("click", addNovaTarefa);
