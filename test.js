import test from 'ava'
import stripPseudos from './'

test('strip-pseudos does something awesome', t => {
  t.plan(1)

  t.true(stripPseudos())
})
