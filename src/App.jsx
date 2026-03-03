import { useState } from 'react'
import { calculate } from './calculations.js'
import {
  COST_OPTIONS,
  SPENDING_OPTIONS,
  PHILOSOPHY_OPTIONS,
  FREQUENCY_OPTIONS,
  STEP_CONTENT,
  SPENDING_HINT,
  PHILOSOPHY_HINT,
  FREQUENCY_HINT,
  INSIGHTS,
  BREAKDOWN_LABELS,
  CTA_URL,
  GUIDE_URL,
} from './data.js'
import {
  COLORS,
  CARD_STYLE,
  CARD_TOP_BAR,
  OPTION_BASE,
  OPTION_SELECTED,
  PRIMARY_BUTTON,
  GHOST_BUTTON,
  INSIGHT_CARD,
  HINT_BOX,
} from './styles.js'

// ─── OptionCard ────────────────────────────────────────────────────────────────
function OptionCard({ emoji, label, description, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      style={selected ? OPTION_SELECTED : OPTION_BASE}
    >
      <span style={{ fontSize: 22, flexShrink: 0 }}>{emoji}</span>
      <span style={{ flex: 1 }}>
        <span style={{
          display: 'block',
          fontSize: 15,
          fontWeight: 600,
          color: COLORS.gray900,
          marginBottom: 2,
        }}>
          {label}
        </span>
        <span style={{ fontSize: 13, color: COLORS.gray500, lineHeight: 1.4 }}>
          {description}
        </span>
      </span>
      {selected && (
        <span style={{
          flexShrink: 0,
          width: 22,
          height: 22,
          borderRadius: '50%',
          backgroundColor: COLORS.green,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </button>
  )
}

// ─── ProgressBar ───────────────────────────────────────────────────────────────
function ProgressBar({ step }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      justifyContent: 'center',
      marginBottom: 28,
    }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const isActive    = i === step
        const isCompleted = i < step
        return (
          <div
            key={i}
            style={{
              height: 8,
              borderRadius: 4,
              backgroundColor: isActive || isCompleted ? COLORS.green : COLORS.gray300,
              width: isActive ? 28 : 8,
              transition: 'width 300ms ease, background-color 300ms ease',
            }}
          />
        )
      })}
    </div>
  )
}

// ─── StepAge ───────────────────────────────────────────────────────────────────
function StepAge({ age, onChange }) {
  return (
    <div>
      <div style={{
        textAlign: 'center',
        marginBottom: 24,
      }}>
        <div style={{
          fontSize: 72,
          fontWeight: 800,
          color: COLORS.green,
          lineHeight: 1,
          marginBottom: 4,
        }}>
          {age}
        </div>
        <div style={{ fontSize: 16, color: COLORS.gray500, fontWeight: 500 }}>
          years old
        </div>
      </div>

      <div style={{ position: 'relative', padding: '0 4px' }}>
        <div style={{
          position: 'relative',
          marginBottom: 8,
        }}>
          <input
            type="range"
            min={4}
            max={18}
            value={age}
            onChange={(e) => onChange(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: COLORS.green,
              background: `linear-gradient(to right, ${COLORS.green} 0%, ${COLORS.green} ${((age - 4) / 14) * 100}%, #E5E7EB ${((age - 4) / 14) * 100}%, #E5E7EB 100%)`,
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 13,
          color: COLORS.gray500,
          fontWeight: 500,
          marginTop: 4,
        }}>
          <span>4</span>
          <span>18</span>
        </div>
      </div>
    </div>
  )
}

// ─── StepCost ──────────────────────────────────────────────────────────────────
function StepCost({ value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {COST_OPTIONS.map((opt) => (
        <OptionCard
          key={opt.id}
          emoji={opt.emoji}
          label={opt.label}
          description={opt.description}
          selected={value === opt.id}
          onSelect={() => onChange(opt.id)}
        />
      ))}
    </div>
  )
}

// ─── StepSpending ──────────────────────────────────────────────────────────────
function StepSpending({ value, onChange }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {SPENDING_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            emoji={opt.emoji}
            label={opt.label}
            description={opt.description}
            selected={value === opt.id}
            onSelect={() => onChange(opt.id)}
          />
        ))}
      </div>
      {value && (
        <div style={HINT_BOX}>
          <p style={{ margin: 0, fontSize: 13, color: COLORS.gray700, lineHeight: 1.5 }}>
            💡 {SPENDING_HINT[value]}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── StepPhilosophy ────────────────────────────────────────────────────────────
function StepPhilosophy({ value, onChange }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {PHILOSOPHY_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            emoji={opt.emoji}
            label={opt.label}
            description={opt.description}
            selected={value === opt.id}
            onSelect={() => onChange(opt.id)}
          />
        ))}
      </div>
      {value && (
        <div style={HINT_BOX}>
          <p style={{ margin: 0, fontSize: 13, color: COLORS.gray700, lineHeight: 1.5 }}>
            💡 {PHILOSOPHY_HINT[value]}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── StepFrequency ─────────────────────────────────────────────────────────────
function StepFrequency({ value, age, onChange }) {
  const ageGroup = age <= 12 ? 'young' : 'teen'
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FREQUENCY_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            emoji={opt.emoji}
            label={opt.label}
            description={opt.description}
            selected={value === opt.id}
            onSelect={() => onChange(opt.id)}
          />
        ))}
      </div>
      <div style={HINT_BOX}>
        <p style={{ margin: 0, fontSize: 13, color: COLORS.gray700, lineHeight: 1.5 }}>
          💡 {FREQUENCY_HINT[ageGroup]}
        </p>
      </div>
    </div>
  )
}

// ─── HeroCard ──────────────────────────────────────────────────────────────────
function HeroCard({ result, frequency }) {
  const label = frequency === 'weekly' ? 'week' : 'month'
  return (
    <div style={{
      background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
      borderRadius: 20,
      padding: '32px 28px',
      textAlign: 'center',
      marginBottom: 16,
    }}>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Recommended allowance
      </div>
      <div style={{ fontSize: 52, fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 4 }}>
        ${result.displayLow}–${result.displayHigh}
      </div>
      <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: 24 }}>
        per {label}
      </div>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 10,
        padding: '10px 18px',
      }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Yearly total:</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: COLORS.green }}>
          ${result.yearlyLow.toLocaleString()}–${result.yearlyHigh.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

// ─── BreakdownCard ─────────────────────────────────────────────────────────────
function BreakdownCard({ answers, result }) {
  const rows = [
    {
      label: `National base for age ${answers.age}`,
      value: `$${result.weeklyLow}–$${result.weeklyHigh}/wk`,
      valueColor: COLORS.gray700,
    },
    {
      label: 'Cost of living',
      value: BREAKDOWN_LABELS.cost[answers.cost],
      valueColor: answers.cost !== 'average' ? COLORS.green : COLORS.gray500,
    },
    {
      label: 'Spending responsibilities',
      value: BREAKDOWN_LABELS.spending[answers.spending],
      valueColor: answers.spending !== 'fun' ? COLORS.green : COLORS.gray500,
    },
    {
      label: 'Payment frequency',
      value: BREAKDOWN_LABELS.frequency[answers.frequency],
      valueColor: COLORS.gray700,
    },
  ]

  return (
    <div style={{
      backgroundColor: COLORS.white,
      borderRadius: 16,
      border: `1px solid ${COLORS.gray200}`,
      overflow: 'hidden',
      marginBottom: 16,
    }}>
      <div style={{
        padding: '14px 20px',
        borderBottom: `1px solid ${COLORS.gray200}`,
        backgroundColor: COLORS.gray100,
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.gray700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          How we got here
        </span>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '13px 20px',
            borderBottom: i < rows.length - 1 ? `1px solid ${COLORS.gray200}` : 'none',
          }}
        >
          <span style={{ fontSize: 14, color: COLORS.gray700 }}>{row.label}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: row.valueColor }}>{row.value}</span>
        </div>
      ))}
    </div>
  )
}

// ─── InsightCard ───────────────────────────────────────────────────────────────
function InsightCard({ headline, body }) {
  return (
    <div style={{ ...INSIGHT_CARD, marginBottom: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navyMid, marginBottom: 6 }}>
        {headline}
      </div>
      <div style={{ fontSize: 13, color: COLORS.gray700, lineHeight: 1.6 }}>
        {body}
      </div>
    </div>
  )
}

// ─── ResultsPage ───────────────────────────────────────────────────────────────
function ResultsPage({ answers, onRestart, onAdjust }) {
  const result = calculate(answers)
  const ageGroup = answers.age <= 12 ? 'young' : 'teen'
  const insightSet = INSIGHTS[answers.philosophy][answers.frequency][ageGroup]

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.navy, marginBottom: 6 }}>
          Your personalized recommendation
        </div>
        <div style={{ fontSize: 14, color: COLORS.gray500, lineHeight: 1.5 }}>
          Based on national research, local costs, and your family's approach
        </div>
      </div>

      <HeroCard result={result} frequency={answers.frequency} />
      <BreakdownCard answers={answers} result={result} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gray700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
          Insights for your family
        </div>
        {insightSet.map((card, i) => (
          <InsightCard key={i} headline={card.headline} body={card.body} />
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            ...PRIMARY_BUTTON,
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            marginBottom: 14,
          }}
        >
          Get started with Till →
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <button onClick={onRestart} style={GHOST_BUTTON}>
            Start over
          </button>
          <button onClick={onAdjust} style={GHOST_BUTTON}>
            Adjust answers
          </button>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.gray500,
        lineHeight: 1.6,
        paddingTop: 16,
        borderTop: `1px solid ${COLORS.gray200}`,
      }}>
        Ranges based on American Institute of CPAs and T. Rowe Price research.{' '}
        <a
          href={GUIDE_URL}
          target="_blank"
          rel="noreferrer"
          style={{ color: COLORS.green, textDecoration: 'none', fontWeight: 500 }}
        >
          Read our full allowance guide →
        </a>
      </div>
    </div>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [step, setStep]       = useState(0)
  const [visible, setVisible] = useState(true)
  const [answers, setAnswers] = useState({
    age:        13,
    cost:       'average',
    spending:   'fun',
    philosophy: 'fixed',
    frequency:  'weekly',
  })

  function transition(fn) {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 200)
  }

  function goNext() {
    transition(() => setStep((s) => s + 1))
  }

  function goBack() {
    transition(() => setStep((s) => s - 1))
  }

  function restart() {
    transition(() => {
      setAnswers({ age: 13, cost: 'average', spending: 'fun', philosophy: 'fixed', frequency: 'weekly' })
      setStep(0)
    })
  }

  function setAnswer(key, val) {
    setAnswers((prev) => ({ ...prev, [key]: val }))
  }

  const stepContent = STEP_CONTENT[step] || {}

  // Outer page background
  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #F0FDF4 0%, #F9FAFB 50%, #EFF6FF 100%)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '32px 16px 48px',
  }

  const cardPadding = '28px 28px 32px'

  return (
    <div style={pageStyle}>
      <div style={CARD_STYLE}>
        {/* Green top bar */}
        <div style={CARD_TOP_BAR} />

        <div style={{ padding: cardPadding }}>
          {step < 5 ? (
            <>
              <ProgressBar step={step} />

              {/* Step header */}
              <div style={{ marginBottom: 20 }}>
                <h2 style={{
                  margin: '0 0 6px',
                  fontSize: 20,
                  fontWeight: 800,
                  color: COLORS.navy,
                  lineHeight: 1.2,
                }}>
                  {stepContent.question}
                </h2>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: COLORS.gray500,
                  lineHeight: 1.5,
                }}>
                  {stepContent.subtext}
                </p>
              </div>

              {/* Step content */}
              <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 200ms ease, transform 200ms ease',
              }}>
                {step === 0 && (
                  <StepAge
                    age={answers.age}
                    onChange={(val) => setAnswer('age', val)}
                  />
                )}
                {step === 1 && (
                  <StepCost
                    value={answers.cost}
                    onChange={(val) => setAnswer('cost', val)}
                  />
                )}
                {step === 2 && (
                  <StepSpending
                    value={answers.spending}
                    onChange={(val) => setAnswer('spending', val)}
                  />
                )}
                {step === 3 && (
                  <StepPhilosophy
                    value={answers.philosophy}
                    onChange={(val) => setAnswer('philosophy', val)}
                  />
                )}
                {step === 4 && (
                  <StepFrequency
                    value={answers.frequency}
                    age={answers.age}
                    onChange={(val) => setAnswer('frequency', val)}
                  />
                )}
              </div>

              {/* Navigation */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: step === 0 ? 'flex-end' : 'space-between',
                marginTop: 28,
              }}>
                {step > 0 && (
                  <button onClick={goBack} style={{
                    background: 'none',
                    border: 'none',
                    color: COLORS.gray500,
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'DM Sans, sans-serif',
                    cursor: 'pointer',
                    padding: '8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                    ← Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    onClick={goNext}
                    style={{ ...PRIMARY_BUTTON, width: 'auto', padding: '12px 28px' }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={goNext}
                    style={{ ...PRIMARY_BUTTON, width: 'auto', padding: '12px 28px' }}
                  >
                    See My Recommendation →
                  </button>
                )}
              </div>
            </>
          ) : (
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 200ms ease, transform 200ms ease',
            }}>
              <ResultsPage
                answers={answers}
                onRestart={restart}
                onAdjust={() => transition(() => setStep(0))}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
