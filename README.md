# startpage

I never really minded the default tab pages on Chrome or Firefox, but after seeing some of the customization some people come up with in /r/unixporn, I decided I had to have my own.

![Main Page](/screenshots/background.png)

#### Search

It has a search bar that I am developing to be more complete. Currently it defaults to a google search, however you can add something before a colon to change the search engine, such as ```ddg:query``` for duck duck go, or ```mal:query``` for myanimelist.net.

| pre: | search             |
|------|--------------------|
| g:   | google             |
| ddg: | duck duck go       |
| git: | github             |
| mal: | myanimelist        |

#### Search Groups
Search Groups are groups of common websites that one might want to search together, such as social sites, or reference sites. I have combined some of these together into one keyword that will query all of them at once.

| pre:  | searches           |
|-------|--------------------|
|anime: | abtv, mal, nyaa.se, bakabt.me|
| ref:  | wikipedia, google|
|   s:  | google, ddg         |
|social:| facebook, twitter, reddit, hackernews|


You can also combine search engines on your own as such: ```g:ddg:query``` and the search will open up in multiple tabs.


#### Aliases
It also uses Mousetrap to bind some regular key combos I use, usually the first few letters of the autofill in the search bar.

All of the aliases are followed by a tab so that they also work in the search bar.

| alias| page               |
|------|--------------------|
| reg  | reggienet          |
| fac  | facebook           |
| git  | github             |
| red  | reddit             |
| fa   | fastmail           |
| gm   | gmail              |
| mes  | facebook messenger |
| abtv | animebytes.tv      |
| mal  | myanimelist        |


