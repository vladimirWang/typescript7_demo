# TypeScript 7 Demo

这是一个使用 TypeScript 7 Native Preview 的项目示例。

## 特性

- 使用 TypeScript 7.0 的 Native Preview 版本
- 支持装饰器（Decorators）
- 增强的类型推断
- 模板字面量类型
- 条件类型

## 安装依赖

```bash
npm install
```

## 运行项目

### 编译 TypeScript
```bash
npm run build
```

### 运行编译后的代码
```bash
npm start
```

### 编译并运行（一步完成）
```bash
npm run dev
```

### 监听模式（自动编译）
```bash
npm run watch
```

## 项目结构

```
typescript7_demo/
├── src/
│   └── index.ts          # 主入口文件
├── dist/                 # 编译输出目录（自动生成）
├── package.json          # 项目配置和依赖
├── tsconfig.json         # TypeScript 配置
└── README.md            # 项目说明
```

## TypeScript 7 新特性示例

项目包含了以下 TypeScript 7 特性的示例：

1. **增强的类型推断** - 模板字面量类型推断
2. **装饰器支持** - 方法装饰器示例
3. **泛型约束改进** - 更强大的泛型约束
4. **模板字面量类型** - 字符串模板类型
5. **条件类型** - 类型条件判断

## 依赖

- `@typescript/native-preview`: ^7.0.0-dev.20251226.1

## 许可证

ISC