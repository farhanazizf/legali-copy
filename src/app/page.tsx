"use client";

import Image from "next/image";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden">
      {/* Background gradient + subtle stripes */}
      <div className="-z-20 absolute inset-0 bg-gradient-to-br from-[#3f2b72] via-[#0b0a0f] to-[#f5a524]" />
      <div
        className="-z-10 absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="text-center text-white">
        {/* Logos */}
        <div className="my-10 flex items-center justify-center gap-12">
          <a
            href="https://nextjs.org"
            target="_blank"
            className="transition-transform hover:scale-110"
            rel="noreferrer"
          >
            <Image
              src="/next-white.svg"
              className="logo drop-shadow-lg"
              width={96}
              height={96}
              alt="Next.js logo"
            />
          </a>
          <a
            href="https://github.com/Inkubator-IT"
            target="_blank"
            className="transition-transform hover:scale-110"
            rel="noreferrer"
          >
            <Image
              src="/logo-iit.png"
              alt="Inkubator IT"
              className="h-16 w-auto drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
              width={100}
              height={100}
            />
          </a>
        </div>
        <h1 className="mt-4 font-bold text-4xl">Inkubator IT — Next.js</h1>
        <p className="mt-2 text-gray-200 text-sm">
          Kickstart your frontend with Next.js, Tailwind, and Bun.
        </p>

        {/* Card */}
        <div className="mt-8 inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-6">
          <button
            type="button"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 font-medium text-base text-white shadow-sm backdrop-blur transition hover:bg-white/10 active:scale-95"
            onClick={() => setCount((c: number) => c + 1)}
          >
            count is <span className="font-semibold">{count}</span>
          </button>

          <p className="text-gray-200 text-sm">
            Edit <code className="font-mono">src/app/page.tsx</code> and save to
            test HMR
          </p>
        </div>

        {/* Links */}
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="https://github.com/Inkubator-IT"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-left transition hover:shadow-sm"
          >
            <div>
              <p className="font-medium">Inkubator IT on GitHub</p>
              <p className="text-gray-200 text-xs">
                Templates, tooling, and examples
              </p>
            </div>
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-left transition hover:shadow-sm"
          >
            <p className="font-medium">Next.js Docs</p>
            <p className="text-gray-200 text-xs">Fast dev server and build</p>
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-left transition hover:shadow-sm"
          >
            <p className="font-medium">Tailwind CSS</p>
            <p className="text-gray-200 text-xs">Modern UI with hooks</p>
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-gray-300 text-sm">
          Click on the logos to learn more • Built by Inkubator IT
        </p>
      </div>
    </div>
  );
}

export default App;
