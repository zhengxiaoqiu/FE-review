let Vue;
class Store {
  constructor(options = {}) {
    this.vm = new Vue({
      data: {
        state: options.state,
      },
    });

    let getters = options.getters;
    this.getters = {};
    Object.keys(getters).forEach((getterName) => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        },
      });
    });

    let mutations = options.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach((mutationName) => {
      this.mutations[mutationName] = (payload) => {
        mutations[mutationName](this.state, payload);
      };
    });

    let actions = options.actions || {};
    this.actions = {};
    Object.keys(actions).forEach((actionName) => {
      this.actions[actionName] = (payload) => {
        actions[actionName](this, payload);
      };
    });
  }

  commit = (method, payload) => {
    this.mutations[method](payload);
  };

  dispatch = (method, payload) => {
    this.actions[method](payload);
  };

  get state() {
    return this.vm.state;
  }
}

const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    },
  });
};
export default {
  install,
  Store,
};
