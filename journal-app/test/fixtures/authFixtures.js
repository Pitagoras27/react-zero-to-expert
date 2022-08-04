export const authInitialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authAutenticatedState = {
  status: "authenticated",
  uid: "123abc",
  email: "carlos-test@google.com",
  displayName: "demoTest",
  photoURL: "https://cloudimages.com/image.jpg",
  errorMessage: null,
};

export const authNotAutenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authCheckingCredentialsState = {
  status: "checking",
};

export const authUserState = {
  uid: "123abc",
  email: "carlos-test@google.com",
  displayName: "demoTest",
  photoURL: "https://cloudimages.com/image.jpg",
};
