<p align="center">
  <img src="https://img.shields.io/npm/dt/splash-cli.svg?style=for-the-badge" alt="Downloads" />
  <img src="https://img.shields.io/github/package-json/v/splash-cli/splash-cli.svg?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/travis/splash-cli/splash-cli/master.svg?style=for-the-badge" alt="Travis CI" />
</p>

<br>

# Splash Cli

![splash-cli](https://user-images.githubusercontent.com/16429579/35586570-79300ae8-05fb-11e8-8d37-17ff8cb6fa85.gif)

> Get beautiful wallpapers from [unsplash](uwebsite)

## :floppy_disk: Installation

To install `splash-cli` you must use a **node package manager** such as [yarn](/Rawnly/splash-cli/blob/master/yarn) or [npm](/Rawnly/splash-cli/blob/master/npm).

```bash
	$ sudo npm install --global splash-cli

	# OR

	$ sudo yarn global add splash-cli
```

## :paw_prints: Usage

```
  $ splash --help

  Usage
    Get beautiful wallpapers from unsplash.

    $ splash [command] [flags]

  Commands
        settings <get|set|restore>      GET/SET/RESTORE SETTINGS
        alias <get|set>                 GET/SET COLLECTION ALIASES

  Options
        -h --help                       THIS MESSAGE
        -v --version                    3.0.0

        -s --save [optional_path]       DOWNLOAD WITHOUT SETTING AS WALLPAPER

        -i --info                       SHOW EXIF
        -q --quiet                      NO OUTPUT


  Source Filters
        -u --user <username>            RANDOM PHOTO FROM PROVIDED USER
        --collection <id|alias>         RANDOM PHOTO FROM PROVIDED COLLECTION
        -c --curated                    RANDOM CURATED PHOTO
        --id <id|url>                   PHOTO BY ID
        --day                           GET THE PHOTO OF THE DAY

  Search Filters
        -f --featured                   LIMIT TO ONLY FEATURED PHOTOS
        --query <query>                 RANDOM FROM QUERY
```

> Splash is easy and quick to use, just run `splash` to start.

### As cli

```sh
  $ splash [commands] [flags]
```

### As module

Add this module to your project:

```sh
  $ npm install --save splash-cli

  # OR

  $ yarn add splash-cli
```

Then in your editor:

```javascript
import splash from "splash-cli";

// ...

splash({
  quiet: true,
  save: "~/Desktop",
  id: "some_id"
});

// ...
```

## Contributors

List of awesome people that have helped to keep this project alive:

* [mohnjatthews](http://github.com/mohnjatthews)
* [alecrust](http://github.com/alecrust)

## :space_invader: Related

* [Unsplash](https://unsplash.com/) - Free [do whatever you want](https://unsplash.com/license) high-resolution photos.
* [TheMovieDB Client](https://github.com/rawnly/tmdb-cli) - [The Movie Database](https://themoviedb.org) client.

---

<p align="center">
  <a href="https://paypal.me/rawnly/1">
      <img src="https://img.shields.io/badge/donate-paypal-blue.svg?longCache=true&style=for-the-badge&colorA=34495e&colorB=1abc9c" alt="Donate"/>
    </a>
</p>

[uwebsite]: https://unsplash.com
[desk]: https://github.com/rawnly/splashdesktop
[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh
[hyper]: https://github.com/zeit/hyper
[old-branch]: https://github.com/rawnly/splash-cli/tree/node%3C%3D7
[sample]: https://i.imgur.com/o0eXz6F.gif
[help]: https://user-images.githubusercontent.com/16429579/33238956-68de7c6a-d298-11e7-841d-2da1c624fce8.png
