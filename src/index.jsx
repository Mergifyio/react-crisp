import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function pushCrisp(method, parameters) {
  if (Object.keys(parameters).length > 0) {
    const items = Object.entries(parameters);
    items.map((item) => {
      const [key, value] = item;
      return global.$crisp.push([method, key, value]);
    });
  }
}

function Crisp(props) {
  const {
    crispWebsiteId,
    crispTokenId,
    crispRuntimeConfig,
    safeMode,
    configuration,
    attributes,
  } = props;

  const previousCrispWebsiteId = usePrevious(crispWebsiteId);
  const previousCrispTokenId = usePrevious(crispTokenId);
  const previousCrispRuntimeConfig = usePrevious(crispRuntimeConfig);
  const previousSafeMode = usePrevious(safeMode);

  if (previousCrispWebsiteId && previousCrispWebsiteId !== crispWebsiteId) {
    throw Error("crispWebsiteId can't be changed");
  }
  if (previousCrispTokenId && previousCrispTokenId !== crispTokenId) {
    throw Error("crispTokenId can't be changed");
  }
  if (previousCrispRuntimeConfig && previousCrispRuntimeConfig !== crispRuntimeConfig) {
    throw Error("crispRuntimeConfig can't be changed");
  }
  if (previousSafeMode && previousSafeMode !== safeMode) {
    throw Error("safeMode can't be changed");
  }

  if (global.$crisp === undefined) {
    // Must be call before any other $crisp method
    // https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/#1-disable-warnings-amp-errors
    global.$crisp = [['safe', safeMode]];
  }

  // Custom configuration
  pushCrisp('set', attributes);
  pushCrisp('config', configuration);

  const scriptUrl = 'https://client.crisp.chat/l.js';
  const scripts = document.querySelector(`script[src='${scriptUrl}']`);
  if (scripts === null) {
    // CRISP_WEBSITE_ID, CRISP_TOKEN_ID and CRISP_RUNTIME_CONFIG
    // must be declared before inserting the script
    // https://help.crisp.chat/en/article/how-to-restore-chat-sessions-with-a-token-c32v4t/
    // https://help.crisp.chat/en/article/how-to-use-crisp-with-reactjs-fe0eyz/

    global.CRISP_WEBSITE_ID = crispWebsiteId;
    global.CRISP_TOKEN_ID = crispTokenId;
    global.CRISP_RUNTIME_CONFIG = crispRuntimeConfig;

    // We are good start Crisp
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = 1;
    document.head.appendChild(script);
  }

  return <>no ways</>;
}

Crisp.propTypes = {
  crispWebsiteId: PropTypes.string.isRequired,
  crispTokenId: PropTypes.string,
  crispRuntimeConfig: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ])),
  attributes: PropTypes.objectOf(PropTypes.array),
  configuration: PropTypes.objectOf(PropTypes.array),
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
