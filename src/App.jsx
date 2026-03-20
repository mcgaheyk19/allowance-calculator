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
  BREAKDOWN_LABELS,
  CTA_URL,
} from './data.js'
import {
  COLORS,
  MODERN_GRADIENT,
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
  const [hovered, setHovered] = useState(false)
  const style = selected
    ? OPTION_SELECTED
    : { ...OPTION_BASE, backgroundColor: hovered ? '#F2F7FC' : '#F8F9FA' }
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <span style={{ fontSize: 24, flexShrink: 0 }}>{emoji}</span>
      <span style={{ flex: 1 }}>
        <span style={{
          display: 'block',
          fontFamily: "'Nunito', 'Varela Round', Arial, sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: COLORS.gray800,
          letterSpacing: '0.01em',
          lineHeight: '24px',
          marginBottom: 2,
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: "'Nunito', 'Varela Round', Arial, sans-serif",
          fontSize: 14,
          fontWeight: 400,
          color: COLORS.gray800,
          lineHeight: '20px',
          letterSpacing: '0.01em',
        }}>
          {description}
        </span>
      </span>
      <span style={{
        flexShrink: 0,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: selected ? MODERN_GRADIENT : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {selected && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
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
              width: 8,
              borderRadius: 4,
              background: isActive || isCompleted ? MODERN_GRADIENT : COLORS.gray300,
              transition: 'background 300ms ease',
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
          fontSize: 80,
          fontWeight: 700,
          fontFamily: "'Lato', sans-serif",
          background: MODERN_GRADIENT,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 4,
        }}>
          {age}
        </div>
        <div style={{ fontSize: 16, color: COLORS.gray800, fontWeight: 600 }}>
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
              accentColor: COLORS.primary,
              background: `linear-gradient(to right, #25B8E8 0%, #634AEF ${((age - 4) / 14) * 100}%, #DAE0E4 ${((age - 4) / 14) * 100}%, #DAE0E4 100%)`,
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 16,
          color: COLORS.gray800,
          fontWeight: 400,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
      <div style={HINT_BOX}>
        <p style={{ margin: 0, fontSize: 14, color: COLORS.gray800, lineHeight: '20px', letterSpacing: '0.14px' }}>
          <strong>💡 Keep in mind:</strong>{' '}{SPENDING_HINT}
        </p>
      </div>
    </div>
  )
}

// ─── StepPhilosophy ────────────────────────────────────────────────────────────
function StepPhilosophy({ value, onChange }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
      <div style={HINT_BOX}>
        <p style={{ margin: 0, fontSize: 14, color: COLORS.gray800, lineHeight: '20px', letterSpacing: '0.14px' }}>
          <strong>💡 Did you know?</strong>{' '}{PHILOSOPHY_HINT}
        </p>
      </div>
    </div>
  )
}

// ─── StepFrequency ─────────────────────────────────────────────────────────────
function StepFrequency({ value, age, onChange }) {
  const ageGroup = age <= 15 ? 'young' : 'teen'
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
        <p style={{ margin: 0, fontSize: 14, color: COLORS.gray800, lineHeight: '20px', letterSpacing: '0.14px' }}>
          <strong>💡 Our recommendation for age {age} — {FREQUENCY_HINT[ageGroup].recommendation}</strong>{' '}{FREQUENCY_HINT[ageGroup].body}
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
      background: 'linear-gradient(118.31deg, #121944 0.449%, #062931 99.083%)',
      borderRadius: 20,
      padding: '32px 28px 28px',
      textAlign: 'center',
      marginBottom: 16,
      overflow: 'hidden',
    }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.16px', marginBottom: 16 }}>
        Recommended allowance
      </div>
      <div style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: 52,
        fontWeight: 700,
        letterSpacing: '0.52px',
        background: 'linear-gradient(to right, #7ACFF6, #21F8FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        ${result.displayLow}–${result.displayHigh}
      </div>
      <div style={{ fontSize: 20, fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.2px', marginBottom: 24 }}>
        Per {label}
      </div>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.10)',
        borderRadius: 16,
        padding: '12px 24px',
      }}>
        <span style={{ fontSize: 16, fontWeight: 300, color: '#FFFFFF' }}>Yearly total:&nbsp;</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>
          ${result.yearlyLow.toLocaleString()}–${result.yearlyHigh.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

// ─── BreakdownCard ─────────────────────────────────────────────────────────────
function BreakdownCard({ answers, result }) {
  const MEDIUM_SHADOW = '0px 8px 24px rgba(220,223,252,0.2), 0px 4px 8px rgba(220,223,252,0.08)'
  const rows = [
    {
      label: `National base for age ${answers.age}`,
      value: `$${result.weeklyLow}–$${result.weeklyHigh}/wk`,
      valueColor: COLORS.gray800,
    },
    {
      label: 'Cost of living',
      value: BREAKDOWN_LABELS.cost[answers.cost],
      valueColor: answers.cost !== 'average' ? COLORS.gray800 : COLORS.gray500,
    },
    {
      label: 'Spending responsibilities',
      value: BREAKDOWN_LABELS.spending[answers.spending],
      valueColor: answers.spending !== 'fun' ? COLORS.gray800 : COLORS.gray500,
    },
    {
      label: 'Allowance frequency',
      value: BREAKDOWN_LABELS.frequency[answers.frequency],
      valueColor: COLORS.gray800,
    },
  ]

  return (
    <div style={{
      backgroundColor: COLORS.white,
      borderRadius: 20,
      border: `1px solid ${COLORS.gray200}`,
      overflow: 'hidden',
      marginBottom: 16,
      boxShadow: MEDIUM_SHADOW,
    }}>
      <div style={{
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${COLORS.gray200}`,
        backgroundColor: COLORS.bg,
      }}>
        <span style={{ fontSize: 16, fontWeight: 400, color: COLORS.gray800, letterSpacing: '0.16px' }}>
          How we calculated this
        </span>
      </div>
      {rows.map((row, i) => (
        <div key={i}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 52,
            padding: '0 20px',
          }}>
            <span style={{ fontSize: 14, color: COLORS.gray800, letterSpacing: '0.14px', lineHeight: '20px' }}>{row.label}</span>
            <span style={{ fontSize: 14, color: row.valueColor, letterSpacing: '0.14px', lineHeight: '20px' }}>{row.value}</span>
          </div>
          {i < rows.length - 1 && (
            <div style={{ height: 1, backgroundColor: COLORS.gray200 }} />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── ResultsPage ───────────────────────────────────────────────────────────────
function ResultsPage({ answers, onRestart, onAdjust }) {
  const result = calculate(answers)
  const MEDIUM_SHADOW = '0px 8px 24px rgba(220,223,252,0.2), 0px 4px 8px rgba(220,223,252,0.08)'

  return (
    <div>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: COLORS.gray800, lineHeight: '28.8px', marginBottom: 4 }}>
          Your personalized recommendation
        </div>
        <div style={{ fontSize: 16, color: COLORS.gray800, lineHeight: '24px', letterSpacing: '0.16px' }}>
          Based on anonymized data from 9,135 U.S. families on Till
        </div>
      </div>

      <HeroCard result={result} frequency={answers.frequency} />
      <BreakdownCard answers={answers} result={result} />

      {/* Fixed note */}
      <div style={{
        backgroundColor: '#E9F2FA',
        border: '1px solid #E1ECF5',
        borderRadius: 20,
        padding: 24,
        marginBottom: 16,
        boxShadow: MEDIUM_SHADOW,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginBottom: 36,
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.gray800, letterSpacing: '0.14px', lineHeight: '24px' }}>
          A starting point, not a rule.
        </div>
        <div style={{ fontSize: 14, fontWeight: 400, color: COLORS.gray800, lineHeight: '20px', letterSpacing: '0.14px' }}>
          This is a starting point, not a rulebook. Every family has different goals, values, and budgets — and you know your kid better than any calculator does. What matters most is that your child gets consistent practice making real decisions with real money.
        </div>
      </div>

      {/* Pre-CTA text */}
      <div style={{
        fontSize: 16,
        fontWeight: 400,
        color: COLORS.gray800,
        lineHeight: '24px',
        letterSpacing: '0.16px',
        textAlign: 'center',
        marginBottom: 16,
      }}>
        Till is a family banking app and debit card for kids and teens. Automate allowance, set up chores, keep an eye on their spending, and much more.
      </div>

      {/* CTA */}
      <div style={{ marginBottom: 24 }}>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{
            ...PRIMARY_BUTTON,
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            marginBottom: 14,
          }}
        >
          Learn more about Till
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <button onClick={onRestart} className="btn-ghost" style={GHOST_BUTTON}>
            Start over
          </button>
          <button onClick={onAdjust} className="btn-ghost" style={GHOST_BUTTON}>
            Adjust answers
          </button>
        </div>
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
    background: 'transparent',
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
              <div style={{ marginBottom: 32 }}>
                <h2 style={{
                  margin: '0 0 6px',
                  fontSize: 24,
                  fontWeight: 700,
                  color: COLORS.gray800,
                  lineHeight: 1.2,
                  textAlign: 'center',
                }}>
                  {stepContent.question}
                </h2>
                <p style={{
                  margin: 0,
                  fontSize: 16,
                  color: COLORS.gray800,
                  lineHeight: 1.5,
                  textAlign: 'center',
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
                  <button onClick={goBack} className="btn-back" style={{
                    background: 'none',
                    border: 'none',
                    color: COLORS.gray600,
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: "'Nunito', 'Varela Round', Arial, sans-serif",
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
                    className="btn-primary"
                    style={{ ...PRIMARY_BUTTON, width: 'auto', padding: '12px 28px' }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={goNext}
                    className="btn-primary"
                    style={{ ...PRIMARY_BUTTON, width: 'auto', padding: '12px 28px' }}
                  >
                    See My Recommendation
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
