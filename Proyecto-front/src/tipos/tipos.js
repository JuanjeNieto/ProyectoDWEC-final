// Objeto de respuesta de autenticación exitosa
const AuthResponse = {
    body: {
      user: User,
      accessToken: string,
      refreshToken: string
    }
  };
  
  // Objeto de respuesta de error de autenticación
export const AuthResponseError = {
    body: {
      error: ""
    }
  };
  
  // Objeto de usuario
  const User = {
    _id: "",
    name: "",
    username: ""
  };
  
  // Objeto de respuesta del token de acceso
  const AccessTokenResponse = {
    statusCode: 0,
    body: {
      accessToken: ""
    },
    error: ""
  };


  module.exports = {
    AuthResponse,
    AuthResponseError,
    User,
    AccessTokenResponse
  };
  