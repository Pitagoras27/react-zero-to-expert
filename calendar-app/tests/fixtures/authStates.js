
export const authInitialState = {
  status: 'checking',
  user: {},
  errorMessage: undefined
}

export const authLoginState = {
  status: 'authenticated',
  user: {
    email: 'testing@gmail.com',
    password: '123123',
    uid: '62fbfd50f649e02d385562cf',
    name: 'Testing'
  },
  errorMessage: undefined
}

export const authLogoutState = {
  status: 'not-authenticated',
  user: {},
  errorMessage: undefined
}
