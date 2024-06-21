#!/bin/bash

#MANAGEMENT_SERVER_URL="https://jsonplaceholder.typicode.com/posts/1"
#관리서버URL주소 (신규 제출된 SUBMITTED 상태의 py 파일 요청하기)
MANAGEMENT_SERVER_URL="http://25.32.99.72/new"



curl -X GET $MANAGEMENT_SERVER_URL



