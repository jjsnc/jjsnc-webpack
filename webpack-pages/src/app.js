// const path = require('path');

import './css/a.css';
import './less/a.less';
import Layer from './components/layer/layer.js';

const App = function() {
    // body...
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl;
}
new App();