---
layout:     post
title:      Creating a Sites directory and accessing it.
date:       2016-09-19 12:31:19
summary:    Removing the intimidation of the terminal, and just doing it all manually. 
categories:
---

## What we want to achieve

There's alot of intimidation behind the terminal, I get it, it freaks me out still to this day. This is why GUI's were created, to remove this matrix styled interface and replace it with one we, as people, can actually understand.

## Let's create a Sites folder manually

Open Finder (Mac users yep - sorry Windows)

Navigate to 'Go' at the top nav.

Hold down 'Alt' and the 'Library' option should become available.

Within this folder (also known as a directory) create a new Folder (directory) and name is 'Sites'.

It may be useful to drag/add this directory to the sidebar of your Finder window, this will ease navigation from here on out.

## And here it is via the terminal

Open Terminal

Now let's change directory (cd) to the home directory (~).

{% highlight html %}
  cd ~
{% endhighlight %}

Now let's make a new directory (mkdir) and call it Sites.

{% highlight html %}
  mkdir Sites
{% endhighlight %}

##Conclusion

There it is. We've just created a Sites folder which is where I keep all my project directories.