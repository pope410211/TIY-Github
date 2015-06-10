(function(window) {

$.getJSON("../../api/github/users/octocat/octocat.json")
  .then(function(octocat) {
    console.log(octocat)

    $avatar = $('img .profilePic')
    $avatar.attr('src', octocat.avatar_url);

    $displayName = $('#display')
    displayName.attr('src', octocat.name)

    $userName = $('#useR')
    userName.attr('src', octocat.login)

    $orgaNization = $('#R')
    orgaNization.attr('src', octocat.organizations_url)
  })


})(window);
