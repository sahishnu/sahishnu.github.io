import {Component} from 'react';

class HideOnCover extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, show: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  handleScroll = () => {
    const windowHeight = this.state.height;
    const scrollHeight = window.scrollY;
    if (scrollHeight >= windowHeight) {
      this.setState({show: true});
    } else {
      this.setState({show: false});
    } ;
  }

  render() {
    return (this.state.show) ?
      this.props.children
      : null;
  }
}

export default HideOnCover;