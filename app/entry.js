'use strict';
/*練習問題の部分がバンドルから消えるかの実験
const crypto = require('crypto');
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '　　←←←はcryptoを使ったランダムな１６進数'+'</p>');
  */
'use strict';
const dc = require('damage-calc');
document.writeln(
  '攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '');