(function(window) {
  $(function() {
    $('.unit-span-1')

    /**
    * Event Listner:
    * - Listening for: click
    * - What element: .tabs (parent of the parent of the `<a>`)
    * - What happens:
    */

    .on('click', 'a[href^="#"]', function(event){
      event.preventDefault(); //cancels the default behavior of the browser (place on the top of the even handler).

      $(this).add(this.hash).trigger('activate');

      // return false; //DO NOT DO
      // Same as: event.preventDefault(); event.stopPropagation()
    })
    /**
    * Event Listner:
    * - What event: activate on `.tabs li`
    * - What element: `.tabs`
    * - What happens:
    */
    .on('activate', 'li', function(event){
      $(this) // `.tabs li` or `event.target`
        .addClass('active')
      .siblings()
        .removeClass('active');
    })

    /**
    *
    */
    .children('li:first')
      .trigger('active');

    $('.panel')

    /**
    * Event Listner:
    * - What event: `activate` on `.panel`
    * - What element: `.panel`
    * - What happens:
    */
    .on('activate', function(event){
      $(this)// equivalent: $(event.target)
        .addClass('active')
      .siblings()
        .removeClass('active');
    })
  })

$.getJSON("../../api/github/users/octocat/octocat.json")
      /**
      * Replacing placeholder with data from...?
      *
      * @param user
      * @return ???
      */

  .then(function(octocat) {
    console.log(octocat)
    var 

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
