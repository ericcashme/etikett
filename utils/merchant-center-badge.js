/* eslint-disable no-underscore-dangle */

import removeNode from './removeNode';

export function renderMerchantCenterBadge() {
  if (document.getElementById('renderBadge-scripts')) return;
  const optScript = document.createElement('script');
  optScript.type = 'text/javascript';
  optScript.id = 'renderBadge-scripts';
  optScript.async = true;
  document.body.appendChild(optScript);
  optScript.src = '//apis.google.com/js/platform.js?onload=renderBadge';
}

export function setMerchantCenterBadge() {
  if (document.getElementById('renderBadge-load')) return;
  window.renderBadge = () => {
    const ratingBadgeContainer = document.createElement('div');
    ratingBadgeContainer.setAttribute('id', 'renderBadge-load');
    document.body.appendChild(ratingBadgeContainer);
    window.gapi.load('ratingbadge', () => {
      window.gapi.ratingbadge.render(ratingBadgeContainer, {
        // REQUIRED
        merchant_id: 10501793,
        // OPTIONAL
        position: 'BOTTOM_LEFT_DIALOG',
      });
    });
  };
  window.___gcfg = {
    lang: 'pt-BR',
  };
}

export function removeMerchantCenterBadge() {
  removeNode(document.getElementById('renderBadge-scripts'));
  removeNode(document.getElementById('renderBadge-load'));
}
