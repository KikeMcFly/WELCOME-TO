const svgIcons = [
  '<img src="IMAGES/W2_ICO-01.svg" alt="">',
  '<img src="IMAGES/W2_ICO-02.svg" alt="">',
  '<img src="IMAGES/W2_ICO-03.svg" alt="">',
  '<img src="IMAGES/W2_ICO-04.svg" alt="">',
  '<img src="IMAGES/W2_ICO-05.svg" alt="">',
  '<img src="IMAGES/W2_ICO-06.svg" alt="">'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pasarCartas() {
  const numeros = [];
  while (numeros.length < 3) {
    const num = getRandomInt(1, 15);
    if (!numeros.includes(num)) numeros.push(num);
  }
  document.getElementById('numero1').textContent = numeros[0];
  document.getElementById('numero2').textContent = numeros[1];
  document.getElementById('numero3').textContent = numeros[2];

  const seleccionados = [0, 0, 0].map(() => svgIcons[getRandomInt(0, svgIcons.length - 1)]);
  document.getElementById('svg1').innerHTML = seleccionados[0];
  document.getElementById('svg2').innerHTML = seleccionados[1];
  document.getElementById('svg3').innerHTML = seleccionados[2];
}

function cambiarObjetivos() {
  const tarjetas = [
    document.getElementById('objetivo1'),
    document.getElementById('objetivo2'),
    document.getElementById('objetivo3')
  ];

  tarjetas.forEach((tarjeta) => {
    tarjeta.innerHTML = '';
    const cantidadFilas = getRandomInt(2, 4);

    for (let i = 0; i < cantidadFilas; i++) {
      const cantidad = getRandomInt(1, 3); //controlas cuantos son los multiplicadores de las casas
      const iconos = getRandomInt(2, 6); //control de casas, controla cuantos iconos aparecen despues del texto

      const fila = document.createElement('div');
      fila.classList.add('fila-objetivo');

      const texto = document.createElement('span');
      texto.textContent = `X${cantidad}`;
      fila.appendChild(texto);

      const iconosContainer = document.createElement('div');
      iconosContainer.classList.add('iconos');

      for (let j = 0; j < iconos; j++) {
        const icono = document.createElement('img');
        icono.src = 'IMAGES/H_ICO.svg';
        icono.alt = 'Casa';
        icono.classList.add('icono-casa');
        iconosContainer.appendChild(icono);
      }

      fila.appendChild(iconosContainer);
      tarjeta.appendChild(fila);
    }
  });
}

pasarCartas();
cambiarObjetivos();