AngularJS1 Directive PreLink Demo
=================================

`preLink`在Angular中用的并不多，因为大多数情况下，我们使用`link`（即`postLink`）就已经足够；
就算有一些代码需要写在`preLink`中，实际上也可以写在`controller`中。

想破了头，总算想到一种情况：在一个directive中，需要根据其它的directive做一些初始化工作，方便自己的子directive，这时只能在`preLink`中实现（结合`require`），
因为在别的方法中，要么拿不到（比如`controller`），要么执行时机不对（比如`link`），`preLink`就是最好的选择。

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- <https://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/>
- <https://www.undefinednull.com/2014/07/07/practical-guide-to-prelink-postlink-and-controller-methods-of-angular-directives/>
- AngularJS1: <https://angularjs.org/>
- directive api: <https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object>
- $element api: <https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite>