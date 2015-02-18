var App = React.createClass({
  getInitialState: function() {
    return {
      messages: this.props.messages
    }
  },

  updateMessages: function() {
    var self = this;
    $.get('/messages', {limit: 5}, function(messages) {
      self.setState({messages: messages});
    });
  },

  componentDidMount: function() {
    var self = this;
    setInterval(function() { self.updateMessages() }, 5000);
  },

  render: function() {
    return (
      <div>
        <h1>Welcome to Chatr!</h1>

        <MessageList messages={this.state.messages} />
        <NewMessageForm onNewMessage={this.updateMessages} />
      </div>
    );
  }
});
