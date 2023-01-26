import { registerSW } from 'virtual:pwa-register';

window.addEventListener('load', () => {
  const pwaToast = document.querySelector('#pwa-toast');
  const pwaToastMessage = pwaToast.querySelector('#pwa-toast-message');
  const pwaCloseBtn = pwaToast.querySelector('#pwa-close');
  const pwaRefreshBtn = pwaToast.querySelector('#pwa-refresh');

  // eslint-disable-next-line prefer-const
  let refreshSW;

  const refreshCallback = () => refreshSW?.(true);

  const hidePwaToast = (raf = false) => {
    if (raf) {
      requestAnimationFrame(() => hidePwaToast(false));
      return;
    }
    if (pwaToast.classList.contains('refresh')) {
      pwaRefreshBtn.removeEventListener('click', refreshCallback);
    }
    pwaToast.classList.remove('show', 'refresh');
  };

  const showPwaToast = offline => {
    if (!offline) pwaRefreshBtn.addEventListener('click', refreshCallback);
    requestAnimationFrame(() => {
      hidePwaToast(false);
      if (!offline) pwaToast.classList.add('refresh');
      pwaToast.classList.add('show');
    });
  };

  pwaCloseBtn.addEventListener('click', () => hidePwaToast(true));

  refreshSW = registerSW({
    immediate: true,
    onOfflineReady() {},
    onNeedRefresh() {
      pwaToastMessage.innerHTML = 'New content available, click Refresh button to update.';
      showPwaToast(false);
    },
    onRegisteredSW(swScriptUrl) {
      console.log('SW registered: ', swScriptUrl);
    },
  });
});
