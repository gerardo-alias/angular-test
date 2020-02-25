// config
import { API_KEY, ENV, POSTER_URL } from '@config/settings';
import envHosts from '@config/hosts.json';
import endpoints from '@config/endpoints.json';

// cosntants
import { YOUTUBE, YOUTUBE_URL } from '@constants/constants';

const buildBaseHost = (endpointName: string): string => {
  const baseHost = envHosts[ ENV ];
  const endpoint = endpoints[ endpointName ];
  return `${baseHost}${endpoint}`;
};

const buildParams = (host: string, params?: Record<string, string | number | boolean>): string => {
  let parametrizedHost = host;

  if (!params || !(params instanceof Object)) {
    return parametrizedHost;
  }

  Object.keys(params).forEach(param => {
    parametrizedHost = parametrizedHost.replace(`{${param}}`, params[ param ].toString());
  });

  return parametrizedHost;
};

const buildQuery = (query?: Record<string, string | number | boolean>): string => {
  let queryString = '';
  let isFirstArg = true;

  if (!query || !(query instanceof Object)) {
    return queryString;
  }

  queryString = '?';
  Object.keys(query).forEach(queryElement => {
    let valueSeparator = '&';
    if (isFirstArg) {
      isFirstArg = false;
      valueSeparator = '';
    }

    const encodedElement = `${queryElement}=${encodeURIComponent(query[ queryElement ])}`;
    queryString = `${queryString}${valueSeparator}${encodedElement}`;
  });

  return queryString;
};

const completeQuery = (currentQuery: Record<string, string | number | boolean>) => ({
  ...currentQuery, api_key: API_KEY
});

export const buildURL = ({ endpoint, params, query }: {
  endpoint: string;
  params?: Record<string, string | number | boolean>;
  query?: Record<string, string | number | boolean>;
}): string => {
  const initialBaseHost = buildBaseHost(endpoint);
  const baseHostWithParams = buildParams(initialBaseHost, params);
  const queryString = buildQuery(completeQuery(query));
  const baseHost = `${baseHostWithParams}${queryString}`;

  return baseHost;
};

export const buildPosterURL = (key?: string) => (
  key ? `${POSTER_URL}${key}` : ''
);

export const buildTrailerURL = (key?: string, site?: string): string => (
  (key && site.toLowerCase() === YOUTUBE) ? `${YOUTUBE_URL}${key}` : ''
);
