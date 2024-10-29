import React, { useState } from 'react';

import styles from '../../css/LoginForm.module.css';
import axios from 'axios';

const LoginForm = () => {

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const [idDiv, setIdDiv] = useState('');
  const [pwdDiv, setPwdDiv] = useState('');

  const onLoginSubmit = (e) => {
    e.preventDefault();

    setIdDiv('');
    setPwdDiv('');

    if (!id) {
      setIdDiv('아이디 입력');

    } else if (!pwd) {
      setPwdDiv('비밀번호 입력');

    } else {
      axios.get(`http://localhost:8080/Spring/member/login?변수=값&변수=값`)
        .then(res => alert(res.data))
      

    }


  }

  const onInput = (e) => {
    const { name, value } = e.target;


  }

  return (

    <div className={styles.LoginForm}>
      <form>
        <table border='1'>
          <thead></thead>
          <tbody>
            <tr>
              <th>아이디</th>
              <td>
                <input type='text' name='id' value={id} onChange={e => setId(e.target.value)} />
                <div id={styles.idDiv}>{idDiv}</div>
              </td>
            </tr>

            <tr>
              <th>비밀번호</th>
              <td>
                <input type='password' name='pwd' value={pwd} onChange={e => setPwd(e.target.value)} />
                <div id={styles.pwdDiv}>{pwdDiv}</div>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align='center'>
                <button onClick={onLoginSubmit}>로그인</button>
              </td>
            </tr>

          </tbody>
          <tfoot></tfoot>
        </table>
      </form>
    </div>
  );

};

export default LoginForm;