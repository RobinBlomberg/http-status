export type Status =
  | StatusDict['info'][keyof StatusDict['info']]
  | StatusDict['success'][keyof StatusDict['success']]
  | StatusDict['redirect'][keyof StatusDict['redirect']]
  | StatusDict['clientError'][keyof StatusDict['clientError']]
  | StatusDict['serverError'][keyof StatusDict['serverError']];

export type StatusDict = {
  readonly info: {
    readonly CONTINUE: 100;
    readonly SWITCHING_PROTOCOLS: 101;
    readonly PROCESSING: 102;
    readonly EARLY_HINTS: 103;
  };
  readonly success: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly ACCEPTED: 202;
    readonly NON_AUTHORITATIVE_INFORMATION: 203;
    readonly NO_CONTENT: 204;
    readonly RESET_CONTENT: 205;
    readonly PARTIAL_CONTENT: 206;
    readonly MULTI_STATUS: 207;
    readonly ALREADY_REPORTED: 208;
    readonly IM_USED: 226;
  };
  readonly redirect: {
    readonly MULTIPLE_CHOICES: 300;
    readonly MOVED_PERMANENTLY: 301;
    readonly FOUND: 302;
    readonly SEE_OTHER: 303;
    readonly NOT_MODIFIED: 304;
    readonly USE_PROXY: 305;
    readonly SWITCH_PROXY: 306;
    readonly TEMPORARY: 307;
    readonly PERMANENT: 308;
  };
  readonly clientError: {
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly PAYMENT_REQUIRED: 402;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly METHOD_NOT_ALLOWED: 405;
    readonly NOT_ACCEPTABLE: 406;
    readonly PROXY_AUTHENTICATION_REQUIRED: 407;
    readonly REQUEST_TIMEOUT: 408;
    readonly CONFLICT: 409;
    readonly GONE: 410;
    readonly LENGTH_REQUIRED: 411;
    readonly PRECONDITION_FAILED: 412;
    readonly PAYLOAD_TOO_LARGE: 413;
    readonly URI_TOO_LONG: 414;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly RANGE_NOT_SATISFIABLE: 416;
    readonly EXPECTATION_FAILED: 417;
    readonly IM_A_TEAPOT: 418;
    readonly MISDIRECTED_REQUEST: 421;
    readonly UNPROCESSABLE_ENTITY: 422;
    readonly LOCKED: 423;
    readonly FAILED_DEPENDENCY: 424;
    readonly TOO_EARLY: 425;
    readonly UPGRADE_REQUIRED: 426;
    readonly PRECONDITION_REQUIRED: 428;
    readonly TOO_MANY_REQUESTS: 429;
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE: 431;
    readonly UNAVAILABLE_FOR_LEGAL_REASONS: 451;
  };
  readonly serverError: {
    readonly INTERNAL_SERVER_ERROR: 500;
    readonly NOT_IMPLEMENTED: 501;
    readonly BAD_GATEWAY: 502;
    readonly SERVICE_UNAVAILABLE: 503;
    readonly GATEWAY_TIMEOUT: 504;
    readonly HTTP_VERSION_NOT_SUPPORTED: 505;
    readonly VARIANT_ALSO_NEGOTIATES: 506;
    readonly INSUFFICIENT_STORAGE: 507;
    readonly LOOP_DETECTED: 508;
    readonly NOT_EXTENDED: 510;
    readonly NETWORK_AUTHENTICATION_REQUIRED: 511;
  };
};

export type StatusTextDict = {
  readonly 100: 'Continue';
  readonly 101: 'Switching Protocols';
  readonly 102: 'Processing';
  readonly 103: 'Early Hints';
  readonly 200: 'OK';
  readonly 201: 'Created';
  readonly 202: 'Accepted';
  readonly 203: 'Non-Authoritative Information';
  readonly 204: 'No Content';
  readonly 205: 'Reset Content';
  readonly 206: 'Partial Content';
  readonly 207: 'Multi-Status';
  readonly 208: 'Already Reported';
  readonly 226: 'IM Used';
  readonly 300: 'Multiple Choices';
  readonly 301: 'Moved Permanently';
  readonly 302: 'Found';
  readonly 303: 'See Other';
  readonly 304: 'Not Modified';
  readonly 305: 'Use Proxy';
  readonly 306: 'Switch Proxy';
  readonly 307: 'Temporary';
  readonly 308: 'Permanent';
  readonly 400: 'Bad Request';
  readonly 401: 'Unauthorized';
  readonly 402: 'Payment Required';
  readonly 403: 'Forbidden';
  readonly 404: 'Not Found';
  readonly 405: 'Method Not Allowed';
  readonly 406: 'Not Acceptable';
  readonly 407: 'Proxy Authentication Required';
  readonly 408: 'Request Timeout';
  readonly 409: 'Conflict';
  readonly 410: 'Gone';
  readonly 411: 'Length Required';
  readonly 412: 'Precondition Failed';
  readonly 413: 'Payload Too Large';
  readonly 414: 'URI Too Long';
  readonly 415: 'Unsupported Media Type';
  readonly 416: 'Range Not Satisfiable';
  readonly 417: 'Expectation Failed';
  readonly 418: "I'm A Teapot";
  readonly 421: 'Misdirected Request';
  readonly 422: 'Unprocessable Entity';
  readonly 423: 'Locked';
  readonly 424: 'Failed Dependency';
  readonly 425: 'Too Early';
  readonly 426: 'Upgrade Required';
  readonly 428: 'Precondition Required';
  readonly 429: 'Too Many Requests';
  readonly 431: 'Request Header Fields Too Large';
  readonly 451: 'Unavailable For Legal Reasons';
  readonly 500: 'Internal Server Error';
  readonly 501: 'Not Implemented';
  readonly 502: 'Bad Gateway';
  readonly 503: 'Service Unavailable';
  readonly 504: 'Gateway Timeout';
  readonly 505: 'HTTP Version Not Supported';
  readonly 506: 'Variant Also Negotiates';
  readonly 507: 'Insufficient Storage';
  readonly 508: 'Loop Detected';
  readonly 510: 'Not Extended';
  readonly 511: 'Network Authentication Required';
};

export const status: StatusDict;

export const statusText: StatusTextDict;
