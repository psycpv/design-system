export const TEXT_SIZE_NAMES = ["small", "large", "medium", "extraLarge", "extraSmall", "xxxl"] as const
export type TextSize = typeof TEXT_SIZE_NAMES[number]