Mousetrap.bind('a b t v', function(e) { window.location.replace('https://animebytes.tv/')});
Mousetrap.bind('f', function(e) { window.location.replace('https://facebook.com/')});
Mousetrap.bind('m m', function(e) { window.location.replace('https://messenger.com/')});
Mousetrap.bind('g m', function(e) { window.location.replace('https://gmail.com/')});
Mousetrap.bind('f m', function(e) { window.location.replace('https://gmail.com/')});

function searchForm(){
    var query = document.searchForm.q.value.split(":");
    if(query.length == 2) { // This means there's a :
        if(query[0] == 'g') {
            location = 'https://www.google.com/search?q=' + encodeURIComponent(query[1]);
            return(location);
        }
        if(query[0] == 'd') {
            location = 'https://duckduckgo.com/?q=' + encodeURIComponent(query[1]);
            return(location);
        }
        if(query[0] == 'a') {
            location = 'http://myanimelist.net/search/all?q=' + encodeURIComponent(query[1]);
            return(location);
        }
    }
    else {
        location = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        return(location);
    }
};
