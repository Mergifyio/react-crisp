import PropTypes from 'prop-types';
import React from 'react';

function insertScript() {
  const script = document.createElement('script');

  script.src = 'https://client.crisp.chat/l.js';
  script.async = 1;

  document.head.appendChild(script);
}
class Crisp extends React.Component {
  constructor(props) {
    super(props);

    this.setUpCrisp = this.setUpCrisp.bind(this);
    this.setAttributes = this.setAttributes.bind(this);
    this.setSafeMode = this.setSafeMode.bind(this);
  }

  componentDidMount() {
    this.setUpCrisp();
    this.setAttributes();
    this.setSafeMode();
    insertScript();
  }

  setUpCrisp() {
    const { crispWebsiteId, crispTokenId, crispRuntimeConfig } = this.props;

    window.$crisp = [];

    if (crispWebsiteId) {
      window.CRISP_WEBSITE_ID = crispWebsiteId;
    }
    if (crispTokenId !== '') {
      window.CRISP_TOKEN_ID = crispTokenId;
    }
    if (crispRuntimeConfig.length > 0) {
      window.CRISP_RUNTIME_CONFIG = crispRuntimeConfig;
    }
  }

  setAttributes() {
    const { attributes } = this.props;

    if (attributes !== {}) {
      const categories = Object.entries(attributes);

      categories.map((category) => {
        const [key, value] = category;
        return window.$crisp.push(['set', key, value]);
      });
    }
  }

  setSafeMode() {
    const { safeMode } = this.props;
    window.$crisp.push(['safe', safeMode]);
  }

  render() {
    return (
      ''
    );
  }
}
Crisp.propTypes = {
  crispWebsiteId: PropTypes.string.isRequired,
  crispTokenId: PropTypes.string,
  crispRuntimeConfig: PropTypes.objectOf(PropTypes.element),
  attributes: PropTypes.objectOf(PropTypes.node),
  safeMode: PropTypes.bool,
};
Crisp.defaultProps = {
  crispTokenId: '',
  crispRuntimeConfig: {},
  attributes: {},
  safeMode: false,
};

export default Crisp;
