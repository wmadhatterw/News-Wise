 $(document).ready(function() {
      $("textarea[name*='user_status']").blur(function () {
        var target = $(this).val();
        $.ajax({
          url: "https://api.linkpreview.net",
          dataType: 'jsonp',
          data: {q: target, key: '5a66300c212e8244e6b76cb404f1e057b6417e1c7eab5'},
          success: function (response) {
            $("#show_lnk").html('<img src="'+response.image+'"><h3>'+response.title+'</h3><h4>'+response.description+'</h4><a href="'+response.url+'">'+response.url+'</a>');
          }
        });
      });
    });
