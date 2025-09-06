// src/theme.js
export const themes = [
  {
    name: '預設',
    primary: '#6750A4',
    onPrimary: '#FFFFFF',
    primaryContainer: '#EADDFF',
    onPrimaryContainer: '#21005D',
    secondary: '#625B71',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E8DEF8',
    onSecondaryContainer: '#1D192B',
    tertiary: '#7D5260',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD8E4',
    onTertiaryContainer: '#31111D',
    error: '#B3261E',
    onError: '#FFFFFF',
    errorContainer: '#F9DEDC',
    onErrorContainer: '#410E0B',
    background: '#FFFBFE',
    onBackground: '#1C1B1F',
    surface: '#FFFBFE',
    onSurface: '#1C1B1F',
    surfaceVariant: '#E7E0EC',
    onSurfaceVariant: '#49454F',
    outline: '#79747E',
    inverseSurface: '#313033',
    inverseOnSurface: '#F4EFF4',
    inversePrimary: '#D0BCFF'
  },
  {
    name: 'M3 藍',
    primary: '#0061A4',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D1E4FF',
    onPrimaryContainer: '#001C37',
    secondary: '#535F70',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#D7E3F7',
    onSecondaryContainer: '#101C2B',
    tertiary: '#6B5778',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#F2DAFF',
    onTertiaryContainer: '#251431',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FCFCFF',
    onBackground: '#1A1C1E',
    surface: '#FCFCFF',
    onSurface: '#1A1C1E',
    surfaceVariant: '#DEE3EB',
    onSurfaceVariant: '#42474E',
    outline: '#72787E',
    inverseSurface: '#2F3033',
    inverseOnSurface: '#F1F0F4',
    inversePrimary: '#9ECAFF'
  },
  {
    name: 'M3 紅',
    primary: '#9C4146',
    onPrimary: '#FFFFFF',
    primaryContainer: '#FFDAD9',
    onPrimaryContainer: '#410007',
    secondary: '#775656',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FFDAD9',
    onSecondaryContainer: '#2C1516',
    tertiary: '#705C2E',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FCDFA6',
    onTertiaryContainer: '#261A00',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FCFCFC',
    onBackground: '#201A1A',
    surface: '#FCFCFC',
    onSurface: '#201A1A',
    surfaceVariant: '#F5DDDC',
    onSurfaceVariant: '#534342',
    outline: '#857372',
    inverseSurface: '#362F2F',
    inverseOnSurface: '#FCEEEE',
    inversePrimary: '#FFB3B0'
  },
  {
    name: 'M3 綠',
    primary: '#006D39',
    onPrimary: '#FFFFFF',
    primaryContainer: '#9EF2B3',
    onPrimaryContainer: '#00210F',
    secondary: '#526350',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#D5E8D0',
    onSecondaryContainer: '#101F10',
    tertiary: '#3A656E',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#BEEAF5',
    onTertiaryContainer: '#001F25',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FBFDF7',
    onBackground: '#191C19',
    surface: '#FBFDF7',
    onSurface: '#191C19',
    surfaceVariant: '#DDE5DA',
    onSurfaceVariant: '#414941',
    outline: '#717971',
    inverseSurface: '#2E312E',
    inverseOnSurface: '#F0F2EC',
    inversePrimary: '#83D599'
  },
  {
    name: 'M3 黃',
    primary: '#B5830E',
    onPrimary: '#FFFFFF',
    primaryContainer: '#FFDE9C',
    onPrimaryContainer: '#291900',
    secondary: '#695D3F',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#F2E1BB',
    onSecondaryContainer: '#231B04',
    tertiary: '#47664A',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#C9ECC8',
    onTertiaryContainer: '#04210B',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FFFBFF',
    onBackground: '#1E1B16',
    surface: '#FFFBFF',
    onSurface: '#1E1B16',
    surfaceVariant: '#EAE1CF',
    onSurfaceVariant: '#4B4639',
    outline: '#7D7667',
    inverseSurface: '#33302A',
    inverseOnSurface: '#F7F0E7',
    inversePrimary: '#F3BD2F'
  },
  {
    name: 'Indigo',
    primary: '#3F51B5',
    onPrimary: '#FFFFFF',
    primaryContainer: '#C5CAE9',
    onPrimaryContainer: '#000050',
    secondary: '#5C6BC0',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E8EAF6',
    onSecondaryContainer: '#10174C',
    tertiary: '#7E57C2',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#EDE7F6',
    onTertiaryContainer: '#2E1A47',
    error: '#D32F2F',
    onError: '#FFFFFF',
    errorContainer: '#FFCDD2',
    onErrorContainer: '#4D0E0E',
    background: '#FFFFFF',     // 改为白色，与 surface 一致
    onBackground: '#212121',   // 调整文本颜色
    surface: '#FFFFFF',
    onSurface: '#212121',
    surfaceVariant: '#E8EAF6',
    onSurfaceVariant: '#455A64',
    outline: '#90A4AE',
    inverseSurface: '#212121',
    inverseOnSurface: '#E0E0E0',
    inversePrimary: '#7986CB'
  }
]

export function applyTheme(index) {
  const theme = themes[index]
  if (theme) {
    // 更新所有 CSS 变量
    document.documentElement.style.setProperty('--md-sys-color-primary', theme.primary)
    document.documentElement.style.setProperty('--md-sys-color-on-primary', theme.onPrimary)
    document.documentElement.style.setProperty('--md-sys-color-primary-container', theme.primaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-on-primary-container', theme.onPrimaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-secondary', theme.secondary)
    document.documentElement.style.setProperty('--md-sys-color-on-secondary', theme.onSecondary)
    document.documentElement.style.setProperty('--md-sys-color-secondary-container', theme.secondaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-on-secondary-container', theme.onSecondaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-tertiary', theme.tertiary)
    document.documentElement.style.setProperty('--md-sys-color-on-tertiary', theme.onTertiary)
    document.documentElement.style.setProperty('--md-sys-color-tertiary-container', theme.tertiaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-on-tertiary-container', theme.onTertiaryContainer)
    document.documentElement.style.setProperty('--md-sys-color-error', theme.error)
    document.documentElement.style.setProperty('--md-sys-color-on-error', theme.onError)
    document.documentElement.style.setProperty('--md-sys-color-error-container', theme.errorContainer)
    document.documentElement.style.setProperty('--md-sys-color-on-error-container', theme.onErrorContainer)
    document.documentElement.style.setProperty('--md-sys-color-background', theme.background)
    document.documentElement.style.setProperty('--md-sys-color-on-background', theme.onBackground)
    document.documentElement.style.setProperty('--md-sys-color-surface', theme.surface)
    document.documentElement.style.setProperty('--md-sys-color-on-surface', theme.onSurface)
    document.documentElement.style.setProperty('--md-sys-color-surface-variant', theme.surfaceVariant)
    document.documentElement.style.setProperty('--md-sys-color-on-surface-variant', theme.onSurfaceVariant)
    document.documentElement.style.setProperty('--md-sys-color-outline', theme.outline)
    document.documentElement.style.setProperty('--md-sys-color-inverse-surface', theme.inverseSurface)
    document.documentElement.style.setProperty('--md-sys-color-inverse-on-surface', theme.inverseOnSurface)
    document.documentElement.style.setProperty('--md-sys-color-inverse-primary', theme.inversePrimary)

    // 保存到 localStorage
    localStorage.setItem('selectedTheme', index.toString())
    return true
  }
  return false
}

export function loadSavedTheme() {
  const savedTheme = localStorage.getItem('selectedTheme')
  if (savedTheme !== null) {
    const index = parseInt(savedTheme)
    if (index >= 0 && index < themes.length) {
      return applyTheme(index)
    }
  }
  return false
}