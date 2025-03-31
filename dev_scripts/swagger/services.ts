export const services = ['trend-hive'] as const
export type ApiService = (typeof services)[number]
