export const Start = (state, start = () => {}) => {
  try {
    start();
  } catch (error) {
    console.log(error);
    // TODO: error
    return {
      ...state,
      voice: {
        active: false,
        enable: false,
      },
    };
  }
  return {
    ...state,
    voice: {
      active: true,
      enable: true,
    },
  };
};

export const Stop = (state, stop = () => {}) => {
  stop();
  return {
    ...state,
    voice: {
      ...state.voice,
      active: false,
    },
  };
};
