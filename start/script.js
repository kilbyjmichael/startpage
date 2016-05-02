Mousetrap.bind('a b t v tab', function(e) { window.location.replace('https://animebytes.tv/')});
Mousetrap.bind('f a c tab', function(e) { window.location.replace('https://facebook.com/')});
Mousetrap.bind('m e s tab', function(e) { window.location.replace('https://messenger.com/')});
Mousetrap.bind('g m tab', function(e) { window.location.replace('https://gmail.com/')});
Mousetrap.bind('f m tab', function(e) { window.location.replace('https://fastmail.com/')});
Mousetrap.bind('r e g tab', function(e) { window.location.replace('https://reggienet.ilstu.edu/')});
Mousetrap.bind('g i t tab', function(e) { window.location.replace('https://github.com/')});
Mousetrap.bind('r e d tab', function(e) { window.location.replace('https://reddit.com/')});
Mousetrap.bind('m a l tab', function(e) { window.location.replace('https://myanimelist.net/animelist/sageinventor')});


function searchForm(){
    var query = document.searchForm.q.value.split(":");
    if(query.length == 2) { // This means there's a :
        if(query[0] == 'g') {
            location = 'https://www.google.com/search?q=' + encodeURIComponent(query[1]);
            return(location);
        }
        if(query[0] == 'ddg') {
            location = 'https://duckduckgo.com/?q=' + encodeURIComponent(query[1]);
            return(location);
        }
        if(query[0] == 'mal') {
            location = 'http://myanimelist.net/search/all?q=' + encodeURIComponent(query[1]);
            return(location);
        }
	    if(query[0] == 'gmail') {
		    location = 'https://mail.google.com/mail/u/0/#search/' + encodeURIComponent(query[1]);
		    return(location);
	    }
	    if(query[0] == 'git') {
		    location = 'https://github.com/search?utf8=%E2%9C%93&q=' + encodeURIComponent(query[1]);
		    return(location);
	    }
    }
    else {
        location = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        return(location);
    }
};

Mousetrap.prototype.stopCallback = function () {
     return false; // makes sure it works in the search box too
}
