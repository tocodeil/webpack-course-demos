function make(color) {
  const maker = require(`./colored_buttons/${color}`).default;
  maker();
}

make('red');
make('blue');
make('green');
make('green');

