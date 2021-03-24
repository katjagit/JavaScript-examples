'use strict';
(function(windwow, document, $) {

    function hideContainer(id) {
        $(id).css('display', 'none');
    }

    function displayContainer(id) {
        $(id).css('display', 'block');
    }

    function clickHandler() {
        $('#showForm').on('click', function(e) {
            e.preventDefault();

            displayContainer('#newItemForm');
            hideContainer('#newItemButton');
            $('#itemDescription').focus();

        }).css('cursor', 'pointer');


    }

    function addComplete() {


        let $li = $('ul').eq(0).find('li');
        for (let i = 0; i < $li.length; i++) {
            $li.eq(i).on('click', function() {
                $(this).addClass('complete').on('click', function() {
                    $(this).remove();
                    updateCounter();
                });
            });
        }
    }

    function updateCounter() {
        var counter = $('#page').find('ul').children().length;
        $('#counter').html(counter);
    }


    function submitHandler(e) {
        $('#newItemForm').on('submit', function(e) {
            e.preventDefault();
            var $input = $('#itemDescription').val().trim();

            if ($input !== '') {

                $(`<li>${$input}</li>`)
                    .on('click', function() {
                        $(this).addClass('complete').on('click', function() {
                            $(this).remove();
                            updateCounter();
                        });
                    })
                    .appendTo('ul').eq(0);


            }
            $('#itemDescription').val('');
            hideContainer('#newItemForm');
            displayContainer('#newItemButton');
            updateCounter();

        });
    }

    $(function($) {

        displayContainer('#newItemButton');
        hideContainer('#newItemForm');
        clickHandler();
        submitHandler();
        addComplete();

    });


})(window, document, jQuery);