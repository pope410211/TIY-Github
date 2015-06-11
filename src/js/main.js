(function(window) {

$.getJSON("../../api/github/users/octocat/octocat.json")
  .then(function(octocat) {
    console.log(octocat)

    $avatar = $('img#avatar')
    $avatar.attr('src', octocat.avatar_url);

    $displayName = $('#display')
    $displayName.text(octocat.name);

    $userName = $('#useR')
    $userName.text(octocat.login);

    $orgaNization = $('#R')
    $orgaNization.text(octocat.company);

    $locaL = $('#city')
    $locaL.text(octocat.location)

    $userEmail = $('a#Mailto')
    $userEmail.attr('href', 'mailto:' + octocat.email);

    $userMail = $('a#Mailto')
    $userMail.text(octocat.email);

    $userBlogSite = $('a#bLog')
    $userBlogSite.attr('href', octocat.blog)

    $userBlog = $('a#bLog')
    $userBlog.text(octocat.blog)


  });


})(window);

// Reveiwed day work (5/9/15) as source.
