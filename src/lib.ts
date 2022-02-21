import { Effect as T } from '@effect-ts/core'

export const sum = (a: number, b: number) => T.succeedWith(() => a + b)
