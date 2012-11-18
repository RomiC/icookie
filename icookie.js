/**
 * Object for working with cookies on JS
 */
iCookie = {
	/**
	 * Set cookie
	 * @param string name Name of a cookie var
	 * @param string value Value of cookie
	 * @param date|string expires Expire date (as Date-Object), or period of actve: "day", "week", "month", "year"
	 */
	set: function(name, value, expires) {
		if (typeof expires == "object")
			expiresStr = expires.toGMTString();
		else if (typeof expires == "string") {
			switch (expires) {
				case "day":
					expiresStr = (new Date(Date.now() + 86400000)).toGMTString();
					break;
				case "week":
					expiresStr = (new Date(Date.now() + 604800000)).toGMTString();
					break;
				case "month":
					expiresStr = (new Date((new Date).setMonth((new Date).getMonth() + 1))).toGMTString();
					break;
				case "year":
					expiresStr = (new Date((new Date).setYear((new Date).getFullYear() + 1))).toGMTString();
					break;
			}
		} else	// set cookie for a day, by default
			expiresStr = (new Date(Date.now() + 86400000)).toGMTString();

		document.cookie = name + "=" + escape(value) + "; expires=" + expiresStr +"; path=/";
	},
	/**
	 * Get cookie
	 * @param string name Name of a cookie var
	 * @return string|boolean Cookie value, or false if it isn't set
	 */
	get: function(name) {
		reg = new RegExp(name +"\=([^;]+)?(;|$)");
		res = reg.exec(document.cookie);

		if (res == null)
			return false;

		return res[1];
	},
	/**
	 * Check if cookie is set
	 * @param string name Name of the cookie
	 * @return boolean true — is set, false — no set
	 */
	isSet: function(name) {
		reg = new RegExp(name +"\=([^;]+)?(;|$)");
		return reg.test(document.cookie);
	},
	/**
	 * Delete cookie
	 * @param string name
	 */
	unset: function(name) {
		this.set(name, "", (new Date(5135072006)));
	}	
}