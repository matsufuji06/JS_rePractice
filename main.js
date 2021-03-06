// console.log('hello');

// コールスタック
// function a() {
  
// }

// function b() {
//   a();
// }

// function c() {
//   b();
// }

// c();

// スコープ（Windowオブジェクト＝グローバルスコープ）
  // 格納先は「スクリプトスコープ」
// let a = 0;
  
  
  // 格納先は「グローバルスコープ」
// var b = 0;

// function c() {

// }

// console.log(window.b);
// console.log(b);

// window.d = 1;
// console.log(d);

  // 格納先は「関数スコープ」（違うスコープ内からでは呼び出せない）
  // function a() {
  //   let b = 0;
    
  // }
  
  // console.log(b)
  // a();
  
  // 格納先は「ブロックスコープ（if文とかで使うヤツ）」（letかconstで生成される。varならスコープ外からでも呼び出せる）
  // {
  //   let c = 1;
  //   console.log(c);

  //   var d = 2;

  //   function e() {
  //     console.log("e is called");

  //   }

  //   e();
  // }
  // console.log(d);


// レキシカルスコープ→外部スコープ（コードを書く場所によって参照できる変数が変わるスコープのこと→静的スコープ）
// let a = 2;
// function fn1() {
//   let b = 1;
  // ↓bは参照可能
  // function fn2() {
  //   let c = 3;
  //   console.log(b);
  // }
  // fn2();
  
// }
// fn1();

// ↓bは参照不可
// function fn2() {
  //   let c = 3;
  //   console.log(b);
  // }
  // fn2();
  
  
  // スコープチェーン（スコープが複数階層で連なっている状態。内から外へ変数を取得しに行く。）

  // ↓スクリプトスコープであるletの方が取得される。（階層は同じでも、グローバルスコープの方が外側）
  // let a = 2;
  // window.a = 4;

  // function fn1() {
    // let a = 1;
  //   function fn2() {
  //     console.log(a);
  //     let a = 3;
  //   }
  //   fn2();
    
  // }
  // fn1();


  // クロージャー（レキシカルスコープの変数を内側の関数が使用している状態）

    //プライベート変数の定義
    // function incrementFactory() {
    //   let num = 0;
    //   // ↑参照可能
    //   function increment() {
    //     num = num + 1;
    //     console.log(num);

    //   }

    //   return increment;

    // }

    // const increment = incrementFactory();

    // increment();
    // increment();
    // increment();



    // 動的な関数の生成(状況によって変化する)
    // function addNumberFactory(num) {
    //   function addNumber(value) {
    //     return num + value;


    //   }
    //   return addNumber;

    // }

    // const add5 = addNumberFactory(5);
    // const add10 = addNumberFactory(10);
    // const result = add5(10);

    // console.log(result);
  



// 即時関数: IIFE（関数定義と同時に一度だけ実行される関数。 returnで定義元に返さないと、その関数内でしか使えない）
// function a() {
//   console.log('called');
  
// }
// a();

// let c = (function(d) {

//   let privateVal = 0;
//   let publicVal = 10;

//   function privateFn() {
//     console.log('privateFn is called');
//   }
//   function publicFn() {
//     console.log('publicFn is called');
//   }

//   return {
//     publicVal,
//     publicFn
//   };

// })();
// c.publicFn();

// console.log(c.publicVal);
// ↑と同義(aのカッコは普通いらない)
// (a)();


// 参照とコピー
// let a = "hello";
// let b = a;
// b = "bye";

// console.log(a);
// console.log(b);

// let c = {
//   prop: "hello"
// }

// let d = c;

// ↓cの方も書き変わってしまう
// d.prop = "bye";

// d = {};

// console.log(c, d);


// constによる参照
// const b = {
//   prop: "hello"

// }

// ↓エラー
// b = {};

// ↓プロパティ内の参照ならconst定義でもエラーにはならない
// b.prop = "bye"
// console.log(b);

// 参照と引数
// let a = 0;

// function fn1(arg1) {
//   arg1 = 1;
//   console.log(a, arg1);
// }

// fn1(a);



// let b = {
//   prop:0
// }

// function fn2(arg2) {
//   arg2.prop = 1;
//   console.log(b, arg2);
//   // bも1に書き変わる
// }

// fn2(b);



// function fn3(arg2) {
//   arg2 = {};
//   console.log(b, arg2);

// }

// fn3(b);



// 分割代入（オブジェクトから特定のプロパティを抽出して宣言する、オフジェクトの中身とは切り離されている。）↓
// let{a, b} = object;

const a = {
  prompt: 0
}

let { prop } = a;

prop = 1;

console.log(a, prop);

function fn({ prop }) {
  // let { prop }  = obj;
  prop = 1;
  console.log(a, prop);

}

fn(a);

const c = {
  prop1: {
    prop2: 0
  }
  
}