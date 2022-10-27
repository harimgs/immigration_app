import { useNavigate, Outlet } from 'react-router-dom';



function Event() {
  let navigate = useNavigate();
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <button
        className="btn btn-danger"
        onClick={() => {
          navigate('/event/one');
        }}
      >
        첫번째 이벤트
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          navigate('/event/two');
        }}
      >
        두번째 이벤트
      </button>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}


export default Event;