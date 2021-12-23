import './ChannelPage.css';
import { useParams } from "react-router-dom";

function ChannelPage() {
  let params = useParams();
  return (
    <div className="ChannelPage">
        <h1 className="d-title text-center mt-3">
            Channel Page
        </h1>
        <h2 className="text-center">Show statistics about {params.id}</h2>
    </div>
  );
}

export default ChannelPage;
