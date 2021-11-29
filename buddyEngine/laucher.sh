#!/usr/bin/env bash
#
# ===================================================================
# Purpose:           Python script authorizer and launcher for /bin/bash env
#                    ---------------------------
# Author:            Anthony Chambet
# Notes:             Used for PoC demonstration tested and used on MacOS
#					 Please use it inside /app/* folder
# Revision:          Last change: 11/29/2021 by Anthony Chambet
# ===================================================================

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

chmod +x buddyEngine.py
python3 ./buddyEngine.py