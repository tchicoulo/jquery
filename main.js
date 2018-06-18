
  $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {
      data.forEach(function(personnages) {
      console.log(personnages);
      $("body").append('<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+ personnages.image +'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ personnages.name +'</h5><p class="card-text">'+ personnages.house +'</p></div></div>');
});

});
