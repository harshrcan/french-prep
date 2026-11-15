# Français A1 → A2 → B1

A 20-day, 3-hours-a-day French program as a static web app. No build step.

- 20 lessons (sounds and basics → present → futur proche → passé composé → imparfait → pronouns → futur → conditionnel), each with a concept page with audio, a concept map and ~20 exercises (MCQ, fill-ups, sentence building, translation)
- 20 graded stories (A1 to B1) with reading, listening-only mode, questions, shadowing, dictation and sentence ordering
- 500 flashcards in 20 decks plus a 99-verb deck, with spaced repetition
- Verb tables and a conjugation drill for 6 tenses
- 14 guided writing tasks with a live checklist, error scan and model answers
- 20 daily speaking topics (30 words, verbs, native phrases, grammar examples, graded questions with a recorder, opinion builders, sample answers at day level and B1)
- 3 assessments (day 7, day 11, final A2 mock) with a gap report
- Daily 3-hour plan, active-time tracking, mastery levels with 1/3/7/14-day retests

## Saving
Progress saves in the browser (`fr-prep-v1`). Optional cloud save uses the same name + password pattern as Ctrl+Alt+Harsh: Supabase tables `fr_players` / `fr_sessions` (RLS on, no policies) reached only through the `fr_register`, `fr_login`, `fr_load`, `fr_save`, `fr_logout` functions. The key in `js/core.js` is a publishable key.

## Files
- `js/data/lessons1-3.js` lessons · `stories.js` · `vocab.js` · `verbs.js` (conjugation engine) · `writing.js`
- `js/core.js` state, cloud, speech, SRS · `js/engine.js` exercises, cards, shadowing · `js/pages.js` pages and router
