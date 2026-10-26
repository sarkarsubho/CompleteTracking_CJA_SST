import { useEffect, useState } from "react";
import "./CookieBanner.css";

const DENIED = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.getSavedSiteConsent?.();

    setVisible(!saved);
    setReady(true);
  }, []);

  function saveConsent(consent) {
    window.setSiteConsent(consent);
    setVisible(false);
  }

  if (!ready) return null;

  return (
    <>
      {!visible && (
        <button
          className="cookie-settings"
          type="button"
          onClick={() => setVisible(true)}
        >
          Cookie settings
        </button>
      )}

      {visible && (
        <section
          className="cookie-banner"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
        >
          <h2 id="cookie-title">Your privacy choices</h2>

          <p id="cookie-description">
            Choose whether to allow analytics and advertising technologies. You
            can change your choice later.
          </p>

          <div className="cookie-actions">
            <button
              type="button"
              onClick={() =>
                saveConsent({
                  ...DENIED,
                  analytics_storage: "granted",
                })
              }
            >
              Accept analytics only
            </button>

            <button type="button" onClick={() => saveConsent(DENIED)}>
              Reject optional cookies
            </button>

            <button
              type="button"
              onClick={() =>
                saveConsent({
                  analytics_storage: "granted",
                  ad_storage: "granted",
                  ad_user_data: "granted",
                  ad_personalization: "granted",
                })
              }
            >
              Accept all
            </button>
          </div>
        </section>
      )}
    </>
  );
}
