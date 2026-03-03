export const COLORS = {
  green:     '#00C853',
  greenDark: '#00A846',
  greenGlow: 'rgba(0, 200, 83, 0.15)',
  navy:      '#1A1A2E',
  navyMid:   '#16213E',
  navyLight: '#0F3460',
  white:     '#FFFFFF',
  gray100:   '#F9FAFB',
  gray200:   '#F3F4F6',
  gray300:   '#E5E7EB',
  gray500:   '#6B7280',
  gray700:   '#374151',
  gray900:   '#111827',
}

export const CARD_STYLE = {
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 520,
  margin: '0 auto',
}

export const CARD_TOP_BAR = {
  height: 4,
  background: 'linear-gradient(90deg, #00C853, #00E676)',
  borderRadius: '24px 24px 0 0',
}

export const OPTION_BASE = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '14px 16px',
  borderRadius: 12,
  border: '2px solid #E5E7EB',
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
  minHeight: 56,
  textAlign: 'left',
  width: '100%',
  boxSizing: 'border-box',
}

export const OPTION_SELECTED = {
  ...OPTION_BASE,
  border: '2px solid #00C853',
  boxShadow: '0 0 0 3px rgba(0, 200, 83, 0.15)',
  backgroundColor: '#F0FDF4',
}

export const PRIMARY_BUTTON = {
  display: 'block',
  width: '100%',
  padding: '14px 24px',
  backgroundColor: '#00C853',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'DM Sans, sans-serif',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, transform 100ms ease',
  letterSpacing: '0.01em',
}

export const GHOST_BUTTON = {
  background: 'none',
  border: 'none',
  color: '#6B7280',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: 'DM Sans, sans-serif',
  cursor: 'pointer',
  padding: '8px 0',
  textDecoration: 'underline',
}

export const INSIGHT_CARD = {
  backgroundColor: '#F0FDF4',
  border: '1px solid #BBF7D0',
  borderRadius: 12,
  padding: '14px 16px',
}

export const HINT_BOX = {
  backgroundColor: '#F9FAFB',
  border: '1px solid #E5E7EB',
  borderRadius: 10,
  padding: '12px 14px',
  marginTop: 12,
}
