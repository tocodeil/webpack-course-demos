function addButton(name) {
  const btn = document.createElement('button');
  btn.textContent = 'Click Here';

  btn.addEventListener('click', async function() {
    const { default: handler } = await import(`./buttons/${name}`);
    handler.apply(this);
  });
  document.body.appendChild(btn);
}

addButton('one');
addButton('two');
addButton('three');
