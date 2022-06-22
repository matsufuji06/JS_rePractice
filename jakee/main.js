// アロー関数

  // 従来の関数
  // function func1(argument) {
  //   return argument;
  // }

  // const func1 = function(argument2) {
  //   return argument2;
  // }

  // console.log(func1("func1です"));




  // アロー関数
  // const func2 = (argument3) => {
  //   return argument3;
  // }

  // １行のみの時はreturnは省略可能
  const func2 = (argument3) => argument3;

  console.log(func2("func2です"));


  const func3 = (num1, num2) => {
    return num1 + num2;
  };

  console.log(func3(10, 20));