import {} from './component.nav'
import {login} from './component.login'
global.jQuery = require('jquery')
require('bootstrap')
require('../css/bootstrap.css')
require('../css/styles.less')

var img = document.createElement('img')
img.src = require('../images/ir.jpeg')
img.style.width = '256px'
img.style.height = '256px'

var logo = document.getElementById('logo')
logo.appendChild(img)

login('leojavier', 'test')
