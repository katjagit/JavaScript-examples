(function (window, document, $) {
    'use strict';
    $.validator.addMethod(
      'letterswithbasicpunc',
      function (value, element) {
        return this.optional(element) || /^[a-zäöüß\-.,()'"\s]+$/i.test(value);
      },
      'Please use only letters and punctuation',
    );
  
    var settings = {
      errorElement: "span",
      validClass: "pass",
      errorClass: "error",
      normalizer: function (value) {
        return $.trim(value);
      },
      submitHandler: function (form) {
       
        alert('Formular wird gesendet');
      },
      highlight: function (element, errorClass, validClass) {
      
        $(element).after().removeClass().addClass('fail');
      },
  
      rules: {
        name: {
          letterswithbasicpunc: true,
        },
        email: {
          email: true,
        },
        password: {
          minlength: 8,
          maxlength: 8,
        },
        'conf-password': {
          equalTo: '#password',
        },
      },
      messages: {
        name: {
          
          letterswithbasicpunc: 'Please use only letters and punctuation',
        },
        password: {
          minlength: 'The password must have exact 8 characters',
        }
      },
    };
  
  
  
    $(function () {
      // validate.init();
      $('form').eq(0).validate(settings);
      /* Weitere DOM-ready Aktionen */
    });
  })(window, document, jQuery);