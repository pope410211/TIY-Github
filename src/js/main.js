(function(window) {

$.getJSON("../../api/github/users/octocat/octocat.json")
  .then(function(octocat) {
    console.log(octocat)

    $avatar = $('img .profilePic')
    $avatar.attr('src', octocat.avatar_url);

    $displayName = $()
  })


})(window);
