# Splash

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/df39aef5f5a14b62a8cf4701a7962c29)](https://www.codacy.com/app/fedevitale99/splash-cli?utm_source=github.com&utm_medium=referral&utm_content=Rawnly/splash-cli&utm_campaign=badger)
[![npm](https://img.shields.io/npm/v/npm.svg)](github.com/Rawnly/splash-cli)
[![npm](https://img.shields.io/npm/l/express.svg)](github.com/Rawnly/splash-cli)


Set your wallpaper with beautiful photos token by [unsplash](http://unsplash.com)

![screen](https://cloud.githubusercontent.com/assets/16429579/21467810/3f37f348-c9fa-11e6-9c6a-82fa8364f5e6.png)
> Got the same setup [here](http://github.com/Rawnly/dot-files)

## Installation

To install `splash-cli` you must use **npm** ( as always ) and do the following:

```bash
	$ npm i -g splash-cli
```

## Usage
![](https://cloud.githubusercontent.com/assets/11269635/21428079/7b24cc80-c858-11e6-8dc3-2e164d23804a.gif)
> All the photos are stored in the module directory

```bash
	$ splash
    # Start download random photo
    # and set it as wallpaper
```

## Options
- ### CLEAN
Clean all `splash-cli` photo caches.
```bash
	$ splash -c 		# or --clean
```

- ### PATH
Get the `/photos` path.
```bash
	$ splash -p 		# or --path
```

- ### INFO
Normal usage but when finish to download the photo prints **ID**, **EXIF** and **author url**.
```bash
	$ splash -i   # or --info

	# You can also combine it with --id
	$ splash -i --id EXAMPLE_PHOTO_ID
```
![info](https://cloud.githubusercontent.com/assets/16429579/21467813/7c7c4de4-c9fa-11e6-92db-adffb3e091a5.png)

- ### ID
Get the image from **ID**. You can get the image id on [unsplash website](https://unsplash.com) by opening an image and grab the **ID** from the url.
If you ever have downloaded the photo with **splash-cli** and is in the `/photos/` folder it will not be downloaded again.
```bash
	$ splash --id YJ9ygJAVzmO #no shortcut
```
> unsplash.com/?photo=`EXAMPLE_PHOTO_ID`

- ### Check
Check for updates.
```bash
	$ splash --check 		 #no shortcut
```


<br>
<br>

## TODO
- [x] Implement other flags.
- [ ] Electron application.
- [ ] Update screenshots and gifs in this file.

## Related
- [ora](https://github.com/sindresorhus/ora) - Elegant terminal spinner.
- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal.
- [unsplash](https://unsplash.com/) - Free [do whatever you want](https://unsplash.com/license) high-resolution photos.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Get or set the desktop wallpaper.

<h5 align="center">
Made with a  ⌨️   in 🇮🇹
</h5>
