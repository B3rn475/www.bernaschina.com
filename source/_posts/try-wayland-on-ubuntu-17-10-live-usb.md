---
title: Try Wayland on Ubuntu 17.10 Live USB
date: 2017-12-20
featured_image: thumbnail.jpg
alias: en/blog/software/try-wayland-ubuntu-1710-live-usb/
---
My current laptop is a Dell XPS 15 with a 3200x1800 screen.
While I'm at work I use two external 1920x1800 screens.

I've tried many Linux distributions, but none of them has a good support for multiple displays with different pixel densities.
So I have no choice __Windows here I come__.

After the news "[Wayland Confirmed as Default for Ubuntu 17.10][url-blog-wayland-default]" I was excited: one of the features of [Gnome3][url-homepage-gnome3] over [Wayland][url-homepage-wayland] is the support for my "not usual" configuration

I've downloaded the latest [ISO][url-ubuntu-iso] and created a Live USB and... __Reboot__

Strangely there was no scaling at all, the density of the main screen was copied to all the others.

Even worst I was not able to configure correctly my external monitors (on the left and one in portrait mode).

I fast [search][url-stackoverflow-x1-or-wayland] and with the command:

```bash
echo $XDG_SESSION_TYPE
```

I've found out I was still using X11.

In my opinion not the best choice to force me to install the full operating system to test one feature; especially now I can't afford to format and reconfigure the entire machine.

So...

Here is how I've tried Wayland on Ubuntu 17.10 Live USB without the need of installing.

__Warning: I can't assure this will actually work on your machine.__

## Step 1: Exit from the X11 Environment
You need to log out from the current session and go back to the login screen.

Once here press `CTRL + ALT + F6` to open a terminal that is not emulated in the windows manager.

Here log in with the user ubuntu, which is a default user with administrator privileges.

## Step 2: Stop GDM3
__GDM3__ is the __GNOME Display Manager__ and is the responsible to orchestrate the display server and the desktop environment.

To stop it run:

```bash
sudo /etc/init.d/gdm3 stop
```

## Step 3: Change GDM3 configurations
Configure __GDM3__ to use Wayland by editing the configuration file `/etc/gdm3/custom.conf`

Change the line

```conf
# Uncoment the line below to force the login screen to use Xorg
WaylandEnable=false
```

as follow

```conf
# Uncoment the line below to force the login screen to use Xorg
WaylandEnable=true
```

Also disable the automatic login feature.

Changing the line

```conf
AutomaticLoginEnable=true
```

as follow

```
AutomaticLoginEnable=false
```

## Step 4: Restart GDM3
To start __GDM3__ again it run

```bash
sudo /etc/init.d/gdm3 start
```

## Step 5: Go Back to the Graphical Environment
To go back to the graphical environment and try Wayland press `CTRL + ALT + F1`

At this point simply __log in__ and have fun.

[url-blog-wayland-default]: http://www.omgubuntu.co.uk/2017/08/ubuntu-confirm-wayland-default-17-10
[url-homepage-gnome3]: https://www.gnome.org/gnome-3
[url-homepage-wayland]: https://wayland.freedesktop.org/
[url-ubuntu-iso]: http://releases.ubuntu.com/17.10/
[url-stackoverflow-x1-or-wayland]: https://unix.stackexchange.com/questions/202891/how-to-know-whether-wayland-or-x11-is-being-used
