export const BASE_WEEKLY = {
  4:  { min: 1,  max: 3  },
  5:  { min: 2,  max: 4  },
  6:  { min: 3,  max: 5  },
  7:  { min: 3,  max: 6  },
  8:  { min: 4,  max: 8  },
  9:  { min: 5,  max: 10 },
  10: { min: 5,  max: 12 },
  11: { min: 6,  max: 14 },
  12: { min: 7,  max: 16 },
  13: { min: 8,  max: 18 },
  14: { min: 10, max: 22 },
  15: { min: 10, max: 25 },
  16: { min: 12, max: 30 },
  17: { min: 15, max: 35 },
  18: { min: 15, max: 40 },
}

export const COST_MULTIPLIER = {
  lower:   0.8,
  average: 1.0,
  higher:  1.25,
}

export const SPENDING_MULTIPLIER = {
  fun:      1.0,
  personal: 1.3,
  full:     2.6,
}

export const FREQUENCY_MULTIPLIER = {
  weekly:  1,
  monthly: 4.33,
}

export function calculate({ age, cost, spending, frequency }) {
  const base = BASE_WEEKLY[age]
  const weeklyLow  = Math.round(base.min * COST_MULTIPLIER[cost] * SPENDING_MULTIPLIER[spending])
  const weeklyHigh = Math.round(base.max * COST_MULTIPLIER[cost] * SPENDING_MULTIPLIER[spending])
  const fm = FREQUENCY_MULTIPLIER[frequency]
  return {
    weeklyLow,
    weeklyHigh,
    displayLow:  Math.round(weeklyLow  * fm),
    displayHigh: Math.round(weeklyHigh * fm),
    yearlyLow:   Math.round(weeklyLow  * 52),
    yearlyHigh:  Math.round(weeklyHigh * 52),
  }
}
