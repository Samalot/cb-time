[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# cb-time

A CyberBrokers utility library to convert time from Earth time to TPL time (both ways)

## Installation

Using npm:

```bash
  $ npm install cb-time
```
    
## Basic Usage

For both conversions an "origin" time is required. This represents when the TPL first went online. This information is currently unknown but an approximation would be around 150 from current day. If no origin time is provided then **06/02/2170** will be used as default (until a better estimate is known).

### convertToTplDatetime

Takes in an Earth datetime and converts it to a TPL time [cycle, cirxit, syx, stax, blox, tix] 

Input:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `earthDatetime` | `number or Date()` | **Required** A Date() or Unix time epoch for the Earth datetime |
| `origin` | `number or Date()` | **Optional** A Date() or Unix time epoch for the start datetime of the TPL|

```jsx
  import { convertToTplDatetime } from "cb-time";
  
  const earth_date = new Date(14007018452000)
  const tpl_date = convertToTplDatetime(earth_date)

  // [2667, 50, 1, 1, 22, 36]
```

### convertToEarthDatetime

Takes in an TPL datetime ([cycle, cirxit, syx, stax, blox, tix] ) and converts it to Earth time

Input:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tplDatetime` | `number[]` | **Required** TPl date in the form [cycle, cirxit, syx, stax, blox, tix] |
| `origin` | `number or Date()` | **Optional** A Date() or Unix time epoch for the start datetime of the TPL|

```jsx
  import { convertToEarthDatetime } from "cb-time";
  
  const tpl_date = [2667, 50, 1, 1, 22, 36]
  const earth_date = convertToEarthDatetime(tpl_date)
```

### modifyTplDatetime

Modify a TPL date by a given amount of tix

Input:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tplDatetime` | `number[]` | **Required** TPl date in the form [cycle, cirxit, syx, stax, blox, tix] |
| `tix` | `number` | **Optional** The amount of tix +/- to modify the date by|

```jsx
  import { modifyTplDatetime } from "cb-time";
  
  const tpl_date = [2667, 50, 1, 1, 22, 36]
  const modified_tpl_date = modifyTplDatetime(tpl_date, 30)

  // output = [2667, 50, 1, 1, 23, 6]
```


## Contributing

Contributions are always welcome! For any help, please contact me at samalotmedia@gmail.com
