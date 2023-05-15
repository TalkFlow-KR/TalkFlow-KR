import axios from "axios";

const sendChatToServer = async (message) => {
  try {
    const response = await axios.post("http://yourserver.com/chat", {
      message,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleSendClick = () => {
  if (inputValue.trim()) {
    const newMessage = {
      id: Date.now(),
      text: inputValue,
    };
    setMessageList([...messageList, newMessage]);
    setInputValue("");
    setMessage("");
    sendChatToServer(inputValue); // Call the sendChatToServer function
  }
};
