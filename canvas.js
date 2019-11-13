    document.getElementById('Buttons').addEventListener('click', loadText);

     function loadText() {
         var http = new XMLHttpRequest();
         http.open('GET', 'https://hangman-api.lively.software', true);
         
         http.onload = function () {
            var words = JSON.parse(http.responseText);
            document.getElementById('holdWords').innerHTML = http.responseText;
             
         }
         http.send();
}
