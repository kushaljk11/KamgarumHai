import REASONS from "../data/why.js";

export default function WhyYadgarum() {
  return (
    <section className="w-full bg-stone-50 px-16 py-28">
      <div className="max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-green-800 uppercase mb-5">
          Why YadGarum
        </p>
        <h2 className="font-serif text-5xl leading-[1.1] text-stone-900 tracking-tight mb-4 max-w-xl">
          Three other apps didn't make the cut. Here's why this one did.
        </h2>
        <p className="text-lg text-stone-500 leading-relaxed max-w-md mb-8">
          Every choice below exists because a task list you can't trust
          doesn't get used for long.
        </p>

        <div className="border-t border-stone-200">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={reason.title}
                className={`border-b border-stone-200 py-12 flex items-center gap-16 ${
                  flip ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="shrink-0 w-16 flex justify-center">
                  <Icon className="h-9 w-9 text-green-800" strokeWidth={1.5} />
                </div>
                <div className={`flex-1 ${flip ? "flex flex-col items-end" : ""}`}>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-3">
                    {reason.tag}
                  </p>
                  <h3 className="text-stone-900 text-2xl font-medium mb-2 max-w-md">
                    {reason.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed max-w-md">
                    {reason.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}