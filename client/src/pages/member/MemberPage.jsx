import { useParams } from 'react-router-dom';
import './MemberPage.css';

function MemberPage() {
  let params = useParams()
  return (
    <div className="MemberPage">
        <h1 className="d-title text-center mt-3">
            Member Page
        </h1>
        <h2 className="text-center">Show statistics about {params.id}</h2>
    </div>
  );
}

export default MemberPage;
