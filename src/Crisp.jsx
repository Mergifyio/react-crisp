import PropTypes from 'prop-types';
import React from 'react';

function insertScript() {
  const scriptUrl = 'https://client.crisp.chat/l.js';
  const scripts = document.querySelector(`script[src='${scriptUrl}']`);
  if (scripts === null) {
    const script = document.createElement('script');

    script.src = scriptUrl;
    script.async = 1;

    document.head.appendChild(script);
  }
}

function pushCrisp(method, parameters) {
  if (Object.keys(parameters).length > 0) {
    const items = Object.entries(parameters);
    items.map((item) => {
      const [key, value] = item;
      return global.$crisp.push(['set', key, value]);
    });
  }
}

class Crisp extends React.Component {
  constructor(props) {
    super(props);

    this.configCrisp = this.configCrisp.bind(this);
  }

  componentDidMount() {
    const {
      crispWebsiteId, crispTokenId, crispRuntimeConfig, safeMode,
    } = this.props;

    global.$crisp = [];

    // CRISP_WEBSITE_ID, CRISP_TOKEN_ID and CRISP_RUNTIME_CONFIG
    // must be declared before inserting the script
    // https://help.crisp.chat/en/article/how-to-restore-chat-sessions-with-a-token-c32v4t/
    // https://help.crisp.chat/en/article/how-to-use-crisp-with-reactjs-fe0eyz/

    global.CRISP_WEBSITE_ID = crispWebsiteId;

    global.CRISP_TOKEN_ID = crispTokenId;

    global.CRISP_RUNTIME_CONFIG = crispRuntimeConfig;

    insertScript();

    // Must be call before any other $crisp method
    // https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/#1-disable-warnings-amp-errors
    global.$crisp.push(['safe', safeMode]);
  }

  componentDidUpdate() {
    this.configCrisp();
  }

  configCrisp() {
    const { configuration, attributes } = this.props;

    pushCrisp('set', attributes);
    pushCrisp('config', configuration);
  }

  render() {
    return <></>;
  }
}

Crisp.propTypes = {
  crispWebsiteId: PropTypes.string.isRequired,
  crispTokenId: PropTypes.string,
  crispRuntimeConfig: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])),
  attributes: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])),
  configuration: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])),
  safeMode: PropTypes.bool,
};
Crisp.defaultProps = {
  crispTokenId: '',
  crispRuntimeConfig: {},
  attributes: {},
  configuration: {},
  safeMode: false,
};

export default Crisp;
