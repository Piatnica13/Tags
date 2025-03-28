let inp1 = document.querySelector('#inpkol');
let inp2 = document.querySelector('#inpg');
let inp3 = document.querySelector('#inpnum');
let text = document.querySelector('#text');
let buttonPov = document.querySelector('#bthPov');
let image = document.querySelector('#imgg');
let imageObrStr = document.querySelector('#imggg');

let Pov = true;
let chet = 1;    
let stolb = 1;   
let id = 1;      
let first = true;

let Skolbir = 1; 
let SkolPov;     
let prov = 0;     

text.style.display = 'none';
image.style.display = 'none';
imageObrStr.style.display = 'none';
buttonPov.style.display = 'none';

document.querySelector('#bth').addEventListener('click', function () {
    let Kol = parseInt(inp1.value);
    let G = parseInt(inp2.value);
    let vrem = parseInt(inp3.value);

    inp1.value = '';
    inp2.value = '';

    for (let i = 1; i <= Kol; i++) {
        let columnLabel = document.createElement('div');
        let blocknotFile = document.createElement('input');
        let inputField = document.createElement('input');

        blocknotFile.type = 'text';

        if (first) {
            Num = vrem;
            first = false;
            inp3.style.display = 'none';
            text.style.display = 'block';
            columnLabel.textContent = `${stolb}`;
            text.appendChild(columnLabel);
        }

        if (chet !== 10) {
            blocknotFile.value = `${G < 10 ? '00' : '0'}${G}-0${Num}`;
            chet++;
        } else {
            stolb++;
            chet = 1;
            columnLabel.textContent = `${stolb}`;
            text.appendChild(columnLabel);
            blocknotFile.value = `${G < 10 ? '00' : '0'}${G}-0${Num}`;
            chet++;
        }
        Num++;

        blocknotFile.id = `nomer${id}`;
        inputField.type = 'number';
        inputField.placeholder = `Вес ${chet - 1}`;
        inputField.id = `vec${id}`;

        text.appendChild(blocknotFile);
        text.appendChild(inputField);
        text.appendChild(document.createElement('br'));

        id++;
    }
});

function bthhh() {
    inp1.style.display = 'none';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    text.style.display = 'none';
    buttonPov.style.display = 'block';

    document.querySelector('#bth').style.display = 'none';
    document.querySelector('#slbth').style.display = 'none';
    image.style.display = 'block';

    let test = document.querySelector('#test');
    test.innerHTML = ''; // Очистка контейнера перед добавлением элементов

    if (Pov) {
        for (let i = 1; i <= 9 && Skolbir <= id; i++) {
            let nomer = document.querySelector(`#nomer${Skolbir}`);
            let vec = document.querySelector(`#vec${Skolbir}`);

            if (nomer && vec) {
                let resultnom = document.createElement('p');
                let resultvec = document.createElement('p');

                resultnom.textContent = `${nomer.value}`;
                resultvec.textContent = formatWeight(vec.value);

                // Стили для номеров
                applyStyles(resultnom, {
                    width: '100px',
                    position: 'relative',
                    top: '-1107.5px',
                    fontSize: '12px',
                    left: '58px',
                    color: 'black',
                    fontFamily: 'Bolero script'
                });

                // Стили для веса что бы не писать resultvec.style...
                applyStyles(resultvec, {
                    width: '100px',
                    position: 'relative',
                    top: '-1125.5px',
                    fontSize: '16px',
                    left: '58px',
                    color: 'black',
                    textShadow: '0.15px 0.15px black, -0.15px -0.15px black, -0.15px 0.15px black, 0.15px -0.15px',
                    marginBottom: '72.45px',
                    fontFamily: 'Bolero script'
                });

                test.appendChild(resultnom);
                test.appendChild(resultvec);
            }
            Skolbir++;
        }
        Pov = false;
    }
}


function formatWeight(value) {
    let weight = parseFloat(value);
    return weight >= 100//toFoxtd, окуругляет 2 значения после запятой. replace заменяет . на , без цикла(кратче)
        ? `${(weight / 100).toFixed(2).replace('.', ',')} гр`
        : `0,${value} гр`;
}

//object.entries перебирает значения из массива styles. key переменная в которой хранися информация по типу red, а в value width
function applyStyles(element, styles) {
    for (const [key, value] of Object.entries(styles)) {
        element.style[key] = value;
    }
}

document.querySelector('#slbth').addEventListener('click', bthhh);

let menayenfoto = true;

// Добавить обработчик кнопки "Далее"
buttonPov.addEventListener('click', () => {
    if(menayenfoto == true){
        image.style.display = 'none';
        test.style.display = 'none';
        imageObrStr.style.display = 'block';
        menayenfoto = false;
    }
    else{
        Pov = true;
        bthhh();
        image.style.display = 'block';
        test.style.display = 'block';
        imageObrStr.style.display = 'none';
        menayenfoto = true;
    }
});
