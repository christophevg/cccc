# CCCC - Chaos Communication Camp Counter

Christophe VG (<contact@christophe.vg>)  
[https://github.com/christophevg/cccc](https://github.com/christophevg/cccc)

This is just a little bit of fun, trying to compute the number of hackers that
will roam [CCC15](https://events.ccc.de/camp/2015). Based on the information
found in the [target graphs](https://tickets.events.ccc.de/graph/), I want to
try to estimate the number of tickets sold, just to enjoy the vast growing
amount of hackers I will share the camp grounds with.

On the other hand, its also a case pro Open Data. It's an example of the not so
cool way of doing things these days. In stead of publishing a json file with
the data (# of tickets per category, # of t-shirts per category) and computing
a rendering on the client-side, the data is mangled into one representation on
the server-side, requiring other consumers to reengineer the representation to
an approximation of the original data.

I thought hackers would be on the forefront of the openness of where the web is
heading. Seems I was wrong :-( Odd ?!

Finally, it's also an excuse to have a little fun with JavaScript again, after
a long time, exercising a bit for things to come :-)

### A Word on [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

I intended this page to be a dynamic add-on to the existing graphs. It was a
while since I did some web development, and back in my days, you could just GET
everything you had access to. POST was restricted because allowing this to go
cross-[page,request,origin,...] could lead to problems. But GET ... not ...
until today.

**Done before we even started ;-)** - It seems however that the SVG data is not
allowed to be retrieved outside the original domain on its own, thanks to
browsers honoring CORS headers. So no live updates are possible, and I'm not
going to fetch and update the repository with a fresh cache every hour/day/...
Too bad ;-/

Personally, I find this a bit weird, to present data in a webpage, but restrict
it to that webpage. Other people clearly think differently, and I'm very
interested to find out why.

**BUT**... If you're using Safari (FireFox also blocks it, haven't tested
Chrome, but that comes with a command-line switch to disable it it seems,
YMMV), you can clone the repo and look at the page locally, because from a
local file the same-origin check isn't validated it appears. Minimal survival
commands:

```bash
$ git clone https://github.com/christophevg/cccc.git
$ cd cccc
$ git checkout gh-pages
$ open index.html
```

### So...

Since it's not possible to track the live data online, I've added a snapshot of
the data in this repository. When viewing this page online, these two SVG
graphs will be used. When viewing the page in e.g. Safari on your local file
system (as shown above), the data will be pulled live from the ticket shop.

Visit the [online static version](https://christophevg.github.io/cccc)...