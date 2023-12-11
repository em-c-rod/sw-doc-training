---
next: 02.md
title: 1. Background
author: Emily
headerDepth: 3
---

## 1 Completeness
Have you experienced reading something that was not complete that caused you confusion? Or, perhaps you read something with incomplete information that led you to make false assumptions. This can happen in software documentation, for example, in writing a ticket for a software bug to writing or writing user installation instructions among many other circumstances. You can provide the most effective experience for readers of your software documentation when you are complete.

::: info How can I be complete AND concise?
The previous section talks all about how to write concisely. Is writing concisely AND completely possible? 

In this training content, when we discuss completeness, we focus on ideas. When we discuss conciseness, we focus on wording. Both attributes are important for effective documentation. 

You can write using concise wording but have incomplete ideas, or similarly, write complete ideas with lengthly and redundant word choice. After exploring the [Be Concise Section](../concise/) and this Be Complete Section, you should be able to be both complete and concise at the same time.
:::

## 2 Warm Up Example
Try it out! How would you rate the following examples related to installing node packages using npm (node package manager) with respect to completeness?

::: code-tabs#shell

@tab A

```sh
Once you are in the correct folder and have your dependencies, 
run the following installation script:

npm install
```
@tab B
```sh
To install additional packages, run the command below. 
You may want to use the -g or -D flag, such as:

npm install <example-package> -g
npm install <example-package> -D
```
@tab C
```
First, clone the application repository from GitHub.
Second, make sure you have Node.js and npm.
Third, navigate to the application directory.
Last, run the installation script to install the node packages.
```
:::

::: details What we think

Although taken out of presumably a larger context to give brief examples, we think each one of the examples could be written with more completeness.

|  | Evidence of Completeness | Evidence of Incompleteness |
| - | --- | --- |
| A | An example command supplements written explanations. | Missing information about where the "correct folder" is and what "dependencies" are required. |
| B | Examples are provided for each option. | There is no description of what the flags and examples do. |
| C | There are instructions that cover the full scope from beginning to end. | There are no examples to show how to do the instructions. | 

:::

## 3 Learn to Be Complete

This section will cover techniques to be complete including:
- Identify the scope
- Use complete examples
- Do not skip steps

Let's get started!