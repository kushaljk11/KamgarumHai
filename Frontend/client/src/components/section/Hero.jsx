import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const TASKS = [
  "Reply to Sarah's email",
  "Pay the electricity bill",
  "Push the PWA build",
  "Buy vegetables",
  "Call the plumber",
];

export default function Hero() {
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoneCount((prev) => {
        if (prev >= TASKS.length) return 0;
        return prev + 1;
      });
    }, prev_delay(doneCount));
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneCount]);

  function prev_delay(count) {
    return count >= TASKS.length ? 1600 : 1100;
  }

  const percent = Math.round((doneCount / TASKS.length) * 100);

  return (
    <section className="w-full bg-stone-50 flex items-center px-16 md:px-16 lg:px-4 xl:px-16 py-24">
      <div className="max-w-7xl grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <div>
          <p className="font-semibold text-xs text-green-800 uppercase mb-6">
            For people who finish things
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold text-stone-900 mb-6">
            Your list,
            <br />
            actually cleared.
          </h1>
          <p className="text-lg text-stone-500 max-w-md mb-10">
            Write down what matters, set it aside, and watch it disappear the
            moment it's done. No boards, no columns to drag just today's work,
            in order.
          </p>
          <div className="flex items-center gap-6">
            <button className="cursor-pointer bg-green-800 hover:bg-green-900 transition-colors text-white text-sm font-medium px-7 py-3.5 rounded-lg">
              Start your list
            </button>
            <button className="cursor-pointer text-stone-900 text-sm font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-green-800 transition-colors">
              See how it works
            </button>
          </div>
        </div>

        {/* Right: signature — a live, self-checking todo card */}
        <div className="relative">
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
            {/* card header */}
            <div className="flex items-center justify-between px-16 py-5 border-b border-stone-100">
              <div>
                <p className="text-stone-900 font-medium">Today</p>
                <p className="font-mono text-xs text-stone-400 mt-0.5">
                  {doneCount} / {TASKS.length} done
                </p>
              </div>
              <div className="font-mono text-xs text-green-800">{percent}%</div>
            </div>

            {/* progress bar */}
            <div className="h-1 w-full bg-stone-100">
              <div
                className="h-full bg-green-800 transition-all duration-700 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* task list */}
            <ul className="px-3 py-3">
              {TASKS.map((task, i) => {
                const isChecked = i < doneCount;
                return (
                  <li
                    key={task}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg"
                  >
                    <span
                      className={`shrink-0 h-5 w-5 rounded-md border flex items-center justify-center transition-colors duration-300 ${
                        isChecked
                          ? "bg-green-800 border-green-800"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && (
                        <Check
                          className="h-3.5 w-3.5 text-white"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isChecked
                          ? "text-stone-400 line-through decoration-stone-300"
                          : "text-stone-700"
                      }`}
                    >
                      {task}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* small caption under the card */}
          <p className="font-mono text-xs text-stone-400 mt-4 text-center">
            watch it clear itself — that's the whole app
          </p>
        </div>
      </div>
    </section>
  );
}
