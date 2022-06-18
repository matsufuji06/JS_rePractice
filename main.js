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
let a = 2;
function fn1() {
  let b = 1;
  // ↓bは参照可能
  // function fn2() {
  //   let c = 3;
  //   console.log(b);
  // }
  // fn2();
  
}
fn1();

// ↓bは参照不可
function fn2() {
  let c = 3;
  console.log(b);
}
fn2();
