let who = prompt('당신은 누구십니까?');

if (who?.toUpperCase() === 'ADMIN') {
  console.log('Admin으로 접속하였습니다.');

  let password = prompt('비밀번호는 무엇입니까?');

  if (password === 12345) {
    console.log('인증에 성공하였습니다.');
  } else {
    console.log('인증에 실패하였습니다.');
  }
} else if (who === null || who?.replace(/\s*/g, '') === '') {
  console.log('취소되었습니다.');
} else {
  console.log(`${who}로 접속하였습니다.`);
}