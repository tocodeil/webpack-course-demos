import { drive } from './car';
import $ from 'jquery';
import _ from 'underscore';

drive();
$('body').text(_.random(1, 50));
