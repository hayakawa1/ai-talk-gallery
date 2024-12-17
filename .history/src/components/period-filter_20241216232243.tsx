"use client"

export const periods = [
  { name: "24時間", value: "24h" },
  { name: "7日間", value: "7d" },
  { name: "30日間", value: "30d" },
] as const

interface PeriodFilterProps {
  currentPeriod: string
  onPeriodChange: (period: string) => void
}

export function PeriodFilter({ currentPeriod, onPeriodChange }: PeriodFilterProps) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => onPeriodChange(period.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              currentPeriod === period.value
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {period.name}
          </button>
        ))}
      </div>
    </div>
  )
} 