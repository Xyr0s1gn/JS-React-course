function fun(echo) {
  console.log(echo);
}

// fun('Hello');

function boo(aFunction) {
  aFunction('boo');
}
boo(fun);
console.log(fun);
fun(boo);

let moreFun = fun;
moreFun('Hello again');

function echoMaker() {
  return fun;
}

let bigFun = echoMaker();
bigFun('an echo?');
