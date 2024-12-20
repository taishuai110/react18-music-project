版本

- node 18.16.0
- 版本控制 pnpm

.prettier 用于：控制代码风格和输出的格式
.prettier文件属性：

- useTabs: 使用空格而非制表符来缩进(boolean)
- tabWidth: 每次缩进使用 2 个空格 (number)
- printWidth: 限制每行代码的最大字符数为(number)
- singleQuote: 使用单引号包裹字符串，而不是双引号(boolean)
- trailingComma: 控制是否在多行对象、数组、函数参数等结构的最后一项后添加一个逗号。(none表示不会在多行元素后加逗号)
- semi: 语句末尾不添加分号。(boolean)

命令行：pnpm run prettier 用于执行.prettierrc 以达到全部文件都按照prettierrc的规范来

.prettierignore，这个文件用来，忽略文件的，当在执行prettire时，可以针对哪些文件不要执行prettier的规范

命令行: pnpm run lint 用于执行eslint的规范的，不满足规范都会报错  
命令行: pnpm run lint --fix 这个命令则会修复关于prettier格式的问题
