import {obj} from './strain.mjs'
import {tpl} from './tpl.mjs'


const ttl = document.title

const app = {

}

if(ttl === 'Index'){

let dest = document.getElementById('strains');

for (var i = 0; i < obj.strains.length; i++) {
  let compiled = tpl.card(obj.strains[i]);
  let el = document.createElement('div');

    el.classList.add('col-6');
    el.innerHTML = compiled
    dest.append(el)
}

} else if (ttl === 'Strain') {

  let st = window.location.hash.slice(1);

  for (var i = 0; i < obj.strains.length; i++) {
    if(obj.strains[i].name === st){
      let data = obj.strains[i];

      sname
      let dest = document.getElementById('sname');
      dest.textContent = _.capitalize(data.name);

      dest = document.getElementById('simg');
      dest.src = data.img;

      dest = document.getElementById('description');
      dest.textContent = data.description;

      dest = document.getElementById('genetics');
      dest.textContent = _.capitalize(data.genetics);

      dest = document.getElementById('parents');
      for (var x = 0; x < data.parents.length; x++) {
        let el = document.createElement('span');
        el.classList.add('badge','bg-secondary');
        el.textContent = data.parents[x]
        dest.append(el)
      }

      dest = document.getElementById('thc');
      dest.textContent = data.thc;

      dest = document.getElementById('cbd');
      dest.textContent = data.cbd;

      dest = document.getElementById('effect');
      for (var x = 0; x < data.effect.length; x++) {
        let el = document.createElement('span');
        el.classList.add('badge','bg-secondary');
        el.textContent = data.effect[x]
        dest.append(el)
      }

      dest = document.getElementById('character');
      for (var x = 0; x < data.character.length; x++) {
        let el = document.createElement('span');
        el.classList.add('badge','bg-secondary');
        el.textContent = data.character[x]
        dest.append(el)
      }

      dest = document.getElementById('grown');
      for (var x = 0; x < data.grown.length; x++) {
        let el = document.createElement('span');
        el.classList.add('badge','bg-secondary');
        el.textContent = data.grown[x]
        dest.append(el)
      }

      dest = document.getElementById('price');
      dest.textContent = data.price + '฿';

      dest = document.getElementById('stock');
      dest.textContent = data.stock;
      break
    }

  }

}
