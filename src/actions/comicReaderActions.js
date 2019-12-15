// TODO: fix common

export const NextPage = state => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        currentPage: state.pageData[path].currentPage + 1,
      },
    },
  };
};

export const PrePage = state => {
  const { path } = state.location;
  return {
    ...state,
    pageData: {
      ...state.pageData,
      [path]: {
        ...state.pageData[path],
        currentPage: state.pageData[path].currentPage - 1,
      },
    },
  };
};
