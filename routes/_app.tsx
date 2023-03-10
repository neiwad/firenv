import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div class="bg-gray-100">
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <title>Firenv</title>
        <meta
          name="description"
          content="Convert your Firebase conf to env variables!"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        >
        </link>
      </Head>

      <main class="min-h-screen py-10 pt-[150px]">
        <Navigation />
        <div class="container mx-auto px-2">
          <Component />
        </div>
      </main>
      <footer class="py-6 flex flex-col items-center gap-4">
        <div class="container mx-auto">
          <p class="text-center text-gray-500 text-sm">
            Made with ❤️ by{" "}
            <a href="https://github.com/neiwad">
              <strong>neiwad</strong>
            </a>
          </p>
        </div>
        <a href="https://fresh.deno.dev" target="_blank" rel="noopenner">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </footer>
    </div>
  );
}
