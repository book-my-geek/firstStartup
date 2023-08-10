## Title

The PR title should follow the following nomenclature:

[TICKET_ID] [TYPE_OF_PR] {One line clearly stating the change which any dev can understand without much context}

Values for TYPE_OF_PR are:
[Fix], [Feature], [Refactor], [Release], [Hotfix]

Example - [48707] [Feature] Add Navbar

## Description

You must have at least:
- [Ticket Id Link](link)
- Provide a small description ( 2 - 3 lines) of the Pull Request

Other points:
- Context: Any additional context that is needed in terms of why this PR was raised. Example - Could be because of bug caught in production, etc.
- Related PRs: If there are any related PRs or dependencies that need to be considered while reviewing the current PR.
- Documentation: If there was a need to create some document or it is related to an existing document like a design doc, add the link to that the document.

## Severity

Mention how critical this PR is. This helps the reviewer know how much time and attention they need to give to this PR:

- [ ] High: This is a major change, with lot of business logic and needs a thorough review.
- [ ] Medium: This has significant changes but does not touch any critical files.
- [ ] Low: This is just a BAU / small change which does not impact any critical business logic.

## UI screenshot

Add at least 1 screenshot so that the reviewers understand what part of the application is being changed. More than 1 screenshot is gladly welcomed.

## Reviewers:
Required Reviewers based on what critical files have been changed.

If its a non critical PR, you can leave this blank

- [ ] @Dev 1

***

## Checklist - All needs to be ticked before sending PR for review:
General:
- [ ] PR Size: The PR size is less than 20 files or I have taken prior approval if it exceeds 20 files.

Client:
- [ ] Console: I have checked that no console errors have shown up in the UI flow for this change.
- [ ] Re-renders: I have checked that all new React components re-render only the required amount of times.
- [ ] Network calls: I have checked that all network/API calls occur only 1 / the required number of times.
- [ ] Comments: I have add top level file comments for new files.
- [ ] Util function comments: I have added exhaustive comments for utility based functions.
- [ ] Import order: I have added the imports as per the standard we follow.
- [ ] Linting: I have not added any global file level eslint suppression. They are only inline.
- [ ] Dead code: I have removed all comments code which is of no use OR written why I have kept the commented code.

Cross-browser testing of the entire flow:
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge

Different viewport testing of the entire flow:
- [ ] Tested on 280px viewport
- [ ] Tested on 320px viewport
- [ ] Tested on 375px viewport
- [ ] Tested on 425px viewport
- [ ] Tested on 768px viewport
- [ ] Tested on 1024px viewport
- [ ] Tested on 1440px viewport
- [ ] Tested on 2560px viewport

End to end testing:
- [ ] Happy flow: I have tested the happy flow end to end and it is working as expected.
- [ ] Error flow: I have tested the UI flow when an error occurs and have gracefully handled the errors on Node.js as well as UI.
- [ ] Common component changed: I confirm that I have tested the change in any common component across different views to ensure that it does not break at other places.
