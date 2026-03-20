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
    description: 'Kids get a fixed allowance amount on a schedule, no strings attached.',
  },
  {
    id: 'earned',
    emoji: '✅',
    label: 'Conditional on chores',
    description: 'Kids have to complete all or most of their chores in order to get their allowance.',
  },
  {
    id: 'hybrid',
    emoji: '⚡',
    label: 'Hybrid approach',
    description: 'Kids get a smaller fixed amount but can earn more by completing extra chores.',
  },
]

export const FREQUENCY_OPTIONS = [
  {
    id: 'weekly',
    emoji: '📅',
    label: 'Weekly',
    description: 'More chances to make decisions about their money',
  },
  {
    id: 'monthly',
    emoji: '🗓️',
    label: 'Monthly',
    description: 'Helps build real budgeting and planning skills',
  },
]

export const STEP_CONTENT = [
  {
    question: "How old is your child?",
    subtext: "We'll use age-appropriate national benchmarks as our starting point.",
  },
  {
    question: "Where do you live?",
    subtext: "The same allowance goes further in a small town than it does in a big city. We adjust your range based on where you live.",
  },
  {
    question: "What will the allowance cover?",
    subtext: "Is this fun money or are they covering real expenses?",
  },
  {
    question: "What's your allowance philosophy?",
    subtext: "There's no wrong answer — each approach teaches different money skills. Pick what fits your family.",
  },
  {
    question: "How often do you want your kid to receive their allowance?",
    subtext: "This changes how your child experiences money. Both options work but they teach different financial skills.",
  },
]

export const SPENDING_HINT = "If your child has a part-time job or earns money on their own, their allowance may cover fewer expenses. Pick the tier that most-closely matches what you expect allowance to cover, not their total spending."

export const PHILOSOPHY_HINT = "Parents are roughly split down the middle on this one. About half believe allowance should be given out consistently regardless of chores, treating it as a tool to practice making regular financial decisions. The other half believe tying allowance to chores teaches kids that money is earned through work. The best choice is the one that matches what you're trying to teach."

export const FREQUENCY_HINT = {
  young: {
    recommendation: "Weekly.",
    body: "At this age, the more often your child handles money and makes decisions with it, the faster the lessons stick. Weekly allowance means 52 chances a year to practice spending, saving, and making tradeoffs.",
  },
  teen: {
    recommendation: "lean toward weekly.",
    body: "Repetition is what builds good money habits, and weekly gives them 52 chances a year to practice. Monthly is worth considering if you want to really challenge your teen to develop more advanced budgeting skills.",
  },
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

export const CTA_URL = 'https://tillfinancial.com'
export const GUIDE_URL = 'https://www.till.com/resources/allowance-guide'
