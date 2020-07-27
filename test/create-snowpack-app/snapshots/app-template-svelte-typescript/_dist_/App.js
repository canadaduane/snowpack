import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "/web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let div;
	let header;
	let img;
	let img_src_value;
	let t0;
	let p;
	let t4;
	let a;

	return {
		c() {
			div = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			p = element("p");
			p.innerHTML = `Edit <code>src/App.svelte</code> and save to reload.`;
			t4 = space();
			a = element("a");
			a.textContent = `${message}`;
			if (img.src !== (img_src_value = "/logo.svg")) attr(img, "src", img_src_value);
			attr(img, "class", "App-logo svelte-12f0jfw");
			attr(img, "alt", "logo");
			attr(a, "class", "App-link svelte-12f0jfw");
			attr(a, "href", "https://svelte.dev");
			attr(a, "target", "_blank");
			attr(a, "rel", "noopener noreferrer");
			attr(header, "class", "App-header svelte-12f0jfw");
			attr(div, "class", "App svelte-12f0jfw");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(header, img);
			append(header, t0);
			append(header, p);
			append(header, t4);
			append(header, a);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

let message = "Learn Svelte with Typescript";

function instance($$self) {
	"use strict";
	return [];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;