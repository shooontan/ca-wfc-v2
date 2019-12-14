import { request } from '@hyperapp/http';

export const is = state => state.location?.path === '/series';

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

export const factor = state =>
  request({
    url: `https://wfc2-image-api-259809.appspot.com/api/series/${state.location.queryParams.seriesId}/`,
    expect: 'json',
    action: GotResult,
  });
