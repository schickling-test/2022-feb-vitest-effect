import * as T from '@effect-ts/core/Effect'
import * as L from '@effect-ts/core/Effect/Layer'
import { pipe } from '@effect-ts/core/Function'
import { runMain } from '@effect-ts/node/Runtime'
import { service, tag } from '@effect-ts/core/Has'
import { _A } from '@effect-ts/core/Utils'

export const program = T.gen(function* ($) {
  console.log('hello')
})

pipe(program, runMain)
