const baseUrl = '';

// Investors Endpoints

export const investorRegisterPath = `${baseUrl}/api/v1/investors`;

// for path with path variable token
export const nameOfEndpoin = (token) => `${baseUrl}/api/v1/nameof path?token=${token}`