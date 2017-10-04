
/**
Makeing a form
*/
let AddNewForm = React.createClass({
	propTypes: {
		addressItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	onStreetChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.addressItem, {street: e.target.value}));
	},
	onCityChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.addressItem, {city: e.target.value}));
	},
	onPostcodeChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.addressItem, {postcode: e.target.value}));
	},
	onSubmit: function(e) {
		this.props.onSubmit(this.props.addressItem);
	},
	render: function() {
		return (
			React.createElement("form", {},
				React.createElement("input", {
					type: "text",
					placeholder: "Street",
					value: this.props.addressItem.street,
					onChange: this.onStreetChange
				}),
				React.createElement("input", {
					type: "text",
					placeholder: "City",
					value: this.props.addressItem.city,
					onChange: this.onCityChange
				}),
				React.createElement("textarea", {
					placeholder: "Postcode",
					value: this.props.addressItem.postcode,
					onChange: this.onPostcodeChange
				}),
				React.createElement("button", {type: "button", onClick: this.onSubmit}, "Submit")
			)
		);
	}
});
let AddNewItemPage = React.createClass({
	propTypes: {
		addressItem: React.PropTypes.object.isRequired,
		items: React.PropTypes.array.isRequired,
		onNewAddressItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement(AddNewForm, {
					addressItem: this.props.addressItem, 
					onChange: this.props.onNewAddressItemChange, 
					onSubmit: this.props.onSubmitNewItem})
			)
		);
	}
});


function updateNewAddressItem(item) {
//	setItemState({addressItem: item});
	setState({addressItem: item});
}
function addNewItem(item) {
	if(item.city == "" || item.street==""){
		alert("Invalid Data");
		return;
	}
	let itemList = state.items;
	itemList.push(Object.assign({}, {id:itemList.length + 1},{key: itemList.length + 1}, item));
	setState({items: itemList,addressItem:{street:"",city:"",postcode:""}});
	alert("Added New Item");
}


/**
 Create Navigation
*/
var NavMenu = React.createClass({
	render: function() {
		return (
			React.createElement("ul", {className: "nav-bar"},
				React.createElement("li", {},
					React.createElement("a", {href: "#/"}, "List")
				),
				React.createElement("li", {},
					React.createElement("a", {href: "#/newitem"}, "Add")
				)
			)
		);
	}
});

/*
 Creating  ListItems
*/
var AddressItem = React.createClass({
	propTypes: {
		id: React.PropTypes.number,
		street: React.PropTypes.string.isRequired,
		city: React.PropTypes.string.isRequired,
		postcode: React.PropTypes.string,
		onCliked: React.PropTypes.func
	},
	render: function() {
		return (
			React.createElement("li", {},
				React.createElement("a", {href:"#/item/:"+this.props.id, onCliked:this.props.onCliked}, this.props.street)
			)
		);
	}
});
var AddressItems = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},
	render: function() {
		return (
			React.createElement("ul", {}, this.props.items.map(i => React.createElement(AddressItem, i)))
		);
	}
});

var MainPage = React.createClass({
	render: function () {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement(AddressItems, {items: gitems}))
		);
	}
});

/*

Creating List
*/
var ItemPage = React.createClass({
	render: function() {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement("h2", {}, "Street: "+ this.props.street),
				React.createElement("p", {}, "City: "+this.props.city),
				React.createElement("p", {}, "Postcode: "+this.props.postcode)
			)
		);
	}
});


state = {
};

/*
Routing menus
*/
function setState(changes) {
	let component;
	let componentProperties = {};
	Object.assign(state, changes);
	let splittedUrl = state.location.replace(/^#\/?|:|\/$/g, "").split("/");
	switch(splittedUrl[0]) {
	case "newitem":
		component = AddNewItemPage;
		componentProperties = {addressItem:state.addressItem,items:state.items,onNewAddressItemChange:updateNewAddressItem,onSubmitNewItem:addNewItem};
		break;
	case "item":
		component = ItemPage;
		componentProperties = gitems.find(i => i.key == splittedUrl[1].split(":"));
		break;
	default:
		component = MainPage;
		break;
		
	}				  
	ReactDOM.render(
		React.createElement(component, componentProperties), document.getElementById("react-app")
	);
}

window.addEventListener("hashchange", ()=>setState({location: location.hash}));
setState({location: location.hash,
	items: gitems,
	addressItem:{
		street:"",
		city:"",
		postcode:""}
	
});