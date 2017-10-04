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