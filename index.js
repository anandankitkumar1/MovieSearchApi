var Data;

async function getData(){
    var input = document.getElementById("movie").value;
    
    var url = `https://www.omdbapi.com/?apikey=c348ed74&s=${input}`;
    var data = await fetch(url);
    var jsonData = await data.json(); 
    console.log(jsonData);
    displayData(jsonData.Search);
    Data = jsonData.Search;

}




function displayData(data){

    if(!data){
        myerror();
        return ; 
    }
     
    var show = document.getElementById("show");
    show.innerHTML = null;
    data.map(function(ele){
        var div = document.createElement("div");
        div.setAttribute("id", "new");
        var img = document.createElement("img");
        img.src = ele.Poster;
        var title = document.createElement("p");
        title.innerText = ele.Title;
        var year = document.createElement("p");
        year.innerText = "Year : " + ele.Year;
        var Rating = document.createElement("p");
        Rating.innerText = "IMDB : " + ele.imdbID;
        div.append(img, title, year, Rating);
        show.append(div);
       

    })
}

function myerror(){
    var error = document.getElementById("show");
    show.innerHTML = null;
    var div = document.createElement("div");
    div.setAttribute("id", "Dlnew");
    var img = document.createElement("img");
    img.src = "https://cdn.dribbble.com/users/595978/screenshots/3603965/media/3122907139f775822a1fcc61c63af02a.gif";
    div.append(img);
    error.append(div);
    
}


    
    function filterPty() {
        var selected = document.querySelector("#filter").value;
        var filteredList;
        if(selected == "all"){
          filteredList = Data;
        }else if(selected == "high"){
          var filteredList = Data.sort(function(b,a){
            return a.Year - b.Year;
        });
          
        }else{
            var filteredList = Data.sort(function(a,b){
              return a.Year - b.Year;
          });
            
          }
    
    
    
        
        displayData(filteredList)
    }    

    function filterPty2() {
        var selected = document.querySelector("#filter2").value;
        var filteredList;
        if(selected == "all"){
          filteredList = Data;
        }else if(selected == "after11"){
          var filteredList = Data.filter(function (elem) {
            return elem.Year >= 2011;
          });
          
        }else if(selected == "after15"){
            var filteredList = Data.filter(function (elem) {
              return elem.Year >= 2015;
            });
            
          }else if(selected == "after20"){
            var filteredList = Data.filter(function (elem) {
              return elem.Year >= 2020;
            });
            
          }
        
        displayData(filteredList)
    }


    var id;

    function debouncer(func,delay){
        if(id){
            clearTimeout(id);
        }
    
        id = setTimeout(function(){
            getData();
        }, delay);
    }

  