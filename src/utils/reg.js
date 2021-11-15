const reg = {
    id: {
        exp: /^[a-zA-Z0-9]{4,10}$/g,
        desc: '영문/숫자 조합하여 4~10자'
    },
    password: {
        exp: /^[a-zA-Z0-9`~!@#$%^&*()+]{8,30}$/g,
        desc: '영문/숫자/특수문자(`~!@#$%^&*()+)를 조합하여 8~30자'
    },
}

export default reg;