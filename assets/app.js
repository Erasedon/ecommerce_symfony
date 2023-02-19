/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
// import './bootstrap';
// import './slider';

const buttons = document.getElementsByClassName("button_dropdown");
const dropdowns = document.getElementsByClassName('dropdown');

Array.from(buttons).forEach((element, index) => {
  
    element.addEventListener("click", function() {
        console.log(element,index)
            Array.from(dropdowns).forEach((dropdown, idx) => {
                if(idx != index) {
                   
                    dropdowns[idx].classList.add("hidden");
                    
                }else{
                    dropdowns[idx].classList.toggle("hidden");
                }
            })
        
          });
});

const url = new URL(window.location); 
const searchForm = document.querySelector('form[name="search"]');
const searchTerm = document.getElementById('search_searchTerm');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    

    var formData = new FormData(this);
    var params = new URLSearchParams(formData).toString();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/allarticles/search?" + params, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var view = '<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">'+xhr.responseText+'</div>';
            // console.log("53", data);
            // var data = JSON.parse(xhr.responseText);
            displayResults(view); // Appel à la fonction qui affiche les résultats
           
        }
    };
    xhr.send();
});

function displayResults(view) {
    // var resultsHtml = '';
    // results.forEach(function(result) {
    //     // Ajoutez ici le code pour afficher chaque résultat
    //     resultsHtml += '<div>' + result + '</div>';
    // });
    searchResults.innerHTML = view;
    
}


// const searchForm = document.querySelector('form[name="search"]');
// const searchTerm = document.getElementById('search_searchTerm');

// searchForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log(searchTerm.value);

//     var formData = new FormData(this);
   
//     var params = new URLSearchParams(formData).toString();
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', "/allarticles/search?" + params, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText);
//             var searchResults = document.getElementById('search-results');
//             searchResults.innerHTML = '';
//             data.results.forEach(function(result) {
//                 var resultDiv = document.createElement('div');
//                 resultDiv.innerHTML = result;
//                 searchResults.appendChild(resultDiv);
//                 console.log(result);
//             });
//         }
//     };
//     xhr.send();
// });




// searchForm.addEventListener("submit", function(e){e.preventDefault();
// console.log("test")})

// Récupérer la référence à la case à cocher
var checkbox = document.getElementById("filter-cat-0");
if(checkbox === undefined) {

    console.log(checkbox);
    // Définir une fonction pour gérer le clic sur la case à cocher
    checkbox.addEventListener("click", function() {
        // Créer une nouvelle instance de XMLHttpRequest
        var xhr = new XMLHttpRequest();
        
        // Ouvrir une connexion avec le contrôleur
        xhr.open('GET', "{{ path('app_allarticles')}}", true);
        
        // Définir le type de contenu de la requête
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        
        // Envoyer la requête au contrôleur avec la valeur de la case à cocher
        xhr.send(JSON.stringify({checkboxValue: checkbox.checked}));
    });
    
}
    
    
    
    