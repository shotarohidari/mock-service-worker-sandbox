// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    // Persist user's authentication in the session
    const {username,password} = await req.json();
    if(username !== "yamada" || password !== "hoge") {
        return res(
            // Respond with a 200 status code
            ctx.status(401),
        )
    }
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]