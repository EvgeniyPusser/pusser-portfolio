export default function Work() {
  return (
    <main className="work-page">
      <div className="work-inner">
        <h2>Current Work</h2>
        <p className="work-lede">Two projects, one question underneath both.</p>

        <div className="work-block">
          <h3>Living Things</h3>
          <p>
            Can artificial systems keep what they learn, separate the
            adaptations that proved out from the ones that only looked good, and
            pass those on to the systems that come after them?
          </p>
          <p>
            The cycle under study: exposure → adaptation → evaluation →
            selection → reuse by the next system. What interests me is not that
            a system adapts, but what becomes of the adaptation afterwards — how
            far it carries, and at what distance between two systems the
            transfer stops paying for itself. That is measurable, and it is
            where I want to begin.
          </p>
          <p className="work-note">
            Living Things is a project, not a company, and holds no legal form.
            It is at the stage of forming a research group and first
            collaborations.
          </p>
        </div>

        <div className="work-block">
          <h3>traffic-engine</h3>
          <p>
            Forecasting the <em>distribution</em> of travel time on a Los
            Angeles freeway corridor rather than its average — how much time a
            traveller must set aside to be late once in ten trips instead of
            once in three.
          </p>
          <p>
            Built on 31,091 trips derived from Caltrans loop-detector data, 108
            usable days out of 120. Every published figure is reproduced by a
            single command. Where the first result came out too good to be true,
            the question turned out to have been posed wrongly and was
            rewritten; that audit is in the repository rather than removed.
          </p>
          <p className="work-note">
            The models are AI-assisted; the question, the data, the corridor,
            the metrics and the decision of what to publish are mine.
          </p>
          <div className="work-links">
            <a
              href="https://evgeniypusser.github.io/traffic-engine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Results
            </a>
            <a
              href="https://github.com/EvgeniyPusser/traffic-engine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="work-block">
          <h3>Who I am looking for</h3>
          <p>
            Researchers willing to argue about the first testable experiment —
            including anyone who thinks the premise is wrong.
          </p>
          <div className="work-links">
            <a href="mailto:evgeniipusser88@gmail.com">
              evgeniipusser88@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
