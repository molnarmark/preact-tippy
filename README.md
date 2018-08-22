# 🚧 Preact Tippy

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Tippy.js component for Preact.

### Getting Started

Install the package by running:
```
npm install --save preact-tippy
```

### Example
```javascript
import { Component } from 'preact';
import Tippy from 'preact-tippy';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tippy: {
        animation: 'perspective',
        position: 'right'
      }
    }
  }

  render() {
    return (
      <div>
        <Tippy
        title="Hi there. I'm powered by Tippy.js hidden inside Preact."
        className="button"
        name="tester"
        config={this.state.tippy}>
          <button>Hover me.</button>
          <button>Hover me.</button>
          <button>Hover me.</button>
        </Tippy>
      </div>
    );
  }
}
```

### API

Every [Tippy](https://atomiks.github.io/tippyjs/v1/index.html) configuration option is available through the `config` prop.\
You can check out every option [here](https://atomiks.github.io/tippyjs/v1/index.html#all-settings).\

#### Available Props
  - title: The text that will be inside the popup.
  - className: A class that every child element inside a `Tippy` component will get.
  - name: A name for your `Tippy` component. This will wrap the component in an element marked with the ID `tippy-<name>`.
  - config: Configuration object for the popup.

### License
- MIT