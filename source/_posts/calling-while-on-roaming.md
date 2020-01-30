---
title: Calling While On Roaming
date: 2020-01-31
featured_image: thumbnail.jpg
---
I've recently had an interesting (and [looooooooooong][long-joke-url]) conversation with my sister on phone calls, vs calls via an app, while roaming.

Well... I think it is a great idea for an post.

First things first.

## What is roaming?

I will try to keep things simple, you can search on [Wikipedia][roaming-wiki-url] for details.

You have a mobile phone __contract__ with a __network provider__. There are many network providers in the world; each one has a different __mobile network__.

The home of your network provider is called your "__home network__". Any other network you connect to is called a "__visitor network__". When you are on a Visitor Network you are __roaming__.

While roaming your normal tariffs do not apply and, depending on the laws (e.g. [EU Roaming Regulations][eu-roaming-regulations-wiki-url]) and contracts between providers, you may start paying extra.

## What is the difference between a normal phone call and calling via messaging apps?

While a lot of people call the two things "just making a phone call", there is an important difference between a "real phone call" and using messaging apps like [Google Duo][google-duo-url], [Telegram][telegram-url] or [WhatsApp][whatsapp-url] (no preference just following the lexicographical order).

When you are making a real phone call, i.e. you are using the actual phone in your smartphone, your voice is transmitted via the __mobile network__ (no data plan required), you are connected on, and routed towards the phone number your are using.
It is important to notice that this has nothing to do with any data plan you have or to the fact that you are connected to a __WiFi network__. A phone call depends solely on the phone network you are connected to. If your phone is connected to a WiFi network, but is not connected to the phone network, you cannot make a call. (I will not cover the case of operators with Call over WiFi, like [AT&T][at-and-t-wifi-calling-url] or [Google Fi][google-fi-calls-via-wifi-url], as it requires enabled smartphone and doesn't work in all countries)
What you are going to pay is dependent solely on your voice plan. If you have a finite amount of minutes you can call for free up to this limit and you will start paying extra after you go over it.

When you are using a messaging app to make a call, i.e. you are not using the actual phone in your smartphone, your voice is transmitted via the Internet. This is called [VOIP][voip-wiki-url] ([Voice Over Internet Protocol][voip-wiki-url]).
It is important to notice that this has nothing to do with any voice plan you have or that you are connected to a __phone network__. These kind of phone calls can work with either a __mobile network__ (data plan required) or via a __WiFi network__.
What you are going to pay is dependent solely on your data plan. If you are connected to a WiFi network you can call for free as much as you want, regardless to being connected to a mobile network. If you are connected only to a mobile network, and you have a finite amount of data in your plan (generally expressed in multiples of [GB][byte-wiki-url]s or [MB][byte-wiki-url]s), you can call for free up to when your phone reaches this data, not minutes, limit and you will start paying extra after you go over it.

## So what is the difference when I'm roaming?

Here it really depends on your plan. If you have __free minutes__ or __free data__ use it as you prefer. I will focus on the case in which you don't have them, or you have already ended them.

I will use the current (2020/01/31) [Swisscom roaming costs][swisscom-roaming-url] as an example.

The cost of a normal phone call is `0.60 CHF` per minute, while the cost of data is `4.90 CHF` for the first `200 MB` of traffic, which is `0.0245 CHF` per `MB`.
Looking fast at the numbers you may think that a phone call is way cheaper than data. In this case you are making a mistake: you are comparing a cost per minute to a cost per MB.

### How can I convert MB to Minutes?

> Well, you can't

But what you really want is...

### How many MB are used for a Minute of call?

It depends on the [bitrate][bitrate-wiki-url], i.e. the number of bits that are transmitted per unit of time.
The bitrate depends on many factors (e.g. [codec][codec-wiki-url], [encapsulation][encapsulation-wiki-url], ...), but I promised I would have avoided details.

I will use data on [WhatsApp][whatsapp-bitrate-url] that I was able to find.
I will use the worst case scenario: `64 kbps` (64 Kilo bits per second), which means that `8 KB` (or if you prefer `~0.008 MB`) are needed for each second of the call.

So the answer to our question is:

> `0.48 MB` per minute.

### So how can I compare them?

Let's compare them as cost per minute.

For a normal phone call, while roaming, we know the cost in our case `0.60 CHF` per minute.
For a phone call via a messaging app the cost is `~0.012 CHF` per minute (`0.48 MB` per minute multiplied by `0.0245 CHF` per `MB`).

This may be not fair as in the contract we are considering you pay `4.90 CHF` regardless of using the whole `200 MB` or not.
In this case we can consider how long can you call with this `4.90 CHF`.
With a normal phone call you can call for a bit more of `8` minutes, while with a can call via a messaging app you can call for more than `6` hours and `48` minutes.

## Conclusions

If your are roaming and you have a WiFi connection prefer using a messaging app, you will have no hard limits. Except for the time needed to sleep between two phone calls.

If you are roaming and you don't have a WiFi connection.

First,

> Check your voice and data roaming plan and run the number as we did above

Generally,

> Prefer messaging apps

In our case normal phone calls were a good choice only if we were certain not to make more than `8` minutes of total calls.

> I don't know you but when I call my [mom][phone-call-joke-url] it always takes more than `8` minutes

[bitrate-wiki-url]: https://en.wikipedia.org/wiki/Bit_rate
[codec-wiki-url]: https://en.wikipedia.org/wiki/Codec
[at-and-t-wifi-calling-url]: https://www.att.com/shop/wireless/features/wifi-calling.html
[byte-wiki-url]:https://en.wikipedia.org/wiki/Byte#Unit_multiples
[encapsulation-wiki-url]:https://en.wikipedia.org/wiki/Encapsulation_(networking)
[eu-roaming-regulations-wiki-url]: https://en.wikipedia.org/wiki/European_Union_roaming_regulations
[google-duo-url]: https://duo.google.com/about/
[google-fi-calls-via-wifi-url]: https://support.google.com/fi/answer/6157793?hl=en
[long-joke-url]: https://giphy.com/gifs/jake-detective-holt-V0PSrSAm7VxPW
[phone-call-joke-url]: https://giphy.com/gifs/cbc-schittscreek-schitts-creek-39jFXjz5MpJUMnqIP4
[roaming-wiki-url]: https://en.wikipedia.org/wiki/Roaming
[swisscom-roaming-url]: https://www.swisscom.ch/en/residential/plans-rates/inone-mobile/roaming.html
[telegram-url]: https://telegram.org/
[voip-wiki-url]:https://en.wikipedia.org/wiki/Voice_over_IP
[whatsapp-url]: https://www.whatsapp.com/
[whatsapp-bitrate-url]: https://www.quora.com/How-much-bandwidth-Kbps-does-a-WhatsApp-call-require
