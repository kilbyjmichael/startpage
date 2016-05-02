# startpage

I never really minded the default tab pages on Chrome or Firefox, but after seeing some of the customization some people come up with in /r/unixporn, I decided I had to have my own.

![Main Page](/screenshots/background.png)

#### Aliases
It uses Mousetrap to bind some regular key combos I use, usually the first few letters of the autofill in the search bar.

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

#### Search

It also has a search bar that I am developing to be more complete. Currently it defaults to a google search, however you can add something before a colon to change the search engine, such as ```ddg:query``` for duck duck go, or ```mal:query``` for myanimelist.net. You can also combine search engines as such: ```g:ddg:query``` and the search will open up multiple tabs.

| pre: | search             |
|------|--------------------|
| g:   | google             |
| ddg: | duck duck go       |
| git: | github             |
| mal: | myanimelist        |
