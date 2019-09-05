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
                '<h6>'+ data.statuses[i].user.name + '</h6><h6>'+data.statuses[i].user.screen_name+'</h6></div></div>'+
                '<div class="row">'+'<p>'+data.statuses[i].text+'</p>'+
                '</div></div></div>'
        document.getElementById("contentRow").innerHTML = document.getElementById("contentRow").innerHTML + dataString;
            }
        });
}

function loadStuff(){
    for (let i = 0; i <= 8; i++) {
        var dataString = '<div class="card" style="width: 18rem; margin-right: 1rem; margin-top: 1rem;">' + '<div class="card-body">'+
                '<div class="row">'+
                '<img src="https://pbs.twimg.com/profile_images/1169088172506198016/ky5v_8cK_normal.jpg" class="card-img" alt="DP" style="width: 50px">'+
                '<div class="column" id="userDetails">'+
                '<h6>Twitter Name</h6><h6>@TwitteHandle</h6></div></div>'+
                '<div class="row">'+
                    '<p>This happened at #GoogleIOExtendedSriLanka 2018 🔥🔥🔥 Thanks a lot to everyone who voted for me Bigger things are coming to @androdollar soon so stay subscribed at http://youtube.com/androdollar on'+
                    '@youtubefor the latest from the tech world and join the #AndroDollarARMY 😎🇱🇰</p>'+
                '</div><div class="row">'+
                '<img src="https://pbs.twimg.com/media/DADIXLUVwAANKBn?format=jpg&name=large"style="width: 16rem; height: 16rem">'+
                '</div></div></div>'
        document.getElementById("contentRow").innerHTML = document.getElementById("contentRow").innerHTML + dataString;
    }
}