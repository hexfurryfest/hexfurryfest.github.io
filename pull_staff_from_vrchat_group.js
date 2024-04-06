// Select the div containing all the staff entries.
let names = Array.from($0.querySelectorAll('h4')).map(x => x.innerText).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(JSON.stringify(names.map(x => { return {name: x}; }), null, '\t'));