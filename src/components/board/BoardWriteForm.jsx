import { useState } from 'react';
import axios from '../../../node_modules/axios/index';
import styles from '../../css/BoardWriteForm.module.css';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';


const BoardWriteForm = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [subjectDiv, setSubjectDiv] = useState('');
  const [contentDiv, setContentDiv] = useState('');
  
  const navigate  = useNavigate();
  
  const onBoardWriteSubmit = (e) => {
    e.preventDefault();

    setSubjectDiv('');
    setContentDiv('');


    if (!subject) {
      setSubjectDiv('제목입력');

    } else if (!content) {
      setContentDiv('내용 입력');

    } else {
      axios.post(
        'http://localhost:8080/Spring/board/boardWrite',
        null,
        {
          params: { subject: subject, content: content }
          , withCredentials: true
        })
        .then(res => { 
          alert('글쓰기 완료');
          navigate('/board/boardList');

        });
    }
  };


  return (
    <div className={styles.BoardWriteForm}>
      <form>
        <table border={1}>
          <thead></thead>
          <tbody>
            <tr>
              <th><label htmlFor='subject'>제목</label></th>
              <td>
                <input type='text'
                  id='subject'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  required />
                <div id={styles.subjectDiv}>{subjectDiv}</div>
              </td>
            </tr>

            <tr>
              <th><label htmlFor='content'>내용</label></th>
              <td>
                <textarea id='content'
                  value={content}
                  rows={10}
                  cols={50}
                  onChange={e => setContent(e.target.value)}
                  required />
                <div id={styles.contentDiv}>{contentDiv}</div>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align='center'>
                <button onClick={onBoardWriteSubmit}>글쓰기</button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </form>
    </div>
  );
};

export default BoardWriteForm;