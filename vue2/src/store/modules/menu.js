// 菜单操作
import { TOGGLE_MENU } from '../mutation-types';

const MENU_STATUS = {
  menu_expanded: false,
};

export default {
  state: MENU_STATUS,
  getters: {
    menu_expanded_status: state => state.menu_expanded,
  },
  mutations: {
    [TOGGLE_MENU](state) {
      MENU_STATUS.menu_expanded = !state.menu_expanded;
    },
  },
  actions: {
    [TOGGLE_MENU]({ commit }, data) {
      commit(TOGGLE_MENU, data);
    },
  },
};
