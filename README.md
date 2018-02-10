# stationaryjs
Bunch of static data needed in apps like time-zones list, states list, country codes etc.

#### Install

```sh
npm install stationaryjs --save
```

or using yarn

```sh
yarn add stationaryjs
```



&nbsp;

#### usage

```js
import React, { Component } from "react";
import { countries } from "stationaryjs";

class Preview extends Component {
    render () {
        return (
            <div>
                <select>
                {
                    countries.map((country, index) => <option key={index} value={country.value}>{country.name}</option>)
                }
                </select>
            </div>
        )
    }
}

```

&nbsp;

## like it?

:star: this repo

## Contributors

PRs are welcomed.


## license

MIT © [priyanshujain](https://github.com/priyanshujain)