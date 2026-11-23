#!/usr/bin/env bash
# Copies this case's fixtures into the run's empty working folder (the current directory).
set -euo pipefail
cp -R "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/fixtures/." .
