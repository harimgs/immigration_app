import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, delCounter } from '../store/itemsSlice.js';
import { changeName, increaseAge } from '../store/usersSlice.js';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

// let Child = function(){
//   console.log('재렌더링됨')
//   return <div>자식임</div>
// }

//memo는 props가 변할때만 재렌더링해줌, 항상 재렌더링전에 기존 props===신규props랑 비교를하기때문에 성능저하가 있을수있음
let Child = memo(function () {
  console.log('재렌더링됨');
  return <div>자식임</div>;
});

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div>
      <Child></Child>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        돌아가기
      </button>
      <h6>
        {state.users.name} {state.users.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        이름
      </button>
      <button
        onClick={() => {
          dispatch(increaseAge());
        }}
      >
        나이
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCounter(item));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(delCounter(item));
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
