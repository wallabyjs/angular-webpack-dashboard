var angular = require('angular');

import './layout-full.scss';
import { LayoutFull } from './layout-full';

module.exports = angular
    .module('app.layout-full', [])
    .config(require('./layout-full.config'))
    .directive('layoutFull', LayoutFull.directive)
    .name;
