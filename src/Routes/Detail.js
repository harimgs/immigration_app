import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/itemsSlice.js';

function Detail(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let { id } = useParams();
  let findShoe = props.shoes.find(function (x) {
    return x.id === Number(id);
  });


  // useEffect(() => {
  //   let watched = JSON.parse(localStorage.getItem('watched'));
  //   let i = watched.findIndex((x) => x === findShoe.id);
  //   if (i === -1) {
  //     watched.push(findShoe.id);
  //     localStorage.setItem('watched', JSON.stringify(watched));
  //   } else {
  //     return;
  //   }
  // }, []);

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('watched'));
      watched.push(findShoe.id);
      watched = new Set(watched);
      watched = Array.from(watched);
      localStorage.setItem('watched', JSON.stringify(watched));
  }, []);

  const [tab, setTab] = useState(0);

  const [hide, setHide] = useState(false);
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const [show, setShow] = useState('');
  useEffect(() => {
    const a = setTimeout(() => {
      setShow('dend');
    }, 100);
    return () => {
      clearTimeout(a);
      setShow('');
    };
  }, [props.shoes]);

  useEffect(() => {
    let a = setTimeout(() => {}, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (!isNaN(input)) {
      return;
    } else {
      alert('숫자만입력하세요');
    }
  }, [input]);

  return (
    <>
      <Container className={`start ${show}`}>
        {!hide ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null}
        <input onChange={onChange} placeholder="숫자만" value={input} />
        <Row>
          <Col md={6}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                findShoe.id + 1
              }.jpg`}
              // src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt=""
            />
          </Col>
          <Col md={6} className="mt-4">
            <h4 className="pt-5">{findShoe.title}</h4>
            <p>{findShoe.content}</p>
            <p>{findShoe.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addItem({
                    id: findShoe.id,
                    name: findShoe.title,
                    count: 1,
                  })
                );
                //navigate('/cart')
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                navigate(-1);
              }}
            >
              돌아가기
            </button>
          </Col>
        </Row>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => setTab(0)} eventKey="link0">
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(1)} eventKey="link1">
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(2)} eventKey="link2">
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <ShowTab tab={tab} shoes={findShoe} />
      </Container>
    </>
  );
}

function ShowTab({ tab, shoes }) {
  const [show, setShow] = useState('');
  useEffect(() => {
    const a = setTimeout(() => {
      setShow('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setShow('');
    };
  }, [tab]);

  return (
    <div className={`start ${show}`}>
      {[<div>{shoes.title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
