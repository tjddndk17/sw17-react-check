import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Table } from "react-bootstrap";

const CorpMemberDetail = (props) => {
    
    // App.js Route 의 :id 값을 가져옴
    let params = useParams();
    
    // member data
    const [member, setMember] = useState({});
    
    
    useEffect(async () => {
    
        // 컴포넌트 렌더링 후 실행
        // http://localhost:4001/corpMember/1 이런식으로 ID값 인식하는건 json-server 기능~ ( https://www.npmjs.com/package/json-server )
        await axios.get(`http://localhost:4001/corpMember/${params.id}`)
            .then(res => {
                setMember(res.data);
            })
            .catch(error => {
                alert('없는 ID');
            });
    }, [])
    
    
    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <th>회사명</th>
                        <td>{member.companyName}</td>
                    </tr>
                    <tr>
                        <th>대표명</th>
                        <td>{member.represent}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CorpMemberDetail;