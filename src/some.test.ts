import { pipe, Effect as T } from '@effect-ts/core'
import { test, expect } from 'vitest'
import { sum } from './lib'

test('should work as expected', () => {
  expect(Math.sqrt(4)).toBe(2)
})

test('effect sum', async () => {
  const result = await pipe(sum(1, 2), T.runPromise)
  expect(result).toBe(3)
})
