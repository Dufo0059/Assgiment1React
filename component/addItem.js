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
		return
	}
	let itemList = state.items;
	itemList.push(Object.assign({}, {id:itemList.length + 1},{key: itemList.length + 1}, item));
	setState({items: itemList,addressItem:{street:"",city:"",postcode:""}});
	alert("Added New Item");
}

