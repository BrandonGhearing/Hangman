(function () {
    "use strict";


    var btn = document.getElementById("Buttons");
    var wordContainer = document.getElementById("holdWords");

    btn.addEventListener("click", function () {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'https://hangman-api.lively.software', true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        };
        ourRequest.send();

    });

    function renderHTML(data){
        var htmlString = "";
        
        for (i = 0, i < data.length; i++) {
console.log(i)
            htmlString += "<p>" + data[i].word + "</p>";
        }

        wordContainer.insertAdjacentHTML('beforeend', htmlString);
    }

})
