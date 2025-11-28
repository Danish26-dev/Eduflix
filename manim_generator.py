import os
from manim import *


class EduflixDemo(Scene):
    """Minimal demo scene for `render_lesson.sh`.

    Reads environment variables `TOPIC` and `DIFFICULTY` and renders them as text.
    This file is intended to be invoked by the `manim` CLI, e.g.:
      manim -ql manim_generator.py EduflixDemo
    """

    def construct(self):
        topic = os.environ.get("TOPIC", "Demo Topic")
        difficulty = os.environ.get("DIFFICULTY", "Medium")

        title = Text(topic, font_size=64)
        subtitle = Text(f"Difficulty: {difficulty}", font_size=28).next_to(title, DOWN)

        card = RoundedRectangle(corner_radius=0.3, height=3, width=10)
        card.set_fill(GREY_B, opacity=0.06).set_stroke(width=2)

        container = VGroup(card, title, subtitle).arrange(DOWN, buff=0.5)

        self.play(FadeIn(card, shift=DOWN))
        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(1)

