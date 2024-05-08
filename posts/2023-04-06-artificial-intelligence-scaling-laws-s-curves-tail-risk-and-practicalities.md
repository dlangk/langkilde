---
pub_date: 2023-04-06
slug: 2023-04-06-artificial-intelligence-scaling-laws-s-curves-tail-risk-and-practicalities
title: Artificial Intelligence, Scaling Laws, S-curves, Tail Risk and Practicalities
---

# Executive Summary

* **Progress in AI is predominantly positive 🎉🚀** We should enjoy and embrace the benefits of advanced machine learning
  and nascent AI and look forward to the many incredible products we will see in the coming months and years.

* **Super-intelligent AGI is most likely still distant,** and I find it unlikely (<5%) that current models will become
  capable of self-improvement. That said, AGI-like systems are here to stay, and I’m increasingly comfortable referring
  to things as AI systems rather than “mere” machine learning systems.

* Due to the surprising abilities of Auto-Regressive Large Language Models (AR LLMs), **we cannot rule out the
  possibility of emerging self-improvement capabilities.**

* **We have no idea how super-intelligent AGI would impact society.** You can come up with a plausible story in which
  super-intelligent AGI has catastrophic consequences for humanity. But it could also be amazing 🤷🏼🙂

* Ultimately, your feelings about current AI development depend on **how you prefer to handle tail risk.** What do you
  do if there is a tiny, tiny probability of a really, really bad outcome?

* **In the meantime, we should enjoy all the great products we can now build while dealing with the practical issues we
  know to be real** — misinformation, labor market reskilling, carbon emissions, and more. But none of these are reasons
  to stop progress.

# Background

Auto-Regressive Large Language Models (AR LLMs) is an emerging technology gaining increasingly broad real-world use. As
these models become larger and larger their capacity and open-endedness create a difficult-to-predict scope of emergent
behavior. Developers of AR LLMs regularly discover unexpected model capabilities.

> Which stage of the Gartner hype cycle is “people lose their fucking minds and argue that we should start a nuclear war
> to prevent people from using maths”? Asking for a friend.
>
> -- Benedict Evans (
> @benedictevans) [March 30, 2023](https://twitter.com/benedictevans/status/1641500204481368064?ref_src=twsrc%5Etfw)

Due to the enigmatic internals of these models, it is challenging to make predictions of future capabilities using the
scientific method. Central to the scientific method is [falsifiability](https://en.wikipedia.org/wiki/Falsifiability),
i.e., that empirical tests can logically contradict theories or hypotheses. Currently, the scientific method is
struggling to keep up with engineering progress. Engineers are making much faster progress on scaling up models,
resulting in emergent behavior researchers cannot fully explain. This presents a problem for everyone observing progress
in AI: where are we heading? Without accepted scientific theories, people start extrapolating based on their
interpretation. As a result, people who are usually sensible can suddenly end up with extreme views. They also tend to
oscillate quickly between being impressed and scared. **This post attempts to make sense of the different theories and
develop a position on the question of “What does the future of AI in society look like?”.**

**First of all: I’ve always taken the position that existing artificial intelligence is far worse than human
intelligence.** I started learning about machine learning in the late 1990s, and every time I learn about the inner
workings of a new machine-learning algorithm, I feel, “Is this it?”. It is hard to feel that something is intelligent
when you understand the mechanics. Even Transformers evoke this feeling for me. The algorithm
is [short and simple](https://github.com/karpathy/nanoGPT) and not something that feels nearly as sophisticated and
complex as the human brain. Just read a few pages from any of
the [great books Nick Lane has written (e.g., The Ten Great Inventions of Evolution)](https://www.amazon.com/Life-Ascending-Great-Inventions-Evolution/dp/0393338665),
and you’ll realize how much goes into our biological system. Coming into the question of AGI, my starting point is:
we’re far from human-like intelligence, and we should be humble.

# What trajectories do people imagine when forecasting the future of AI?

To grossly oversimplify, there appears to be a matrix with two dimensions:

* **AGI Timeline.** Will we get AGI soon, or is it still in the distant future?

* **AGI Impact.** Will AGI be great, or will it result in the extinction of humans?

![](https://storage.googleapis.com/langkilde-se-images/d2334493-322f-454c-8e2e-6713cd65c9f9.jpeg)

I’ll focus on three groups that I’ll call: **“The Optimists,”** **“The Pessimists,”** and **“AGI is Distant.”**

**The Optimists.** You can tell a plausible story where humanity greatly benefits from the emergence of AGI. Assuming we
can reign in AGI and use it for the betterment of humanity, an intelligence vastly more capable than a human could
unlock secrets of the universe we can only dream of today.

* **Short-term positive.** Auto-Regressive Large Language Models automate tedious work and allow people to focus on more
  exciting things. Generative visual models will give many more people the power to visualize their thoughts. Overall,
  this will be great for humanity.

* **Long-term positive.** As models get smarter and smarter and have access to more and more information about the
  universe, we might start to get novel insights about how the world works emerging from models. There is no guarantee
  this will happen, but since we are already surprised by what AR LLMs can do, we cannot reject the possibility.

**The Pessimists.** You can also tell a plausible story in which AGI has a very negative impact on humanity. AI can be
much more intelligent than humans and use information more efficiently. For example, AlphaZero learned to be superhuman
at Go in only a few days. A misaligned AI smarter than
humans [could cause human extinction](https://www.lesswrong.com/posts/Wic2P2bGejbFH3Sxb/summary-of-agi-ruin-a-list-of-lethalities).
It would also be virtually impossible to stop it if things go off the rails.

> I think that the magnitude of the AI alignment problem has been ridiculously overblown & our ability to solve it
> widely underestimated.
>
> I've been publicly called stupid before, but never as often as by the "AI is a significant existential risk" crowd.
>
> That's OK, I'm used to it.
>
> -- Yann LeCun (@ylecun) [March 20, 2023](https://twitter.com/ylecun/status/1637883960578682883?ref_src=twsrc%5Etfw)

* **Short-term negative.** AR LLMs are a threat to democracy, truth, and the internet. Bad actors will use AR LLMs to
  flood the internet with false information in a way that is indistinguishable from trustworthy information. Information
  warfare will be dramatically escalated.

* **Long-term negative.** A super-intelligent algorithm able to take real-world actions deliberately or accidentally
  takes actions that harm or even extinguish humanity.

**AGI is Distant.** You could also argue that current systems are far from comparable to humans, let alone
super-intelligent. The fact that super-intelligence is so distant makes the debate about the impact of AGI hypothetical
to the point of being a waste of time. Yann LeCun is one of the most experienced and knowledgeable people who has taken
this position. He outlines his position
in [this deck](https://drive.google.com/file/d/1BU5bV3X5w65DwSMapKcsr0ZvrMRU_Nbi/view) (e.g., page 9: “Unpopular Opinion
about AR-LLMs: AR LLMs are doomed.”)

# AGI Timeline

How likely is it that we will see super-intelligent algorithms in, say, the next five years? Most people reason about
this in the context of the so-called [Scaling Hypothesis](https://lastweekin.ai/p/the-ai-scaling-hypothesis), i.e., that
models get better the larger they get. [Google BIG-bench](https://github.com/google/BIG-bench) has an excellent overview
of progress so far that I keep referring to:

![](https://storage.googleapis.com/langkilde-se-images/993e2fac-2436-4463-9d0c-401a5bbde200.jpeg)

Since models are getting larger and larger, and access to training data keeps increasing, you could make the case that
we are in the early stages of an exponential trajectory. There is both quantitative and qualitative evidence of improved
performance, so there is no denying this trend exists. But you could also argue that performance evaluations are limited
in scope and that we will find performance on broader, real-world tasks less impressive.

![](https://storage.googleapis.com/langkilde-se-images/30b0e6c9-3900-4eb4-8956-f93158bc9a13.jpeg)

Since we cannot explain the connection between the number of parameters and the reasoning capabilities of
transformer-based models, projections are speculation. No one knows if we will face diminishing returns or not. Some
forms of progress arrive in an S-curve-like way. Early progress is slow; then, there is a rapid rush of improvement,
followed by a plateau of diminishing returns. This could very well prove to be true for current models.

![](https://storage.googleapis.com/langkilde-se-images/2669e65c-2bfd-4a53-b581-53579b7d2d27.jpeg)

Without an agreed-upon way to predict and explain how capabilities are related to the internal mechanics of these
models, the scientific method is left in the dust cloud left behind by engineers. Whenever important issues become a
matter of speculation, things quickly get messy. People project their values, preferences, and ideology on the issue,
complicating public discourse. Add to that the drastic impact that self-improvement could add. Those who argue that
super-intelligent systems could arrive very soon speculate that Auto-Regressive Large Language Models might be capable
of self-improvement, unleashing a rapid and uncontrollable force.

**My position on “AGI Timeline”:** Empirical evidence indicates we will see continued performance improvements from
auto-regressive language models, but there are no guarantees we won’t start seeing diminishing returns. I think models
will keep getting better on many forms of tasks, but some tasks will be out of reach for this paradigm of models (e.g.,
searching decision trees, optimizing policies, and symbolic reasoning). Furthermore, I find it unlikely (<5%) that
current auto-regressive language models become capable of self-improvement, but I cannot altogether reject the
possibility of it happening. I have, however, started feeling comfortable calling LLMs a form of AI and not just mere
machine-learning models. And I consider [AGI
_-like_ systems to be already available](https://langkilde.se/post/2023-03-22-updated-assumptions-about-agi) today.

# **AGI Impact**

> I propose the Yann-Jaan continuum of existential risk from a misaligned AGI. At one end you
> have [@ylecun](https://twitter.com/ylecun?ref_src=twsrc%5Etfw) who argues we are a long way off AGI and that alignment
> will be easy. At the other end you have Jaan Tallinn, signatory to the moratorium letter.
>
> -- Ian Hogarth (
> @soundboy) [April 4, 2023](https://twitter.com/soundboy/status/1643180253186072578?ref_src=twsrc%5Etfw)

This is the most speculative aspect. The shortest version of this section would be: we have no idea how the existence of
artificial super-intelligence will impact humanity since it doesn’t exist, and we have no experience on which to base
our forecast. If you think that AGI is imminent, then by all means, speculate. I’m open-minded and think many versions
of life with AGI are plausible, ranging from amazing to catastrophic.

**My position on “AGI Impact”:** I embrace the benefits of advanced machine learning and nascent AI as predominantly
positive. We will be able to get rid of tons of tedious work and unlock new, amazing products that will improve the
quality of life for humans. We will also face new challenges, such as rampant misinformation, carbon emissions, etc.
This will require significant effort to handle, but it can be done. At the same time, I cannot altogether reject the
risks that super-intelligence comes with, simply because there’s very little based on which we can predict impact. In
the financial world, this would be referred to as [tail risk](https://en.wikipedia.org/wiki/Tail_risk): it’s unlikely
that AGI is an existential threat to humanity, but it cannot be ruled out, and if it happens, the impact is
catastrophic. If and how you hedge against tail risk is a matter of preference.

# Practicalities

Leaving the issue of AGI aside, there is a long list of short-term challenges we must work on to make AI a net positive
for humanity. This list includes issues like:

* A misinformation epidemic that is driven by zero-cost content creation.

* Urgent need for reskilling people who are displaced in the labor market.

* Carbon emissions from large-scale model training and inference.

* The concentration of economic power with a small number of companies.

* How to handle copyright and IP in an age of generative AI?

While the negative impact of each of these issues is arguably less catastrophic than a super-intelligence causing the
extinction of humanity, they are also significantly more likely problems.

**In closing:** I choose to be an optimist, and I think AI will improve the quality of life for humans. We should enjoy
all the great products we can build now while dealing with the practical issues we know to be real. Even if I cannot
reject the possibility that there is
a [higher-order bit](https://www.urbandictionary.com/define.php?term=higher-order%20bit) we might be getting wrong.