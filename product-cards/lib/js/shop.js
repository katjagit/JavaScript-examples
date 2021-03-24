'use strict';

function createHtml(object){

    var container = document.getElementById('infotext');
    container.textContent = '';

    // create img
    var img = document.createElement('img');
    img.setAttribute('src', 'lib/img/magic/preview/' + object.picture_name);
    img.setAttribute('alt', object.name);

    //create ul 
    var ul = document.createElement('ul');
    
    //create li

    for (let entry in object){

        var li = document.createElement('li');
        

        if(entry === 'picture_name'){
            continue;
        }
        if(entry === 'name'){
            var h2 = document.createElement('h2');
            h2.innerText = `${object[entry]}`
            li.appendChild(h2);
            ul.appendChild(li);
        } else {
            li.innerText = `${object[entry]}`;
            ul.appendChild(li);
        }   
    }

    // create the last li with input and button

    var li_last = document.createElement('li');
    var input = document.createElement('input');
    input.setAttribute('value', '1');
    input.setAttribute('type', 'text');
    li_last.appendChild(input);

    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'In den Warenkorb';
    li_last.appendChild(button);

    ul.appendChild(li_last);

    // append to container

    container.appendChild(img);
    container.appendChild(ul);

}

// request to Jason and create a Handling

function clickHandling(e){
    e.preventDefault();
    var element = Array.from(document.getElementById('preview').children).indexOf(this);


    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'lib/data/products.json', true);

    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
            
          var card = data[element]; //-> selected object from list
          createHtml(card);
          
        }
    };
    xhr.send(); 
}

// add events to links

function addEvent(){
    var element = document.getElementById('preview').children;
    for(let i=0; i<element.length; i++){
        element[i].addEventListener('click', clickHandling);
    }
}

window.addEventListener('load', addEvent);
