dom-smart-plan
====
Api for getting information about the current [Dominion Smart Pricing Plan](https://www.dom.com/business/dominion-virginia-power/ways-to-save/smart-pricing-plan/smart-pricing-plan-day-classification-events-calendar)  day

This currently only works for dominion power in Virginia

Installation
============
`npm install dom-smart-plan`

Examples
========
```javascript
var smartPlan = require('dom-smart-plan');

smartPlan.today().then(console.log)
```

API
===
All methods currently return a Promise with an argument of `{designation:("A"|"B"|"C"|null)}`

### today() 

Status for today

**Returns**: `Promise`


### tomorrow() 

Status for tomorrow

**Returns**: `Promise`


### inDays(days) 

Gets the status for n number of days away

**Parameters**

**days**: `String | int`, can be negative

**Returns**: `Promise`


### onDate(date) 

Gets the status for based on date

**Parameters**

**date**: `Date`

**Returns**: `Promise`










