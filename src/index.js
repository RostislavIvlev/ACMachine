import $ from 'jquery';
global.jQuery = $;
global.$ = $;

import "./includes/header/header";


import "../node_modules/modern-normalize/modern-normalize.css"

// Autoadd all scss/css/ts files

function importAll (r) {
    r.keys().forEach(r);
}
  
importAll(require.context('./', true, /\.scss|css|ts$/));