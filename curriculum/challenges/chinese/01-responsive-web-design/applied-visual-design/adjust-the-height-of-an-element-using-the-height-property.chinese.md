---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: ''
localeTitle: 使用height属性调整元素的高度
---

## Description
<section id="description">您可以使用CSS中的<code>height</code>属性指定元素的<code>height</code> ，类似于<code>width</code>属性。这是一个将图像高度更改为20px的示例： <blockquote> img { <br>身高：20px; <br> } </blockquote></section>

## Instructions
<section id="instructions">将<code>height</code>属性添加到<code>h4</code>标记并将其设置为25px。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应将<code>h4</code> <code>height</code>属性更改为25像素的值。
    testString: assert($('h4').css('height') == '25px', 'Your code should change the <code>h4</code> <code>height</code> property to a value of 25 pixels.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;

  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
