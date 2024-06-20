#!/bin/bash


#입력으로 받은 최신 py파일명

# 경로 설정 (파일이 있는 디렉토리로 변경)
SCRIPT_PATH="$1"
echo $SCRIPT_PATH

ANSWER_FILE="/home/yeonjun/answer.txt"
RESULT_FILE="/tmp/result.txt"
ERROR_LOG="/tmp/error.log"
SERVER_URL="http://http://127.0.0.1:2222"

# 파이썬 스크립트 실행 함수
run_python_script() {
    python3 "$SCRIPT_PATH" > "$RESULT_FILE" 2> "$ERROR_LOG"
    return_code=$?
    if [ $return_code -ne 0 ]; then
        echo "Error occurred while running Python script. Exit code: $return_code" >> "$ERROR_LOG"
        # 에러 메시지 관리 서버로 전송 (예시로 curl 사용)
        curl -X PATCH -d "@$ERROR_LOG" "$SERVER_URL/error"
	echo "ERROR 발생"
        exit 1
    fi
    echo "정상 수행"
}

# 파이썬 스크립트 실행
run_python_script

# 결과 파일과 정답 파일 비교
if diff -q "$ANSWER_FILE" "$RESULT_FILE" >/dev/null; then
    RESULT="CORRECT"
    echo "CORRECT"
else
    RESULT="INCORRECT"
    echo "INCORRECT"
fi

# 점수를 서버로 전송
curl -X PATCH -d "{\"result\": \"$RESULT\"}" "$SERVER_URL/score"
echo "점수를 서버로 전송"

mv $SCRIPT_PATH /home/yeonjun/py_file/processed/


