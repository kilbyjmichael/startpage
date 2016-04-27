Mousetrap.bind('a b t v', function(e) { window.location.replace('https://animebytes.tv/')});
Mousetrap.bind('f', function(e) { window.location.replace('https://facebook.com/')});
Mousetrap.bind('m m', function(e) { window.location.replace('https://messenger.com/')});
Mousetrap.bind('g m', function(e) { window.location.replace('https://gmail.com/')});
Mousetrap.bind('f m', function(e) { window.location.replace('https://gmail.com/')});

function searchForm(){
    var query = document.searchForm.q.value;
    location='http://www.google.com/search?q=' + encodeURIComponent(query);
    return(location);
};
