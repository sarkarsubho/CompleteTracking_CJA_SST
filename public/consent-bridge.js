(function () {
  var KEY = "site_consent_preferences";

  function readSaved() {
    try {
      var value = localStorage.getItem(KEY);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      return null;
    }
  }

  window.registerConsentCallback = function (callback) {
    window.__siteConsentCallback = callback;

    var saved = readSaved();
    if (saved) callback(saved);
  };

  window.setSiteConsent = function (choice) {
    var consent = {
      analytics_storage:
        choice.analytics_storage === "granted" ? "granted" : "denied",
      ad_storage: choice.ad_storage === "granted" ? "granted" : "denied",
      ad_user_data: choice.ad_user_data === "granted" ? "granted" : "denied",
      ad_personalization:
        choice.ad_personalization === "granted" ? "granted" : "denied",
    };

    try {
      localStorage.setItem(KEY, JSON.stringify(consent));
    } catch (error) {
      // Apply the current choice even if persistence fails.
      console.error("Could not save consent:", error);
    }

    if (window.__siteConsentCallback) {
      window.__siteConsentCallback(consent);
    }

    window.dispatchEvent(
      new CustomEvent("site-consent-changed", {
        detail: consent,
      }),
    );

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "site-consent-changed",
      analytics_storage: consent.analytics_storage,
      ad_storage: consent.ad_storage,
      ad_user_data: consent.ad_user_data,
      ad_personalization: consent.ad_personalization,
    });
  };

  window.getSavedSiteConsent = readSaved;
})();
