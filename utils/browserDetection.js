const dataBrowser = [
  { subString: 'Edge', identity: 'MS Edge' },
  { subString: 'MSIE', identity: 'Explorer' },
  { subString: 'Trident', identity: 'Explorer' },
  { subString: 'Firefox', identity: 'Firefox' },
  { subString: 'Opera', identity: 'Opera' },
  { subString: 'OPR', identity: 'Opera' },
  { subString: 'Chrome', identity: 'Chrome' },
  { subString: 'Safari', identity: 'Safari' },
];

const searchBrowser = (userAgent, browserList) =>
  browserList.find((browser) => userAgent.indexOf(browser.subString) > -1);

const searchVersion = (userAgent, browser) => {
  const exp = `rv:(?:${browser.subString})?[ ]*([0-9]+(?:.[0-9]+)?)`;
  const matches = userAgent.match(new RegExp(exp));
  return matches ? matches[1] : '';
};

const detect = () => {
  const browser = searchBrowser(navigator.userAgent, dataBrowser);
  if (!browser) {
    return { name: 'Unknown', version: 'Unknown' };
  }
  const version =
    searchVersion(navigator.userAgent, browser) || searchVersion(navigator.appVersion, browser) || 'Unknown';
  return { name: browser.identity, version };
};

export default {
  detect,
};
