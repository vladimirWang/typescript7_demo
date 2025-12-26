/**
 * TypeScript 7 Demo Project
 * 使用 TypeScript 7 Native Preview API
 */

// 示例 1: 使用 TypeScript 7 的类型推断增强
function greet<T extends string>(name: T): `Hello, ${T}!` {
  return `Hello, ${name}!` as `Hello, ${T}!`;
}

// 示例 2: 使用装饰器（TypeScript 7 改进的装饰器支持）
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`调用方法: ${propertyKey}`, args);
    const result = originalMethod.apply(this, args);
    console.log(`方法返回: ${propertyKey}`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
  
  @log
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// 示例 3: 使用 TypeScript 7 的泛型约束改进
interface Identifiable {
  id: string;
}

function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// 示例 4: 使用模板字面量类型
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // 'onClick'

// 示例 5: 使用条件类型
type MyNonNullable<T> = T extends null | undefined ? never : T;

// 主函数
function main() {
  console.log('=== TypeScript 7 Demo ===\n');
  
  // 测试类型推断
  const greeting = greet('TypeScript 7');
  console.log('1. 类型推断:', greeting);
  console.log('   类型:', typeof greeting);
  
  // 测试装饰器
  console.log('\n2. 装饰器示例:');
  const calc = new Calculator();
  calc.add(5, 3);
  calc.multiply(4, 7);
  
  // 测试泛型约束
  console.log('\n3. 泛型约束示例:');
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' }
  ];
  const user = findById(users, '1');
  console.log('   找到用户:', user);
  
  // 测试模板字面量类型
  console.log('\n4. 模板字面量类型:');
  const clickEvent: ClickEvent = 'onClick';
  console.log('   事件名称:', clickEvent);
  
  console.log('\n=== 项目运行成功 ===');
}

// 运行主函数
main();

