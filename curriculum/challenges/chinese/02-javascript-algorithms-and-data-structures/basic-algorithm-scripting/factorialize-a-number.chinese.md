---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 对一个数字进行推理
---

## Description
<section id="description">返回提供的整数的阶乘。如果整数用字母n表示，则阶乘是所有小于或等于n的正整数的乘积。因子通常用简写符号<code>n!</code>表示<code>n!</code>例如： <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>只有大于或等于零的整数才会被提供给该函数。如果卡住，请记得使用<a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorialize(5)</code>应该返回一个数字。
    testString: assert(typeof factorialize(5) === 'number', '<code>factorialize(5)</code> should return a number.');
  - text: <code>factorialize(5)</code>应该返回120。
    testString: assert(factorialize(5) === 120, '<code>factorialize(5)</code> should return 120.');
  - text: <code>factorialize(10)</code>应返回3628800。
    testString: assert(factorialize(10) === 3628800, '<code>factorialize(10)</code> should return 3628800.');
  - text: <code>factorialize(20)</code>应该返回2432902008176640000。
    testString: assert(factorialize(20) === 2432902008176640000, '<code>factorialize(20)</code> should return 2432902008176640000.');
  - text: <code>factorialize(0)</code>应该返回1。
    testString: assert(factorialize(0) === 1, '<code>factorialize(0)</code> should return 1.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorialize(num) {
  return num;
}

factorialize(5);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
