import $ from 'jquery';
import './main.css';

$(document.body).append('<button>0</button>');
$('button').on('click', function() {
  this.textContent ++;
});
