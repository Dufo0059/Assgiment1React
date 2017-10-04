module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
  	"globals": {
        "React": true,
        "ReactDOM":true,
        "NavMenu": true,
        "ItemPage":true,
        "gitems":true,
        "menuItem":true,
        "state":true,
		"updateNewAddressItem":true,
		"addNewItem":true,
		"setState":true
	}
};