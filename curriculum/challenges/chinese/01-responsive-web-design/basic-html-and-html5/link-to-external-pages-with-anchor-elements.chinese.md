---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: 链接到具有锚元素的外部页面
---

## Description
<section id="description">您可以使用<code>anchor</code>元素链接到网页外部的内容。 <code>anchor</code>元素需要一个名为<code>href</code>属性的目标Web地址。他们还需要锚文本。这是一个例子： <code>&lt;a href=&quot;https://freecodecamp.org&quot;&gt;this links to freecodecamp.org&lt;/a&gt;</code>然后你的浏览器会显示文本<strong>“这个链接到freecodecamp.org”</strong>作为你可以点击的链接。该链接将带您到网址<strong>https://www.freecodecamp.org</strong> 。 </section>

## Instructions
<section id="instructions">创建一个链接到<code>http://freecatphotoapp.com</code> <code>a</code>元素，并将“猫照片”作为其<code>anchor text</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你<code>a</code>元素应该有“猫照片”的<code>anchor text</code> 。
    testString: assert((/cat photos/gi).test($("a").text()), 'Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".');
  - text: '你需要一个链接到<code>http://freecatphotoapp .com</code> <code>a</code>元素'
    testString: assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")), 'You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>');
  - text: 确保您<code>a</code>元素具有结束标记。
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, 'Make sure your <code>a</code> element has a closing tag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
