"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { FiDownload, FiX } from "react-icons/fi";

type ToastPhase = "entering" | "exiting" | null;

/** How long the toast stays visible before it starts fading out. */
const TOAST_DURATION = 3000;

export default function ResumeButton() {
  const [toast, setToast] = useState<ToastPhase>(null);
  // Re-keyed on every open so the entrance animation replays on repeat clicks.
  const [toastKey, setToastKey] = useState(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDismissTimer = useCallback(() => {
    if (dismissTimer.current !== null) {
      clearTimeout(dismissTimer.current);
      dismissTimer.current = null;
    }
  }, []);

  // Clean up any pending dismissal timer if the component unmounts.
  useEffect(() => clearDismissTimer, [clearDismissTimer]);

  const showToast = () => {
    clearDismissTimer();
    setToastKey((key) => key + 1);
    setToast("entering");
    dismissTimer.current = setTimeout(
      () => setToast("exiting"),
      TOAST_DURATION,
    );
  };

  const dismissToast = () => {
    clearDismissTimer();
    setToast("exiting");
  };

  const handleToastAnimationEnd = () => {
    if (toast === "exiting") {
      setToast(null);
    }
  };

  return (
    <>
      <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
        {personalInfo.resumeUrl ? (
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex min-h-11 items-center gap-2 px-6 py-3 bg-blue-primary hover:bg-blue-electric text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/25 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        ) : (
          <button
            type="button"
            onClick={showToast}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 px-6 py-3 bg-blue-primary/50 text-white/75 font-medium rounded-lg text-sm sm:text-base transition-colors duration-300 hover:bg-blue-primary/70 hover:text-white"
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </button>
        )}
      </div>

      {toast && (
        <div
          key={toastKey}
          role="status"
          onAnimationEnd={handleToastAnimationEnd}
          className={`fixed bottom-4 right-4 z-50 flex min-h-24 w-72 max-w-[calc(100vw-2rem)] items-center rounded-xl border border-border-medium bg-navy-900 py-4 pl-4 pr-2.5 shadow-xl shadow-black/40 ${
            toast === "exiting" ? "animate-toast-out" : "animate-toast-in"
          }`}
        >
          {/* Thin blue → amber accent line */}
          <span
            aria-hidden="true"
            className="absolute inset-y-3 left-0 w-px rounded-full bg-gradient-to-b from-blue-electric to-amber-400/80"
          />

          <div className="flex w-full items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 text-sm"
            >
              🍳
            </span>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-text-primary">
                Resume Is Not Cooked Yet!
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                Still cooking up something awesome...
              </p>
            </div>

            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={dismissToast}
              className="ml-auto shrink-0 rounded-md p-1 text-text-muted transition-colors hover:bg-navy-700/60 hover:text-text-primary"
            >
              <FiX className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
