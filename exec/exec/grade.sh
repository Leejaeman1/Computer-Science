#!/bin/bash

# 지정된 디렉터리 경로
directory="/home/yeonjun/execution_server/py_file"

# 최신 .py 파일 경로 찾기
latest_py_file=$(find "$directory" -type f -name "*.py" -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)

if [ -z "$latest_py_file" ]; then
    echo "Error: 최신 .py 파일을 찾을 수 없습니다."
    exit 1
fi

echo $latest_py_file

# 다른 셸 스크립트로 입력 변수로 추가
/home/yeonjun/execution_server/grade_execute.sh "$latest_py_file"

