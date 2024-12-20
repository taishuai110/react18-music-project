import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier' // 用于避免 ESLint 与 Prettier 的冲突
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended' // 用于将 Prettier 作为 ESLint 规则执行

export default tseslint.config(
  // ignores 表示eslint忽略检查
  { ignores: ['**/dist', '**/node_modules', '**/output'] },
  {
    // 这里表示继承，继承了eslint的推荐配置和typescript的推荐配置
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // 自定义规则
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      // prettier: [
      //   'warn'
      // ],
      // 关闭any类型的警告
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off' // 关闭组件名称多个单词的限制
    }
  },
  // 引入rettier作为eslint的规则
  eslintPluginPrettierRecommended,
  eslintConfigPrettier
)
