---
id: 8d1923c8c441eddfaeb5bdef
title: Size of the Set
challengeType: 1
videoUrl: ''
localeTitle: 套装的大小
---

## Description
<section id="description">在本练习中，我们将为Set创建一个size函数。此函数应命名为<code>this.size</code> ，它应返回集合的大小。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Set</code>类应该有一个<code>size</code>方法。
    testString: assert((function(){var test = new Set(); return (typeof test.size === 'function')}()), 'Your <code>Set</code> class should have a <code>size</code> method.');
  - text: <code>size</code>方法应返回集合中的元素数。
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a');return (test.size() === 1)}()), 'The <code>size</code> method should return the number of elements in the collection.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // change code below this line
    // change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
