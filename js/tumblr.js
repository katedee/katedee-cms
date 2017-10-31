function tumblr(resp) {
    var posts = resp.posts;
    $('#blog .loading').replaceWith('<div class="tumblr-blog"><div/>');
    $ul = $('.tumblr-blog');
    for (var i = 0; i < posts.length; i++) {
        console.log(posts[i]);
        var p = posts[i];
        var title = p['regular-title'] || p['link-text'] || null;
        $ul.append('<div class="tumblr-post tumblr-post--' + i +'"></div>');
        $tumblrPost = $('.tumblr-post--' + i);

        var photos = (p['photos'].length) ? p['photos'] : [{ 'photo-url-1280' : p['photo-url-1280']}];

        var reblogUrl = 'https://www.tumblr.com/reblog/' + p['id'] + '/' + p['reblog-key'];
        console.log(photos);
        for ( var j = 0; j < photos.length; j++ ) {
            $tumblrPost.append('<img src="' + photos[j]['photo-url-1280'] + '" />')
        }

        var caption = '<p>' + p['photo-caption'] + '</p>'
            +'<a href="' + p['url'] + '" target="_blank">See this post on tumblr</a>' 
            + '<br/>'
            +'<a href="' + reblogUrl + '">'
                +'<svg width="15px" height="15px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg>'
            +' Reblog</a>';

        $tumblrPost.append(caption);
    }
}