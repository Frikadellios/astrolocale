import { createSignal } from "react-use-signals"
function CounterButton() {
  const count = createSignal(0)

  const increment = () => count.value += 1

  return (
    <div className="flex gap-4 items-center">
      <button onClick={increment} className="px-3 py-1 border border-black/25 dark:border-white/25 hover:bg-black/5 dark:hover:bg-white/15 blend">
        Increment
      </button>
      <div>
       Clicked {count.value} {count.value === 1 ? "time" : "times"}
      </div>
    </div>

  )
}

export default CounterButton
