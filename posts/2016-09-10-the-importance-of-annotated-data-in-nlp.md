---
pub_date: 2016-09-10
slug: 2016-09-10-the-importance-of-annotated-data-in-nlp
title: The Importance of Annotated Data in NLP
---
I’ve worked on Natural Language Processing (NLP) applications as an engineer for a few years now. It’s the most fun I’ve ever had, but there sure are challenges. Most importantly people underestimate the difficulties involved in getting well-annotated data.

Human communication, and therefore natural language, is subjective and ambiguous. To succeed in building NLP applications you need to deal with this by making it very clear what your goal is, and what data you need to get there. So let us forget about the algorithms for a moment. Here are some of the key data challenges I’ve come across in trying to execute successful NLP projects:
# What do you want from me?

Lets say you want me to sort text into two classes. The first thing I need then is **a good annotation guideline** describing what is required to qualify for each class. "_I know it when I see it_" is unacceptable. The guideline needs to give examples with corresponding explanations.

Once you have a guideline written up you need to put it to the test. A good first step is to test it on colleagues outside your team or key stakeholders. Give a few people a set of texts, the guideline and ask them to annotate the text based on the guideline. Did they agree on how to annotate the text? If yes, great, then the guideline is probably useful. If no, refine the guideline. And don’t give them easy examples when you test this, give them the real, hard ones.

What you want is a **high**  **inter-annotator agreement**. Basically this is a measure of agreement on what the classification task actually means. Unless you have this you might as well not try at all.
# How do you measure success?

Once you have agreement on what your task means, you need to get a  **fair test and development set**. These can be procured using the annotation guideline. Make sure you have “production” data so you actually measure what will happen when your code hits reality.

This is also a good time to establish **reasonable performance expectations on the test set  **with your project manager. For example, ask yourself “How well does a human perform?”. Have someone qualitatively inspect the test set and see that it covers all the critical cases that the system will face in production. This can be time-consuming as NLP tasks often are full of strange edge cases. Decide which you need to cover, then let go of the rest. You will never get to 100% anyway, natural language is too messy. Make sure your work is evaluated against the test set by management. It’s easy to get feature creep where things outside the specification is tested.
# How much annotated data do you need?

Expect to get the question “How much will it cost to annotate data for this task?” This is the same as asking “How many sentences do we need to annotate?” It’s very important to understand that the raw number of sentences is irrelevant, it is the information in those sentences that matters.

So really, you **need** to figure out **how to get training data covering all the important cases**  that your algorithm will need to recognize. Depending on how well the algorithm is able to generalize this could be a lot of cases. Then you can do your cost estimate.

Under the umbrella of active learning, you can find a lot of useful tools for efficiently selecting which sentences you want to label in order to get the best possible learning curve. Select sentences that are hard for the algorithm first, and then stop sampling those sentences once it understands them.
# How to get the actual annotations?

Ideally, we now know what we want, how to test if we have it and which sentences we need to annotate to get there. Next comes the actual annotation work.

There are many platforms out there such as [Amazon mTurks](https://www.mturk.com/mturk/welcome), [Crowdflower](http://crowdflower.com/) and others.

**_EDIT:_**_Since writing this post, I’ve founded_[ _Kognic_](https://www.kognic.com/) _, a company dedicated to
producing consistently annotated data. Get in touch if you want to know more._

Maybe one of those works for you. Maybe you need very skilled annotators that require extensive training to understand the guideline. There’s no easy answer here. Your task might require special tools such as a way to give certain labels to substrings of text. You need to understand that this part is more complicated than you might think. You need to figure out **exactly how workers will produce your annotations**  early on in your project, or you might hit a very hard wall.
# Now the coding begins

If you’re lucky your project made it all the way here and you’ve got your training data. Most people think of this part as the “actual” machine learning work, i.e. the part where you get to write algorithms and chase down those last few performance points. In order to do well with NLP and machine learning, you need to understand that this is far from the only part. You, or someone in your team, will have to deal with all the challenges leading here as well, or you will
fail.

**In conclusion, in order to overcome data challenges when executing NLP projects you need to:**

1. Write **a good annotation guideline.**

2. Make sure you have a **high**  **inter-annotator agreement.**

3. Put together a **fair test and development set.**

4. Establish **reasonable performance expectations on the test set.**

5. Figure out **how to get training data covering all the important cases.**

6. Figure out **exactly how workers will produce your annotations.**

All of the above is part of working with NLP. If you don’t mind these steps, then you’re ready to get to work. It’s fun, I promise!