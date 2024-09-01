import { cn } from '@/utils/helpers/cn';

export function Button({
  children,
  className,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn([
        'cursor-pointer transition-colors duration-300 rounded-lg border border-blue-600 px-4 py-2 font-medium bg-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:outline-4 focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-blue-600/40 disabled:border-blue-600/30',
        className,
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
}
