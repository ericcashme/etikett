const handlePageView = (pagePath) => {
  const ignoredLocations = ['/', '/meu-carrinho'];

  if (window.dataLayer && !ignoredLocations.includes(pagePath)) {
    window.dataLayer.push({
      event: 'pageview',
      virtualUrl: pagePath,
    });
  }
};

export default handlePageView;
