---
layout:     post
title:      Welcome to your workbench
date:       2016-08-27 12:31:19
summary:    Getting your computer ready to build websites. My first 'mind blown' moment in web development.
categories: workflow
---


List of software you need to download:

Sublime Text
iTerm (command line)

So you know the basics, you know HTML markup and CSS syntax, the core skills to buidling a website.

Where do we go from here?

In this lesson I'll provide some resources and links to setting up your local dev environment. Now logically this is the best place to start seeing as we'll be setting up the foundations of your future workflow. However, this is also one of the more trickier / complicated / scary bits - the rewards are huge (I'll go into this later) - but don't let this stage deter you. You will only ever have to do this once and then you have it all set up and ready to roll.

So, we've got two options; easy & hard. I recommend using the hard option as it reflects the real world scenarios better and it doesn't depend on any 3rd party software (this is good because if the 3rd party updates or breaks then you're left back in the stone ages...not what you want mid project!).

So why all this fuss when I can already just create a 'Hello World!' index.html file and view it already?

The set up I'm introducing allows us to use PHP (wooooah now! PHP! This is beyond basiCSS, why you throwing PHP in there!) Okay okay but trust me on this, it has been the single most ah-ha moment in the whole of my career and has saved me a shit-tonne of time, like so much time it's silly.

Okay so what benefit am I going to get outa this?

Let me show you / let's get started!

We'll be setting up a MAMP (Mac Apache MySql PHP) local server on our machine - this is industry standard. Just as a side note there is also WAMP, LAMP & ..........

https://www.mamp.info

ORORORORO

(#doThis)

https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-osx-10-11-el-capitan/

You can follow the tutorial all the way to the end but at this stage I have zero need for mysql or any databases for that matter so feel free to miss out that part.

Definition: Remote =  not you, local = you.

This creates a server on our machines that mimicks that of a real server. So once we've built and developed a project in our local environment (on our machines) and then put all these files on a live server we can be comfortable knowing that the results should be exactly the same! Neat huh!

Okay cool, I'm not really sold what else you got?

Geez, okay. So with html you need to have a header section in each of your pages right? You know, the favicons, the links to stylesheets and meta descriptions (we should probably cover this! Header.php content that is). Well now we've got the ability to use php we can do things a little different.

Let's put all our header stuff in a file names header.php and let's include this file into the top of our index.php file. Cool. No let's view - shiiiiiiit, it's right there! liek it just showed up and all!

Wait a minute - so we could create an about.php, a contact.php, a youCanDoWhatYouWant.php, include the header.php in all of them just once and it'll appear in all of them  ??? Damn Straight - you're nailing it!

Oh man, but I just realised that I need to change the title tag from 'F*** PHP' to '<3 PHP <3', well funny that because now you only need to change it once in your header.php instead of having to go through all 30 files and amending them manually. Fist pump gangnam style.

Oh man - I'm pumped for this. Got anything else up your sleeve?

????????

Copyright dates?
Doc_header, header, footer, doc_footer

So what else is pretty cool about this is that it demonstartes how valuable 'seperation of concerns' can be. This is a phrase that'll show up a fair bit in web development. So speration of concerns - what does that mean? Shoudl I tell this now or wait until Sass files?




