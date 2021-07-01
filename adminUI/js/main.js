$(document).ready(() => {
  let $postCount = $("#postCount");
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8090/post",
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      console.log(data);
      $.each(data, (i) => {
        $($postCount).text(i + 1);
      });
    },
  });

  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8090/post",
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      authorRender(data);
    },
  });

  let $postTitleHolder = $("#postTitleHolder");

  function authorRender(param) {
    $.each(param, (i, posts) => {
      let $post = posts.title;
      console.log($post);
      let $latest = param.length;
        if(i > param.length - 4){
          $($postTitleHolder).append("<p class='h5'>" + $post + "</p>");
        }
    });
  }
});
