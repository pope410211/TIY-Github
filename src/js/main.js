(function(window) {

$.getJSON("../../api/github/users/octocat/octocat.json")
  .then(function(octocat) {
    console.log(octocat)

    $avatar = $('img .profilePic')
    $avatar.attr('src', octocat.avatar_url);

    $displayName = $('#display')
    $displayName.text(octocat.name)

    $userName = $('#useR')
    $userName.text(octocat.login)

    $orgaNization = $('#R')
    $orgaNization.text(octocat.organizations_url)

    $locaL = $('#city')
    $locaL.text(octocat.location)

    $userEmail = $('a, .Mailto')
    $userEmail.attr('href', 'mailto:' + octocat.email)

  })


})(window);

// Reveiwed day work (5/9/15) as source.
