export const COST_OPTIONS = [
  {
    id: 'lower',
    emoji: '🏡',
    label: 'Lower cost area',
    description: 'Smaller city or rural area where everyday expenses are below average',
  },
  {
    id: 'average',
    emoji: '🏘️',
    label: 'Average cost area',
    description: 'Mid-size city or suburb with typical everyday costs',
  },
  {
    id: 'higher',
    emoji: '🌆',
    label: 'Higher cost area',
    description: 'Major metro area where prices for goods and activities run above average',
  },
]

export const SPENDING_OPTIONS = [
  {
    id: 'fun',
    emoji: '🍬',
    label: 'Fun money only',
    description: 'Treats, small toys, and impulse buys — parents cover everything else',
  },
  {
    id: 'personal',
    emoji: '🎮',
    label: 'Personal items',
    description: 'Entertainment, hobbies, and personal care products',
  },
  {
    id: 'real',
    emoji: '👟',
    label: 'Real-world purchases',
    description: 'Clothing, shoes, and some bigger-ticket items',
  },
  {
    id: 'full',
    emoji: '⛽',
    label: 'Full independence',
    description: 'Gas, socializing, most day-to-day expenses — maximum responsibility',
  },
]

export const PHILOSOPHY_OPTIONS = [
  {
    id: 'fixed',
    emoji: '📅',
    label: 'Fixed amount',
    description: 'Same amount every period regardless of behavior or chores',
  },
  {
    id: 'earned',
    emoji: '✅',
    label: 'Earned allowance',
    description: 'Tied to completing chores or meeting expectations',
  },
  {
    id: 'hybrid',
    emoji: '⚡',
    label: 'Hybrid approach',
    description: 'Base amount always paid, with bonus opportunity for extra effort',
  },
]

export const FREQUENCY_OPTIONS = [
  {
    id: 'weekly',
    emoji: '📅',
    label: 'Weekly',
    description: 'More frequent paydays build habit and budgeting practice',
  },
  {
    id: 'monthly',
    emoji: '🗓️',
    label: 'Monthly',
    description: 'Bigger lump sum teaches longer-term planning and restraint',
  },
]

export const STEP_CONTENT = [
  {
    question: "How old is your child?",
    subtext: "We'll use age-appropriate national benchmarks as our starting point.",
  },
  {
    question: "Where do you live?",
    subtext: "Local prices affect what money actually buys — we factor that in.",
  },
  {
    question: "What will the allowance cover?",
    subtext: "More responsibility means a higher baseline to match real expenses.",
  },
  {
    question: "What's your allowance philosophy?",
    subtext: "This shapes the insight tips we share — not the dollar amount.",
  },
  {
    question: "How often will you pay?",
    subtext: "We'll convert the weekly rate to your preferred schedule.",
  },
]

export const SPENDING_HINT = {
  fun: "Fun money only means parents still cover clothing, activities, and most personal expenses. Allowance is purely discretionary.",
  personal: "Personal items allowances typically include entertainment subscriptions, hobby supplies, and personal grooming products.",
  real: "Real-world purchases means kids start experiencing true costs — clothes wear out, shoes cost real money.",
  full: "Full independence is rare under age 14 but powerful for teens with part-time jobs or strong financial maturity.",
}

export const PHILOSOPHY_HINT = {
  fixed: "Fixed allowances separate money from chores — kids learn budgeting without connecting compensation to household duties.",
  earned: "Earned allowances can motivate, but research shows very strict tying to chores can undermine intrinsic motivation over time.",
  hybrid: "Hybrid approaches are popular with financial educators — kids get baseline security while still experiencing earning.",
}

export const FREQUENCY_HINT = {
  young: "For kids under 13, weekly allowance helps build budgeting habits — the shorter feedback loop makes consequences more tangible.",
  teen: "Teens often benefit from monthly allowances, which mirror adult pay cycles and teach longer-horizon planning.",
}

// INSIGHTS[philosophy][frequency][ageGroup] → array of 3 { headline, body }
export const INSIGHTS = {
  fixed: {
    weekly: {
      young: [
        {
          headline: "Fixed amounts teach pure budgeting",
          body: "When allowance isn't tied to chores, kids learn that money management is its own skill — separate from household responsibilities. Studies show this approach produces stronger savers by age 18.",
        },
        {
          headline: "Weekly paydays build strong habits",
          body: "For younger kids, weekly allowance creates a shorter feedback loop. They spend, they run out, they wait. That cycle — repeated 52 times a year — builds intuitive budgeting faster than monthly schedules.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Fixed amounts teach pure budgeting",
          body: "When allowance isn't tied to chores, kids learn that money management is its own skill — separate from household responsibilities. Studies show this approach produces stronger savers by age 18.",
        },
        {
          headline: "Weekly keeps teens accountable",
          body: "Even though teens could handle monthly payments, weekly allowances keep money top-of-mind. The frequent reset helps teens notice spending patterns before they compound into bigger problems.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
    monthly: {
      young: [
        {
          headline: "Fixed amounts teach pure budgeting",
          body: "When allowance isn't tied to chores, kids learn that money management is its own skill — separate from household responsibilities. Studies show this approach produces stronger savers by age 18.",
        },
        {
          headline: "Monthly stretches planning muscles",
          body: "A larger monthly sum challenges kids to think ahead — will there be enough for both the thing they want now and the birthday gift next week? That planning friction is valuable learning.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Fixed amounts teach pure budgeting",
          body: "When allowance isn't tied to chores, kids learn that money management is its own skill — separate from household responsibilities. Studies show this approach produces stronger savers by age 18.",
        },
        {
          headline: "Monthly mirrors adult paycycles",
          body: "Teens who manage monthly allowances arrive at adulthood already familiar with the rhythm of monthly budgeting. This is exactly the pattern they'll face with rent, subscriptions, and utilities.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
  },
  earned: {
    weekly: {
      young: [
        {
          headline: "Earned allowances reward effort",
          body: "Tying money to completed tasks gives kids a direct experience of earning — one of the most powerful financial lessons. The key is keeping the chore list achievable so success feels within reach.",
        },
        {
          headline: "Weekly paydays build strong habits",
          body: "For younger kids, weekly allowance creates a shorter feedback loop. They spend, they run out, they wait. That cycle — repeated 52 times a year — builds intuitive budgeting faster than monthly schedules.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Earned allowances reward effort",
          body: "Tying money to completed tasks gives kids a direct experience of earning — one of the most powerful financial lessons. The key is keeping the chore list achievable so success feels within reach.",
        },
        {
          headline: "Weekly keeps teens accountable",
          body: "Even though teens could handle monthly payments, weekly allowances keep money top-of-mind. The frequent reset helps teens notice spending patterns before they compound into bigger problems.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
    monthly: {
      young: [
        {
          headline: "Earned allowances reward effort",
          body: "Tying money to completed tasks gives kids a direct experience of earning — one of the most powerful financial lessons. The key is keeping the chore list achievable so success feels within reach.",
        },
        {
          headline: "Monthly stretches planning muscles",
          body: "A larger monthly sum challenges kids to think ahead — will there be enough for both the thing they want now and the birthday gift next week? That planning friction is valuable learning.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Earned allowances reward effort",
          body: "Tying money to completed tasks gives kids a direct experience of earning — one of the most powerful financial lessons. The key is keeping the chore list achievable so success feels within reach.",
        },
        {
          headline: "Monthly mirrors adult paycycles",
          body: "Teens who manage monthly allowances arrive at adulthood already familiar with the rhythm of monthly budgeting. This is exactly the pattern they'll face with rent, subscriptions, and utilities.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
  },
  hybrid: {
    weekly: {
      young: [
        {
          headline: "Hybrid gives security plus incentive",
          body: "A guaranteed base — even if it's small — means kids always have something to work with. The bonus layer on top creates motivation without the all-or-nothing pressure of pure earned allowances.",
        },
        {
          headline: "Weekly paydays build strong habits",
          body: "For younger kids, weekly allowance creates a shorter feedback loop. They spend, they run out, they wait. That cycle — repeated 52 times a year — builds intuitive budgeting faster than monthly schedules.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Hybrid gives security plus incentive",
          body: "A guaranteed base — even if it's small — means kids always have something to work with. The bonus layer on top creates motivation without the all-or-nothing pressure of pure earned allowances.",
        },
        {
          headline: "Weekly keeps teens accountable",
          body: "Even though teens could handle monthly payments, weekly allowances keep money top-of-mind. The frequent reset helps teens notice spending patterns before they compound into bigger problems.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
    monthly: {
      young: [
        {
          headline: "Hybrid gives security plus incentive",
          body: "A guaranteed base — even if it's small — means kids always have something to work with. The bonus layer on top creates motivation without the all-or-nothing pressure of pure earned allowances.",
        },
        {
          headline: "Monthly stretches planning muscles",
          body: "A larger monthly sum challenges kids to think ahead — will there be enough for both the thing they want now and the birthday gift next week? That planning friction is valuable learning.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
      teen: [
        {
          headline: "Hybrid gives security plus incentive",
          body: "A guaranteed base — even if it's small — means kids always have something to work with. The bonus layer on top creates motivation without the all-or-nothing pressure of pure earned allowances.",
        },
        {
          headline: "Monthly mirrors adult paycycles",
          body: "Teens who manage monthly allowances arrive at adulthood already familiar with the rhythm of monthly budgeting. This is exactly the pattern they'll face with rent, subscriptions, and utilities.",
        },
        {
          headline: "A starting point, not a rule",
          body: "This range reflects national research and your specific inputs, but the right amount for your family may be higher or lower. Start here, observe for 60–90 days, then adjust based on what you see.",
        },
      ],
    },
  },
}

export const BREAKDOWN_LABELS = {
  cost: {
    lower:   '−20%',
    average: 'No adjustment',
    higher:  '+25%',
  },
  spending: {
    fun:      'No adjustment',
    personal: '+30%',
    real:     '+90%',
    full:     '+160%',
  },
  frequency: {
    weekly:  'Weekly',
    monthly: '×4.3 (monthly)',
  },
}

export const CTA_URL = 'https://www.till.com'
export const GUIDE_URL = 'https://www.till.com/resources/allowance-guide'
