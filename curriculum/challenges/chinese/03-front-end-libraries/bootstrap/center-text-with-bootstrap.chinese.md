---
id: bad87fee1348bd8acde08812
title: Center Text with Bootstrap
challengeType: 0
videoUrl: ''
localeTitle: 中心文本与引导程序
---

## Description
<section id="description">现在我们正在使用Bootstrap，我们可以将我们的标题元素集中在一起，使其看起来更好。我们需要做的就是将类<code>text-center</code>添加到我们的<code>h2</code>元素中。请记住，您可以通过用空格分隔每个类来为同一个元素添加几个类，如下所示： <code>&lt;h2 class=&quot;red-text text-center&quot;&gt;your text&lt;/h2&gt;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应用类<code>text-center</code>应该使<code>h2</code>元素居中
    testString: assert($("h2").hasClass("text-center"), 'Your <code>h2</code> element should be centered by applying the class <code>text-center</code>');
  - text: 您的<code>h2</code>元素仍应具有类<code>red-text</code>
    testString: assert($("h2").hasClass("red-text"), 'Your <code>h2</code> element should still have the class <code>red-text</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
