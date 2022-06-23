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
  // const func2 = (argument3) => argument3;

  // console.log(func2("func2です"));


  // const func3 = (num1, num2) => {
  //   return num1 + num2;
  // };

  // console.log(func3(10, 20));


  // 分割代入
  // const myProfile = {
  //   name: "matsufuji",
  //   age: 28,
  // };

  // 従来
  // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
  
  // console.log(message1);
  
  // 分割代入を用いて（関数名とプロパティの紐付けが要らなくなる）
  // const {name, age} = myProfile;
  // const message2 = `名前は${name}です。年齢は${age}歳です。`;
  // console.log(message2);
  
  const myProfile = ["matsufuji", 28];
  const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
  console.log(message3);
  
  const [name, age] = myProfile;
  const message4 =  `名前は${name}です。年齢は${age}歳です。`;
  console.log(message4);

  


