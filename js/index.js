import { dados } from "./tamanhos.js";
const tableBody = document.getElementById("tableBody");

if(tableBody){
    dados.forEach(({tamanho, diametro}) => {
        console.log("entrou");
        const tr = document.createElement('tr');
        const tdTamanho = document.createElement('td');
        const tdDiametro = document.createElement('td');
        const tdPerimetro = document.createElement('td');

        tdTamanho.innerText = tamanho;
        tdDiametro.innerText = (diametro).toFixed(2)  + ' mm';
        tdPerimetro.innerText = (diametro * Math.PI).toFixed(2) + ' mm';
        
        tr.appendChild(tdTamanho);
        tr.appendChild(tdDiametro);
        tr.appendChild(tdPerimetro);
       
        tableBody.appendChild(tr);
        
    });
    console.log(tableBody);
}