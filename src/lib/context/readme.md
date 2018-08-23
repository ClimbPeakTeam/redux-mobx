## context  上下文   --- 在当前组件下获取其他子组件的上下文
- 1.在父级上要定义上下文，先要表明上下文的类型
  static childContextTypes = {
    col:PropTypes.string.isRequired
  }

- 2.在父级中获取儿子的上下文---方法, 返回一个对象，对象代表了儿子的上下文
  getChildContext() {
    return {col: this.state.color}
  }

- 3.在子组件中设置上下文的属性校验
  static contextTypes = {
    col: PropTypes.string.isRequire
  }

- 4.在子组件中获取上下文的值
  this.context.col
