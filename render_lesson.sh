#!/usr/bin/env bash
set -euo pipefail

# render_lesson.sh
# Usage: ./render_lesson.sh "TOPIC" "DIFFICULTY"
# Example: ./render_lesson.sh "Bernoulli's Principle" "School"

# 1) Read arguments
if [ "$#" -lt 2 ]; then
  echo "Usage: $0 \"TOPIC\" \"DIFFICULTY\""
  exit 1
fi

TOPIC="$1"
DIFFICULTY="$2"

# 2) Input file
INPUT_FILE="manim_generator.py"

# 3) Output directory
OUTPUT_DIR="./lessons"
mkdir -p "$OUTPUT_DIR"

# 4) Export variables so the Python/Manim script can read them
export TOPIC
export DIFFICULTY

echo "Rendering with Manim: topic=\"$TOPIC\" difficulty=\"$DIFFICULTY\""

# 4) Run Manim (low quality for speed)
# The manim script should read TOPIC and DIFFICULTY from environment variables.
# If your Manim scene class has a different name than EduflixAnimation, update below.
SCENE_CLASS="EduflixAnimation"

if ! command -v manim >/dev/null 2>&1; then
  echo "Error: manim is not installed or not in PATH. Install manim first." >&2
  exit 2
fi

manim -ql "$INPUT_FILE" "$SCENE_CLASS"

# 5) Find the latest MP4 produced by manim
# Manim typically writes into ./media/videos/... but we'll search for the newest mp4 file.
MP4_PATH=$(find ./media -type f -name "*.mp4" -printf "%T@ %p\n" 2>/dev/null | sort -n | tail -n1 | cut -d' ' -f2- || true)

if [ -z "$MP4_PATH" ]; then
  echo "Could not locate generated MP4 in ./media. Check manim output or logs." >&2
  exit 3
fi

# 6) Move to OUTPUT_DIR with a friendly filename
SAFE_TOPIC=$(echo "$TOPIC" | tr ' /\\' '__' | tr -cd '[:alnum:]_-' | cut -c1-60)
TIMESTAMP=$(date +%s)
FINAL_NAME="${SAFE_TOPIC}_${DIFFICULTY}_${TIMESTAMP}.mp4"
FINAL_PATH="$OUTPUT_DIR/$FINAL_NAME"

mv "$MP4_PATH" "$FINAL_PATH"

# 7) Success message
echo "Success: generated video -> $FINAL_PATH"
exit 0
