Mousetrap.bind('a b t v tab', function(e) { window.location.replace('https://animebytes.tv/')});
Mousetrap.bind('f a c tab', function(e) { window.location.replace('https://facebook.com/')});
Mousetrap.bind('m e s tab', function(e) { window.location.replace('https://messenger.com/')});
Mousetrap.bind('g m tab', function(e) { window.location.replace('https://gmail.com/')});
Mousetrap.bind('f m tab', function(e) { window.location.replace('https://fastmail.com/')});
Mousetrap.bind('r e g tab', function(e) { window.location.replace('https://reggienet.ilstu.edu/')});
Mousetrap.bind('g i t tab', function(e) { window.location.replace('https://github.com/')});
Mousetrap.bind('r e d tab', function(e) { window.location.replace('https://reddit.com/')});
Mousetrap.bind('m a l tab', function(e) { window.location.replace('https://myanimelist.net/animelist/sageinventor')});

var searchEngine = {
'engines':[
    {code:"g",link:"https://www.google.com/search?q="},
    {code:"ddg",link:"https://duckduckgo.com/?q="},
    {code:"mal",link:"http://myanimelist.net/search/all?q="},
    {code:"gmail",link:"https://mail.google.com/mail/u/0/#search/"},
    {code:"git",link:"https://github.com/search?utf8=%E2%9C%93&q="},
    {code:"nyaa",link:"https://www.nyaa.se/?page=search&term="},
    {code:"abtv",link:"https://animebytes.tv/torrents.php?searchstr="},
    {code:"baka",link:"https://bakabt.me/browse.php?q="},
    {code:"r",link:"https://www.reddit.com/search?q="},
    {code:"fb",link:"https://www.facebook.com/search/top/?q="},
    {code:"tco",link:"https://twitter.com/search?q="},
    {code:"hn",link:"https://hn.algolia.com/?query="},
    {code:"wiki",link:"https://en.wikipedia.org/w/index.php?search="},
]};

var searchGroups = {
    'anime' :['mal','abtv','baka','nyaa'],
    'social':['fb','r','tco','hn'],
    'ref'   :['wiki','g'],
    's'     :['g','ddg']
};

function searchForm() {
    var query = document.searchForm.q.value;
    var found = query.match(/\.[a-z]{2,5}/); //solve me
    if (found) {
        location = 'http://' + query;
        return (location);
        }
    else {
        query = query.split(":");
        if(query.length == 2) { // This means there's a :
            if(searchGroups[query[0]]) {
            document.title = query[0] +':' + query[1]; //sets title of tab group to query
                for(var i = 0; i < searchEngine.engines.length; i++) {
                 for(var j = 0; j < searchGroups.anime.length; j++) {
                    if(searchGroups[query[0]][j] == searchEngine.engines[i].code) {
                        var newWin = searchEngine.engines[i].link + encodeURIComponent(query[1]);
                        window.open(newWin, '_blank');
                    }
                 };
                }; 
            }
             else {
                for(var i = 0; i < searchEngine.engines.length; i++) {
                    if(query[0] == searchEngine.engines[i].code) {
                        location = searchEngine.engines[i].link + encodeURIComponent(query[1]);
                        return(location);
                    }
                };
            }
        }
        else if (query.length > 2) { // This means there's multiple :
            actQuery = query.pop();
            document.title = actQuery; //sets title of tab group to query
            for(var j = 0; j < query.length;j++) {
                for(var i = 0; i < searchEngine.engines.length; i++) {
                    if(query[j] == searchEngine.engines[i].code) {
                        var newWin = searchEngine.engines[i].link + encodeURIComponent(actQuery);
                        window.open(newWin, '_blank');
                    }
                };
            };
        }//ends more than 2 else if
        else {
            location = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            return(location);
        }
    }   
};

Mousetrap.prototype.stopCallback = function () {
     return false; // makes sure it works in the search box too
}
