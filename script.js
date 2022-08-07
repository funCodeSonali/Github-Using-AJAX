function getProfile(e){
  e.preventDefault();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  
    if(xhttp.readyState==4 && xhttp.status==200){
        var text = JSON.parse(xhttp.responseText);
    
        document.getElementById('profile').innerHTML = `
                                     <div class="card">
                                        <div class="card-header">
                                             ${text.name}
                                        </div>
                                      <div class="card-body">
                                      <div class="container">
  <div class="row">
    <div class="col-md-3 align-center">
      <img class="avatar" src="${text.avatar_url}" alt="">
    </div>
    <div class="col-md-9">
    <div class="container">
    <span class="badge bg-warning">Public repos ${text.public_repos}</span>
    <span class="badge bg-info">Public gists ${text.public_gists}</span>
    <a href="${text.followers_url}" class="btn btn-secondary float-end" role="button">
  Followers <span class="badge bg-light">${text.followers}</span>
</a>
<a href="${text.following_url}" class="btn btn-secondary-grey float-end" role="button">
  Following <span class="badge bg-light">${text.following}</span>
</a>
</div>
<br><br>
<div class="container">
      <ul class="list-group">
  <li class="list-group-item"><div class="row">
  <div class="col-md-2">Website : </div><div class="col-md-10"><a href="${text.blog}">${text.blog}</a></div></li>
    <li class="list-group-item"><div class="row">
  <div class="col-md-2">Email : </div><div class="col-md-10"><a href="${text.email}">${text.email}</a></div></li>
  <li class="list-group-item"><div class="row">
  <div class="col-md-2">Bio : </div><div class="col-md-10">${text.bio}</div></li>
</ul>
</div>
<div class="align-center">
<a href="${text.html_url}" class="btn btn-outline-primary" role="button">Visit Github </a>
</div>
    </div>
  </div>
</div>
  </div>
</div>
        `;
      
    }
    else if(xhttp.status==404){
      document.getElementById('profile').innerHTML = '<h2 class="align-center">No Match Found</h2>';
    }
}

    var username = document.getElementById('username').value;
 
  
    xhttp.open('GET', 'https://api.github.com/users/'+username , true);
    xhttp.send();
}

window.onload = function () {
  document.getElementById('userForm').addEventListener('submit', getProfile, true);
}


//avatar_url
//visit : html_url
//followers url
//following url
//website
//Email
//bio
//name

