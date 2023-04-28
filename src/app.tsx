import { useState } from "preact/hooks"
import preactLogo from "./assets/preact.svg"
import typescriptLogo from "./assets/typescript.svg"
import styles from "./app.module.css"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://bun.sh" target="_blank">
          <img src="/favicon.ico" class="logo" alt="Bun logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={typescriptLogo} class="logo" alt="TypeScript logo" />
        </a>
      </div>
      <h1>Bun + Preact + TypeScript</h1>
      <div class={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Bun and Preact logos to learn more
      </p>
    </>
  )
}
