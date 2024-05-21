---
pub_date: 2024-05-20
slug: 2024-05-20-sampling-reality
title: Sampling Reality
---

I'm exploring three related questions right now:

- Can large language models create knowledge?
- How do you correctly sample reality?
- Are we getting better at predicting the future?

Language models are useful to compress and interact with knowledge using natural language. It's like talking to "an
internet that can generalize". Rather than reply with what is explicitly written online, transformer-based
LLMs can reason abstractly based on patterns. The way I think about it is inspired
by [dependency parsing](https://en.wikipedia.org/wiki/Parse_tree) (something NLP people busied themselves with before
LLMs). Parse trees are a visually accessible way to explain why two sentences can be very similar structurally and still
refer to completely different things. Let's look at two examples:

**"How did Albert Einstein describe his methods for scientific discovery?"**
**"What approach did Richard Feynman have to the scientific process?"**

![](https://storage.googleapis.com/langkilde-se-images/parse1.png)
![](https://storage.googleapis.com/langkilde-se-images/parse2.png)

Albert Einstein and Richard Feynman will both be recognized as Named Entities (i.e. people). If we compare how each
of these entities are described in text their context will likely be very similar, at least compared to most other
possible entity pairs. Einstein and Feynman will be much closer than e.g. Einstein and Trump. As a result, Einstein and
Feynman will be represented by similar embeddings.

If we turn to the dependency parse, we can see the subject-verb-object structure. There is a verb connecting a
subject and an object. Without going too far into the details, a transformer basically learns to represent both the
tokens and the sentence structure as context-dependent embeddings. That way, two superficially different sentences
can be "understood" as similar. As a result, text that mentions how a scientist thinks about their scientific
process will be leveraged when replying to the prompts above, but it will be fine-tuned to structures and words that
appear together with the named entity. LLMs sort of "bend" embeddings based on context.

**The process of "creating knowledge" for an LLM turns into writing about things.** The more we write
about Einstein and Feynman, the better our language models will get at describing them. And if two entities are
described in similar ways, language models can infer properties. This is very powerful. A major source of scientific
discovery today comes from moving between domains. Discoveries in one field inspire progress in other fields. Take
fractals for example. Mandelbrot developed the concept of fractals in the 1970s. Fractal geometry is today used to
analyze and diagnose diseases by examining patterns in medical images, such as MRI scans, where abnormal fractal
dimensions may indicate pathology. I think language models can be used to indentify patters in observations that humans
would overlook. Once enough is written about the world, I'm sure LLMs will find very subtle patterns in how things are
described. This, in my opinion, would constitute knowledge creation. Making connections between concepts is discovery.

**But writing about a natural phenomenon does not mean what we write is necessarily true in the scientific sense.** We
have developed the scientific process for a reason. Scientists are trained to make observations, form questions, test
hypothesises, collect data, analyze and report. A hypothesis needs to be falsifiable to be scientifically valid.
"God made the universe" is not a falsifiable hypothesis. By putting falsifiable hypotheses at the center of
scientific discovery, science remains flexible and self-correcting. A scientific theory, i.e. an explanation of the
natural world based on repeated evidence, isn't true as much as it is "not yet false".

**We are about to hit the limit of what we can gain by training LLMs on internet data.** There is only so much reliable,
useful text out there in the public domain. A lot of knowledge is either proprietary, or not written down. What is
not digital cannot be automated. This creates an interesting new market: **a market for writing down useful things.**

**This line of thinking gives "sampling reality", i.e. scientific experimentation, a critical role in knowledge
creation.** But it also highlights the limitations of LLMs. Sampling reality is hard. And deciding what observations are
relevant in what situations is hard. Most difficult decisions in life relate to situations with limited access to data.
Young people have not gathered as much experience as old people. Startups have not experimented as much as mature
companies. Looking back over the centuries, I think the most significant limitation to science has been our ability to
sample reality. Humans observe phenomenon and try to explain them. But at what resolution are we observing? If we look
too closely, events at the micro-level may obscure emerging macro-phenomenon. On the other hand, if we zoom out too
much, we may imagine explanations to emergent behaviour that could easily be explained on the microscopic level. It's
like with phenotypes and genotypes. We can inspect the genetic makeup of an organism and list its set of genes and their
variants. But the genotype alone is not enough to predict the behaviour of the organism. The phenotype, i.e. the
observable characteristics of the organism, is the result from the _interaction of its genotype with the environment_.
Such complex, adaptive, dynamic relationships can be found all over the place in nature. Low-level observations are not
sufficient to explain high-level behaviours and vice versa. The approximate present does not predict the
approximate future. Talking to consumers does not let us easily predict market movements. Hari Seldon has not been born
yet. What is a useful signal and what is just noise? Most people are confused.

**How is this related to LLMs?** And what does any of this have to do with predicting the future? Well, I'm
starting to realize that most failures in business are the result of managers failing to sample reality with the right
frequency and resolution. Their assumptions about how microscopic events explain emergent properties are no longer true.
The connection between day to day events in a factory and strategic decisions is lost. Poor approximations of reality
lead to detached decisions. If something was true for a very long time, people might even reject overwhelming evidence
showing things have changed. I think language models will be massively limited by their inability to determine if
assumptions have become outdated. We program language models with examples. If something has been true for a long time,
it will be all over the internet. A language model will replicate that pattern. It will take time before appending new
text to the corpus impacts predictions. What if an entity starts being referred to in a new way? Or a new relationship
between two entities appears? Humans aren't great at updating, but we can do it. LLMs need to be retrained.

**This brings us to the ultimate question: if the purpose of intelligence is predicting the future, are LLMs improving
our ability to predict the future?** Well, yes and no, I guess. Yes, in the sense that if you describe a sequence of
events, and there is an abstractly similar sequence that has played out in the past, then an LLM can see very subtle
similarities. But it's still a hard no in the sense that the world is chaotic and offers limited predictability. And
regardless of whether LLMs can predict the future, I'm confident this technology cannot create it. For this reason,
and many others, I'm not existentially worried about AI in it's current form.

Data driven decisions sound nice. And LLMs are great at making data driven decisions. The problem is: most interesting
new things are not an obvious continuation of the past. They are unexpected outliers. Random events. Creating new things
requires courage to go against what is already accepted and understood. It requires humans that challenge data. Progress
is exploring, not exploiting. It's about injecting noise into the process, and seeing what sticks. I think it's
about sampling reality in new ways. Experimenting. Creating knowledge. I'm constantly surprised by how wrong people are
about what reality is really like. Some people say: "That's impossible!" Other people do the impossible. Those who
do the impossible do it because they did not realize it was supposed to be impossible. They venture out into the world
and look at things with fresh eyes. Reasoning from first principle, rather than making assumptions. The only laws
are the laws of nature. The rest is just a social construct. I see no evidence of AI being able to replicate the
sort of behaviour I just outlined anytime soon. I won't say ever, but at least not for a long time.

There are a collection of quotes from Einstein on this topic:

- Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world,
  stimulating progress, giving birth to evolution.
- The really good ideas, no one knows where they come from.
- I rarely think in words at all. A thought comes, and I may try to express it in words afterwards.
- We cannot solve our problems with the same thinking we used when we created them.

All of this contributes to my passion for Embodied AI, i.e. AI with a physical manifestation, e.g. robots. We live
in the natural world. Exploring this world, interacting with it, is way more interesting than living in a virtual world.
Life is all about sampling reality through experimentation. That requires perception, prediction, planning and
actuation. Solving those problems seem way more exciting than compressing slightly more text into an LLM.