# learn-node
## learn-cli
1. 如果要在action中访问`this.opts()`, 需要使用函数表达式, 不能使用箭头函数
action()回调函数的参数存在options可以直接获取
>The this keyword is set to the running command and can be used from a function expression (but not from an arrow function)

2.  chalk v5只支持ESM, 使用CommonJS用v4
3. 如果是较复杂的库最好通过实例化不同commander的方式, 直接通过`const {program} = require('commander')`创建的是全局的commander
>Commander exports a global object which is convenient for quick programs. This is used in the examples in this README for brevity. For larger programs which may use commander in multiple ways, including unit testing, it is better to create a local Command object to use.
4. 注意不同command的option参数不会互相冲突
