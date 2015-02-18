var MessageList = React.createClass({

  render: function() {
    var messageListItems = [];

    this.props.messages.forEach(function(message) {
      messageListItems.push(<li>{message.body}</li>);
    });

    return (
      <ul>{messageListItems}</ul>
    );
  }
});
