import { request } from '@hyperapp/http';

export const is = state => state.location?.path === '/viewer';

const GotResult = (state, result) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        ...result,
        currentPage: 0,
      },
    },
  };
};

export const factor = state =>
  request({
    url: `https://wfc2-image-api-259809.appspot.com/api/books/${state.location.queryParams.bookId}/`,
    expect: 'json',
    action: GotResult,
  });
