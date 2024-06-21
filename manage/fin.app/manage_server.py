import sys

def main():
    # 명령행 인수 개수 확인
    if len(sys.argv) != 3:
        print("Usage: python manage_server.py <C_IP_ADDRESS> <E_IP_ADDRESS>")
        sys.exit(1)

    # 명령행 인수 받아오기
    C_IP_ADDRESS = sys.argv[1]
    E_IP_ADDRESS = sys.argv[2]

    # IP 주소 출력
    print(f"C_IP_ADDRESS: {C_IP_ADDRESS}")
    print(f"E_IP_ADDRESS: {E_IP_ADDRESS}")

if __name__ == "__main__":
    main()
