// State
export const state = () => (
  {
      menuVisibility: false,
  }
);

// Mutations
export const mutations = {
  SET_MENU_VISIBILITY(
      state,
      value
  ) {

    state.menuVisibility = value || false;

  },
};
