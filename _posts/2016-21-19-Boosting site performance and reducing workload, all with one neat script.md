---
layout:     post
title:      Boosting site performance and reducing workload.
date:       2016-09-19 12:31:19
summary:    Performance driven sites are a key facet to web development, impaired loading speeds frustrates users and drives them away. Here we'll be creating a script that can be used time and time again to optimise your site assets which in turn improves loading speeds and creates a better user experience for users. The best thing about all this - it's completely automated - no extra work on your part!
categories:
---

  <!-- * How we’ll optimise
  * Install node and gulp
  * Getting Started
  * Concatenate CSS & JS
  * Watching our files for changes
  * Minify CSS
  * Minify JS
  * Change Filepaths
  * Conclusion -->

## Our Concern

Site performance is important, impaired loading speeds frustrates users and drives them away. [In fact, 39% say speed is more important than functionality and nearly 33% will abandon slow sites between one and five seconds](http://globenewswire.com/news-release/2010/09/07/429014/200875/en/New-Survey-From-Compuware-Gomez-Reveals-Consumers-Will-Quickly-Abandon-Slow-Websites.html).

Here’s the good news: Gulp can optimise our files for us, all at no additional effort on our part, killer! We can do this by assigning tasks to Gulp, it’s known as a task runner for this reason. We assign tasks via its gulpfile.js.

<!-- We can do this by assigning tasks to Gulp, it’s known as a task runner for this reason, stringing together a series of tasks will allow us to automate a large chunk of our optimisation process.  -->

Check it out; here we compare the results of our gulpfile script:

<table>
  <thead>
    <td>File Type</td>
    <td>Before: Un-optimised</td>
    <td>After: Optimised</td>
    <td>Saving</td>
  </thead>
  <tbody>
    <tr>
      <td>*.js</td>
      <td>136bytes</td>
      <td>127bytes</td>
      <td>7%</td>
    </tr>
    <tr>
      <td>*.css</td>
      <td>178 bytes</td>
      <td>125 bytes</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>all</td>
      <td>314 bytes</td>
      <td>252 bytes</td>
      <td>20%</td>
    </tr>
  </tbody>
</table>

This 20% filesize reduction equates to ..... on a 4G network and .... on a 3G network. We've just made x% of users online experience better! Geez! #naughty.

## Go gulp!

Below lists 2 optimisation techniques we can assign to Gulp (more to come when we introduce Sass). I’ve used the help of [Mozilla](https://hacks.mozilla.org/2012/12/fantastic-front-end-performance-part-1-concatenate-compress-cache-a-node-js-holiday-season-part-4/) to define these tasks and how they benefit site performance.

<b>Concatenation:</b> The goal of concatenation is to minimize the number of requests made to the server. Server requests are costly. The amount of time needed to establish an HTTP connection is sometimes more expensive than the amount of time necessary to transfer the data itself. Every request adds to the overhead that it takes to view your site and can be especially problematic on mobile devices where there is significant connection latency.

{% highlight html %}
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  <link rel="stylesheet" type="text/css" href="/css/layout.css">
  <link rel="stylesheet" type="text/css" href="/css/typeography.css">

  <!-- 3 http requests, files aren't concatinated. -->
{% endhighlight %}

{% highlight html %}
  <link rel="stylesheet" type="text/css" href="/dist/all.css">

  <!-- 1 http request, all files concatinated into one to create all.css -->
{% endhighlight %}

<b>Minification:</b> Minification is a process that transforms the original text by eliminating anything that is irrelevant to the browser. Transformations to both JavaScript and CSS start with the removal of comments and extra whitespace.

{% highlight css %}
  html{
    background: #e9e9e9;
  }

  /* Normal CSS (29 bytes) */
{% endhighlight %}

{% highlight css %}
  html{background:#e9e9e9;}

  /* Minified CSS (25 bytes) */
{% endhighlight %}

It is also worth showing that when combining these two processes, concatination &amp; minification, we are able to combine all files of the same type and then minify them to produce our final optimised file.

{% highlight html %}
  <link rel="stylesheet" type="text/css" href="/dist/all.min.css">
  <script type="text/javascript" src="/dist/all.min.js"></script>

  <!-- having all & min in the filename allows us to understand it's contents -->
{% endhighlight %}

## Install node and npm

If you haven’t done so already we need to install Node and npm. These are must have tools for any web developer. Here’s an article via treehouse on how to do just that: [How to Install Node.js and NPM on a Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac).

## Getting Started

[Download this base file structure](https://www.dropbox.com/s/mkpyd1v104qli1r/newsletter_giveaway.zip?dl=1). Put it in your Sites folder and access it via the terminal if this is a little daunting check this out: [Creating a Sites directory and accessing it](/2016/09/19/Creating-a-Sites-directory-and-accessing-it/).

{% highlight html %}
  cd ~/Sites/gulp_performance
{% endhighlight %}

### Updating package.JSON

*I have provided a package.json file but you can see how to create one from scratch [here](https://docs.npmjs.com/getting-started/creating-node-modules).*

Now let's add Gulp to our project with the following command.

{% highlight html %}
  npm install gulp --save-dev
{% endhighlight %}

This is how we will continue to add the packages neccessary to run our tasks. Next up we'll need a package that will concatinate our files together.

### Concatenate CSS & JS files

{% highlight html %}
  npm install gulp-concat --save-dev
{% endhighlight %}

So we have our firts package nstalled - we can see this in our gulpfile.js.So now we need to write the script that will run the tasks we need. Open your gulpfile.js. I have already populated this file using the packages we just installed. As you can see you need to require the packages at the top of the file, then go on to declare your tasks much like the one called ‘minify-css’. 

Whilst in the project directory, type ‘gulp’ in the terminal and there you go, we now have minified files in their own allocated directory titled dist. This will happen to all CSS files in your css directory.

### Watch for changes

All this is pretty neat but typing gulp in the terminal every time we save our CSS is’t ideal. So let’s sought this out. Gulp has a native watch function that’ll watch for changes to a file, ideal. Let’s amend our gulpfile.js to take advantage of this. Change the following lines of code:

Now let’s type gulp in your terminal again, nice, now let’s also change some CSS and check that gulp continues to run our tasks every time we save. It concatenates our files again every time we hit save - Awesome!

## Minify CSS

{% highlight html %}
  npm install gulp-clean-css --save-dev
{% endhighlight %}

Now let’s also get a similar ackage for our JS files.

## Minify JS

{% highlight html %}
  npm install gulp-uglify --save-dev
{% endhighlight %}

and amend our gulpfile.js to reflect the below by requiring the package at the top and adding the task amongst the others.

## Change Filepaths
When launching the website make sure the relative paths for the CSS & JS in the head all points to the optimised dist files instead of the unoptimised ones you need for development processes and you’re all good to go.

#Provide Finalised Gulpfile

## Conclusion

As you can see site performance is a sum of tiny efforts that accumilate to make a big difference. Our next article will go on to implement Sass which will open more doors for optimisation and performance. Stay tuned.



4 - creating a sites folder and accessing it via terminal

5 - blog - getting your machine developer ready - sublime, terminal, node, gulp, home-brew?




