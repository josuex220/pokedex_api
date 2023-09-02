import type { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
  /*
  |--------------------------------------------------------------------------
  | Enabled
  |--------------------------------------------------------------------------
  |
  | A boolean to enable or disable CORS integration from your AdonisJs
  | application.
  |
  | Setting the value to `true` will enable the CORS for all HTTP requests.
  |
  */
  enabled: true, // Altere para true para ativar o CORS

  /*
  |--------------------------------------------------------------------------
  | Origin
  |--------------------------------------------------------------------------
  |
  | Set a list of origins to be allowed for `Access-Control-Allow-Origin`.
  | Use '*' para permitir todas as origens.
  |
  */
  origin: '*',

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  |
  | An array of allowed HTTP methods for CORS.
  |
  */
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],

  /*
  |--------------------------------------------------------------------------
  | Headers
  |--------------------------------------------------------------------------
  |
  | List of headers to be allowed for `Access-Control-Allow-Headers` header.
  | Defina como `true` para permitir todos os headers mencionados em
  | `Access-Control-Request-Headers`.
  |
  */
  headers: true,

  /*
  |--------------------------------------------------------------------------
  | Expose Headers
  |--------------------------------------------------------------------------
  |
  | A list of headers to be exposed by setting `Access-Control-Expose-Headers`.
  |
  */
  exposeHeaders: [
    'cache-control',
    'content-language',
    'content-type',
    'expires',
    'last-modified',
    'pragma',
  ],

  /*
  |--------------------------------------------------------------------------
  | Credentials
  |--------------------------------------------------------------------------
  |
  | Toggle `Access-Control-Allow-Credentials` header.
  |
  */
  credentials: false,

  /*
  |--------------------------------------------------------------------------
  | MaxAge
  |--------------------------------------------------------------------------
  |
  | Define `Access-Control-Max-Age` header in seconds.
  |
  */
  maxAge: 90,
}

export default corsConfig
