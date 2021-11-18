var box = document.querySelector(".monther")

for (var i = 0; i < movies.length; i++) {
    console.log("ok");
    var div = document.createElement("div")
    div.innerHTML = `
    <img src="${movies[i].smallThumbnail}" width="310" height="180" class="card-img-top" alt="avangers">
    <div class="card-body">
        <h5 class="card-title">Avengers: Infinity War</h5>
        <p><i class="fas fa-calendar"></i> 2018</p>
        <i class="fas fa-star text-warning"></i> 8.1
    </div>
    <div class="buttons" style="margin-left: 20px;">
        <button type="button" class="btn btn-outline-primary w-10">watch trailer</button>
        <button type="button" class="btn btn-outline-primary w-10">More info </button>
        <button type="button" class="btn btn-outline-primary w-10">Bookmark</button>
    </div>
    `
    box.appendChild(div)
}