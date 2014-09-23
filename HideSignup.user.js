// ==UserScript==
// @name       HideSignup
// @namespace  Hipvan
// @version    0.1
// @description  Hides Hipvan's signup overlay
// @match      http://*.hipvan.com/*
// @copyright  2014+, You
// ==/UserScript==


$.colorbox.close();
$('#colorbox').hide();
$('#cboxOverlay').hide();
