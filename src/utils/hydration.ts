// Utility to handle hydration mismatches caused by browser extensions

export const isBrowserExtensionPresent = () => {
  if (typeof window === 'undefined') return false;
  
  // Check for common browser extensions that modify DOM
  const body = document.body;
  return (
    body.hasAttribute('cz-shortcut-listen') ||
    body.hasAttribute('data-grammarly-shadow-root') ||
    body.hasAttribute('data-new-gr-c-s-check-loaded') ||
    body.hasAttribute('data-gr-ext-installed')
  );
};

export const suppressHydrationWarning = () => {
  if (typeof window === 'undefined') return false;
  return isBrowserExtensionPresent();
};
