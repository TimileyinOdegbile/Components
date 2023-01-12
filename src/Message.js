const Message = (props) => {
  return (
    <div className="ui message">
      <div className="header">{props.headText}</div>
      <p>{props.bodyText}</p>
    </div>
  );
};

export default Message;
