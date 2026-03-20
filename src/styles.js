export const MODERN_GRADIENT = 'linear-gradient(166deg, #25B8E8 11.772%, #1E94CF 51.924%, #634AEF 92.075%)'

export const COLORS = {
  primary:      '#5650F0',
  primaryDark:  '#7043EE',
  primaryGlow:  'rgba(86, 80, 240, 0.12)',
  primaryTint:  '#F6F7FE',
  white:        '#FFFFFF',
  bg:           '#F6F6F8',
  gray100:      '#F8F9FA',
  gray150:      '#F2F5F8',
  gray200:      '#E8F0F3',
  gray300:      '#DAE0E4',
  gray400:      '#C2CBD2',
  gray500:      '#9BAAB6',
  gray600:      '#697885',
  gray700:      '#536471',
  gray800:      '#0F1419',
  green:        '#2AA266',
  greenLight:   '#D5EEE1',
}

export const CARD_STYLE = {
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  boxShadow: '0 4px 24px rgba(15,20,25,0.08), 0 1px 4px rgba(15,20,25,0.04)',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 520,
  margin: '0 auto',
}

export const CARD_TOP_BAR = {
  height: 4,
  background: MODERN_GRADIENT,
  borderRadius: '24px 24px 0 0',
}

export const OPTION_BASE = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 16,
  borderRadius: 20,
  border: '1px solid #F2F5F8',
  backgroundColor: '#F8F9FA',
  cursor: 'pointer',
  transition: 'border-color 150ms ease',
  minHeight: 96,
  textAlign: 'left',
  width: '100%',
  boxSizing: 'border-box',
}

export const OPTION_SELECTED = {
  ...OPTION_BASE,
  backgroundColor: '#E9F2FA',
  boxShadow: 'inset 0 0 0 1.5px #25B8E8',
}

export const PRIMARY_BUTTON = {
  display: 'block',
  width: '100%',
  padding: '14px 24px',
  background: MODERN_GRADIENT,
  color: '#FFFFFF',
  border: 'none',
  borderRadius: 100,
  fontSize: 16,
  fontWeight: 700,
  fontFamily: "'Nunito', 'Varela Round', Arial, sans-serif",
  cursor: 'pointer',
  transition: 'opacity 150ms ease, transform 100ms ease',
  letterSpacing: '0.01em',
}

export const GHOST_BUTTON = {
  background: 'none',
  border: 'none',
  color: '#697885',
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "'Nunito', 'Varela Round', Arial, sans-serif",
  cursor: 'pointer',
  padding: '8px 0',
  textDecoration: 'none',
}

export const INSIGHT_CARD = {
  backgroundColor: '#F6F7FE',
  border: '1px solid #DAE0E4',
  borderRadius: 16,
  padding: '14px 16px',
}

export const HINT_BOX = {
  backgroundColor: '#FFFBEC',
  border: '1px solid #FFDA43',
  borderRadius: 20,
  padding: '24px',
  marginTop: 32,
}
