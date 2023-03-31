ADD_FILES=$(git ls-files -o)

re='^[0-9]+$'

for FILE in ${ADD_FILES}
do
    GET_NUM=($(echo ${FILE}|tr "/" "\n"))
    NUM_SPLIT=($(echo ${GET_NUM[1]}|tr "_" "\n"))

    if ! [[ "${NUM_SPLIT[0]}" =~ $re ]]
    then
        echo "🥲 파일 형식에 맞지않는 파일이 포함되어 있습니다. > ${FILE}"
    else
        git add ${FILE}
        echo "> ✅ add ${FILE}"
        git commit -m "[$1] ${NUM_SPLIT[0]}"
        echo "> ✅ commit complete"
    fi
done

git push origin main

echo "> ✅ push complete"