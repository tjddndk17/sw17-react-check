import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Login.css";
import { reg } from '../utils';
import axios from 'axios';

function Login() {
    
    const [inputs, setInputs] = useState({
        id: "",
        pw: "",
    });
    
    const { id, pw } = inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    
    const chkId = () => {
        if(!id){
            alert('아이디를 입력해주세요');
            return false;
        } else if(id.search(reg.id.exp) < 0){
            alert(reg.id.desc);
            return false;
        }
        
        return true;
    };
    
    const chkPw = () => {
        if(!pw){
            alert('비밀번호를 입력해주세요');
            return false;
        } else if(pw.search(reg.pw.exp) < 0){
            alert(reg.pw.desc);
            return false;
        }
        
        return true;
    };
    
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        if(chkId() && chkPw()){
            const result = await axios({
                method: 'GET',
                url: 'http://localhost:4001/users'
            })
            .then(res => {
                return res && res.data ? res.data : null;
            })
            
            const user = result.find((user,index) => {
                return (user.id === id && user.pw === pw);
            })
            
            
            if(user){
                alert(`성공\n이름:${user.name}`);
            } else {
                alert('아이디, 비밀번호를 확인해주세요');
            }
        }
    };
    
    return (
        <div className="login-wrap">
            <div className="login-wrap__head">
                <h1 className="login-wrap__tit">Check Up 통합관리시스템</h1>
            </div>
            <div className="login-wrap__body">
                <Form onSubmit={handleSubmit}>
                    <div className="login-wrap__input">
                        <Form.Control
                            type="text"
                            name="id"
                            value={id}
                            onChange={onChange}
                            placeholder="ID"
                        />
                    </div>
                    <div className="login-wrap__input">
                        <Form.Control
                            type="password"
                            name="pw"
                            value={pw}
                            onChange={onChange}
                            placeholder="비밀번호"
                        />
                    </div>
                    <div className="login-wrap__info">
                        <div className="login-wrap__check form-check">
                            <Form.Check.Input type="checkbox" name="" id="check" />
                            <Form.Check.Label htmlFor="check">아이디 저장</Form.Check.Label>
                        </div>
                        <a href="" className="link-secondary">
                            아이디/비밀번호찾기
                        </a>
                    </div>
                    <Button type="submit" className="login-wrap__submit">
                        로그인
                    </Button>
                </Form>
            </div>
            <div className="login-wrap__foot">
                <p className="m-0">신규 운영자는 가입신청을 진행해 주세요</p>
                <a href="" className="btn btn-outline-secondary">
                    가입하기
                </a>
            </div>
        </div>
    );
}


export default Login;