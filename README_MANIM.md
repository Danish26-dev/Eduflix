# Manim demo and running `render_lesson.sh`

This document explains how to run the demo Manim scene and use the existing `render_lesson.sh` helper.

Prerequisites
- Python 3.10+ (3.11 recommended)
- Manim Community Edition (install with `pip install manim`)
- FFmpeg (must be available on PATH)

Windows (PowerShell) quick install notes
- Install Python from python.org and enable `Add Python to PATH`.
- Install Manim in your active environment:
  ```powershell
  python -m pip install --upgrade pip
  pip install manim
  ```
- Install FFmpeg (recommended: download from ffmpeg.org or use winget):
  ```powershell
  winget install --id=Gyan.FFmpeg -e --source winget
  ```

Unix / macOS
- Using pip/env:
  ```bash
  python3 -m pip install --upgrade pip
  pip3 install manim
  ```
- Install ffmpeg via your package manager (e.g. `brew install ffmpeg` or `apt install ffmpeg`).

Files added
- `manim_generator.py`: a minimal `EduflixDemo` Scene that reads `TOPIC` and `DIFFICULTY` from environment variables.
- `requirements.txt`: minimal dependency hint (`manim`).

Running the demo (PowerShell example)
1. In PowerShell, set the environment variables and call the script via `render_lesson.sh`. Example that runs the script and sets environment vars inline:
  ```powershell
  $env:TOPIC = "Bernoulli's Principle"
  $env:DIFFICULTY = "Easy"
  ./render_lesson.sh
  ```

2. Alternatively run Manim directly to test the scene (fast render, low quality):
  ```powershell
  manim -ql .\manim_generator.py EduflixDemo
  ```

Notes
- `render_lesson.sh` expects `manim` to be on PATH. On Windows you can run the script from PowerShell if the script is executed via WSL or Git Bash. The script is a bash script — Windows users may prefer to run `manim` directly or run the script inside WSL.
- If you want `render_lesson.sh` to be used natively on Windows, let me know and I will add a PowerShell variant `render_lesson.ps1`.

Next steps
- If you'd like, I can:
  - Add a Windows PowerShell equivalent script, `render_lesson.ps1`.
  - Place placeholder MP4s into `public/videos/` for immediate front-end testing.
  - Run through test instructions and add a troubleshooting section.

Testing & Troubleshooting

- Quick test (PowerShell) — render directly with `manim`:
  ```powershell
  # Render low-quality, fast
  manim -ql .\manim_generator.py EduflixDemo
  ```
  Expected outcome: manim prints progress and creates an MP4 under `media/videos/manim_generator/EduflixDemo/` (or similar). Look for `media/videos/.../mp4`.

- Run the helper script (bash) — on Windows run in WSL/Git Bash or run `manim` directly:
  ```powershell
  $env:TOPIC = "Bernoulli's Principle"
  $env:DIFFICULTY = "Easy"
  ./render_lesson.sh
  ```
  Notes: `render_lesson.sh` is a bash script; on Windows prefer WSL/Git Bash or use the PowerShell method below.

- PowerShell alternative (manual steps):
  ```powershell
  # Render to media using manim
  $env:TOPIC = "Bernoulli's Principle"
  $env:DIFFICULTY = "Easy"
  manim -ql .\manim_generator.py EduflixDemo

  # Find the most recent mp4 (PowerShell)
  Get-ChildItem -Path .\media -Filter *.mp4 -Recurse | Sort-Object LastWriteTime -Descending | Select-Object -First 1 | Format-List FullName, Length, LastWriteTime
  ```

- If no MP4 appears
  - Confirm `manim` ran successfully and did not exit with an error. Check the terminal output for errors or tracebacks.
  - Confirm `ffmpeg` is installed and on `PATH` — manim uses ffmpeg for encoding. Test with:
    ```powershell
    ffmpeg -version
    ```
  - Inspect the `media/` directory (manim creates `media/videos/<module>/<scene>/`). If there are intermediate files (like `.mov`), manim/ffmpeg may have failed to produce the final `.mp4`.
  - Look for log lines mentioning `ffmpeg`, `encoder`, or `error` in the manim output.

- Common fixes
  - If `ffmpeg` is missing: install via `winget` or manually and re-run.
  - If manim errors show missing dependencies, run `pip install -r requirements.txt` in the environment used to run manim.
  - If the script expects `manim` on PATH but it's not found, run `python -m manim` or ensure your virtualenv's `Scripts` folder is on PATH.

- Troubleshooting when using `render_lesson.sh` in bash (WSL/Git Bash)
  - Ensure the shell has access to the same Python environment where `manim` is installed.
  - If `render_lesson.sh` cannot find the generated MP4, run `manim` manually and then inspect `media/videos/...` to confirm output path; update the script's search pattern if needed.

- If you'd like a native Windows script
  - I can add `render_lesson.ps1` that mirrors `render_lesson.sh` but uses PowerShell-native commands to run `manim`, find the latest MP4, and move it into `lessons\`.

Where to get help
- If you paste the terminal output (manim run) and the output of `Get-ChildItem -Recurse .\media | Select-String ".mp4"` I can help diagnose the specific failure.
