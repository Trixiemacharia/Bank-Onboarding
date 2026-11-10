export default function ProgressIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={step} aria-label={`Step ${step} of ${total}`}>
      <p className="mb-2 text-sm font-medium text-ink/60">Step {step} of {total}</p>
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i < step ? 'bg-brand' : 'bg-line'}`} />
        ))}
      </div>
    </div>
  )
}