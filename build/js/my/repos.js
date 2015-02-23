function myRepos(){

    // display my repos in #list
    // e.g., https://api.github.com/users/doubleshow/repos

    console.log('listing repos')
    $.get("https://api.github.com/users/adrian-chen/repos", github, function(data) {
 		 
        var repos = data
       $.get("/git-jquery/templates/repoList.jade", function(template) {
            var html = jade.render(template, {items: repos})
            $("#list").html(html)
            myRepo(repos[0].full_name)
        })
    })

}