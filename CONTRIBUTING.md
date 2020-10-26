# Contributing to react-crisp

First off, thanks for taking the time to contribute!

The following is a set of guidelines for contributing to react-crisp.
These are mostly guidelines, not rules. Use your best judgment, and feel free
to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the
[react-crisp Code of Conduct](CODE_OF_CONDUCT.md). By participating, you
are expected to uphold this code. Please report unacceptable behavior to
[opensource@mergify.io](mailto:opensource@mergify.io).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for react-crisp.
Following these guidelines helps maintainers and the community
understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please perform a [cursory
search](https://github.com/Mergifyio/react-crisp/issues?q=is%3Aissue%20is%3Aopen%20)
to see if the problem has already been reported. If it has and the issue is
still open, add a comment to the existing issue instead of opening a new one.
When you are creating a bug report, please [include as many details as
possbile](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing
> that you're experiencing, open a new issue and include a link to the original
> issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub
issues](https://guides.github.com/features/issues/).

Explain the problem and include additional details to help maintainers
reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.

* **Describe the exact steps which reproduce the problem** in as many details
  as possible. For example, start by explaining how you use the
  react-crisp package, e.g. which code you write and the error you get.
  When listing steps, **don't just say what you did, but explain how you did it**.

* **Provide specific examples to demonstrate the steps**. Include links to
  files or GitHub projects, or copy/pasteable snippets, which you use in those
  examples. If you're providing snippets in the issue, use [Markdown code
  blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

* **Describe the behavior you observed after following the steps** and point
  out what exactly is the problem with that behavior.

* **Explain which behavior you expected to see instead and why.**


Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new
  version of react-crisp) or was this always a problem?

* If the problem started happening recently, **can you reproduce the problem in
  an older version of react-crisp?** What's the most recent version in
  which the problem doesn't happen? You can install older versions of
  react-crisp from [the npm registery](https://www.npmjs.com/package/react-crisp).

* **Can you reliably reproduce the issue?** If not, provide details about how
  often the problem happens and under which conditions it normally happens.


Include details about your configuration and environment:

* **Which version of react-crisp are you using?** You can get the exact
  version by running `yarn list | grep "react-crisp"` in your terminal.

* **What's the name and version of the OS you're using**?

* **What's the version of React you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for
react-crisp, including completely new features and minor improvements to
existing functionality. Following these guidelines helps maintainers and the
community understand your suggestion and find related suggestions.

When you are creating an enhancement suggestion, please [include as many
details as possible](#how-do-i-submit-a-good-enhancement-suggestion) and
including the steps that you imagine you would take if the feature you're
requesting existed.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub
issues](https://guides.github.com/features/issues/).

Provide the following information:

* **Use a clear and descriptive title** for the issue to identify the
  suggestion.

* **Provide a step-by-step description of the suggested enhancement** in as
  many details as possible.

* **Provide specific examples to demonstrate the steps**. Include
  copy/pasteable snippets which you use in those examples, as [Markdown code
  blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

* **Describe the current behavior** and **explain which behavior you expected
  to see instead** and why.

* **Include screenshots and animated GIFs** which help you demonstrate the
  steps or point out the part of react-crisp which the suggestion is
  related to. You can use [this tool](https://www.cockos.com/licecap/) to
  record GIFs on macOS and Windows, and [this
  tool](https://github.com/colinkeenan/silentcast) or [this
  tool](https://github.com/GNOME/byzanz) on Linux.

* **Explain why this enhancement would be useful** to most react-crisp
  users.

* **List some other tools or applications where this enhancement exists.**

* **Specify which version of react-crisp you're using.** You can get the
  exact version by running `yarn list| grep "react-crisp"` in your
  terminal.

* **Specify the name and version of the OS you're using.**

* **Specify the version of React you're using**

## Code Contribution

### Hacking on react-crisp

If you're hitting a bug in react-crisp or just want to experiment with
adding a feature, follow these steps.

#### Prerequisites

- React >= 16.0

#### Cloning

``` command-line
$ git clone https://github.com/Mergifyio/react-crisp
```

#### Setup your environment

From there, you can navigate into the directory where you've cloned the
react-crisp source code and install all the required dependencies:

``` command-line
$ cd react-crisp
$ yarn install
```

#### Make your changes

``` command-line
$ git checkout -b somefeature
<edit files>
$ git commit -am 'I did some changes'
$ git pull-request
Forked repository: https://github.com/Mergifyio/react-crisp
Force-pushing branch `somefeature' to remote `github'
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 562 bytes | 0 bytes/s, done.
Total 5 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/Mergifyio/react-crisp.git
 + 73a733f7...1be2bf29 somefeature -> somefeature (forced update)
 Pull-request created: https://github.com/react-crispxyz/react-crisp/pull/42
```

### Pull Requests

* Squash your commits.
* Include examples, outputs, etc... whenever possible.
* Include screenshots and animated GIFs in your pull request whenever possible.
