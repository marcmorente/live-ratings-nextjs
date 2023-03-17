export default function Badge({ variation }) {
  const arrow = variation > 0 ? '↑' : '↓';
  const color = variation > 0 ? 'green' : 'red';
  const className = `inline-flex items-center gap-1 rounded-full bg-${color}-50 px-2 py-1 text-md font-semibold text-${color}-600`;

  return <span className={className}>{arrow} {Math.abs(variation)}</span>;
}