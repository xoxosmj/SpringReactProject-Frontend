import axios from 'axios'; // axios import 추가
import { useEffect, useState } from 'react';

const BoardList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Spring/board/boardList')
      .then(res => {
        console.log(res.data);
        setList(res.data);
      });
  },[]);

  return (
    <div className='{styles.BoardList}'>
      <h2>게시판 리스트</h2>
      <table border={1} frame='hsides' rules='rows'>
        <thead>
          <tr>
            <th width='100'>번호</th>
            <th width='300'>제목</th>
            <th width='100'>작성자</th>
            <th width='100'>조회수</th>
            <th width='150'>작성일</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(board => <tr key={board.seq}>
              <td>{board.seq}</td>
              <td>{board.subject}</td>
              <td>{board.id}</td>
              <td>{board.hit}</td>
              <td>{board.logtime}</td>
            </tr>)
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BoardList;