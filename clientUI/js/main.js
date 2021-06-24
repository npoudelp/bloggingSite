$("document").ready(() => {
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8090/post",
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      appendPost(data);
    },
  });
});

function appendPost(param) {
  $(param).each((i, data) => {
    let title = param[i].title;
    let post = param[i].title;
    let author = param[i].author;
    let date = param[i].date;
    let id = param[i]._id;
    let tag = param[i].tag;
    //console.log(id);
    $("#postDisplay").prepend(
      "<div class='col-lg-4 col-md-12 mb-4'><div class='card shadow mb-5'><div class='bg-image hover-overlay ripple' data-mdb-ripple-color='light'><img src='./images/demo.jpg' class='img-fluid' /><a href='#'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a></div><div class='card-body'><h5 class='card-title'>" +
        title +
        "</h5> <p class='card-text'>" +
        post +
        "</p><button onclick='readMore(" +
        id +
        ")' class='btn btn-primary float-start shadow mb-5'>Read</button><span> Tag:" +
        tag +
        "</span class='postTag'></div></div></div>"
    );
  });
}
function readMore(param) {
    // const url = "http://127.0.0.1:8090/post/"+param;
    console.log(param);
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8090/post/"+param+"",
        dataType: 'json',
        contentType: 'application/json',
        success: (data) => {
            //displayPost(data);
            console.log(data);
        }
    })
  }