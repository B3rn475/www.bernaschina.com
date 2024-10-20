---
title: Cloud9 on Raspberry Pi
date: 2013-08-18
featured_image: thumbnail.jpg
structured_data:
  '@type': "BlogPosting"
  image:
    - thumbnail_amp.jpg
alias:
- en/blog/raspberrypi/
- it/blog/raspberrypi/
- en/blog/raspberrypi/cloud9-raspberry-pi/
- it/blog/raspberrypi/cloud9-su-raspberry-pi/
---
During the last period I've learned a lot about boards that can be used in Embedded Projects ([Arduino][url-arduino-website], [Raspberry Pi][url-raspberry-pi-website], [BeagleBone Black][url-beagleboard-website] ...).
The last one has an interesting feature that has caught my attention.
The possibility to install a web ide that can be accessed from other devices.

## The question

__Can I do that with the Raspberry Pi that I already own?__
![Raspberry Pi 1 Model B][url-raspberry-pi-image-file]

## The Solution
First of all we need an ide, I've chosen [Cloud9][url-cloud9-repository] that is the open source project on which is based [c9.io][url-cloud9-website].

Cloud9 is developed using various technologies, the most important is [Node.js][url-nodejs-website].

I've found a lot of tutorial about installing Cloud9 on Raspberry Pi, but due to the fast evolving situation I've found a lot o problems during the process.
For this reason I've decided to write this tutorial to avoid other people to waste time.

### First Step: install the OS on the SD
I've decided to use Debian Wheezy given its stability and diffusion.
You can find it (With installation instructions) at [raspberrypi.org][url-raspberry-pi-downloads]

### Second Step: install Node.js
I was tempted to use the fast and recent version `0.10.x` or the one from the repository `0.6.x`, but I've chosen to use `0.8.17` for a simple reason, using too old or too new versions of Node.js Cloud9 does not install correctly, at least I've failed in doing so (if you have other experiences let me know).

```bash
sudo apt-get update && sudo apt-get -y upgrade
sudo apt-get -y install build-essential openssl libssl-dev pkg-config libxml2-dev
cd ~
wget http://nodejs.org/dist/v0.8.17/node-v0.8.17-linux-arm-pi.tar.gz
cd /usr/local
sudo tar xzvf ~/node-v0.8.17-linux-arm-pi.tar.gz --strip=1
export NODE_PATH="/usr/local/lib/node_modules"
```

This commands do update the system, they install necessary prerequisites, they download Node.js e and they install it in the folder `/usr/local`

### Third Step: download Cloud9
For this step we use git to download the latest sources from github.

```bash
git clone https://github.com/ajaxorg/cloud9.git cloud9
```

### Fourth Step: install node-libxml
The standard version of __node-libxml__ is not compatible with Raspberry Pi.
For this reason we download the sources and adapt them in order to compile correctly.

```bash
cd cloud9 && mkdir node_modules && cd node_modules
git clone https://github.com/ajaxorg/node-libxml.git libxml
cd libxml && git checkout v0.0.7 && git submodule init && git submodule update
nano support/o3/wscript
```

At the end of this step the nano editor will show up.
It is necessary to delete the configuration `-msse2` from the file (you can find it in a couple of well visible places).
To save it `CTRL+X` followed by `Y`

We will now install node-libxml globally (`-g`) (it requires from 15 to 20 minutes)

```bash
sudo npm install -g
```

### Fifth Step: install Cloud9
During this step we will use __npm__.

_Personal suggestion, before start the installation make a copy of the folder libxml just in case something goes wrong during the process (I've had problems 2 times, while the third it worked like a charm)._

Run:

```bash
cd ~/cloud9
sudo npm install
```

### Fifth Step _bis_: if something goes wrong
If something goes wrong clean the folder `node_modules` and copy `libxml` in place.

Now try again:

```bash
sudo rm -r ./node_modeles/*
cp ./libxml ./node_modules/libxml
sudo npm install
```

### Sixth Step: fix vfs-local
Stopping here, you will encounter a problem.
A continuos message which states `File already exists`.
To avoid this, we will revert `vfs-local` back to a previous version.

```bash
rm -r ./node_modules/vfs-local
npm install vfs-local@0.3.4
```

### The end of our journey
If karma has helped you (if you have trust in karma), if some saints are watching you (if you are a religious person), or just if you are lucky you will have on your Raspberry Pi a working installation of Cloud9.
You just need to know how to start it:

```bash
bin/cloud9.sh -l 0.0.0.0 -w ~/git/
```

Replace `~/git` with the folder you want to use as workspace, or delete `-w ~/git` allowing Cloud9 to move around in the entire File System.

To access Cloud9 just open your browser (is better Chrome, Chromium or Firefox)  and surf to the address `http://<raspberry pi ip>:3131/`

Here are the links to a couple of tutorial I've followed to build mine:

[Stack Overflow: Cloud9 Tries To Recreate Settings File](http://stackoverflow.com/questions/18205837/cloud9-tries-to-recreate-settings-file)

I hope this guide has helped you, do not hesitate to post questions, clarification or just to say hello.

[url-arduino-website]: http://www.arduino.cc/
[url-raspberry-pi-website]: http://www.raspberrypi.org/
[url-raspberry-pi-downloads]: http://www.raspberrypi.org/downloads/
[url-beagleboard-website]: http://beagleboard.org/Products/BeagleBone%20Black/
[url-cloud9-repository]: https://github.com/ajaxorg/cloud9/
[url-cloud9-website]: https://c9.io/
[url-raspberry-pi-image-file]: ./raspberry_pi_1_b.jpg
