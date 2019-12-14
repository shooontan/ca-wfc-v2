export const handleComic = (state, response) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        ...response,
        // display image index
        currentPage: 0,
        error: undefined,
      },
    },
  };
};

export const handleError = (state, error) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        error,
      },
    },
  };
};
