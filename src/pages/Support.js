export default function Support() {
  return (
    <main className="content-page narrow-page">
      <h2>Support My Education</h2>
      <p>
        Your support helps me continue my studies and bring new ideas to life.
      </p>

      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="business" value="evgenpusser@gmail.com" />
        <input type="hidden" name="currency_code" value="USD" />
        <button type="submit">Donate with PayPal</button>
      </form>

      <a
        href="https://fundrazr.com/62cOV7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Support on FundRazr</button>
      </a>
    </main>
  );
}
