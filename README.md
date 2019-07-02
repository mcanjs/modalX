# modalX
Pure Javascript Lightweight Modal

# Example code
```js
    var header = 'hello';
    var body = 'body';
    var footer = 'footer';

    modalX.init( {
        auto: true,
        time: 1000,
        button: '.button',
        doms: [
            header,
            body,
            footer
        ],
        classes: [
            'half-height',
            'modalHeight'
        ],
        closable: true
    } );
```

# Parameters
```js

/**
 *
 * @param {boolean} auto : Module auto trigger or button triggered.
 * @param {number} time : Module delay time
 * @param {string} button : If module not auto triggered button selector.
 * @param {boolean} closable : Modal Close Button Active or Deactivated
 * @param {array} doms : Modal Header, Body, Footer set dom
 * @param {array} classes : Modal Parent Set Class Multiple or Single
 */

```