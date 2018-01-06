# RapidI18n
Small library that provides you with methods necessary to localize your application. It stores the texts statically which means that you can use it anywhere without needing to store an instance of any class and can be painlessly integrated into any view framework like React or Vue.js.

## Installation
`npm install rapidi18n`

`yarn add rapidi18n`

## Usage
All you need to do is import Rapid into your project and set the texts it should use:

```js
import {RapidI18n, t} from 'rapidi18n';

RapidI18n.setTexts({
  foo: 'bar'
})
```

And you're done! Now you can use it like that:

```js
t('foo')
```

You can import and use the `t` function whenever and wherever you want as long as you set the texts at the very beginning of your appliation's runtime.

---

More advanced features like variables are also supported:

```js
RapidI18n.setTexts({
  hello: 'Hello, {name}!'
})

t('hello', {name: 'John'})
```

Or if you don't want to use special names:

```js
RapidI18n.setTexts({
  hello: 'Hello, {0}!'
})

t('hello', ['John'])
```

---

You can store texts in a separate files and set them dynamically based on e.g. user preference if you want.

```js
RapidI18n.setTexts(require('languages/' + langCode))
```

## Framework integration
RapidI18n can be easily integrated into frameworks like React:

```js
import RapidI18n from 'rapidi18n';
RapidI18n.setTexts({
  welcomeMessage: 'Hello, {0}!'
});
```

```js
import {t} from 'rapidi18n';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="welcome-message">
        {t('welcomeMessage', [name])}
      </div>
    )
  }
}
```

## License
MIT.
