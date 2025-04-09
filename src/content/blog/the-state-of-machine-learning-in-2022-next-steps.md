---
pubDate: "2022-05-12"
title: The State of Machine Learning in 2022 - Next steps?
---

I recently summarized
the [state of machine learning](https://langkilde.se/post/2022-04-18-the-state-of-machine-learning-2022). The post
served
as a way to keep up with what _has happened_ until now. Predictably, it triggered a lot of questions about what _will
happen._ Rather than
make [bold predictions](https://www.businessinsider.com/elon-musk-history-of-full-self-driving-promise-2022-1?IR=T&r=US#:~:text=In%202015%2C%20billionaire%20Tesla%20CEO,still%20making%20the%20same%20promise.)
of future breakthroughs, it seems better to ask “what is a suitable framework based on which we can interpret new
results and guess possible future capabilities?”.

In general, a challenge with keeping up with machine learning research is that a list of “the latest cool stuff” gets
old very quickly. At least if results are considered in too much detail. There are new results published all the time,
but in reality, “breakthroughs” are rather few. Most papers are “improved state-of-the-art by 1%”-noise. I do not think
you can predict the future of research since a lot of innovation is accidental and unexpected. But we can do a lot
better than random guessing. It is necessary to try predicting the future since there is a lot at stake for society,
business, and humans. So, here are some thoughts on how to reason about the future of machine learning:

Let’s use two recent papers as examples. They were both published very recently (so recent in fact, that I did not cover
them in my previous post). The first one, **PaLM** , was published in early April
2022 ([blog](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html), [paper](https://arxiv.org/abs/2204.02311))
and the second one, **Flamingo** , was published in late April
2022 ([blog](https://www.deepmind.com/blog/tackling-multiple-tasks-with-a-single-visual-language-model), [paper](https://arxiv.org/abs/2204.14198)).
Both papers contain mind-blowing demo results (see examples below).

![](https://storage.googleapis.com/langkilde-se-images/3b6f9301-b2b4-4431-abfb-12fbc34bd14b.jpeg)
**Caption:** Flamingos having conversations with humans.

![](https://storage.googleapis.com/langkilde-se-images/a61fb14d-bfd1-4e34-8269-b49009110502.jpeg)
**Caption:** PaLM explaining jokes.

So, how do we make sense of these papers? And what do they mean for the next wave of machine learning applications?

All research builds on previous results, so we should ask ourselves: what is _actually_ new about these papers? It is
tempting to focus on the amazing demo output, but a more interesting question is “why does it work better than before?”.
Later, we will of course also focus on when it does not work.

Let’s start with what is _not_ _new_. The core concepts of **numerical optimization** and **deep neural networks** have
remained largely unchanged for a long time. Neither PaLM nor Flamingo changes anything about these core concepts. Of
course, there are improvements and tricks used to make them perform better, but the fundamental idea is more or less the
same. It also turns out both papers make use of the same kind of **embeddings** that we’ve seen for the last 12-13 years
now, i.e. models representing information as dense vectors. Finally, both models leverage **attention and transformers**
to learn improved embeddings. We covered these concepts in
the [previous blog post](https://langkilde.se/post/2022-04-18-the-state-of-machine-learning-2022).

### Larger Models are (still) Better

It turns out that the progress shown in recent papers is mostly about **size** , both in model and data**.** To quote
the authors of the PaLM paper:

> Since GPT-3, a number of other large autoregressive language models have been developed which have continued to push
> the state of the art forward. […] The improvements in these models have primarily come from one or more of the
> following
> approaches: (1) scaling the size of the models in both depth and width; (2) increasing the number of tokens that the
> model was trained on; (3) training on cleaner datasets from more diverse sources; and (4) increasing model capacity
> without increasing the computational cost through sparsely activated modules. […] **This critically demonstrates
scaling
> improvements from large LMs have neither plateaued nor reached their saturation point.**

The fact that transformers can be parallelized, and the emergence of new, innovative ways to train models such
as [Pathways](https://blog.google/technology/ai/introducing-pathways-next-generation-ai-architecture/) make it possible
to train larger and larger models. The unexpected result is that **we should expect models to keep improving as they
keep growing.** People have been suggesting this for years, but I’ve always believed more sophisticated representation
methods would be required. I mean, intuitively more context when learning should make a model more capable, but the fact
that the latent space can organize the information so successfully is surprising. At least to me. It could have very
well been that information got “jumbled” as the model grows, but it appears not to. It also appears as if concepts can
be combined and reused across domains in a surprisingly robust way.

### Chain-of-Thought

Besides size, a new thing from my perspective is that PaLM demonstrates that when model scaling is combined with *
*chain-of-thought prompting** the model can solve problems that require multi-step mathematical or commonsense reasoning
to produce the correct answer. I hadn’t read much about this concept before, so _for me,_ this was new. It looks like
the best paper to read on this
is “[Chain of Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/pdf/2201.11903.pdf)”. The
purpose is to handle so-called “[system-2](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)” tasks such as
logical, mathematical, and common sense reasoning. Large language models exhibit flat scaling curves for such tasks,
i.e. they will not improve with the size of the model. To handle this, the authors propose a way for these models to
decompose multi-step problems into intermediate steps. The idea is basically to let the model generate a coherent set of
short sentences that lead to the answer to a reasoning problem.

Turning to Flamingo, the most interesting aspect of this model is that it is:

> it is a visually-conditioned autoregressive text generation model able to ingest a sequence of text tokens interleaved
> with images and/or videos, and produce text as output.

Basically, it can process images and text interchangeably in a sequence and predict a suitable next sequence of text
tokens. When considered together with DALLE2 I assume it’s just a matter of time before it can also respond with an
image every now and then. Imagine the human operator inputting a sequence of text and images, and then asking “Show me
what you are thinking”, to which the model would output an image capturing its “state of mind”. Such an exchange should
be possible.

### Diffusion Models

It is clear that GANs have a powerful new contender: [diffusion models](https://arxiv.org/pdf/2006.11239.pdf). To
quote [Lilian Weng](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/):

> Diffusion models are inspired by non-equilibrium thermodynamics. They define a Markov chain of diffusion steps to
> slowly add random noise to data and then learn to reverse the diffusion process to construct desired data samples from
> the noise. Unlike VAE or flow models, diffusion models are learned with a fixed procedure and the latent variable has
> high dimensionality (same as the original data).

Diffusion models are used in DALLE2 to generate data by reversing a gradual noising process. So basically they “remove
noise”. Noise in this context is a rather complicated concept. It’s not a lack of sharpness or anything, it’s more
radical than that. It’s more like taking a crude vector and finding various suitable images based on it.

![](https://storage.googleapis.com/langkilde-se-images/3da651f8-9397-4252-8693-d968e537f2fa.jpeg)
**Caption:** Description from original paper.

If you want to read more about it, I found this post to be very well
written: [How DALL-E2 Actually Works](https://www.assemblyai.com/blog/how-dall-e-2-actually-works/). Below is an example
from the DALLE2 paper showing the variations created by the diffusion model on the same core vector.

![](https://storage.googleapis.com/langkilde-se-images/d389ad7b-016f-4038-8ff9-42c49c5b7f7c.jpeg)

A concept that is not covered by the papers I’ve focused on, but that is offering new and exciting technology is Graph
Neural Networks (GNNs). They have been on the fringe of research until recently, but are not exploding in interest. The
idea is that you can create mesh-based simulations and predict how meshes change over time depending on external
factors. That can be used for things like ETA in traffic. They are still not very resource-efficient, but new methods
like [RevGNNs](https://arxiv.org/pdf/2106.07476.pdf) appear to lower the cost dramatically. These models appear to be
useful for long-time planning in reinforcement learning. An example is this
paper: “[World Model as a Graph: Learning Latent Landmarks for Planning](https://arxiv.org/pdf/2011.12491.pdf)”.

![](https://storage.googleapis.com/langkilde-se-images/3f3f940b-fddb-4492-875d-8b0116297084.jpeg)

As impressive as the demos are, there are still limitations to these models. Knowing their limitations, and how likely
it is that we can overcome those limitations, will be important to predict what is possible in the future.

### The need for webscale human-curated knowledge

These models still depend on **annotated data**. You might protest, and the authors of these papers like to highlight
that they avoid the need for large amounts of annotated data. At the same time, they clearly rely on “webscale
datasets”. It turns out the internet is made by humans. All the text written, and the image captions created, are
written by humans. So in fact, the concepts manifested in the model’s latent space, need to first be described by humans
in text and associated with images. And as a result, these models will also learn whatever undesired concepts and biases
are present online. How to handle that, and mitigate that, will be a big part of making these models aligned with our
interests.

What these papers show is that _if you have webscale amounts of human-curated knowledge_ a lot of tasks can be solved
using the same foundational model. So in that sense, _you do not need task-specific annotated data_ assuming the task is
a subset of what is described on the internet. Which tasks are implicitly described online, and which are not, is not
clear to me at this point.

### Fixed Amount of Thinking

These models all have a limited amount of [FLOPS](https://en.wikipedia.org/wiki/FLOPS) to spend, i.e. they are not
“continuously active”. This limits what tasks can be solved. Input is fed through the network and output is generated.
Once that is done, nothing else can happen. I’m not actually sure how big this limitation is scientifically, or if it’s
more an issue of cost/energy. Maybe the government or military can keep one of these models spinning continuously. Just
hook it up to a nuclear reactor or something? Humans can choose to think more about something if it is complicated.
These models cannot.

### Models are still Great at Bullshitting

Models are still great at bullshitting when they “do not know” the answer. I get the impression they are “biased for
action” in the sense that most versions of these systems prefer some output over “I do not know”. In fact, it seems
models are “extremely sure” all the time, even when the output is more or less ungrounded. Paper authors describe this
as “hallucinations” which might be a case of anthropomorphizing. It could also be that there are sufficiently similar
concepts in the data that the model picks a prediction that humans feel is nonsense, but that is actually statistically
accurate. Which is correct, that which a human finds intuitive, or that which is most statistically likely?

![](https://storage.googleapis.com/langkilde-se-images/8d100b39-b1d8-41f8-b7cb-7e266818795d.jpeg)
**Caption:** From the Flamingo paper.

Of course, the results you see in the papers are impressive, but there are also a lot of really strange results popping
up. I’m less worried about this because if these models do in fact keep getting better and better with size, the
frequency of obvious errors will probably go down. But either way, estimating performance based on examples in papers is
hard. Sure, the benchmarks are there to make sure performance evaluation is unbiased, but when you actually consider the
numbers they show, there will be a lot of strange results if you interacted with a model. I also think humans tend to
write leading questions. Take the following example:

![](https://storage.googleapis.com/langkilde-se-images/de13e9d2-5035-4274-8418-c839e7386396.jpeg)
**Caption:** Example of Flamingo interacting with a human. Are the questions leading it to the right response?

Recent models are still completely virtual. I recently learned about
the [Moravec’s paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox) which hypothesizes that:

> […] contrary to traditional assumptions, reasoning requires very little computation, but sensorimotor and perception
> skills require enormous computational resources […] In general, we're least aware of what our minds do best and we're
> more aware of simple processes that don't work well than of complex ones that work flawlessly […] it is comparatively
> easy to make computers exhibit adult level performance on intelligence tests or playing checkers, and difficult or
> impossible to give them the skills of a one-year-old when it comes to perception and mobility.

This feels right to me, but I obviously don’t know. Maybe I’m just giving myself a false sense of safety. Maybe we
should not feel too scared about these algorithms until we’ve actually made a lot more progress on physical robotics.
Maybe reasoning isn’t actually that hard?!

# What will happen next?

It might seem like a philosophical question: “what will the future of machine learning look like?”. I’ve long been a
skeptic. For years I’ve been
saying “[actually, computers are pretty dumb](https://open.spotify.com/episode/61HsG2Xl9zorDyrmEsR7FH)”. Recently, I’ve
started changing my mind. The emergence of massive latent spaces and the fact that human knowledge can apparently be
represented in such spaces, makes me rethink things. In my case, I own and run a company that is tightly connected to
the future of machine learning, so it is my job to keep track of this. But I think it also matters as a human. So, what
can we expect?

**More Modalities are Merged.** The obvious, short-term next step is to combine text, images, and sound. I’m sure
there are already really promising
results brewing inside Google and other companies. We will be talking to these models in natural language and getting
audible responses very soon. Alexa, Siri, and Hey Google are about to get a massive upgrade. With DALLE2 it feels likely
we will also see interactive visuals that go with these audio interfaces before long. I think learning human emotion and
facial expressions is probably possible if you understand language and images, and have access to the entire internet.

**The Scaling Hypothesis Keeps Holding.** Maybe we are all just brute-forcing life? I highly encourage you to read
Gwerns excellent post
on “[The Scaling Hypothesis](https://www.gwern.net/Scaling-hypothesis)”. To
quote [Geoff Hinton](https://nitter.hu/geoffreyhinton/status/1270814602931187715):

> Extrapolating the spectacular performance of GPT3 into the future suggests that the answer to life, the universe and
> everything is just 4.398 trillion parameters.

There is no evidence today that very large models will suffer diminishing returns in their ability to learn. If that
holds over time, these models should approach human-equal performance by the time their parameter space matches our
brain. There might be as many as 1 trillion synapses in the brain, i.e. neurons connected to each other and passing
signals to each other. The largest language models are approaching 1 trillion parameters. Together with a continuously
growing size of encoded human knowledge, it is now possible that these models will match us in just a few years.

That does not mean we will have Terminator-style robots in a few years, it means we will have virtual entities that we
can talk to that are indistinguishable from humans. Maybe. On the other hand, we might find that “Oh fuck, there was a
roadblock here that we didn’t expect” and suddenly improvements are in fact diminishing.

**A lot of new companies are emerging.** The “Attention is All You Need” paper lead to the founding of a bunch
of [new start-ups](https://twitter.com/nathanbenaich/status/1524029269617295361/photo/1). Just the authors alone have
started a bunch, and others have followed in nearby domains. Here are some of my favorites.

* **Adept.** “build[ing] general intelligence that enables humans and computers to work together creatively to solve
  problems.” ([TechCrunch](https://techcrunch.com/2022/04/26/2304039/))

* **AI21 Labs.** “a natural language interface on your company
  data”. ([website](https://www.ai21.com/blog/jurassic-x-crossing-the-neuro-symbolic-chasm-with-the-mrkl-system))

* **Aleph Alpha.** “Europes OpenAI“ ([website](https://www.aleph-alpha.com))

* **Anthropic**. “an AI safety and research company, has raised $580 million in a Series
  B.” ([website](https://www.anthropic.com/news/announcement))

* **Character.ai.** “creating revolutionary open-ended conversational applications through breakthrough
  research.” ([website](https://www.character.ai))

* **Co:here. “** making NLP part of every developer's
  toolkit”****([TechCrunch](https://techcrunch.com/2021/11/17/google-cloud-teams-up-with-nlp-startup-cohere-on-multi-year-partnership/), [website](https://cohere.ai))

* **Inceptive. “** enabling the design of this next generation of RNA molecules through a singular combination of highly
  scalable experiments and deep learning.” ([website](https://inceptive.life))

* **Primer.** “lets organizations quickly explore and utilize the world’s exponentially growing sources of text-based
  information” ([website](https://primer.ai))

![](https://storage.googleapis.com/langkilde-se-images/bf57eb94-ae50-4a2b-924d-eee87f919488.jpeg)

Predictably, most of the companies are [based in the US](https://www.stateof.ai):

![](https://storage.googleapis.com/langkilde-se-images/b13d2460-f4d2-4d18-bf30-a3f29412fc95.jpeg)

### Access to Quality Knowledge Becomes Limitation

I think machine learning systems are already suffering from the same problems humans do: a lot of them are garbage. I
mean, being a human does not guarantee you are a good, productive member of society. Becoming a great person requires
careful “tuning” through education, parenting, selective reading, coaching, and mentoring. If we just consume everything
around us all the time and give in to all our urges, we become awful people.

I think we will find that as more capable ML systems emerge, we will lose some of the normal advantages of computers:
preciseness and predictability. I think that’s a passing problem since once you’ve perfected the knowledge base for one
of these entities it could theoretically live forever, and keep improving.

I think we can spend eternity curating a knowledge base and debating what is right. I mean, that’s how we spend most of
our time anyway right? As soon as you have enough food and shelter, we climb the Maslow stairs and spend our time
pondering the meaning of life. An algorithm could do that forever without any really progress. Sure, it might pick
an [optimization problem to focus on](https://www.lesswrong.com/tag/paperclip-maximizer), and that might be bad. But
it’s also possible it will [just make and watch soap operas](https://en.wikipedia.org/wiki/The_Murderbot_Diaries) all
day. Who knows?

### Reading Recommendations

**The State of AI.** During my research on this, I’ve spent a lot of time reading the excellent stuff that Nathan
Benaich is publishing ([twitter](https://twitter.com/nathanbenaich), [website](https://www.stateof.ai)).

**Gwern.** There are so many good posts on the site:

* [The Scaling Hypothesis](https://www.gwern.net/Scaling-hypothesis)

* [Machine Learning Scaling](https://www.gwern.net/notes/Scaling)

My last link will be from that site, and it is probably a good place to go next. As Gwern puts it:

> It might help to imagine a hard takeoff scenario using solely known sorts of NN & ⁠scaling effects… [This] is a story
> which may help stretch your imagination and defamiliarize the 2022 state of machine learning.

Read this: [It Looks Like You’re Trying To Take Over The World](https://www.gwern.net/fiction/Clippy)

### Conclusion

The last few weeks have made me begin to adjust my assumptions about what machine learning will be able to do. I now
think it is likely that the scaling hypothesis will hold, and that we will experience human-level competency in virtual
entities in the next few years. That’s going to bring massive change to society, work and business. Be prepared.