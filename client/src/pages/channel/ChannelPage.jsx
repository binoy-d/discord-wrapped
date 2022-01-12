import './ChannelPage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import FadeIn from 'react-fade-in/lib/FadeIn';

function ChannelPage() {
  let params = useParams();
  const [messageCount, setMessageCount] = useState(0)
  
  useEffect(() => {
    axios.get(`http://localhost:5000/channel/${params.id}/messagecount`)
      .then((response) => {
        if ("num_messages" in response.data) {
          setMessageCount(response.data.num_messages);
        }
      })
  }, [params.id]);

  return (
    <div className="ChannelPage">
      <h1 className="d-title text-center mt-5">
        #{params.id}
      </h1>
      <div className={messageCount>0?"slide-in-bottom":""}>

        <h2 className='channel-tagline'> <strong>Holy smokes!</strong> You sent<br />
        <span className="message-count"><span className='glow'>{messageCount}</span> messages</span><br />
        in #{params.id} this year!</h2>
      
        </div>
    </div>
  );
}

export default ChannelPage;
