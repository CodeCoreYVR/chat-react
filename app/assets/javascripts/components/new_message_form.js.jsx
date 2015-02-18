var NewMessageForm = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },

  updateNewMessageValue: function() {
    var input = this.refs.newMessage.getDOMNode();
    this.setState({text: input.value});
  },

  addNewMessage: function(e) {
    e.preventDefault();
    $.post('http://localhost:3000/messages', {body: this.state.text},
      this.props.onNewMessage);
    this.setState({text: ''});
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.addNewMessage}>
          <input type="text"
                 ref="newMessage"
                 value={this.state.text}
                 onChange={this.updateNewMessageValue} />
          <button>Send Message</button>
        </form>
      </div>
    );
  }
});
