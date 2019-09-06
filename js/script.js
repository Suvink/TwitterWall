function search() {
    TweetJs.Search("sajje",
        function (data) {
            console.log(data);
            console.log(data.statuses[1]);
            for (let i = 0; i <= data.statuses.length; i++) {
                var dataString = '<div class="card" style="width: 18rem; margin-right: 1rem; margin-top: 1rem;">' + '<div class="card-body">'+
                '<div class="row">'+
                '<img src="' + data.statuses[i].user.profile_image_url+ '"'+
                'class="card-img" alt="DP" style="width: 50px">'+
                '<div class="column" id="userDetails">'+
                '<h6>'+ data.statuses[i].user.name + '</h6><h6>@'+data.statuses[i].user.screen_name+'</h6></div></div>'+
                '<div class="row">'+'<p>'+data.statuses[i].text+'</p>'+
                '</div></div></div>'
        document.getElementById("contentRow").innerHTML = document.getElementById("contentRow").innerHTML + dataString;
            }
        });
}