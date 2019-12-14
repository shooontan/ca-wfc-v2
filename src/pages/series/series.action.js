export const handleSeries = (state, response) => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        ...response,
        error: undefined,
      },
    },
  };
};
