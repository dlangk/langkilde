#!/bin/bash

# Upload images to GCS bucket for use in blog posts
#
# Usage:
#   ./upload-image.sh                     Upload all images in ./images/
#   ./upload-image.sh <file> [name]       Upload specific file(s)
#
# Drop images into the ./images/ directory, then run this script.
# Local files are kept after upload.

set -euo pipefail

BUCKET="gs://langkilde-se-images"
BASE_URL="https://storage.googleapis.com/langkilde-se-images"
IMAGES_DIR="$(cd "$(dirname "$0")" && pwd)/images"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

upload_one() {
  local file="$1"
  local name="$2"

  if [ ! -f "$file" ]; then
    echo -e "${RED}[ERROR]${NC} File not found: $file"
    return 1
  fi

  local ext="${file##*.}"
  ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  local dest="${name}.${ext}"

  # Check if name already exists in bucket
  if gcloud storage ls "${BUCKET}/${dest}" &>/dev/null; then
    echo -e "${RED}[ERROR]${NC} ${dest} already exists in bucket. Choose a different name."
    return 1
  fi

  gcloud storage cp "$file" "${BUCKET}/${dest}" --quiet

  echo -e "${GREEN}Uploaded:${NC} ${dest}"
  echo -e "${GREEN}Markdown:${NC} ![](${BASE_URL}/${dest})"
  echo ""
}

sanitize_name() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' _' '-' | sed 's/[^a-z0-9-]//g'
}

# Check gcloud auth
if ! gcloud storage ls "$BUCKET" &>/dev/null; then
  echo -e "${RED}[ERROR]${NC} Cannot access $BUCKET. Run: gcloud auth login"
  exit 1
fi

# If no args, upload everything in ./images/
if [ $# -eq 0 ]; then
  files=()
  for f in "$IMAGES_DIR"/*; do
    [ "$(basename "$f")" = ".gitkeep" ] && continue
    [ -f "$f" ] && files+=("$f")
  done

  if [ ${#files[@]} -eq 0 ]; then
    echo -e "${YELLOW}[WARN]${NC} No images found in ./images/"
    echo "Drop image files into ./images/ and run again."
    exit 0
  fi

  echo "Found ${#files[@]} image(s) in ./images/"
  echo ""

  for f in "${files[@]}"; do
    basename_file=$(basename "$f")
    name=$(sanitize_name "${basename_file%.*}")
    upload_one "$f" "$name"
  done
  exit 0
fi

# Otherwise, handle explicit file [name] pairs
while [ $# -gt 0 ]; do
  file="$1"
  shift

  if [ $# -gt 0 ] && [ ! -f "$1" ]; then
    name="$1"
    shift
  else
    basename_file=$(basename "$file")
    name="${basename_file%.*}"
  fi

  name=$(sanitize_name "$name")
  upload_one "$file" "$name"
done
