import $ from 'jquery';
import {} from 'rateyo';
import _ from 'underscore';

let x = _.random(0, 100);

$('body').append('<div id="rater"></div>');
$('#rater').rateYo();

console.log(x);
