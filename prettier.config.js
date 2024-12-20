export default {
  useTabs: false, // 不适用缩进符，而使用空格
  tabWidth: 2, // 使用2个空格缩进
  printWidth: 80, // 每行超过80个字符换行
  singleQuote: true, // 是否使用单引号
  trailingComma: 'none', // 代码末尾不需要逗号
  semi: false, // 代码结尾是否加分号 // 可设置为all，表示加不加都行
  endOfLine: 'auto', //避免报错delete (cr)的错误
  jsxSingleQuote: false, // jsx不使用单引号,而使用双引号
  jsxBracketSameLine: false, // jsx标签的反尖括号需要换行
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css' // 根据显示样式决定html要不要折行
}
