import { test } from '@japa/runner'

test('Test Auth Unauthorized', async ({ client }) => {
  const response = await client.post('/api/login');
  response.assertStatus(401)
})
