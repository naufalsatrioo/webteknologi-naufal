import React from 'react';

export function Button({
  children,
  className = '',
  'aria-disabled': ariaDisabled,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const isPending = ariaDisabled === true || ariaDisabled === 'true';

  return (
    <button
      {...rest}
      aria-disabled={ariaDisabled}
      aria-busy={isPending}
      className={`relative flex h-11 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 ${className}`}
    >
      {isPending ? (
        <span className="mr-2 inline-flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white"
            style={{ animationDelay: '300ms' }}
          />
        </span>
      ) : (
        children
      )}
      {isPending && (
        <span>Memproses...</span>
      )}
    </button>
  );
}
