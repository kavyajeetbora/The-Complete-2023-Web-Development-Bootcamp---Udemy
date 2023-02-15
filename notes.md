# Introduction to html

## Writing our first web page

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>First Web Page</title>
    </head>

    <body>
        <center>
        <hr size="3" noshade>
        <h1>THE ADVENTURES OF SHERLOCK HOLMES</h1>
        <h3>BY</h3>
        <h2>SIR ARTHUR CONAN DOYLE</h2>
        <hr size="3" noshade>
        </center>
    </body>
</html>
```

## Breaking down the above code

- First element is `DOCTYPE` which tells the browser that this web page is written in html version 5.  In other words, This tag basically tells the browser which html version it is written in. The latest one is html 5-->

- Then we have the `html` where all the web page structure is. Also specifying the language of the website is essential by providing it as `lang = "en"`


## Two types of elements in HTML
- block elements: 
    - A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
    - A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
    - However we can alter the width of the block element
    - Two commonly used block elements are `<p>` and `<div>`.
    - The `<p>` element defines a paragraph in an HTML document.
    - The `<div>` element defines a division or a section in an HT ML document.
- inline elements:
    - An inline element does not start on a new line.
    - An inline element only takes up as much width as necessary.
    - that means we cannot alter the width of the inline elements
    - This is a `<span>` element inside a paragraph.
- inline-block elements:
    - with inline-block elements we can adjust the width of a inline element

- None: 
    - Setting the `display:none` hides the element. Alternatively we can also use `visibility`. The only difference between `visibility` and `display:none` property is that the `visibility` property keeps the dimension of the element at place.



## Setting font size

There are 2 ways of setting the font size: one is **static** and other one is **dynamic**

1. Static: `font-size: 100px;` sets the font size and it is static. No matter which settings or zoom you are using in your browser, the font size remains same
2. Dynamic: `font-size:100%;` or `font-size:1em;` both are equivalent to 16px, but are dynamic to way you set up the font size of the browser. Another way of setting `font-size:1rem;` 

## Important References 

1. [MDN Documentation](https://developer.mozilla.org/en-US/): Where we can learn about the HTML,CSS and Javascript

2. [Color Palettes for web designers and artists](https://colorhunt.co/)

3. [Sample website showing the resume of a web designer](https://web.archive.org/web/20180819202235js_/http://seanhalpin.io/)


## Hiearchy of CSS selectors

```html
<h1 id="heading" class="title" style="color:orange">Hello World</h1>
```
```css
h1 {
    color:red;
    color:green;
}

.title {
    color:yellow;
}

#heading {
    color: blue;
}
```

Here in this code the priority of styling will be:
1. Inline style that will override all the other styles
2. css id will override next
3. css class tag
4. html element tag
    - Inside this the styles will be read top to bottom, so color green will override the red

 
