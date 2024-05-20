---
pub_date: 2024-05-20
slug: 2024-05-20-sample-reality-and-predicting-the-future
title: Sample Reality and Predicting the Future
---

I'm exploring three related questions right now:

- How do large language models power knowledge creation?
- How do you correctly sample reality?
- Are we better at predicting the future now?

To me, language models are useful to compress knowledge. They let us interact with knowledge using natural language.
It's like talking to an encyclopedia that can generalize. Rather than reply with what is explicitly written in the
encyclopedia, transformer-based LLMs can reason abstractly based on patterns. The way I think about it is
inspired by [dependency parsing](https://en.wikipedia.org/wiki/Parse_tree) (something NLP people busied themselves with
before LLMs). Parse trees are a visually accessible way to explain why two sentences can be very similar structurally
and still refer to completely different things. Let's look at two examples:

![](https://storage.googleapis.com/langkilde-se-images/parse1.png)
![](https://storage.googleapis.com/langkilde-se-images/parse2.png)

**"How did Albert Einstein describe his methods for scientific discovery?"**
**"What approach did Richard Feynman have to the scientific process?"**

Albert Einstein and Richard Feynman will both be recognized as Named Entities (i.e. people). If we compare how each
of these entities are described in text their context will likely be very similar, at least
compared to most other possible entity pairs. Einstein and Feynman will be much closer than e.g. Einstein and
Trump. As a result, Einstein and Feynman will be represented by similar embeddings.

If we turn to the dependecy parse, we can see the subject-verb-object structure.

Einstein (nsubj) - describe (verb) - his methods (dobj) for (adp) scientific discovery (noun)
Feynman (nsubjc)

The process of creating knowledge in this case is to describe entities. The more we write about Einstein and Feynman,
the better our language models will get at describing them. And if two entities are described in similar ways,
language models can infer properties. This is very powerful. A major source of scientific discovery today is
across domains. Discoveries in one field inspire progress in other fields. Take fractals for example. Mandelbrot
developed the concept of fractals in the 1970s. Fractal geometry is today used to analyze and diagnose diseases by
examining patterns in medical images, such as MRI scans, where abnormal fractal dimensions may indicate pathology.

But writing about things does not make it true. We have developed the scientific process for a reason. Scientists
are trained to make observations, form questions, test hypothesises, collect data, analyze and report. A conclusion
is only credible if experimental data supports your hypothesis. The hypothesis also needs to be falsifiable.
A scientific theory is an explanation of the natural world that is based on evidence gathered through repeated
experiments. Language models can compress the output of the scientific process in an amazing way, but it relies on
facts being digitized by humans. I think language models can be used to infer relationships between observations
that humans might have overlooked. Once enough is written about the world, I'm sure LLMs will very subtle patterns
for how different objects are described. This, in my opinion, would constitute knowledge creation. Making
connections between concepts is discovery.

This line of thinking places "sampling reality", i.e. experimentation, at the center. The primary way to create new
knowledge is through observation and experimentation. Humans do this all the time. We are thrown into our physical
world and are expected from day one to explore and experiment. It's an incredibly strong drive.

**Most difficult decisions in life relate to situations with limited access to data.** Young people have not gathered as
much experience as old people. Startups have not experimented as much as mature companies. Looking back over the
centuries, I think the most significant limitation to science has been our ability to sample reality. Humans observe
phenomenon and try to explain them. But at what resolution are we observing? If we look too closely, events at the
micro-level may obscure emerging macro-phenomenon. On the other hand, if we zoom out too much, we may imagine
explanations to emergent behaviour that could easily be explained on the microscopic level. It's like with phenotypes
and genotypes. We can inspect the genetic makeup of an organism and list its set of genes and their variants. The
genotype alone is not enough to predict the behaviour of the organism. The phenotype, i.e. the observable
characteristics of the organism, are the result from the interaction of its genotype with the environment. Such complex,
adaptive, dynamic relationships can be found all over the place in nature. Low-level observations are not sufficient to
explain high-level behaviours and vice versa. Talking to consumers does not let us easily predict market movements.
Hari Seldon has not been born yet.

How is this related to LLMs? And what does any of this have to do with predicting the future? Well, I'm
starting to realize that most failures in business are the result of "common beliefs" becoming outdated.
Executives fail to sample reality enough. Their assumptions about how microscopic events explain emergent properties are
no longer true. The connection between day to day events in a factory and strategic decisions is lost. Poor
approximations of reality lead to detached decisions. If something was true for a very long time, executives might
even reject overwhelming evidence showing things have changed. I think language models are like that. We program
language models with examples. If something has been true for a long time, it will be all over the internet. A
language model will replicate patterns. But it will take time before appending new text to the corpus impacts
predictions. What if an entity starts being referred to in a new way? Or a new relationship between two entities
appears? Humans aren't great at updating, but we can do it.

This continuous creation of knowledge, with new observations added and old ones slowly fading away, is impressive.

Humanity obviously has more knowledge of the universe today than 1000 years ago. We have discovered the atom,
relativity, and the structure of DNA. We have sent people to the moon, and robots to Mars. All of these things would
seem completely unbelievable to someone living in the year 1024.

How did we get all this new knowledge? And how can we expect more advanced AI to impact knowledge creation? And how
is knowledge creation related to decision-making?

Predicting the future.

Data-driven decision-making sounds nice.

Most business professionals promote the virtues of data driven decision-making.

Explore or Exploit.

Injecting noise into the process.

Extrapolating on trends or creating new trajectories.

Can customer feedback be trusted?

Controlled Variables: Ensuring that all variables except the one being tested (independent variable) are kept constant.
Independent Variable: The factor that is deliberately changed to observe its effect.
Dependent Variable: The factor that is measured or observed during the experiment.

Data Collection: During and after the experiment, the scientist collects and records data. This data can be
quantitative (numerical) or qualitative (descriptive).

Analysis: The collected data is analyzed to determine whether it supports or refutes the hypothesis. Statistical tools
are often used to interpret the results and draw meaningful conclusions.

Conclusion: Based on the analysis, the scientist concludes whether the hypothesis was correct or not. If the hypothesis
is supported, it might be further tested through additional experiments or lead to new hypotheses. If it is not
supported, the hypothesis is revised or a new one is formulated.

"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world,
stimulating progress, giving birth to evolution."

"I rarely think in words at all. A thought comes, and I may try to express it in words afterwards."

"The really good ideas, no one knows where they come from. And we are certainly not the first to be concerned with
this."

"It's not that I'm so smart, it's just that I stay with problems longer."

"We cannot solve our problems with the same thinking we used when we created them."

meticulously documented his thought processes and theoretical explorations