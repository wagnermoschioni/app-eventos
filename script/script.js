var dados = JSON.parse('[{"nome": "Workshop JAVA","data": "06/08/2023","horario": "20:00","palestrante": "Jeff Becker","preco": 250.0},{"nome": "Workshop Delphi","data": "06/08/2023","horario": "20:00","palestrante": "Jeff Becker","preco": 250.0}]');

dados.forEach(function (item){
    document.getElementById("item1").innerHTML += "<p>" + item.nome + "</p>"
});