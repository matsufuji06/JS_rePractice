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
  
  // const myProfile = ["matsufuji", 28];
  // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
  // console.log(message3);
  
  // const [name, age] = myProfile;
  // const message4 =  `名前は${name}です。年齢は${age}歳です。`;
  // console.log(message4);



// デフォルト値、引数など
  // ↓仮引数にname = "~"とすると本引数がない場合のデフォルトの値が設定される
// const sayHello = (name = "fujifuji") => console.log(`こんにちは！${name}さん！`) ;

// sayHello(myProfile[0]);


// ---------
// スプレッド構文（...）
// ---------

// 配列の展開
// const arrt1 = [1, 2];
 //結果：配列で帰ってくる
// console.log(arrt1);

 //結果:中身だけ展開されて帰ってくる
// console.log(...arrt1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arrt1[0], arrt1[1]);
// sumFunc(...arrt1);

// まとめる
// const arrt2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arrt3] = arrt2;
// console.log(num1);
// console.log(num2);

// 残りの配列がまとまって返ってくる
// console.log(arrt3);



// 配列のコピー、結合
// const arrt4 = [10, 20];
// const arrt5 = [30, 40];

// スプレット構文で定義しておけば、片方だけの値が書き変わる
// const arrt6 = [...arrt4];
// arrt6[0] = 100;
// console.log(arrt6);
// console.log(arrt4);

// const arrt7 = [...arrt4, ...arrt5];
// console.log(arrt7);

// const arrt8 = arrt4;
// console.log(arrt8);
// ↓そのままイコールでコピーすると[]自体を参照するため、コピー元の値も書き変わってしまう。
// arrt8[0] = 100;
// console.log(arrt4);



// mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "マッツ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// ↓map構文では「引数」を追加される配列の要素としてみなし、for文のような設定が不要になる（第二引数は添字）
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// ↓filter構文。map構文に加え、返す値を特定させることができる
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;

// })
// console.log(newNumArr);

// const newNumArr = nameArr.map((name) =>{
//   if (name === "マッツ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNumArr)




// 三項演算子
// ある条件？　条件がtrueの時：条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// 自動でカンマ区切りにしてくれる関数
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";

// console.log(formattedNum);


// const  checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }

// console.log(checkSum(50, 40));




// 論理演算子
// const flag1 = true;
// const flag2 = true;

// if(flag1 || flag2) {
//   console.log('1か2にはtrueになります');
// }

// if (flag1 && flag2) {
//   console.log('1も2もtrueになります');
  
// }

// ||は左側がfalseなら右側を返す。（左側がtrueなら即それを返す）
// &&は左側がtrueなら右側を返す。（）

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

