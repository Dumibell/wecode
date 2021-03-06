## 1. git remote

- 원격 저장소를 관리할 수 있는 명령어로, git remote add origin repository주소 로 origin이라는 원격 저장소 주소를 등록한다. 이제부터 origin이라는 이름을 사용하면 방금 전에 내가 만든 저장소에 접속할 수 있다.

## 2. git branch [브랜치명]

- 브랜치를 생성하는 명령어

## 3. git checkout [브랜치명]

- 해당 브랜치명으로 이동할 수 있는 명렁어

## 4. git add

- 다음 변경(commit)을 기록할 떄까지 변경분을 모아놓기 위해 사용. git commit 명령어를 통해 명시적으로 기록을 남기기 전까지는 아무리 git add 명령어를 많이 실행해도 git 저장소의 변경 이력에는 어떤 영향도 주지 않는다.

#### - git add 파일/디렉토리 경로

작업 디렉토리의 변경 내용의 일부만 스테이징 영역에 넘기고 싶을 떄는 수정한 파일이나 디렉토리의 경로를 인자로 넘긴다.

#### - git add .

현재 디렉토리의 모든 변경 내용을 스테이징 영역으로 넘기고 싶을 떄는 `.`을 인자로 넘긴다.

## 5. git commit

- 프로젝트의 현재 상태를 나타내는 체크포인트 정도로 생각할 수 있다. 현재 버전의 코드를 커밋에 저장하는 것. 커밋 히스토리에 필요한 만큼 커밋을 생성하고, 커밋 앞뒤로 이동하여 프로젝트 코드의 다른 변경사항들을 확인할 수 있다.
