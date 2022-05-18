import { AuthEvents } from "./auth.actions"

describe('tests for the auth action', () => {

  it('has a login requested url - no redirect', () => {

    const action = AuthEvents.loginRequested({});

    expect(action.type).toBe('[auth] log in requested');
    expect(action.redirectUrl).toBeUndefined();
  })
  it('has a login requested url - with redirect', () => {

    const action = AuthEvents.loginRequested({ redirectUrl: '/tacos'});

    expect(action.type).toBe('[auth] log in requested');
    expect(action.redirectUrl).toBe('/tacos');
  })

})
