서버 사용 방법
=======
서버는 로걸 DB 가 있다는 전제로 실행됩니다.  

* 이미 로컬 DB 가 있는 분들은 api_server_setting.txt 파일을 읽어주세요<br>
DB 설정 정보 위치와 DB 및 테이블 생성 코드가 있습니다.
* 로컬 DB가 없는 분들은 local_mysql_install.pptx 파일을 열어 mysql server를 설치 후 api_server_setting.txt 파일을 읽어주세요

* 테이블까지 생성 후 아무 데이터라도 넣어주세요<br>그래야 api 호출 시 서버에러 안나요...<br>(추후 수정 예정)

***
clone 받은 후 npm install 및 npm start 해주세요  
port는 3000 입니다.
***

*** 
api내역
***
<pre>
/test
이름조회
</pre>

<pre>
사용자 추가
/addUser
body
{
	"user_id": Pstring}, 
	"user_passwd": Pstring},
	"user_name": Pstring},
	"user_address": Pstring},
	"user_birthday": Pstring},
	"user_sex": {char(M/F)}
	
}
</pre>

<pre>
사용자 조회
/userInfo?user_id={user_id}
user_id : {string}
</pre>

<pre>
게시판 등록
/boardAdd
body{
    "user_id" : {int},
    "title" : {string},
    "content" : {string}
}
user_id : int  
title : string  
content : string  
</pre>

<pre>
게시판 목록 조회
/boardList
</pre>

<pre>
게시판 상세 조회
/boardDetail?id={id}
id : {int}
</pre>