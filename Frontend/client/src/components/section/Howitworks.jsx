import { HOW_STEPS } from "../data/howitworks";

export default function Howitworks() {
  return (
    <section className="w-full bg-white px-16 py-28">
      <div className="max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-green-800 uppercase mb-5">
          How it works
        </p>
        <h2 className="font-serif text-5xl leading-[1.1] text-stone-900 tracking-tight mb-16 max-w-xl">
          Three steps. No manual required.
        </h2>

        <div className="flex border-t border-b border-stone-200">
          {HOW_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`flex-1 px-8 py-10 ${
                  i !== 0 ? "border-l border-stone-200" : ""
                }`}
              >
                <p className="font-mono text-[11px] tracking-[0.15em] text-green-800 uppercase mb-8">
                  {step.tag}
                </p>
                <Icon
                  className="h-8 w-8 text-stone-900 mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-stone-900 text-xl font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}