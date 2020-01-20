+++
title = "How to Make Shortcodes in Zola"
date = 2020-01-20
description = "Shortcodes are a nifty way of inserting a block of formated block into your Markdown"
+++

I am enjoying rebuilding the site with Zola so far and as I mentioned previously, I'm currently moving my street photographs from its Tumblr.
These reposts have a certain structure to it:

- The photograph
- Text for the `alt` attribute
- Image caption
- Post date
- Description as supplementary text (optiona)

So I thought `shortcodes` fit the bill for this kind of content block. I used [shortcodes in Hugo](https://gohugo.io/content-management/shortcodes/) before to embed YouTube videos in [our food blog](https://ulampinoy.com), and glad that [Zola has shortcodes]((https://www.getzola.org/documentation/content/shortcodes/)) feature too. Very cool!



## Creating the Shortcode

- Make a new HTML file in the `template/shortcodes/` directory.
- Start with a regular HTML block. In my case, I grabbed the block from a recent post and paste it on the newly created `bannerImage.html`:

```html
<div class="bannerImage kalye">
    <figure>
        <img src="/images/kalye/wet-floors.jpg" alt="A photograph of a man seated in a Metro train solving a Suduko puzzle on a newspaper.">
        <figcaption>
            <p class="caption">Wet Floors</p>
            <p class="postdate">05 June 2012</p>
            <blockquote>
                <p>She would yell to anyone approaching the “wet floor” zone. Oh yeah, she did yell at me not to step in to the zone.

                She then afterwards dried the floor by hands – using the “wet floor” sign.
                </p>
            </blockquote>
        </figcaption>
    </figure>
</div>
```
- I then replaced the literal contents with these template variables:
1. `{{ img }}`
2. `{{ imgDesc }}`
3. `{{ imgCaption }}`
4. `{{ imgDate }}`
5. `{{ imgQuote }}` this is an optional entry

```html
<div class="bannerImage kalye">
    <figure>
        <img
        src="/images/kalye/{{ img }}.jpg"
        alt="{% if alt %}{{ imgDesc }}{% endif %}">
        <figcaption>
            <p class="caption">{{ imgCaption }}</p>
            <p class="postdate">{{ imgDate }}</p>
            {% if quote %}
            <blockquote>
                <p>
                    {{ imgQuote }}
                </p>
            </blockquote>
            {% endif %}
        </figcaption>
    </figure>
</div>
```

And now, this is how I use the shortcode for the Tumblr repost in Markdown:

```md
{{ bannerImage(
    img="wait-for-go"
    imgDesc="A group of women waiting for the go sign to cross the street"
    imgCaption="While waiting for the go"
    imgDate="06 June 2012"
)}
```

It's tidier than just dropping the HTML block in Markdown.

Since I'm on it, I also customized the built-in **shortcode for YouTube videos** to accept two arguments such as the `id` and an optional selector `class`:

```jinja2
<div {% if class %}class="{{class}}" {% endif %}>
    <iframe src="https://www.youtube-nocookie.com/embed/{{id}}
    {% if autoplay %}?autoplay=1{% endif %}"
    webkitallowfullscreen
    mozallowfullscreen
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
</div>
```
