import $ from 'jquery';
import 'rateyo';
import 'rateyo/min/jquery.rateyo.min.css';
import _ from 'underscore';
import css from './main.css';


let x = _.random(0, 100);

$('body').append('<div id="rater"></div>');
$('#rater').rateYo();

console.log(x);
