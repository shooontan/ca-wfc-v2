import { request } from '@hyperapp/http';

export const is = state => state.location?.path === '/';

const GotResult = (state, result) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        ...result,
      },
    },
  };
};

export const factor = () =>
  request({
    url: 'https://wfc2-image-api-259809.appspot.com/api/series/',
    expect: 'json',
    action: GotResult,
  });
