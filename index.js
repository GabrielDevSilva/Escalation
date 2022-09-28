function scalePlayer() {
    const section = document.getElementById('gameSection');

    const h3 = document.createElement('h3');
    h3.innerText = 'Escalação do jogador!';

    const div = document.createElement('div');

    const positionParagraph = document.createElement('p');
    positionParagraph.innerHTML = 'Informe a posição do jogador: ';
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.className = 'position';
    positionInput.id = 'position';
    positionInput.placeholder = 'Informe a posição do jogador';
    positionParagraph.appendChild(positionInput);
    div.appendChild(positionParagraph);

    const nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = 'Informe o nome do jogador: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'name';
    nameInput.id = 'name';
    nameInput.placeholder = 'Informe o nome do jogador';
    nameParagraph.appendChild(nameInput);
    div.appendChild(nameParagraph);

    const numberParagraph = document.createElement('p');
    numberParagraph.innerHTML = 'Informe o número da camisa do jogador: ';
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.className = 'number';
    numberInput.id = 'number';
    numberInput.placeholder = 'Informe o número da camisa do jogador';
    numberParagraph.appendChild(numberInput);
    div.appendChild(numberParagraph);

    const scaleButton = document.createElement('button');
    scaleButton.type = 'submit';
    scaleButton.innerHTML = 'Escalar';
    scaleButton.setAttribute('onclick', 'addToList()');
    div.appendChild(scaleButton);


    section.append(h3, div);
}

function addToList() {
    const section = document.getElementById('scaleList');

    const h2 = document.getElementById('tittle');

    const ul = document.getElementById('list');

    const buttonDisabled = document.getElementById('remove')
    const buttonEnabled = document.getElementById('scale')

    const playerItem = document.createElement('li');
    let namePlayer = document.getElementById('name').value;
    const numberPlayer = document.getElementById('number').value;
    const positionPlayer = document.getElementById('position').value;
    const hRow = document.createElement('br');

    let confirmation = '';
    namePlayer ? confirmation = confirm(`Escalar o jogador ${namePlayer} da posição ${positionPlayer}?`) : namePlayer = '"CAMPO VAZIO"'

    if (numberPlayer && namePlayer && positionPlayer && confirmation) {
        h2.innerText = 'Jogadores escalados';
        playerItem.id = 'player-' + numberPlayer;
        playerItem.innerText = positionPlayer + ': ' + namePlayer + ' (' + numberPlayer + ')';
        hRow.id = 'row-' + numberPlayer;
        buttonDisabled.disabled = false;
        buttonEnabled.disabled = true;
        ul.appendChild(playerItem);
        ul.appendChild(hRow);

        section.append(h2, ul);

        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    } else {
        alert('Preencha o(s) campo(s) vazio(s)!!')
    }
}

function removePlayer() {
    const section = document.getElementById('list');

    const number = Number(prompt('Insira o número do jogador que você deseja remover.'));

    const numberPlayer = document.getElementById('player-' + number);

    const hRow = document.getElementById('row-' + number);

    let string = '';
    let numberSelected = '';
    if (numberPlayer) {
        string = numberPlayer.textContent.split(' ');
        numberSelected = string[2].slice(1, 2);
    }

    number === Number(numberSelected) ?
        section.removeChild(numberPlayer) &&
        section.removeChild(hRow) :
        alert('Não há um jogador com esse número.');

}
