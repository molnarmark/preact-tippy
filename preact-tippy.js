import { Component, h } from 'preact';
import tippy from 'tippy.js';
import './node_modules/tippy.js/dist/tippy.css';

export default class Tippy extends Component {
  constructor(props) {
    super(props);
    const wrapper = h('div');
    const { name, config, title, children, className } = props;

    wrapper.children = children.map(elem => {
      elem.attributes = {};
      elem.attributes.class = className;
      return elem;
    });

    const id = `tippy-${name}`;
    wrapper.attributes = {
      title,
      id,
    };

    this.state = {
      wrapper,
      className,
      id,
      config: { ...tippy.defaults, ...config },
    };
  }

  componentDidMount() {
    const { id, config } = this.state;
    const element = document.getElementById(id);
    const instance = tippy(element, config);
  }

  render(props) {
    return this.state.wrapper;
  }
}
