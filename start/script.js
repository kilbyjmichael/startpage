Mousetrap.bind('a b t v', function(e) { window.location.replace('https://animebytes.tv/')});
Mousetrap.bind('f a', function(e) { window.location.replace('https://facebook.com/')});
Mousetrap.bind('m m', function(e) { window.location.replace('https://messenger.com/')});
Mousetrap.bind('g m', function(e) { window.location.replace('https://gmail.com/')});
Mousetrap.bind('f m', function(e) { window.location.replace('https://fastmail.com/')});
Mousetrap.bind('r e g', function(e) { window.location.replace('https://reggienet.ilstu.edu/')});
Mousetrap.bind('g i t', function(e) { window.location.replace('https://github.com/')});
Mousetrap.bind('r e d', function(e) { window.location.replace('https://reddit.com/')});

function searchForm(){
    var query = document.searchForm.q.value;
    location='https://www.google.com/search?q=' + encodeURIComponent(query);
    return(location);
};

Mousetrap.prototype.stopCallback = function () {
     return false;
}
