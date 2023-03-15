git pull origin main

echo "> ✅ pull complete"

git add .

echo "> ✅ add all files"

GET_NUM=($(git status -s -uno|grep -v '^ '|tr "/" "\n"))
NUM_SPLIT=($(echo ${GET_NUM[2]}|tr "_" "\n"))
echo "${NUM_SPLIT[0]}"

git commit -m "[$1] ${NUM_SPLIT[0]}"

echo "> ✅ commit complete"

git push origin main

echo "> ✅ push complete"