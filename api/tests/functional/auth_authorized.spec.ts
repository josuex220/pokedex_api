import { test } from '@japa/runner'

test('Test Auth Authorized', async ({ client }) => {
  const response = await client.post('/api/login').fields({
    email:"OmAvy8GWWarXhgLHrL3L@app.com",
    password: "VQVIsVLJKf2eMankyY6Q"
  });
  response.assertStatus(200)
})
