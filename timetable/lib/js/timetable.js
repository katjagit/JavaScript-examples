'use strict';
$(function ($) {

    $.getJSON('../lib/data/timetable.json').done(function(times){


        $('#event').find('a').on('click', function(e){
            e.preventDefault();
            $('.current').removeClass();
            $(this).addClass('current');
            var linkId = this.id.toUpperCase();

            var html = '';
            var city = times[linkId];
    
            for (let i = 0; i < city.length; i++) {
                html += `<li><span class="time">${city[i].time}</span>
                <a href="descriptions.html#${city[i].title}">${city[i].title}</a>
                </li>`; 
            }
            $('#sessions').empty();
            $('<ul></ul>').appendTo('#sessions').append(html);
            $('#details').empty();

            $('#sessions').find('a').on('click', function(e){
                e.preventDefault();
                $('#sessions').find('.current').removeClass();
                $(this).addClass('current'); 

                var textName = $(this).text().replace(/ /g, '-');
                $('#details').load(`descriptions.html #${textName}`);

            });

        })

    })
    .fail(function(){
        $('#event').empty().append('Sorry! We could not load the timetable at the moment');
    })

    .always(function (data, status, xhr) {
        console.log(data, status, xhr);
        });  
});