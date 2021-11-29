#!/usr/bin/env bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT
set -x
set -eu
script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
  rm -rf VARTMP1
  rm -rf VARTMP2
  rm -rf VARTMP3
}

# Logic part
dos2unix input.txt
sort -t";" -k3 -k2 input.txt > VARTMP1
tr '[:upper:]' '[:lower:]' < VARTMP1 | tr -d '.' > VARTMP2
#sed -e "s/;/ /g;s/,/ /g;s/[0-9]//g;s/.*]//;s/  */ /g" "VARTMP2" > VARTMP3
sed -e "s/[^a-zA-Z]/ /g" "VARTMP2" > VARTMP3
cat VARTMP3 | xargs -n1 | sort -u | xargs > output.txt
echo "deleted separators"



echo "done"