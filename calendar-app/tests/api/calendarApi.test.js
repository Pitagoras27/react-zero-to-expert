import calendarApi from "../../src/api/calendarApi";

describe('test calendar API', () => {

  test('should default config', async() => {
    const envVar = process.env.VITE_BASE_API_CALENDAR;
    expect(calendarApi.defaults.baseURL).toBe(envVar);
  });

  test('should send header `x-token` in any request', async () => {
    try {
      const token = 'ABC-xyz-123-987'
      localStorage.setItem('token', token)
  
      const res = await calendarApi.get('/auth')
  
      expect(res.config.headers['x-token']).toBe(token);  
    } catch (error) {}
  })


})
