
# helper-function

## Examples

### queryBuilder

```typescript

import { queryBuilder } from "helper-function"

const params = {
	id:null,
  	name:'anmol',
  	dob:undefined,
  	phone:0,
}

console.log(queryBuilder("https://anmol-fzr.web.app/",params))


// result "https://anmol-fzr.web.app?name=anmol"

```

### removeFalsyValues



```javascript

import { removeFalsyValues } from "helper-function"

const params = {
	id:null,
  	name:'anmol',
  	dob:undefined,
  	phone:0,
}

console.log(removeFalsyValues(params))

// result
// { "name":'anmol' }

```


## Author

[Anmol](https://github.com/anmol-fzr)