---
id: 5900f36e1000cf542c50fe81
challengeType: 5
title: 'Problem 2: Even Fibonacci Numbers'
videoUrl: ''
localeTitle: 问题2：甚至斐波纳契数
---

## Description
<section id="description"> Fibonacci序列中的每个新术语都是通过添加前两个术语生成的。从1和2开始，前10个术语将是： <div style="text-align: center;"> 1,2,3,5,8,13,21,34,55,89 ...... </div>通过考虑Fibonacci序列中的值不超过第<code>n</code>项的项，找到偶数项的和。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code>应该返回188。
    testString: assert.strictEqual(fiboEvenSum(10), 188, '<code>fiboEvenSum(10)</code> should return 188.');
  - text: <code>fiboEvenSum(23)</code>应该返回60696。
    testString: assert.strictEqual(fiboEvenSum(23), 60696, '<code>fiboEvenSum(23)</code> should return 60696.');
  - text: <code>fiboEvenSum(43)</code>应该返回1485607536。
    testString: assert.strictEqual(fiboEvenSum(43), 1485607536, '<code>fiboEvenSum(43)</code> should return 1485607536.');
  - text: 您的函数未使用我们的测试值返回正确的结果。
    testString: assert.strictEqual(fiboEvenSum(18), 3382, 'Your function is not returning the correct result using our tests values.');
  - text: 您的函数应返回<code>even</code>数值。
    testString: assert.equal(fiboEvenSum(31) % 2 === 0, true, 'Your function should return an <code>even</code> value.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fiboEvenSum(n) {
  // You can do it!
  return true;
}

fiboEvenSum(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
