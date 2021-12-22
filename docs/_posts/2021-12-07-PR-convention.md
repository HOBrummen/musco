---
layout: post
title:  GIT branch naming
description: Declarative branch naming
categories: [GIT]
sources:
    - link: https://namingconvention.org/git/branch-naming.html
      text: namingconvention.org
---
A branch **MUST** conform to below requirements:
- Include a short descriptive summary in imperative present tense;
- Use Hyphens for separating words;
- Include the work type: feature, refactor, bugfix, hotfix;
- Include corresponding ticket/story id;

Suggested Format:
_{work type}/{2-3 word summary}/{story or ticket id}_

Example: `git checkout -b feature/oauth-migration/ATL-244`