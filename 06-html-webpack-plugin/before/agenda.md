# HTML Webpack Plugin

1. Using a custom template

2. Adding images to the HTML template

3. Creating multiple HTML files

4. Code sharing with html-loader

5. Default template
   https://github.com/jaketrent/html-webpack-template/blob/86f285d5c790a6c15263f5cc50fd666d51f974fd/index.html





Useful snippets

template.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Template</title>
  </head>
  <body>
    <h1>Hello Webpack HTML Plugin</h1>
    <p>I can use any HTML file I want</p>
    <p>AND it will automatically use lodash template engine so this works:
    <pre>1 + 1 = <%= 1 + 1 %></pre>
    <img src="<%= require('../img/puppy1.jpg') %>" />
    </p>
    <%= require('html-loader!./footer.html') %>
  </body>
</html>
```

about.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>About</title>
  </head>
  <body>
    <h1>About Us</h1>
    <%= require('html-loader!./footer.html') %>
  </body>
</html>
```

body.html

```
<h1>Hello Webpack</h1>
<p>This is the body of my cool HTML that is generated automatically</p>
```

footer.html
```
<p>Created By Ynon Perek</p>
```
