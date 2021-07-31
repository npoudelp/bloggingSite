$(document).ready(() => {
  let $postCount = $("#postCount");
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8090/post",
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      $(data).each((i, data) => {
        console.log(i, data);
        authorRender(i, data);
        postTitleRender(i, data);
      });
    },
  });

  let $authorHolder = $("#authorHolder");
  function authorRender(i, data){
    ($authorHolder).prepend("<p>"+data.author+"</p><hr>");
  }

  let $latestPostHolder = $("#latestPostHolder");
  function postTitleRender(i, data){
    ($latestPostHolder).prepend("<p>"+data.title+"</p><hr>");
  }
});
