import Wtf from '../src/Wtf'

import Layer from 'ol/layer/Vector'
import Style from 'ol/style/Style'

jest.mock('ol/style/Style')
jest.mock('ol/layer/Vector')


test('wtf', () => {
  expect(new Wtf() instanceof Wtf).toBe(true)
  expect(Layer).toHaveBeenCalledTimes(1)
  expect(Style).toHaveBeenCalledTimes(1)
})