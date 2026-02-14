---
name: crystallize_workflow
description: Analyzes the recent chat history and project changes to extract reusable patterns into new Skills.
---

# Instructions

1.  **Analyze** the last 5-10 turns of conversation and the file diffs.
2.  **Identify** any repeatable patterns, specialized knowledge, or complex commands we used.
3.  **Ask**: "Is this workflow likely to occur again?"
4.  If YES:
    - Draft a new `SKILL.md` in `.agent/skills/[new-skill-name]/`.
    - The Skill must have:
      - `name` and `description` in frontmatter.
      - Clear step-by-step instructions in Markdown.
      - Examples of "Bad" vs "Good" implementation.
5.  **Present** the draft to the user for confirmation before saving.
