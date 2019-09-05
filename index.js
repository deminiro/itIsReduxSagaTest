function test() {
  const buttonElement = document.getElementById('button');
  const textElement = document.getElementById('text');
  const data = ['It', 'is', 'redux', 'saga', 'test'];
  let interval;
  let spinnerSwitch = false;

  function spinner() {
    let num = 0;
    spinnerSwitch = true;

    textElement.innerHTML = '<i class="fas fa-spinner"></i>';
    const icon = document.getElementsByClassName('fa-spinner');
    interval = setInterval(() => {
      if (spinnerSwitch === false) return;
      num += 10;
      icon[0].style.transform = `rotate(${num}deg)`;
    }, 50);
  }

  function newPromise() {
    if (spinnerSwitch !== true) {
      spinner();
      setTimeout(() => {
        const indexOfIt = data.indexOf('It');
        if (data.indexOf('It') !== 1) data[indexOfIt] = 'This';
        spinnerSwitch = false;
        clearInterval(interval);
        buttonElement.removeEventListener('click', spinner);
        return textElement.innerHTML = `<p>${data.join(' ')}</p>`;
      }, 3000);
    }
  }

  buttonElement.addEventListener('click', newPromise);
}

test();