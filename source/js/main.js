//= require vendor/jquery.min.js
//= require vendor/foundation.js

var App;

$(function () {
    'use strict';
    App = {
        init: function () {
        	this.convert();
        },
        convert: function() {
          var 
            remBase = $('#input-rem-base'),
            px = $('#input-px'),
            em = $('#input-em');

          $('#input-rem-base, #input-px').on('change', function() {
            var emVal = px.val() / remBase.val() * 1;
            
            em.val(emVal);
            
            console.log(emVal);

            $('#rem-demo').css( "font-size", emVal + "rem"
            // {
            //   'font-size' : emVal
            // }
            );

          });

        }
        
    };
    App.init();
});
