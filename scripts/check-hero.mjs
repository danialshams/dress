import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {markup} from '../app/markup.js';
for(const i of ['01','02','03']) for(const kind of ['desktop','mobile']){
const path='public/images/hero-v3-'+i+'-'+kind+'.webp';
const b=readFileSync(path);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(b.toString('ascii',12,16),'VP8 ');const w=b.readUInt16LE(26)&16383,h=b.readUInt16LE(28)&16383;assert.deepEqual([w,h],kind==='desktop'?[1648,927]:[927,1648],path);assert.ok(markup.includes('/'+path.slice(7)),path);console.log(path,w,h);
}
