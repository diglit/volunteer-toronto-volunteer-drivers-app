import { rest } from 'msw'
let mockDrivers = [{ id: 13, name: 'John Driver' }, { id: 22, name: 'Jim Driver'}, { id: 55, name: 'James Driver' }]


export const handlers = [
  rest.post('/drivers', (req, res, ctx) => {
    console.log(req.body, 'this is the request body (drivers filters)');
    return res(
      ctx.delay(500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        // data: req.body
        data: mockDrivers
      }),
    )
  }),

]