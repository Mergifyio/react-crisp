[![Mergify Status][mergify-status]][mergify]

[mergify]: https://mergify.io
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/Mergifyio/react-crisp&style=flat

# React-Crisp

React implementation for the messaging application [Crisp](https://crisp.chat/)

# Install

```shell
npm add react-crisp
or
yarn add react-crisp
```

# Usage

```javascript
/* Import the component */
import Crisp from 'react-crisp';

/* Insert the componenent */
<Crisp crispWebsiteId="the-website-id-given-by-crisp" />
```

# Identify the user and assign attributes

```javascript
<Crisp
    crispWebsiteId="the-website-id-given-by-crisp" // Required
    crispTokenId="a-unique-token-for-the-user"
    attributes={{
        "user:email": ["foo@bar.com"],
        "user:nickname": ["foo42"],
    }}
/>
```

For a complete list of attributes please see the [Crisp's Docs](https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/#2-set-a-value).

# Configuration

```javascript
<Crisp
    crispWebsiteId="the-website-id-given-by-crisp" // Required
    crispTokenId="a-unique-token-for-the-user"
    configuration={{
        "position:reverse": [true],
    }}
/>
```
For a complete list of parameters please see the [Crisp's Docs](https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/#2-changes-runtime-configuration).

# Safe mode

To prevent Crisp to emit errors when an exception occurs, you may enable the Safe Mode (see [Crisp's Docs](https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/#1-disable-warnings-amp-errors). With `react-crisp` it's done like this:
```javascript
<Crisp
    crispWebsiteId="the-website-id-given-by-crisp" // Required
    safeMode
/>
```

# Set `CRISP_RUNTIME_CONFIG`

```javascript
<Crisp
    crispWebsiteId="the-website-id-given-by-crisp" // Required
    crispRuntimeConfig={{
      session_merge: true,
    }}
/>
```

For more details about the variable `CRISP_RUNTIME_CONFIG` see [Crisp's Docs](https://help.crisp.chat/en/).
