# iCookie #

Micro-class for working with cookies on javascript.

## Methods ##

*	**set(name, value, period)** – set cookie with name "name" with value "value" for period "period". "name" and "value" are strings. "period" could be date object of end date or string – humanity name of a period: "day", "week", "month", "year" or "forever".
*	**get(name)** – return value of cookie or boolean false, if cookie "name" is not set or expired.
*	**isSet(name)** – check if cookie "name" exists.
*	**unset(name)** - unset cookie "name" (set cookie expired date in the past)

## Samples ##

```
iCookie.set("foo", "bar", "week")	// Set cookie "foo" with "bar"-value for a week 

console.log(iCookie.get("foo"))		// This will output "bar" in the console``

if (iCookie.isSet("PHPSESSID"))		// Check if cookie "PHPSESSID" is set
	iCookie.unset("PHPSESSID")		// and unset it
```