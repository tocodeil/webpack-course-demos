function twice(x) {
  const [foo, bar, buz] = [2, 3, 5];
  return x * 2;
}

const root = document.createElement('div');
root.textContent = twice(10);
document.body.appendChild(root);
