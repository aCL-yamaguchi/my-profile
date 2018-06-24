<template>
  <div>
    <div class="all-wrapper">
      <div class="dropdown-wrapper" v-on:click="isActive = !isActive">
          <div class="dropdown-text">
            {{label}}
          </div>
          <i class="el-icon-caret-bottom"></i>
      </div>
      <transition>
        <div class="list-items" v-if="isActive">
          <template v-if="existsListItems">
            <template v-for="(value, key) in listItems">
              <div class="list-item" :class="[key == activeItemKey ? 'active' : '']" v-on:click="handleClickItem(key)" v-bind:key="key">
                {{value.name}}
              </div>
            </template>
          </template>
        </div>
      </transition>
    </div>
    <div class="dropdown-bg" v-on:click="isActive = false" v-if="isActive"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    listItems: {
      type: Array,
      required: true
    },
    activeItemKey: {
      type: [String, Number],
      required: false
    },
    action: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    existsListItems () {
      return !window.isEmpty(this.listItems)
    }
  },
  methods: {
    handleClickItem (key) {
      if (key === this.activeItemKey) {
        return
      }
      this.isActive = false
      this.action(key)
    }
  }
}
</script>

<style scoped>
.all-wrapper {
  position: relative;

    .dropdown-wrapper {
      color: #666666;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      .dropdown-text {
        font-size: 14px;
      }

      i {
        font-size: 10px;
        margin-left: 6px;
      }
    }

    .list-items {
      width: 260px;
      max-height: 300px;
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid #B9BFC9;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
      position: absolute;
      right: 0;
      overflow-y: scroll;
      z-index: 3;
      padding: 0.5rem 0;

      .list-item {
        color: #333;
        font-size: 14px;
        line-height: 16px;
        padding: 0.75rem 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;

        &:not(.active):hover {
          background-color: #F3F4F6;
          cursor: pointer;
        }

        &.active {
          color: #fff;
          background-color: #182A4B;
        }
      }
    }
}

.dropdown-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.v-enter-active, .v-leave-active {
  transition: all 0.3s
}

.v-enter {
  transform: translateY(-10px);
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
